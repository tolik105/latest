# AKRIN Project Index

## Project Structure Overview

This is a comprehensive index of all files and directories in the AKRIN project, organized by category.

## Core Application Files

### Root Configuration
- `.eslintrc.json` - ESLint configuration
- `.npmrc` - npm configuration
- `components.json` - Component configuration
- `jest.config.js` - Jest testing configuration
- `jest.setup.js` - Jest setup file
- `middleware.ts` - Next.js middleware
- `next.config.mjs` - Next.js configuration
- `package.json` - Project dependencies
- `package-lock.json` - Dependency lock file
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### Documentation
- `README.md` - Project readme
- `AKRIN_ENGLISH_CONTENT_EXTRACTION.md` - English content extraction guide
- `CONTENT_MANAGEMENT_GUIDE.md` - Content management documentation
- `IMPLEMENTATION_GUIDE.md` - Implementation guide
- `TESTING.md` - Testing documentation
- `akrin-services.md` - Services documentation
- `video-header-documentation.md` - Video header documentation
- `docs/LOGO_CAROUSEL.md` - Logo carousel documentation
- `docs/seranking-api-integration-report.md` - SEO ranking API integration report
- `docs/TECH_PARTNERS_ANIMATED.md` - Tech partners animation documentation

### Project Indexes (Existing)
- `PROJECT_INDEX.md`
- `PROJECT_COMPLETE_INDEX.md`
- `PROJECT_COMPREHENSIVE_INDEX.md`
- `PROJECT_CURRENT_INDEX.md`
- `PROJECT_INDEX_COMPLETE.md`
- `PROJECT_INDEX_COMPREHENSIVE.md`

## Application Code

### App Directory Structure

#### Root Pages
- `app/layout.tsx` - Root layout
- `app/page.tsx` - Homepage
- `app/home-client.tsx` - Homepage client component
- `app/globals.css` - Global styles
- `app/botpress-widget-styles.css` - Botpress widget styles
- `app/robots.ts` - Robots.txt generation
- `app/sitemap.ts` - Sitemap generation

#### About Section
- `app/about/page.tsx` - About page
- `app/about/about-client.tsx` - About page client component

#### Blog Section
- `app/blog/page.tsx` - Blog listing page
- `app/blog/[slug]/page.tsx` - Individual blog post page

#### Contact & Forms
- `app/contact/page.tsx` - Contact page
- `app/contact/contact-client.tsx` - Contact client component
- `app/contact/contact-client-backup.tsx` - Contact client backup
- `app/contact-form/page.tsx` - Contact form page
- `app/contact-form/contact-form-client.tsx` - Contact form client
- `app/book-consultation/page.tsx` - Book consultation page
- `app/book-consultation/book-consultation-client.tsx` - Book consultation client
- `app/book-reservation/page.tsx` - Book reservation page

#### Services Section
- `app/services/page.tsx` - Services overview
- `app/services/services-client.tsx` - Services client component
- `app/services/cloud-infrastructure/page.tsx` - Cloud infrastructure service
- `app/services/cloud-infrastructure/client.tsx` - Cloud infrastructure client
- `app/services/cybersecurity/page.tsx` - Cybersecurity service
- `app/services/cybersecurity/client.tsx` - Cybersecurity client
- `app/services/it-consulting-project-management/page.tsx` - IT consulting service
- `app/services/it-consulting-project-management/client.tsx` - IT consulting client
- `app/services/it-managed-services/page.tsx` - IT managed services
- `app/services/it-managed-services/client.tsx` - IT managed services client
- `app/services/it-security/page.tsx` - IT security service
- `app/services/it-security/client.tsx` - IT security client
- `app/services/network-penetration-testing/page.tsx` - Network penetration testing
- `app/services/network-penetration-testing/client.tsx` - Network penetration client
- `app/services/wifi-assessment/page.tsx` - WiFi assessment service
- `app/services/wifi-assessment/client.tsx` - WiFi assessment client
- `app/services/wifi-design/page.tsx` - WiFi design service
- `app/services/wifi-design/client.tsx` - WiFi design client

#### Legal Pages
- `app/cookies/page.tsx` - Cookie policy
- `app/privacy/page.tsx` - Privacy policy
- `app/terms/page.tsx` - Terms of service

