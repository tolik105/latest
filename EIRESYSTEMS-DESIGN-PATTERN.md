# EireSystems Design Pattern Documentation

## Hero Section Design System

This document provides the exact implementation details for the EireSystems-style hero section that should be applied consistently across all service pages.

### Target Pages for Implementation:
- `/it-managed-services`
- `/cloud-infrastructure` 
- `/cybersecurity`
- `/network-penetration-testing`
- `/it-security`

## Complete Hero Section Code Pattern

```tsx
{/* Hero Section - EireSystems Mobile-Friendly Style */}
<div className="relative bg-white overflow-hidden h-[450px] sm:h-[500px] lg:h-[550px]">
  {/* Main Background - White */}
  <div className="absolute inset-0 bg-white"></div>
  
  {/* Right Side Image with Diagonal Overlay - Hidden on mobile, visible on tablet+ */}
  <div className="hidden md:block absolute top-0 right-0 w-full lg:w-3/5 h-full">
    <img
      src="[SERVICE_SPECIFIC_IMAGE_URL]"
      alt="[SERVICE_SPECIFIC_ALT_TEXT]"
      className="w-full h-full object-cover"
    />
    {/* Diagonal white overlay that creates the cut effect */}
    <div 
      className="absolute inset-0 bg-white"
      style={{
        clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)'
      }}
    ></div>
  </div>
  
  {/* Mobile Background Image - Full width on mobile */}
  <div className="md:hidden absolute inset-0 opacity-10">
    <img
      src="[SERVICE_SPECIFIC_IMAGE_URL]"
      alt="[SERVICE_SPECIFIC_ALT_TEXT]"
      className="w-full h-full object-cover"
    />
  </div>
  
  <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:px-8 h-full">
    <div className="flex items-center justify-center md:justify-start h-full">
      {/* Content - Centered on mobile, left-aligned on desktop */}
      <div className="relative z-10 max-w-2xl lg:max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C2C2C] leading-tight mb-4 sm:mb-6">
          [SERVICE_TITLE_LINE_1]<br />
          [SERVICE_TITLE_LINE_2]<br />
          [SERVICE_TITLE_LINE_3]
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[#666666] mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
          [SERVICE_DESCRIPTION_TEXT]
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#20B2AA] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#1e9c96] transition-all duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
</div>
```

## Key Design Elements

### 1. Color Palette
- **Primary Teal**: `#20B2AA` (buttons, accents)
- **Teal Hover**: `#1e9c96` (button hover state)
- **Text Primary**: `#2C2C2C` (headings)
- **Text Secondary**: `#666666` (body text)
- **Background**: `white`

### 2. Typography Scale
- **Mobile H1**: `text-3xl` (30px)
- **Small Mobile H1**: `sm:text-4xl` (36px)
- **Large H1**: `lg:text-5xl` (48px)
- **XL H1**: `xl:text-6xl` (60px)
- **Body Text**: `text-base` → `sm:text-lg` → `lg:text-xl`

### 3. Responsive Breakpoints
- **Mobile**: Base styles (< 640px)
- **Small**: `sm:` (≥ 640px)
- **Medium**: `md:` (≥ 768px) - Image diagonal appears
- **Large**: `lg:` (≥ 1024px) - Full desktop layout
- **XL**: `xl:` (≥ 1280px) - Maximum text size

### 4. Height System
- **Mobile**: `h-[450px]`
- **Small**: `sm:h-[500px]`
- **Large**: `lg:h-[550px]`

### 5. Image Implementation
- **Desktop**: Diagonal cut image on right side (60% width on lg)
- **Mobile**: Subtle background image at 10% opacity
- **Clip Path**: `polygon(0 0, 40% 0, 60% 100%, 0 100%)` for diagonal cut

### 6. Content Layout
- **Mobile**: Centered text and content
- **Desktop**: Left-aligned content with image on right
- **Max Width**: `max-w-2xl lg:max-w-xl` for content container

## Service-Specific Customization Variables

For each service page, customize these elements:

### IT Managed Services
```tsx
// Image
src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
alt="IT Managed Services Team"

// Title
IT Managed<br />
Services<br />
Solutions

// Description
"Comprehensive IT support and management services to keep your business running smoothly with 24/7 monitoring and expert technical assistance."
```

### Cloud Infrastructure
```tsx
// Image
src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
alt="Cloud Infrastructure Services"

// Title
Cloud<br />
Infrastructure<br />
Services

// Description
"Scalable and secure cloud solutions that enable your business to grow with reliable infrastructure and seamless data management."
```

### Cybersecurity
```tsx
// Image
src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
alt="Cybersecurity Solutions"

// Title
Cybersecurity<br />
Solutions &<br />
Protection

// Description
"Advanced cybersecurity services to protect your business from threats with comprehensive security strategies and continuous monitoring."
```

### Network Penetration Testing
```tsx
// Image
src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
alt="Network Penetration Testing"

// Title
Network<br />
Penetration<br />
Testing

// Description
"Comprehensive security assessments and penetration testing to identify vulnerabilities and strengthen your network defenses."
```

### IT Security
```tsx
// Image
src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
alt="IT Security Services"

// Title
IT Security<br />
Services &<br />
Solutions

// Description
"Complete IT security solutions including risk assessment, security implementation, and ongoing protection for your digital assets."
```

## Implementation Checklist

When applying this pattern to each service page:

- [ ] Replace `[SERVICE_SPECIFIC_IMAGE_URL]` with appropriate Unsplash image
- [ ] Replace `[SERVICE_SPECIFIC_ALT_TEXT]` with descriptive alt text
- [ ] Replace `[SERVICE_TITLE_LINE_1/2/3]` with service-specific title
- [ ] Replace `[SERVICE_DESCRIPTION_TEXT]` with service-specific description
- [ ] Ensure all responsive classes are maintained exactly
- [ ] Test on mobile, tablet, and desktop breakpoints
- [ ] Verify diagonal cut effect works properly
- [ ] Confirm color consistency with design system

## Critical Design Rules

1. **Never modify the clip-path polygon** - it creates the exact EireSystems diagonal cut
2. **Maintain exact responsive breakpoints** - ensures consistent behavior across devices
3. **Keep color values exact** - `#20B2AA` and `#1e9c96` are brand-specific
4. **Preserve typography scale** - ensures proper visual hierarchy
5. **Don't change button styling** - rounded-full with exact padding maintains brand consistency

This pattern ensures all service pages maintain visual consistency while allowing for service-specific content customization.