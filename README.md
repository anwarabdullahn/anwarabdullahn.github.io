## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** with dark mode support
- **Static Site Generation** for GitHub Pages
- **CI/CD Pipeline** with GitHub Actions
- **Automatic Deployment** on push to main/master branch

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GitHub Pages](https://pages.github.com/) - Static site hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD pipeline

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/anwarabdullahn/anwarabdullahn.github.io.git
cd anwarabdullahn.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

The site is automatically deployed to GitHub Pages when you push to the `main` or `master` branch. The GitHub Actions workflow will:

1. Build the Next.js application
2. Export it as a static site
3. Deploy to GitHub Pages

### Manual Deployment

To manually build and export the site:

```bash
npm run build
```

The static files will be generated in the `dist` directory.

## ⚙️ Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

### Next.js Configuration

The `next.config.ts` file is configured for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};
```

### GitHub Actions Workflow

The deployment workflow is located at `.github/workflows/deploy.yml` and includes:

- Node.js setup
- Dependency installation
- Next.js build
- GitHub Pages deployment

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   └── app/
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Home page
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Customization

### Updating Content

1. Edit `src/app/page.tsx` to update the homepage content
2. Modify `src/app/layout.tsx` to change the site metadata
3. Update `src/app/globals.css` for global styles

### Adding New Pages

Create new files in the `src/app` directory following Next.js App Router conventions:

```
src/app/
├── about/
│   └── page.tsx
├── projects/
│   └── page.tsx
└── contact/
    └── page.tsx
```

### Styling

This project uses Tailwind CSS. You can:

- Add custom styles in `src/app/globals.css`
- Modify the Tailwind configuration in `tailwind.config.ts`
- Use Tailwind utility classes in your components

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build and export the application
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: anwarabdullahn@gmail.com
- **GitHub**: [@anwarabdullahn](https://github.com/anwarabdullahn)
- **Website**: [https://anwarabdullahn.github.io](https://anwarabdullahn.github.io)

---

Built with ❤️ using Next.js and deployed on GitHub Pages.
