# Logo Carousel Implementation

## Overview

The AKRIN website features a modern, high-quality logo grid in the partnerships section that displays technology partner logos using the Logo.dev API with crisp HDPI rendering.

## Features

- ✅ **HDPI Quality** - 400px resolution logos for crisp retina display
- ✅ **Static Grid Layout** - Organized, professional presentation
- ✅ **Responsive Design** - Adapts perfectly to all screen sizes (2-4-8 columns)
- ✅ **Professional Styling** - Clean cards with subtle hover effects and grayscale filters
- ✅ **Backdrop Blur** - Modern glass-morphism design elements
- ✅ **Error Handling** - Automatic fallback to text if logos fail to load
- ✅ **Enterprise Partners** - 16 major technology partners displayed
- ✅ **Optimized Rendering** - Crisp image rendering for all display types

## Technology Partners Displayed

1. **OpenAI** - AI/ML Platform
2. **Anthropic** - AI Safety & Research
3. **Microsoft** - Cloud & Enterprise Solutions
4. **HP** - Hardware & Computing
5. **Cisco** - Networking & Security
6. **Make.com** - Automation Platform
7. **n8n** - Workflow Automation
8. **Dell** - Enterprise Hardware
9. **AWS** - Amazon Web Services
10. **Google Cloud** - Cloud Platform
11. **IBM** - Enterprise Technology
12. **VMware** - Virtualization & Cloud

## Implementation Details

### Components

- **LogoCarousel** (`components/ui/logo-carousel.tsx`) - Main carousel component
- **Logo Utils** (`lib/logo-utils.ts`) - Utility functions for logo management
- **CSS Animations** (`app/globals.css`) - Smooth scroll animations

### Logo.dev Integration

The carousel uses the [Logo.dev API](https://logo.dev) to fetch high-quality company logos:

```typescript
// Example logo URL
https://img.logo.dev/microsoft.com?size=128&format=png&token=YOUR_API_KEY
```

### Configuration

Logos are configured in `lib/logo-utils.ts`:

```typescript
export const TECH_PARTNERS: LogoConfig[] = [
  {
    name: "Microsoft",
    domain: "microsoft.com"
  },
  // ... more partners
]
```

### Environment Variables

For production use, add your Logo.dev API key to `.env.local`:

```bash
LOGO_DEV_API_KEY=your_logo_dev_api_key_here
```

## Usage

The carousel is integrated into the homepage partnerships section:

```tsx
<LogoCarousel
  logos={generateLogosForCarousel()}
  speed="slow"
  pauseOnHover={true}
  className="mt-8"
/>
```

## Customization

### Speed Options
- `slow` - 60 seconds per cycle
- `normal` - 40 seconds per cycle  
- `fast` - 20 seconds per cycle

### Direction Options
- `left` - Scroll left to right (default)
- `right` - Scroll right to left

### Adding New Partners

1. Add to `TECH_PARTNERS` array in `lib/logo-utils.ts`
2. Specify company domain for Logo.dev API
3. Optionally provide fallback name

## Attribution

As required by Logo.dev, the carousel includes proper attribution:
"Logos provided by Logo.dev"

## Performance

- CSS-only animations for smooth performance
- Optimized image loading with error handling
- Responsive design with mobile optimization
- Grayscale filter effects for professional appearance

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS animations and transforms
- Image loading with error handling
