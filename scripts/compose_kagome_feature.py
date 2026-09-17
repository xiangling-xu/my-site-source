"""Compose the supplied scientific figures without redrawing the plot.

Run with Python and Pillow installed. Original images are kept in assets/media/research.
The curves and axes retain their original pixels. The legend is removed for this
website thumbnail, and the lattice fills the empty upper-right area.
"""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "assets/media/research"
plot = Image.open(SOURCES / "kagome-bounds.png").convert("RGB")
lattice = Image.open(SOURCES / "kagome-lattice.png").convert("RGBA")
lattice.thumbnail((1700, 1580), Image.Resampling.LANCZOS)

# Remove the legend without covering any data, then use that space for the
# enlarged lattice. Keep the untouched original plot in assets/media/research.
inset = Image.new("RGBA", (lattice.width + 40, lattice.height + 40), "white")
inset.alpha_composite(lattice, (20, 20))
combined = plot.copy()
ImageDraw.Draw(combined).rectangle((1510, 135, 3432, 634), fill="white")
combined.paste(inset.convert("RGB"), (1740, 260))

canvas_width = round(plot.height * 16 / 9)
canvas = Image.new("RGB", (canvas_width, plot.height), "white")
canvas.paste(combined, ((canvas_width - plot.width) // 2, 0))
for destination in (
    ROOT / "content/conference/bulk-spectral-gap/featured.png",
    ROOT / "content/publication/xu-2026-bulkspectralgapsemidecidable/featured.png",
):
    canvas.save(destination, optimize=True)
    print(destination.relative_to(ROOT))
