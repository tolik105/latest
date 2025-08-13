import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPostsEN } from '@/lib/blog-data'
import { SocialShareButtons } from '@/components/blog/social-share-buttons'
import { NewsletterForm } from '@/components/blog/newsletter-form'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { AkrinIcon } from '@/components/akrin-logo'

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
        {/* Preline Style Breadcrumb */}
        <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
              <li className="inline-flex items-center">
                <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
                  <svg className="shrink-0 me-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  Home
                </Link>
                <svg className="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/blog">
                  Blog
                </Link>
                <svg className="shrink-0 mx-2 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </li>
              <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Preline Style Article Header */}
        <header className="bg-white" itemScope itemType="https://schema.org/BlogPosting">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
            {/* Category Badge */}
            <div className="max-w-3xl">
              {post.category && (
                <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {post.category}
                </p>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:leading-tight" itemProp="headline">
                {post.title}
              </h1>

              {/* Article Meta */}
              <div className="mt-5 flex items-center gap-x-4">
                <div>
                  <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                      <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg className="size-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-2">
                        <p className="text-sm font-medium text-gray-800">AKRIN Team</p>
                        <ul className="text-xs text-gray-500">
                          <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                            {post.date && new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </li>
                          {post.readTime && (
                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                              {post.readTime}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="mt-6">
                <SocialShareButtons title={post.title} />
              </div>
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
          </div>
        </header>

        {/* Preline Style Hero Image */}
        <div className="mt-10 sm:mt-16">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={`${post.title} - Expert insights on IT infrastructure and technology trends in Japan by AKRIN`}
                  fill
                  className="object-cover object-center"
                  priority
                  itemProp="image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1320px"
                  unoptimized={false}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <AkrinIcon className="w-32 h-32 text-gray-300" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Container - Preline Style */}
        <div className="bg-white">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-12">
              {/* Main Article Content */}
              <div className="lg:col-span-2">
                <article
                  className="prose prose-lg max-w-none prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:text-gray-600 prose-blockquote:border-gray-300"
                  itemProp="articleBody"
                >
                  <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                </article>

                {/* Article Tags - Preline Style */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-x-1.5 py-2 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
                          itemProp="keywords"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Table of Contents and Related */}
              <div className="lg:col-span-1">
                <div className="sticky top-6 space-y-6">
                  <TableOfContents content={processedContent} />
                </div>
              </div>
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

        {/* Preline Style Related Posts Section */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-10 sm:py-16" aria-labelledby="related-posts">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-800">
                  Related Articles
                </h2>
                <p className="mt-1 text-gray-600">
                  Continue reading more insights from our experts
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost, index) => {
                  const fullRelatedPost = blogPostsEN[relatedPost.slug as keyof typeof blogPostsEN]

                  return (
                    <Link key={index} href={`/blog/${relatedPost.slug}`} className="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl">
                      <div className="relative h-52 overflow-hidden rounded-t-xl">
                        {fullRelatedPost?.image ? (
                          <Image
                            src={fullRelatedPost.image}
                            alt={`${relatedPost.title} - AKRIN IT Blog`}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                            unoptimized={false}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <AkrinIcon className="w-16 h-16 text-gray-300" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-6 flex-1 flex flex-col">
                        {fullRelatedPost?.category && (
                          <div className="mb-1">
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {fullRelatedPost.category}
                            </span>
                          </div>
                        )}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                          {relatedPost.title}
                        </h3>
                        <div className="mt-auto flex items-center gap-x-3 text-sm text-gray-500">
                          <span className="font-medium text-gray-800">AKRIN Team</span>
                          {fullRelatedPost?.readTime && (
                            <div className="flex items-center gap-x-2 ml-auto">
                              <span>{fullRelatedPost.readTime}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
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

        {/* Preline Style Newsletter Section */}
        <section className="bg-white py-10 sm:py-16 border-t border-gray-200" aria-labelledby="newsletter">
          <NewsletterForm />
        </section>

      </main>
    </>
  )
}