#### Admin Panel
- `app/admin/page.tsx` - Admin dashboard
- `app/admin/analytics/page.tsx` - Analytics dashboard
- `app/admin/content/page.tsx` - Content management
- `app/admin/content/create/page.tsx` - Create content
- `app/admin/content/list/page.tsx` - Content list
- `app/admin/content/analytics/page.tsx` - Content analytics
- `app/admin/content/media/page.tsx` - Media management
- `app/admin/seo/page.tsx` - SEO management
- `app/admin/debug-ai/page.tsx` - AI debugging
- `app/admin/test-ai/page.tsx` - AI testing

#### Special Pages
- `app/itsm/page.tsx` - ITSM page
- `app/[slug]/page.tsx` - Dynamic slug page

#### Japanese Language Pages (ja/)
- `app/ja/[slug]/page.tsx` - Japanese dynamic page
- `app/ja/services/cloud-infrastructure/page.tsx` - Japanese cloud infrastructure
- `app/ja/services/cloud-infrastructure/client.tsx` - Japanese cloud client
- `app/ja/services/cybersecurity/page.tsx` - Japanese cybersecurity
- `app/ja/services/cybersecurity/client.tsx` - Japanese cybersecurity client
- `app/ja/services/it-consulting-project-management/page.tsx` - Japanese IT consulting
- `app/ja/services/it-consulting-project-management/client.tsx` - Japanese IT consulting client
- `app/ja/services/it-managed-services/page.tsx` - Japanese IT managed services
- `app/ja/services/it-managed-services/client.tsx` - Japanese IT managed client
- `app/ja/services/it-security/page.tsx` - Japanese IT security
- `app/ja/services/it-security/client.tsx` - Japanese IT security client
- `app/ja/services/network-penetration-testing/page.tsx` - Japanese network testing
- `app/ja/services/network-penetration-testing/client.tsx` - Japanese network client
- `app/ja/services/wifi-assessment/page.tsx` - Japanese WiFi assessment
- `app/ja/services/wifi-assessment/client.tsx` - Japanese WiFi assessment client
- `app/ja/services/wifi-design/page.tsx` - Japanese WiFi design
- `app/ja/services/wifi-design/client.tsx` - Japanese WiFi design client

### API Routes

#### Admin API Routes
- `app/api/admin/categories/route.ts` - Categories management
- `app/api/admin/content/route.ts` - Content management
- `app/api/admin/content/[id]/route.ts` - Individual content management
- `app/api/admin/content/analytics/route.ts` - Content analytics API
- `app/api/admin/keywords/route.ts` - Keywords management
- `app/api/admin/media/route.ts` - Media management
- `app/api/admin/media/[id]/route.ts` - Individual media management
- `app/api/admin/seo/analyze-content/route.ts` - SEO content analysis

#### Public API Routes
- `app/api/book-reservation/route.ts` - Book reservation API
- `app/api/contact/route.ts` - Contact form API
- `app/api/leads/route.ts` - Leads management API
- `app/api/schedule/route.ts` - Schedule API
- `app/api/translate/route.ts` - Translation API

#### SEO API Routes
- `app/api/seo/analyze/route.ts` - SEO analysis
- `app/api/seo/audit/[id]/route.ts` - SEO audit
- `app/api/seo/keywords/route.ts` - SEO keywords
- `app/api/seo/report/route.ts` - SEO report
- `app/api/seo/reports/route.ts` - SEO reports list
- `app/api/seo/test-connection/route.ts` - SEO test connection

## Components

### Core Components
- `components/akrin-logo.tsx` - AKRIN logo component
- `components/footer.tsx` - Footer component
- `components/Navbar.tsx` - Navigation bar
- `components/Hero.tsx` - Hero section
- `components/language-selector.tsx` - Language selector
- `components/particle-background.tsx` - Particle background effect
- `components/video-hero.tsx` - Video hero section
- `components/MonogramReactor.tsx` - Monogram reactor animation
- `components/WhiteTextSection.tsx` - White text section

