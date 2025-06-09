"use client"

import React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, Search, ChevronLeft, ChevronRight, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPostsEN, blogPostsJA } from "@/lib/blog-data"

const categoriesEN = [
  "All Categories",
  "Technology Trends",
  "Security",
  "Cloud Solutions",
  "Innovation",
  "Case Studies",
  "Industry News"
]

const categoriesJA = [
  "すべてのカテゴリー",
  "技術トレンド",
  "セキュリティ",
  "クラウドソリューション",
  "イノベーション",
  "ケーススタディ",
  "業界ニュース"
]


export default function BlogPage() {
  const { t } = useTranslation('common')
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  
  // Select blog posts and categories based on language
  const blogPostsData = language === 'ja' ? blogPostsJA : blogPostsEN
  const blogPosts = Object.values(blogPostsData).map(post => ({...post, featured: post.id <= 2}))
  const categories = language === 'ja' ? categoriesJA : categoriesEN
  
  // Set default category when language changes
  React.useEffect(() => {
    setSelectedCategory(categories[0])
    setCurrentPage(1)
  }, [language])

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === categories[0] || 
                           post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Featured posts (top 2)
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 pt-32">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('blog.title')}</h1>
          <p className="text-xl mb-8 max-w-2xl">
            {t('blog.subtitle')}
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
              <Input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {!searchQuery && selectedCategory === categories[0] && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{t('blog.featuredArticles')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="font-medium">{post.category}</span>
                      <span>{new Date(post.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-purple-600">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                      <Button variant="link" size="sm" className="text-sm p-0 h-auto font-normal" asChild>
                        <Link href={`/blog/${post.slug}`}>{t('blog.read')} →</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">
            {searchQuery || selectedCategory !== categories[0] 
              ? t('blog.searchResults') 
              : t('blog.latestArticles')}
          </h2>
          
          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t('blog.noArticlesFound')}
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map(post => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="font-medium">{post.category}</span>
                        <span>{new Date(post.date).toLocaleDateString(language === 'ja' ? 'ja-JP' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-purple-600">
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                        <Button variant="link" size="sm" className="text-sm p-0 h-auto font-normal" asChild>
                          <Link href={`/blog/${post.slug}`}>{t('blog.read')} →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <Button
                      key={i + 1}
                      variant={currentPage === i + 1 ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{t('blog.stayUpdated')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('blog.newsletterSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('blog.enterEmail')}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              {t('blog.subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}