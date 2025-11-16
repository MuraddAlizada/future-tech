# FutureTech Summit - Next.js Website

A modern, redesigned conference website built with Next.js 14, TypeScript, and Bootstrap 5.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
nextjs-site/
├── app/
│   ├── components/
│   │   └── BootstrapClient.tsx  # Bootstrap JS initialization
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── public/
│   ├── css/
│   │   └── style.css            # Custom styles
│   └── img/                      # All images
├── types/
│   └── bootstrap.d.ts           # TypeScript declarations
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## ✨ Features

- ✅ Modern design with gradient themes
- ✅ Responsive Bootstrap 5 layout
- ✅ TypeScript for type safety
- ✅ Font Awesome icons
- ✅ Interactive carousel
- ✅ Mobile-friendly navigation
- ✅ All sections migrated from original HTML
- ✅ Production-ready configuration
- ✅ SEO optimized

## 🚢 Deployment

The project uses Next.js standalone output, compatible with:
- **Vercel** (recommended - zero config)
- **Netlify** - Set build command: `npm run build`
- **Docker** - Uses standalone output
- **AWS/Azure/GCP** - Any Node.js hosting service

## 🔧 Configuration

To change the port, update `package.json`:
```json
"dev": "next dev -p 3001"
```

## 🐛 Troubleshooting

**Port 3000 is already in use:**
- Kill the process: `Get-NetTCPConnection -LocalPort 3000 | Stop-Process`
- Or change the port in `package.json`

**Build errors:**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**TypeScript errors:**
- Run: `npm run lint` to check for issues

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🐙 GitHub Setup

### Quick Deploy to GitHub

**Option 1: Use the Batch Script (Windows)**
1. Navigate to the `nextjs-site` folder in File Explorer
2. Double-click `deploy.bat`
3. Follow the prompts

**Option 2: Manual Deploy**

1. Open PowerShell or Command Prompt in the `nextjs-site` folder

2. Initialize Git and push:
```bash
git init
git remote add origin https://github.com/MuraddAlizada/future-tech.git
git add .
git commit -m "Initial commit: FutureTech Summit website"
git branch -M main
git push -u origin main --force
```

**Note:** If the remote already exists, use:
```bash
git remote set-url origin https://github.com/MuraddAlizada/future-tech.git
```

See `GIT_DEPLOY.md` for detailed instructions.

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Vercel auto-detects Next.js - click "Deploy"
5. Your site is live in minutes!

