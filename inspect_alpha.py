from PIL import Image

img = Image.open('public/hero-3d-character.png')
w, h = img.size
px = img.load()

# Let's count alpha values
alpha_counts = {}
for y in range(h):
    for x in range(w):
        a = px[x, y][3]
        alpha_counts[a] = alpha_counts.get(a, 0) + 1

print("Alpha distribution:")
for a in sorted(alpha_counts.keys()):
    if alpha_counts[a] > 100:
        print(f"Alpha {a}: {alpha_counts[a]} pixels")

# Let's check a horizontal slice in the middle of the body (y = 600)
print("\nSlice at y=600:")
slice_data = []
for x in range(0, w, w//20):
    slice_data.append((x, px[x, 600]))
print(slice_data)
