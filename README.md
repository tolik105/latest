# Akrin IT Solutions Website

Professional website for Akrin IT Solutions - Leading IT services provider in Japan.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd AKRIN-team
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your:
- DeepL API key
- Google reCAPTCHA keys
- SMTP credentials

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

## 🌐 Features

- **Multilingual Support**: English and Japanese
- **SEO Optimized**: Complete meta tags, sitemap, structured data
- **PWA Ready**: Installable web app with offline support
- **Responsive Design**: Mobile-first approach
- **Contact Forms**: With reCAPTCHA protection
- **Email Integration**: SMTP support for contact forms
- **Performance**: Optimized images and lazy loading

## 📁 Project Structure

```
├── app/              # Next.js 13+ app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
├── public/          # Static assets
├── contexts/        # React contexts
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## 🔧 Configuration

### Environment Variables

Required environment variables:

- `DEEPL_API_KEY` - For translation services
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA site key
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key
- `SMTP_HOST` - Email server host
- `SMTP_PORT` - Email server port
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password

### Important URLs

- Production: https://akrin.jp
- Contact Email: support@akrin.jp
- Office: 〒107-0062 Tokyo, Minato City, Minami Aoyama 2-4-15 4F

## 📄 License

© 2024 Akrin Co., Ltd. All rights reserved.