from PIL import Image

# Use the original (full body) image, only trim empty transparent columns on the sides
img = Image.open('public/hero-3d-character-original.png')
w, h = img.size
print(f"Original size: {w}x{h}")

# The original has a pure black background (RGB, no alpha)
# rembg output is at hero-3d-character.png 
# Let's re-do: load the rembg result, but use the FULL height and only trim x-axis empty columns
# First restore from original, run trim ourselves
from rembg import remove

# Re-run rembg on the original to get a fresh transparent result
with open('public/hero-3d-character-original.png', 'rb') as f:
    inp = f.read()

output = remove(inp)

# Load into PIL
import io
result = Image.open(io.BytesIO(output))
print(f"rembg output size: {result.size}, mode: {result.mode}")
rw, rh = result.size
px = result.load()

# Find bounding box — but only trim LEFT and RIGHT, keep full vertical extent
# so hands at the bottom are not cut off
x_min, x_max = rw, 0
y_min, y_max = rh, 0
for y in range(rh):
    for x in range(rw):
        if px[x, y][3] > 30:
            if x < x_min: x_min = x
            if x > x_max: x_max = x
            if y < y_min: y_min = y
            if y > y_max: y_max = y

print(f"Character bbox: x={x_min}-{x_max}, y={y_min}-{y_max}")

# Add generous padding so nothing gets clipped
pad_x = 30
pad_y = 20
x_min = max(0, x_min - pad_x)
x_max = min(rw, x_max + pad_x)
y_min = max(0, y_min - pad_y)
y_max = min(rh, y_max + pad_y)

cropped = result.crop((x_min, y_min, x_max, y_max))
print(f"Final cropped size: {cropped.size}")
cropped.save('public/hero-3d-character.png', optimize=True)
print("Done.")