### Feature Components
- `components/brochure-download.tsx` - Brochure download
- `components/calendly-widget.tsx` - Calendly integration
- `components/capabilities-carousel.tsx` - Capabilities carousel
- `components/card.tsx` - Card component
- `components/connect-cta-section.tsx` - Connect CTA section
- `components/cookie-consent.tsx` - Cookie consent banner
- `components/custom-icons.tsx` - Custom icons
- `components/data-stream.tsx` - Data stream visualization
- `components/diagonal-pictures-section.tsx` - Diagonal pictures section
- `components/google-analytics.tsx` - Google Analytics
- `components/hero-visual-singularity.tsx` - Hero visual effect
- `components/hreflang-links.tsx` - Hreflang links for SEO
- `components/hydration-boundary.tsx` - Hydration boundary
- `components/hydration-error-boundary.tsx` - Hydration error boundary
- `components/i18n-provider.tsx` - Internationalization provider
- `components/icons.tsx` - Icon components
- `components/itsm-charts.tsx` - ITSM charts
- `components/itsm-mini-charts.tsx` - ITSM mini charts
- `components/motion-wrapper.tsx` - Motion wrapper
- `components/professional-services-section.tsx` - Professional services section
- `components/theme-provider.tsx` - Theme provider

### Service Components
- `components/service-card.tsx` - Service card
- `components/service-cta-section.tsx` - Service CTA section
- `components/service-feature-card.tsx` - Service feature card
- `components/service-hero.tsx` - Service hero section
- `components/service-link-card.tsx` - Service link card
- `components/service-page-template.tsx` - Service page template
- `components/service-process-card.tsx` - Service process card
- `components/testimonial-card.tsx` - Testimonial card

### reCAPTCHA Components
- `components/recaptcha.tsx` - reCAPTCHA main component
- `components/recaptcha-flexible.tsx` - Flexible reCAPTCHA
- `components/recaptcha-script.tsx` - reCAPTCHA script
- `components/recaptcha-v2.tsx` - reCAPTCHA v2
- `components/recaptcha-v3.tsx` - reCAPTCHA v3

### Blog Components
- `components/blog/newsletter-form.tsx` - Newsletter signup
- `components/blog/reading-progress.tsx` - Reading progress indicator
- `components/blog/social-share-buttons.tsx` - Social sharing buttons
- `components/blog/table-of-contents.tsx` - Table of contents

### Content Components
- `components/content/content-renderer.tsx` - Content renderer
- `components/editor/ai-content-editor.tsx` - AI content editor
- `components/editor/rich-text-editor.tsx` - Rich text editor
- `components/media/media-library.tsx` - Media library

### SEO Components
- `components/seo/competitor-analysis.tsx` - Competitor analysis
- `components/seo/keyword-tracking-dashboard.tsx` - Keyword tracking
- `components/seo/seo-dashboard.tsx` - SEO dashboard
- `components/seo/seo-head.tsx` - SEO head tags

### Icons Directory
- `components/icons/ai-web-icons.tsx` - AI web icons
- `components/icons/analytics8-exact-style.tsx` - Analytics icons (exact style)
- `components/icons/analytics8-style-icons.tsx` - Analytics style icons
- `components/icons/itsm-icons.tsx` - ITSM icons
- `components/icons/premium-service-icons.tsx` - Premium service icons
- `components/icons/service-icons.tsx` - Service icons
- `components/icons/true-analytics8-icons.tsx` - True analytics icons

