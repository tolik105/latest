import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostsEN } from '@/lib/blog-data'
import { SocialShareButtons } from '@/components/blog/social-share-buttons'
import { NewsletterForm } from '@/components/blog/newsletter-form'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { ReadingProgress } from '@/components/blog/reading-progress'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate dynamic keywords based on post content and category
const generateKeywords = (post: any) => {
  const baseKeywords = [
    ...(post.tags || []),
    'AKRIN',
    'IT consulting Japan',
    'enterprise technology',
    'business technology solutions'
  ]

  // Add category-specific keywords
  if (post.category === 'Security' || post.slug.includes('cybersecurity')) {
    return [
      ...baseKeywords,
      'cybersecurity Japan',
      'cyber security best practices',
      'ransomware protection',
      'threat detection',
      'zero trust architecture',
      'multi-factor authentication',
      'AI threat detection',
      'security compliance Japan',
      'cyber defense strategies',
      'enterprise security solutions',
      'data protection Japan',
      'cyber risk management',
      'security awareness training',
      'incident response planning'
    ]
  }

  if (post.category === 'Technology Trends' || post.slug.includes('infrastructure')) {
    return [
      ...baseKeywords,
      'IT infrastructure Japan',
      'technology trends',
      'digital transformation',
      'cloud solutions',
      'AI technology',
      'edge computing',
      '5G technology Japan',
      'modernization strategies'
    ]
  }

  // AI and Innovation specific keywords
  if (post.category === 'Innovation' || post.slug.includes('ai')) {
    return [
      ...baseKeywords,
      'artificial intelligence Japan',
      'AI IT support',
      'machine learning',
      'predictive analytics',
      'intelligent automation',
      'AIOps',
      'natural language processing',
      'robotic process automation',
      'AI chatbots',
      'automated remediation',
      'AI-powered ITSM',
      'intelligent ticket routing',
      'AI transformation',
      'enterprise AI solutions',
      'AI implementation Japan',
      'AI service management',
      'cognitive computing',
      'AI-driven insights'
    ]
  }

  // Default keywords for other categories
  return [
    ...baseKeywords,
    'technology insights',
    'digital innovation',
    'IT solutions',
    'business transformation'
  ]
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPostsEN[resolvedParams.slug as keyof typeof blogPostsEN]

  if (!post) {
    return {
      title: 'Post Not Found | AKRIN Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  // Extract clean description from content
  const cleanDescription = post.content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 160)

  return {
    title: `${post.title} - Expert Insights | AKRIN IT Blog`,
    description: post.metaDescription || cleanDescription,
    keywords: generateKeywords(post),
    authors: [{ name: 'AKRIN Technology Experts' }],
    creator: 'AKRIN',
    publisher: 'AKRIN',
    category: 'Technology',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://akrin.jp'),
    alternates: {
      canonical: `/blog/${post.slug}`,
      languages: {
        'en-US': `/blog/${post.slug}`,
        'ja-JP': `/ja/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || cleanDescription,
      url: `https://akrin.jp/blog/${post.slug}`,
      siteName: 'AKRIN',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['AKRIN Technology Experts'],
      section: post.category || 'Technology',
      tags: post.tags || [],
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} - AKRIN IT Blog`,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription || cleanDescription,
      site: '@AKRIN_JP',
      creator: '@AKRIN_JP',
      images: post.image ? [post.image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPostsEN).map((slug) => ({
    slug,
  }))
}

// Function to add IDs to headings for anchor links
function addHeadingIds(content: string): string {
  return content.replace(/<h([2-4])([^>]*)>(.*?)<\/h[2-4]>/gi, (match, level, attributes, text) => {
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    const id = cleanText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    // Check if ID already exists in attributes
    if (attributes.includes('id=')) {
      return match;
    }

    return `<h${level}${attributes} id="${id}">${text}</h${level}>`;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPostsEN[resolvedParams.slug as keyof typeof blogPostsEN]

  if (!post) {
    notFound()
  }

  // Add IDs to headings for better navigation
  const processedContent = addHeadingIds(post.content);

  // Generate enhanced structured data with category-specific schema
  const generateStructuredData = (post: any) => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
      image: post.image ? {
        '@type': 'ImageObject',
        url: post.image,
        width: 1200,
        height: 630,
        caption: `${post.title} - AKRIN IT Blog`
      } : undefined,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'AKRIN Technology Expert',
        jobTitle: post.authorRole || 'Technology Consultant',
        worksFor: {
          '@type': 'Organization',
          name: 'AKRIN',
          url: 'https://akrin.jp'
        },
        url: 'https://akrin.jp/about'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AKRIN',
        url: 'https://akrin.jp',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akrin.jp/images/akrin-logo.png',
          width: 200,
          height: 60
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+81-3-6821-1223',
          contactType: 'customer service',
          areaServed: 'JP',
          availableLanguage: ['English', 'Japanese']
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://akrin.jp/blog/${post.slug}`,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://akrin.jp'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: 'https://akrin.jp/blog'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: post.title,
              item: `https://akrin.jp/blog/${post.slug}`
            }
          ]
        }
      },
      articleSection: post.category || 'Technology',
      keywords: generateKeywords(post).join(', '),
      wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
      url: `https://akrin.jp/blog/${post.slug}`,
      isPartOf: {
        '@type': 'Blog',
        name: 'AKRIN IT Blog',
        url: 'https://akrin.jp/blog',
        description: 'Expert insights on IT infrastructure, cybersecurity, and digital transformation in Japan'
      },
      inLanguage: 'en-US',
      copyrightYear: new Date(post.date).getFullYear(),
      copyrightHolder: {
        '@type': 'Organization',
        name: 'AKRIN'
      }
    }

    // Add category-specific schema enhancements
    if (post.category === 'Security' || post.slug.includes('cybersecurity')) {
      return {
        ...baseSchema,
        about: [
          {
            '@type': 'Thing',
            name: 'Cybersecurity',
            description: 'Information security practices and technologies'
          },
          {
            '@type': 'Thing',
            name: 'Threat Detection',
            description: 'Methods and technologies for identifying security threats'
          },
          {
            '@type': 'Thing',
            name: 'Business Security',
            description: 'Enterprise security strategies and best practices'
          }
        ],
        mentions: [
          {
            '@type': 'SoftwareApplication',
            name: 'Multi-Factor Authentication',
            applicationCategory: 'SecurityApplication'
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Zero Trust Architecture',
            applicationCategory: 'SecurityApplication'
          },
          {
            '@type': 'Technology',
            name: 'AI Threat Detection',
            description: 'Artificial Intelligence powered cybersecurity solutions'
          }
        ]
      }
    }

    // Add AI-specific schema enhancements
    if (post.category === 'Innovation' || post.slug.includes('ai')) {
      return {
        ...baseSchema,
        about: [
          {
            '@type': 'Thing',
            name: 'Artificial Intelligence',
            description: 'AI technologies and applications in IT support services'
          },
          {
            '@type': 'Thing',
            name: 'IT Support Automation',
            description: 'Automated IT service management and support processes'
          },
          {
            '@type': 'Thing',
            name: 'Predictive Analytics',
            description: 'Data-driven insights for proactive IT support'
          }
        ],
        mentions: [
          {
            '@type': 'SoftwareApplication',
            name: 'AIOps Platform',
            applicationCategory: 'ITManagementApplication'
          },
          {
            '@type': 'SoftwareApplication',
            name: 'Machine Learning',
            applicationCategory: 'AIApplication'
          },
          {
            '@type': 'Technology',
            name: 'Natural Language Processing',
            description: 'AI technology for understanding and processing human language'
          }
        ]
      }
    }

    return baseSchema
  }

  const structuredData = generateStructuredData(post)

  // Generate FAQ structured data for AI posts
  const faqStructuredData = (post.category === 'Innovation' || post.slug.includes('ai')) ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is AI transforming IT support services in Japan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI is revolutionizing IT support in Japan through predictive analytics, automated remediation, intelligent ticket routing, and 24/7 virtual assistants. Organizations are seeing 50% faster resolution times and 35% reduction in ticket volume through proactive problem resolution.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the key AI technologies used in modern IT support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key AI technologies include Natural Language Processing (NLP) for chatbots, Machine Learning for ticket management, Robotic Process Automation (RPA) for repetitive tasks, and AIOps platforms for intelligent IT operations monitoring and management.'
        }
      },
      {
        '@type': 'Question',
        name: 'What benefits can organizations expect from AI-powered IT support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Organizations typically see 40% improvement in first-call resolution rates, 50% reduction in average resolution time, 35% decrease in ticket volume, and significant cost savings while maintaining higher service quality standards.'
        }
      },
      {
        '@type': 'Question',
        name: 'How should organizations implement AI in their IT support operations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Successful AI implementation follows a phased approach: start with pilot programs, ensure data quality, provide comprehensive training, address change management concerns, and gradually scale across the organization while maintaining human oversight for complex issues.'
        }
      }
    ]
  } : (post.category === 'Security' || post.slug.includes('cybersecurity')) ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the most critical cybersecurity threats facing Japanese businesses in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Japanese businesses face ransomware attacks (58% increase in 2022), Shadow AI vulnerabilities, deepfake social engineering, and supply chain attacks. The cybersecurity skills gap also remains a significant challenge for organizations implementing robust security measures.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does Zero Trust Architecture improve cybersecurity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zero Trust eliminates the traditional perimeter-based security model by verifying every user, device, and application. It implements least privilege access, continuous monitoring, and network micro-segmentation to prevent lateral movement of threats.'
        }
      },
      {
        '@type': 'Question',
        name: 'Why is AI-powered threat detection essential for modern businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional signature-based security cannot keep pace with evolving threats. AI provides predictive threat analysis, behavioral anomaly detection, automated incident response, and real-time threat intelligence to identify and respond to sophisticated attacks.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can AKRIN help improve my organization\'s cybersecurity posture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AKRIN provides comprehensive cybersecurity services including security assessments, implementation of Zero Trust architecture, AI-powered threat detection, compliance consulting, and 24/7 security monitoring tailored for the Japanese business environment.'
        }
      }
    ]
  } : null

  return (
    <>
      {/* Reading Progress Indicator */}
      <ReadingProgress />

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* FAQ Structured Data for Security Posts */}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
      )}

      <main className="min-h-screen bg-white" role="main">
        {/* Enhanced Navigation Breadcrumb with Schema */}
        <nav className="bg-white py-6 border-b border-gray-100" aria-label="Breadcrumb">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-gray-900 transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/blog" className="hover:text-gray-900 transition-colors" itemProp="item">
                    <span itemProp="name">Blog</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-gray-900 font-medium" itemProp="name">{post.title}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Return to blog listing"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </nav>

        {/* Enhanced Article Header */}
        <header className="bg-white pt-12 pb-8" itemScope itemType="https://schema.org/BlogPosting">
          <div className="max-w-4xl mx-auto px-6">
            {/* Title with Schema */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6 max-w-4xl tracking-tight"
              itemProp="headline"
            >
              {post.title}
            </h1>

            {/* Article Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
              {post.date && (
                <time
                  className="flex items-center"
                  dateTime={post.date}
                  itemProp="datePublished"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
              {post.readTime && (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              )}
              {post.category && (
                <span className="flex items-center" itemProp="articleSection">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {post.category}
                </span>
              )}
            </div>

            {/* Hidden Schema Data */}
            <div className="sr-only">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">AKRIN Technology Expert</span>
              </span>
              <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">AKRIN</span>
                <span itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
                  <span itemProp="url">https://akrin.jp/images/akrin-logo.png</span>
                </span>
              </span>
              <meta itemProp="url" content={`https://akrin.jp/blog/${post.slug}`} />
              {post.metaDescription && <meta itemProp="description" content={post.metaDescription} />}
            </div>

            {/* Social Share Icons */}
            <SocialShareButtons title={post.title} />
          </div>
        </header>

        {/* Enhanced Hero Image */}
        <div className="mb-8 md:mb-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] bg-gray-100 overflow-hidden rounded-lg">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={`${post.title} - Expert insights on IT infrastructure and technology trends in Japan by AKRIN`}
                  fill
                  className="object-cover object-center"
                  priority
                  itemProp="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-200/60 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <p className="text-blue-600 text-lg font-medium">Professional image placeholder</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Container with Table of Contents */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Table of Contents - Desktop Sidebar */}
              <aside className="hidden lg:block lg:w-80 flex-shrink-0">
                <TableOfContents content={processedContent} />
              </aside>

              {/* Main Article Content */}
              <article
                className="flex-1 prose prose-lg blog-content"
                itemProp="articleBody"
                role="main"
                aria-labelledby="article-title"
              >
                {/* Mobile Table of Contents */}
                <div className="lg:hidden mb-6 md:mb-8">
                  <TableOfContents content={processedContent} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: processedContent }} />

                {/* Article Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>



        {/* Category-Specific FAQ Section */}
        {(post.category === 'Security' || post.slug.includes('cybersecurity')) && (
          <section className="bg-gray-50 py-16 border-t border-gray-100" aria-labelledby="faq-section">
            <div className="max-w-4xl mx-auto px-6">
              <h2 id="faq-section" className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    What are the most critical cybersecurity threats facing Japanese businesses in 2025?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Japanese businesses face ransomware attacks (58% increase in 2022), Shadow AI vulnerabilities,
                    deepfake social engineering, and supply chain attacks. The cybersecurity skills gap also remains
                    a significant challenge for organizations implementing robust security measures.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    How does Zero Trust Architecture improve cybersecurity?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zero Trust eliminates the traditional perimeter-based security model by verifying every user,
                    device, and application. It implements least privilege access, continuous monitoring, and
                    network micro-segmentation to prevent lateral movement of threats.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Why is AI-powered threat detection essential for modern businesses?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional signature-based security can't keep pace with evolving threats. AI provides predictive
                    threat analysis, behavioral anomaly detection, automated incident response, and real-time threat
                    intelligence to identify and respond to sophisticated attacks.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    How can AKRIN help improve my organization's cybersecurity posture?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    AKRIN provides comprehensive cybersecurity services including security assessments,
                    implementation of Zero Trust architecture, AI-powered threat detection, compliance consulting,
                    and 24/7 security monitoring tailored for the Japanese business environment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enhanced Related Posts Section */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="bg-white py-12 md:py-16 border-t border-gray-100" aria-labelledby="related-posts">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 id="related-posts" className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 mb-6 md:mb-8 tracking-tight">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {post.relatedPosts.map((relatedPost, index) => {
                  // Get the full blog post data to access the image
                  const fullRelatedPost = blogPostsEN[relatedPost.slug as keyof typeof blogPostsEN]

                  return (
                    <article key={index} className="group">
                      <Link href={`/blog/${relatedPost.slug}`} className="block">
                        <div className="relative h-40 sm:h-44 md:h-48 bg-gray-100 rounded-lg mb-3 md:mb-4 overflow-hidden">
                          {fullRelatedPost?.image ? (
                            <Image
                              src={fullRelatedPost.image}
                              alt={`${relatedPost.title} - AKRIN IT Blog`}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-colors">
                              <div className="text-center">
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                <span className="text-gray-500 text-xs">Article</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2 leading-tight">
                            {relatedPost.title}
                          </h3>
                          {fullRelatedPost?.category && (
                            <span className="inline-block text-xs font-medium text-purple-600 uppercase tracking-wide">
                              {fullRelatedPost.category}
                            </span>
                          )}
                          {fullRelatedPost?.readTime && (
                            <p className="text-sm text-gray-500">
                              {fullRelatedPost.readTime}
                            </p>
                          )}
                        </div>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Category-Specific CTA Section */}
        {(post.category === 'Security' || post.slug.includes('cybersecurity')) && (
          <section className="bg-purple-50 py-16 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                  Strengthen Your Cybersecurity Posture
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Don't wait for a security incident to take action. Our cybersecurity experts can help you
                  implement comprehensive security measures tailored for your business needs in Japan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services/it-managed-services"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Managed IT Services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-purple-600 font-medium border-2 border-purple-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Free Security Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Enhanced Newsletter Section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100" aria-labelledby="newsletter">
          <NewsletterForm />
        </section>

      </main>
    </>
  )
}