"""
Better background removal using HSV-based keying:
- The background is a near-black dark gray (~RGB 1,1,1)
- The character's clothes are also dark but have texture/variation
- We use edge-detection flood fill from corners, stopping at significant color changes
- We apply a soft alpha feather at the edge for clean compositing
"""
import os
import math
from PIL import Image, ImageFilter

def dist(c1, c2):
    return math.sqrt((c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2)

def remove_bg():
    src_path = "public/hero-3d-character.png"
    # Use the original before any BG removal
    # Check if backup exists
    backup_path = "public/hero-3d-character-original.png"
    
    if os.path.exists(backup_path):
        print("Using backup original image")
        img = Image.open(backup_path).convert("RGBA")
    else:
        print("No backup found - using current image (may already be processed)")
        img = Image.open(src_path).convert("RGBA")
    
    width, height = img.size
    px = img.load()
    
    # Sample background color from multiple corner/edge positions
    sample_positions = [
        (0, 0), (1, 0), (2, 0), (width-1, 0), (width-2, 0),
        (0, 1), (0, 2), (0, height-1), (0, height-2),
        (width-1, height-1), (width//2, 0), (0, height//2),
    ]
    
    bg_samples = []
    for sx, sy in sample_positions:
        try:
            c = px[sx, sy]
            bg_samples.append(c[:3])
        except:
            pass
    
    # Average background color
    bg_r = sum(s[0] for s in bg_samples) // len(bg_samples)
    bg_g = sum(s[1] for s in bg_samples) // len(bg_samples)
    bg_b = sum(s[2] for s in bg_samples) // len(bg_samples)
    bg_color = (bg_r, bg_g, bg_b)
    print(f"Detected background color: {bg_color}")
    
    # Tolerance for BFS flood fill stopping
    TOLERANCE = 22
    
    visited = [[False] * height for _ in range(width)]
    is_bg = [[False] * height for _ in range(width)]
    
    # BFS from all border pixels
    queue = []
    for x in range(width):
        if not visited[x][0]:
            queue.append((x, 0))
            visited[x][0] = True
        if not visited[x][height-1]:
            queue.append((x, height-1))
            visited[x][height-1] = True
    for y in range(1, height-1):
        if not visited[0][y]:
            queue.append((0, y))
            visited[0][y] = True
        if not visited[width-1][y]:
            queue.append((width-1, y))
            visited[width-1][y] = True
    
    processed = 0
    while queue:
        x, y = queue.pop(0)
        processed += 1
        if processed % 100000 == 0:
            print(f"  Processed {processed} pixels, queue size: {len(queue)}")
        
        c = px[x, y][:3]
        d = dist(c, bg_color)
        
        if d <= TOLERANCE:
            is_bg[x][y] = True
            for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
                nx, ny = x+dx, y+dy
                if 0 <= nx < width and 0 <= ny < height and not visited[nx][ny]:
                    visited[nx][ny] = True
                    queue.append((nx, ny))
    
    # Count background pixels
    bg_count = sum(1 for x in range(width) for y in range(height) if is_bg[x][y])
    print(f"Background pixels found: {bg_count} / {width*height}")
    
    # Build alpha mask: bg=0, fg=255
    from PIL import Image as PILImage
    mask = PILImage.new("L", (width, height), 255)
    mp = mask.load()
    for x in range(width):
        for y in range(height):
            if is_bg[x][y]:
                mp[x, y] = 0
    
    # Feather the alpha edge
    mask_blurred = mask.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    # Apply alpha
    img.putalpha(mask_blurred)
    
    # Save processed image
    img.save(src_path, "PNG")
    print(f"Saved transparent avatar to {src_path}")

remove_bg()
