from PIL import Image

img = Image.open('public/hero-3d-character.png')
w, h = img.size

# Crop to the actual character bbox (with a little padding)
x_min, y_min, x_max, y_max = 314, 89, 862, 1023
pad = 20
x_min = max(0, x_min - pad)
y_min = max(0, y_min - pad)
x_max = min(w, x_max + pad)
y_max = min(h, y_max + pad)

cropped = img.crop((x_min, y_min, x_max, y_max))
print(f"Cropped size: {cropped.size} (from {w}x{h})")
cropped.save('public/hero-3d-character.png', optimize=True)
print("Saved cropped image.")
