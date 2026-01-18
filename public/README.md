# Public Assets Folder

## How to Add Your Logo Image

1. **Place your logo image file here** in the `public` folder
2. **Name it:** `logo.png` (or `logo.jpg`, `logo.svg`, etc.)
3. **Supported formats:** PNG, JPG, SVG, WEBP

### Current Setup:
- The components are configured to use `/logo.png`
- If you use a different filename, update the `src` attribute in:
  - `src/components/Navbar.jsx` (line ~38)
  - `src/components/Footer.jsx` (line ~32)

### Example:
- If your file is `logo.png` → it will work automatically
- If your file is `rishi-quality-logo.png` → change the code to `/rishi-quality-logo.png`

The image will be accessible at the root path `/logo.png` in your application.
