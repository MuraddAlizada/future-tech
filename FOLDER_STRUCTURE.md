# Project Folder Structure

## Current Structure ✅

```
nextjs-site/
├── app/                          # Next.js App Router directory
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── blog/                    # Blog pages
│   │   ├── [id]/               # Dynamic blog post pages
│   │   │   └── page.tsx
│   │   └── page.tsx            # Blog listing
│   ├── components/              # Reusable React components
│   │   ├── BootstrapClient.tsx  # Bootstrap JS initialization
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Offcanvas.tsx        # Mobile menu
│   │   └── SponsorLogo.tsx      # Sponsor logo component
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── schedule/                # Schedule page
│   │   └── page.tsx
│   ├── speakers/                # Speakers page
│   │   └── page.tsx
│   ├── utils/                   # Utility functions
│   │   └── images.ts           # Image configuration
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/                       # Static assets
│   ├── css/
│   │   └── style.css           # Custom styles
│   └── img/                     # All images
│       └── logo.webp           # Main logo
├── types/                        # TypeScript type definitions
│   └── bootstrap.d.ts
├── .gitignore
├── LICENSE
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Structure Assessment ✅

### ✅ Good Practices:
1. **App Router Structure** - Follows Next.js 14 conventions
2. **Component Organization** - Components in dedicated folder
3. **Page Organization** - Each route has its own folder
4. **Utility Functions** - Separated into utils folder
5. **Static Assets** - Properly placed in public folder
6. **Type Definitions** - TypeScript types organized

### ✅ Recommended Structure (Current):
- Pages organized by route
- Shared components in components/
- Utilities separated
- Static assets in public/
- Types in types/

## This structure is production-ready and follows Next.js best practices! 🎉