### UI Components (Shadcn)
- `components/ui/accordion.tsx` - Accordion component
- `components/ui/accordion-list.tsx` - Accordion list
- `components/ui/alert.tsx` - Alert component
- `components/ui/alert-dialog.tsx` - Alert dialog
- `components/ui/aspect-ratio.tsx` - Aspect ratio
- `components/ui/avatar.tsx` - Avatar component
- `components/ui/badge.tsx` - Badge component
- `components/ui/breadcrumb.tsx` - Breadcrumb navigation
- `components/ui/button.tsx` - Button component
- `components/ui/calendar.tsx` - Calendar component
- `components/ui/card.tsx` - Card component
- `components/ui/carousel.tsx` - Carousel component
- `components/ui/chart.tsx` - Chart component
- `components/ui/checkbox.tsx` - Checkbox component
- `components/ui/circular-progress.tsx` - Circular progress
- `components/ui/collapsible.tsx` - Collapsible component
- `components/ui/command.tsx` - Command palette
- `components/ui/context-menu.tsx` - Context menu
- `components/ui/dialog.tsx` - Dialog component
- `components/ui/drawer.tsx` - Drawer component
- `components/ui/dropdown-menu.tsx` - Dropdown menu
- `components/ui/embedded-contact-form.tsx` - Embedded contact form
- `components/ui/faq-section.tsx` - FAQ section
- `components/ui/form.tsx` - Form component
- `components/ui/home-faq-section.tsx` - Home FAQ section
- `components/ui/hover-card.tsx` - Hover card
- `components/ui/input.tsx` - Input component
- `components/ui/input-otp.tsx` - OTP input
- `components/ui/label.tsx` - Label component
- `components/ui/logo-carousel.tsx` - Logo carousel
- `components/ui/logos-with-blur-flip.tsx` - Logos with blur flip effect
- `components/ui/menubar.tsx` - Menu bar
- `components/ui/navigation-menu.tsx` - Navigation menu
- `components/ui/pagination.tsx` - Pagination component
- `components/ui/popover.tsx` - Popover component
- `components/ui/premium-typography.tsx` - Premium typography
- `components/ui/pricing-cards.tsx` - Pricing cards
- `components/ui/progress.tsx` - Progress bar
- `components/ui/radio-group.tsx` - Radio group
- `components/ui/resizable.tsx` - Resizable component
- `components/ui/responsive-image.tsx` - Responsive image
- `components/ui/responsive-test.tsx` - Responsive test
- `components/ui/scroll-area.tsx` - Scroll area
- `components/ui/section-cta.tsx` - Section CTA
- `components/ui/section-hero.tsx` - Section hero
- `components/ui/section-text-image.tsx` - Section text/image
- `components/ui/select.tsx` - Select dropdown
- `components/ui/separator.tsx` - Separator
- `components/ui/service-icons.tsx` - Service icons
- `components/ui/sheet.tsx` - Sheet component
- `components/ui/sidebar.tsx` - Sidebar component
- `components/ui/simple-blog-with-grid.tsx` - Simple blog grid
- `components/ui/skeleton.tsx` - Skeleton loader
- `components/ui/slider.tsx` - Slider component
- `components/ui/sonner.tsx` - Sonner toast
- `components/ui/switch.tsx` - Switch component
- `components/ui/tabbed-cards.tsx` - Tabbed cards
- `components/ui/table.tsx` - Table component
- `components/ui/tabs.tsx` - Tabs component
- `components/ui/tech-partners-animated.tsx` - Tech partners animated
- `components/ui/tech-partners-feature.tsx` - Tech partners feature
- `components/ui/textarea.tsx` - Textarea component
- `components/ui/toast.tsx` - Toast component
- `components/ui/toaster.tsx` - Toaster component
- `components/ui/toggle.tsx` - Toggle component
- `components/ui/toggle-group.tsx` - Toggle group
- `components/ui/tooltip.tsx` - Tooltip component
- `components/ui/use-mobile.tsx` - Mobile detection hook
- `components/ui/use-toast.ts` - Toast hook

## Library Files

### Core Libraries
- `lib/blog-data.ts` - Blog data management
- `lib/db.ts` - Database connection
- `lib/email.ts` - Email functionality
- `lib/email-service.ts` - Email service
- `lib/email-templates.ts` - Email templates
- `lib/i18n.ts` - Internationalization
- `lib/utils.ts` - Utility functions

### SEO Libraries
- `lib/seo.ts` - SEO utilities
- `lib/seo-optimizer.ts` - SEO optimizer
- `lib/seo-utils.ts` - SEO utility functions
- `lib/global-seo-optimizer.ts` - Global SEO optimizer
- `lib/seo-report-generator.ts` - SEO report generator
- `lib/seranking-api.ts` - SE Ranking API integration

### Other Libraries
- `lib/logo-utils.ts` - Logo utilities
- `lib/metadata-helpers.ts` - Metadata helpers
- `lib/service-metadata.ts` - Service metadata

