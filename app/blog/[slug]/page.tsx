"use client"

import React from "react"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, Clock, User, Share2, Linkedin, Twitter, Facebook, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts/language-context"
import { blogPostsEN, blogPostsJA } from "@/lib/blog-data"

// This would typically fetch from an API based on the slug
const getBlogPost = (slug: string, language: string) => {
  const posts = language === 'ja' ? blogPostsJA : blogPostsEN
  return posts[slug as keyof typeof posts] || null
}

export default function BlogPostPage() {
  const { t } = useTranslation('common')
  const { language } = useLanguage()
  const params = useParams()
  const post = getBlogPost(params.slug as string, language)
  
  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">{t('blog.postNotFound', 'Post not found')}</h1>
        <Button asChild>
          <Link href="/blog">{t('blog.backToBlog')}</Link>
        </Button>
      </main>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = post.title

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 pt-28">
        <div className="container max-w-4xl">
          <Button variant="ghost" className="text-white hover:text-white/80 mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('blog.backToBlog')}
            </Link>
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-0">
              {post.category}
            </Badge>
            <span className="flex items-center gap-1 text-sm">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1 text-sm">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-white/80">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:my-6 prose-ol:my-6 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-semibold">{t('blog.tags')}:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4">
              <span className="font-semibold">{t('blog.share')}:</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="h-10 w-10 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{t('blog.about')} {post.author}</h3>
                  <p className="text-muted-foreground mb-3">{post.authorRole}</p>
                  <p className="text-gray-700">{post.authorBio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">{t('blog.relatedArticles')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.relatedPosts.map(relatedPost => (
              <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    <Link href={`/blog/${relatedPost.slug}`} className="hover:text-purple-600">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${relatedPost.slug}`}>{t('blog.readMore')} →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">{t('blog.needExpertSolutions')}</h2>
          <p className="text-xl mb-8">
            {t('blog.ctaSubtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('nav.contact')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/services">{t('blog.viewServices')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}