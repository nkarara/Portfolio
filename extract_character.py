import os
from PIL import Image, ImageFilter

def extract_only_character():
    src_path = "public/hero-3d-character-original.png"
    img = Image.open(src_path).convert("RGBA")
    width, height = img.size
    px = img.load()
    
    # 1. Generate the strict mask first (foreground silhouette)
    mask = Image.new("L", (width, height), 255)
    mask_px = mask.load()
    
    queue = []
    visited = set()
    
    # Seed background BFS from borders
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
        if r <= 18 and g <= 18 and b <= 18:
            mask_px[cx, cy] = 0
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    # 2. connected component extraction for ONLY the character
    # We start a BFS on the foreground (value 255 in mask_px) from the center of the head/chest
    char_mask = Image.new("L", (width, height), 0)
    char_mask_px = char_mask.load()
    
    char_queue = []
    char_visited = set()
    
    # Seed at chest/face center (512, 500)
    seed = (512, 500)
    char_queue.append(seed)
    char_visited.add(seed)
    
    while char_queue:
        cx, cy = char_queue.pop(0)
        char_mask_px[cx, cy] = 255
        
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < width and 0 <= ny < height:
                if (nx, ny) not in char_visited:
                    # Traversal only on foreground pixels (value 255 in mask_px)
                    if mask_px[nx, ny] == 255:
                        char_visited.add((nx, ny))
                        char_queue.append((nx, ny))
                        
    # 3. Soft feather the character-only mask
    mask_feathered = char_mask.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    # 4. Apply character mask to alpha channel
    img.putalpha(mask_feathered)
    
    # 5. Crop to bounding box of the character to make it compact
    bbox = char_mask.getbbox()
    print(f"Character bounding box: {bbox}")
    cropped_img = img.crop(bbox)
    
    # Save the character-only image
    dest_path = "public/hero-3d-character.png"
    cropped_img.save(dest_path, "PNG")
    print(f"Saved cropped character-only image to {dest_path}")

if __name__ == "__main__":
    extract_only_character()