### Generated Prisma Client
- `lib/generated/prisma/client.d.ts` - Prisma client types
- `lib/generated/prisma/client.js` - Prisma client
- `lib/generated/prisma/default.d.ts` - Default types
- `lib/generated/prisma/default.js` - Default implementation
- `lib/generated/prisma/edge.d.ts` - Edge types
- `lib/generated/prisma/edge.js` - Edge implementation
- `lib/generated/prisma/index-browser.js` - Browser index
- `lib/generated/prisma/index.d.ts` - Index types
- `lib/generated/prisma/index.js` - Index
- `lib/generated/prisma/package.json` - Prisma package
- `lib/generated/prisma/runtime/` - Various runtime files
- `lib/generated/prisma/wasm.d.ts` - WASM types
- `lib/generated/prisma/wasm.js` - WASM implementation

## Contexts
- `contexts/language-context.tsx` - Language context provider

## Hooks
- `hooks/use-mobile.tsx` - Mobile detection hook
- `hooks/use-mounted.tsx` - Mounted state hook
- `hooks/use-toast.ts` - Toast hook

## Types
- `types/global.d.ts` - Global type definitions

## Utils
- `utils/languages.ts` - Language utilities

## Tests
- `__tests__/api/content.test.ts` - Content API tests
- `__tests__/components/rich-text-editor.test.tsx` - Rich text editor tests
- `__tests__/e2e/content-creation.test.ts` - E2E content creation tests
- `__tests__/integration/content-workflow.test.ts` - Content workflow integration tests
- `__tests__/lib/seo-optimizer.test.ts` - SEO optimizer tests

## Database
- `prisma/seed.ts` - Database seeding script

## Public Assets
- `public/locales/en/common.json` - English translations
- `public/locales/ja/common.json` - Japanese translations
- `public/manifest.json` - Web app manifest

## Screen Components
- `screens/ElementLight/ElementLight.tsx` - Element light screen
- `screens/ElementLight/index.ts` - Element light index
- `screens/ElementLight/sections/BusinessAnalysisSection/index.tsx` - Business analysis section
- `screens/ElementLight/sections/BusinessConsultingSection/BusinessConsultingSection.tsx` - Business consulting section
- `screens/ElementLight/sections/BusinessConsultingSection/index.tsx` - Business consulting index
- `screens/ElementLight/sections/DataCenterSection/index.tsx` - Data center section
- `screens/ElementLight/sections/HeroSection/HeroSection.tsx` - Hero section
- `screens/ElementLight/sections/HeroSection/index.ts` - Hero section index
- `screens/ElementLight/sections/ITSupportSection/index.tsx` - IT support section
- `screens/ElementLight/sections/MigrationStrategySection/index.tsx` - Migration strategy section
- `screens/ElementLight/sections/ServiceOverviewSection/index.tsx` - Service overview section
- `screens/ElementLight/sections/StrategyOverviewSection/index.tsx` - Strategy overview section
- `screens/ElementLight/sections/TeamCollaborationSection/index.tsx` - Team collaboration section

## Styles
- `newassets/akrin-colors.css` - AKRIN color definitions

## Configuration Files
- `.claude/settings.local.json` - Claude settings

## Test & Utility Scripts
- `test-email.js` - Email testing script

## SEO Audit Files
- `seo-audit.json` - SEO audit results
- `seo-audit-final.json` - Final SEO audit
- `seo-audit-fixed.json` - Fixed SEO audit
- `seo-audit-rerun.json` - SEO audit rerun

## Additional Directories (Not Yet Mapped)
- `.superdesign/` - Super design directory
- `akrin-ai-chatbot-clean/` - AI chatbot clean version
- `akrin-itsm/` - ITSM related files
- `public/fonts/` - Font files
- `public/media/` - Media assets
- `public/video/` - Video assets

## Static Assets (Not Mapped)
- Various SVG files (Akrin-header.svg, Container -- 2.svg, background test.svg, etc.)
- Video files (last.mp4, new-server.mp4, server.mp4, etc.)
- Test files (test-logos.html)

---

This index provides a comprehensive overview of the AKRIN project structure. Each file is categorized by its function and location within the project hierarchy.