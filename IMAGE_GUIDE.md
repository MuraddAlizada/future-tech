# Image Replacement Guide

## How to Replace Images

Simply replace the image files in `nextjs-site/public/img/` with your own images, keeping the same filenames.

## Image Usage Map

### Logo
- **File**: `logo.webp`
- **Used in**: Navbar, Footer
- **Size recommendation**: 200x60px or similar aspect ratio

### Hero/Carousel Images
- **File**: `1.jpg`
- **Used in**: Home page hero carousel
- **Size recommendation**: 1920x1080px or larger

### About Section
- **File**: `2.png`
- **Used in**: Home page and About page
- **Size recommendation**: 800x600px or similar

### Background Images
- **File**: `3.jpg` - Speakers section background
- **File**: `14.jpg` - Pricing section background
- **File**: `17.jpg` - Blog section background
- **Size recommendation**: 1920x1080px or larger

### Speaker Photos
- **Files**: `4.jpg`, `5.jpg`, `6.jpg`, `7.jpg`, `8.jpg`, `9.jpg`
- **Used in**: Speakers section (home page and speakers page)
- **Size recommendation**: 400x500px or similar portrait aspect ratio

### Schedule/Session Images
- **Files**: `10.jpg`, `11.jpg`, `12.jpg`, `13.jpg`
- **Used in**: Schedule section
- **Size recommendation**: 200x200px (circular thumbnails)

### Testimonial Photos
- **Files**: `15.jpg`, `16.jpg`
- **Used in**: Testimonials section
- **Size recommendation**: 120x120px (circular)

### Blog Post Images
- **Files**: `18.jpg`, `19.jpg`, `20.jpg`
- **Used in**: Blog listing and blog posts
- **Size recommendation**: 800x500px or similar

### Gallery Images
- **Files**: `21.jpg`, `22.jpg`, `23.jpg`, `24.jpg`, `25.jpg`, `26.jpg`
- **Used in**: Footer gallery
- **Size recommendation**: 300x300px or similar square

### Pricing Icons
- **Files**: `p1.webp`, `p2.webp`, `p3.webp`
- **Used in**: Pricing cards
- **Size recommendation**: 100x100px or similar

### Sponsor Logos
- **Files**: `1.webp`, `2.webp`, `3.webp`, `4.webp`, `5.webp`, `6.webp`, `7.webp`, `8.webp`
- **Used in**: Sponsors section
- **Size recommendation**: 200x200px or similar (will be displayed in grayscale)

## Quick Replacement Steps

1. **Prepare your images** with the same filenames
2. **Copy them** to `nextjs-site/public/img/`
3. **Replace** the existing files
4. **Refresh** your browser to see changes

## Image Format Recommendations

- **Photos**: Use `.jpg` format
- **Logos/Icons**: Use `.webp` or `.png` format
- **Transparent backgrounds**: Use `.png` format

## Notes

- Keep the same filenames when replacing
- Images are automatically optimized by Next.js
- All images are served from `/img/` path
- Make sure images are properly sized to avoid slow loading

