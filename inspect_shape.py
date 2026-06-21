from PIL import Image

img = Image.open('public/hero-3d-character.png')
w, h = img.size
px = img.load()

# Resize to 40x40 to print as ASCII art
img_small = img.resize((60, 40), Image.Resampling.BILINEAR)
px_small = img_small.load()

for y in range(40):
    row = ""
    for x in range(60):
        a = px_small[x, y][3]
        if a < 10:
            row += "."
        elif a < 128:
            row += "-"
        else:
            row += "#"
    print(row)
