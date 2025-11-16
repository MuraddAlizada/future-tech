# How to Replace the Logo

## Quick Steps

1. **Prepare your logo file:**
   - Format: `.webp`, `.png`, or `.svg` (recommended)
   - Size: 200x60px or similar aspect ratio
   - Name it: `logo.webp` (or keep your preferred format)

2. **Replace the file:**
   - Copy your logo to: `nextjs-site/public/img/logo.webp`
   - Overwrite the existing file

3. **That's it!** The logo will automatically update in:
   - Navbar (top navigation)
   - Footer
   - Favicon (browser tab)

## Alternative: Use Different Filename

If you want to use a different filename:

1. **Add your logo** to `nextjs-site/public/img/` (e.g., `my-logo.png`)

2. **Update these files:**

   **Navbar** (`app/components/Navbar.tsx`):
   ```tsx
   <img src="/img/my-logo.png" alt="FutureTech" title="FutureTech Summit" />
   ```

   **Footer** (`app/components/Footer.tsx`):
   ```tsx
   <img src="/img/my-logo.png" alt="FutureTech" title="FutureTech Summit" />
   ```

   **Layout** (`app/layout.tsx`):
   ```tsx
   <link rel="icon" href="/img/my-logo.png" type="image/png" />
   ```

## Logo Requirements

- **Format**: `.webp` (best), `.png`, or `.svg`
- **Size**: 200x60px recommended (or 2:1 to 3:1 aspect ratio)
- **Background**: Transparent or white works best
- **File Size**: Keep under 50KB for fast loading

## Current Logo Location

The logo is currently at: `nextjs-site/public/img/logo.webp`

Replace this file with your own logo to update it site-wide!

