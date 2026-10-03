// Composes the homepage hero image from the product cutouts.
// Run: node scripts/build-hero-image.mjs  →  public/images/hero-bottle-caps.png
import sharp from 'sharp'

const dir = 'public/images/products/'
const W = 1400
const H = 1240

// Back row first, front row last. `bottom` is where the product meets the floor.
const layout = [
  { file: 'bottle-5gal-pet.png', height: 1000, left: 440, bottom: 1160 },
  { file: 'cap-non-spill.png', width: 300, left: 250, bottom: 1215 },
  { file: 'cap-tripierce.png', width: 290, left: 880, bottom: 1205 },
]

const shadow = (cx, cy, rx, ry, opacity) => ({
  input: Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs><filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${ry * 0.6}"/></filter></defs>
      <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#0B2A4A" fill-opacity="${opacity}" filter="url(#b)"/>
    </svg>`
  ),
  left: 0,
  top: 0,
})

const layers = []
for (const item of layout) {
  const trimmed = await sharp(dir + item.file).trim().toBuffer()
  const resized = await sharp(trimmed)
    .resize(item.width ?? null, item.height ?? null)
    .toBuffer({ resolveWithObject: true })
  const { width, height } = resized.info
  layers.push(shadow(item.left + width / 2, item.bottom - 4, width * 0.46, Math.max(10, width * 0.05), 0.28))
  layers.push({ input: resized.data, left: Math.round(item.left), top: Math.round(item.bottom - height) })
}

await sharp({ create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite(layers)
  .png({ compressionLevel: 9 })
  .toBuffer()
  .then((buf) => sharp(buf).trim().png({ compressionLevel: 9 }).toFile('public/images/hero-bottle-caps.png'))
  .then((info) => console.log('hero-bottle-caps.png', info.width + 'x' + info.height, Math.round(info.size / 1024) + ' KB'))
