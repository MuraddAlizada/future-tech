# How to Add Sponsor Logos

## Quick Steps

1. **Add your sponsor logo files** to `nextjs-site/public/img/`
   - Name them: `sponsor1.webp`, `sponsor2.webp`, `sponsor3.webp`, etc.
   - Or use any names you prefer

2. **Update the sponsor images** in `nextjs-site/app/utils/images.ts`:
   ```typescript
   sponsors: [
     '/img/sponsor1.webp',  // Replace with your first sponsor logo
     '/img/sponsor2.webp',  // Replace with your second sponsor logo
     '/img/sponsor3.webp',  // Replace with your third sponsor logo
     '/img/sponsor4.webp',  // Replace with your fourth sponsor logo
     '/img/sponsor5.webp',  // Replace with your fifth sponsor logo
     '/img/sponsor6.webp',  // Replace with your sixth sponsor logo
     '/img/sponsor7.webp',  // Replace with your seventh sponsor logo
     '/img/sponsor8.webp',  // Replace with your eighth sponsor logo
   ],
   ```

3. **Logo Requirements:**
   - Format: `.webp`, `.png`, or `.svg` (recommended)
   - Size: 200x200px or similar square aspect ratio
   - Background: Transparent or white works best
   - The logos will be displayed in grayscale by default (whiten class)

## Current Setup

Currently, all sponsor slots are using the main logo (`/img/logo.webp`) as a placeholder. Replace them with actual sponsor logos following the steps above.

