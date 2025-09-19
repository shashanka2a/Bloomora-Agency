
# Bloomora Agency - Next.js Landing Page

A modern, production-ready landing page for Bloomora Agency built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** with custom design system
- 📱 **Responsive Design** optimized for all devices
- 🎯 **TypeScript** for type safety
- 🚀 **Production Ready** with optimized builds
- 🎨 **Modern UI Components** with Radix UI
- 📸 **Optimized Images** with Next.js Image component
- 🌙 **Dark Mode Support** built-in

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services section
│   ├── Portfolio.tsx  # Portfolio showcase
│   ├── Testimonials.tsx # Client testimonials
│   ├── HowItWorks.tsx # Process explanation
│   ├── Pricing.tsx    # Pricing plans
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Site footer
└── hooks/             # Custom React hooks
```

## Deployment

This project is optimized for deployment on Vercel, Netlify, or any platform that supports Next.js.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## License

This project is licensed under the MIT License.
  