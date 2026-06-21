import os
from PIL import Image, ImageFilter

def remove_background():
    src_path = "public/hero-3d-character.png"
    backup_path = "public/hero-3d-character-original.png"
    
    # Restore from backup if it exists to ensure we start from the clean original
    if os.path.exists(backup_path):
        print("Loading original from backup...")
        img = Image.open(backup_path).convert("RGBA")
    else:
        print("Creating backup and loading original...")
        img = Image.open(src_path).convert("RGBA")
        img.save(backup_path, "PNG")
        
    width, height = img.size
    px = img.load()
    
    # Step 1: Initial background detection with strict threshold (<= 18)
    mask = Image.new("L", (width, height), 255)
    mask_px = mask.load()
    
    queue = []
    visited = set()
    
    # Seed BFS from top, left, and right borders
    for x in range(width):
        queue.append((x, 0))
        visited.add((x, 0))
    for y in range(1, height):
        queue.append((0, y))
        visited.add((0, y))
        queue.append((width - 1, y))
        visited.add((width - 1, y))
        
    while queue:
        cx, cy = queue.pop(0)
        r, g, b, a = px[cx, cy]
        
        # Strict threshold to identify background without leaking into character shadows
        if r <= 18 and g <= 18 and b <= 18:
            mask_px[cx, cy] = 0
            
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # Step 2: Flood-fill from outer bounds of the mask to identify and remove inner holes (hole filling)
    true_bg = Image.new("L", (width, height), 0)
    true_bg_px = true_bg.load()
    
    bg_queue = []
    bg_visited = set()
    
    # Seed mask borders
    for x in range(width):
        if mask_px[x, 0] == 0:
            bg_queue.append((x, 0))
            bg_visited.add((x, 0))
        if mask_px[x, height - 1] == 0:
            bg_queue.append((x, height - 1))
            bg_visited.add((x, height - 1))
    for y in range(1, height - 1):
        if mask_px[0, y] == 0:
            bg_queue.append((0, y))
            bg_visited.add((0, y))
        if mask_px[width - 1, y] == 0:
            bg_queue.append((width - 1, y))
            bg_visited.add((width - 1, y))
            
    while bg_queue:
        cx, cy = bg_queue.pop(0)
        true_bg_px[cx, cy] = 255 # Mark as true background
        
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in bg_visited and mask_px[nx, ny] == 0:
                    bg_visited.add((nx, ny))
                    bg_queue.append((nx, ny))
                    
    # Generate final mask: Foreground is 255, True Background is 0
    final_mask = Image.new("L", (width, height), 255)
    final_mask_px = final_mask.load()
    for x in range(width):
        for y in range(height):
            if true_bg_px[x, y] == 255:
                final_mask_px[x, y] = 0
                
    # Apply soft feathering to the mask for smooth anti-aliased edges
    mask_feathered = final_mask.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    # Put feathered mask as the alpha channel
    img.putalpha(mask_feathered)
    
    # Save the processed image as transparent PNG
    img.save(src_path, "PNG")
    print(f"Saved transparent PNG to {src_path}")

if __name__ == "__main__":
    remove_background()
