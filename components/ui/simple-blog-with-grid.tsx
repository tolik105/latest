"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogPostsEN } from "@/lib/blog-data";
import { AkrinIcon } from "@/components/akrin-logo";
import Image from "next/image";

// Blog type definition
interface Blog {
  title: string;
  description: string;
  slug: string;
  date?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  image?: string | null;
}

export function SimpleBlogWithGrid() {
  // Convert blog data to the format expected by the component
  const blogs = Object.values(blogPostsEN).map((post) => ({
    title: post.title,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
    slug: post.slug,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    featured: post.featured || false,
    image: post.image || null
  }));

  // Separate featured post (first one) from the rest
  const featuredPost = blogs[0];
  const remainingPosts = blogs.slice(1);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section - McKinsey Style */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {/* Top Banner Area */}
          <div className="py-20 border-b border-gray-100">
            <h1 className="text-center text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight tracking-[-0.02em] max-w-4xl mx-auto">
              New at AKRIN Blog
            </h1>
          </div>

          {/* Featured Article */}
          <div className="py-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <article className="space-y-8">
                {/* Image */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[480px] bg-gray-100 overflow-hidden rounded-lg">
                  {featuredPost.image ? (
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <AkrinIcon className="w-20 h-20 text-blue-200/60" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="max-w-3xl space-y-6">
                  {/* Category Pills */}
                  <div className="flex items-center gap-3">
                    {featuredPost.category && (
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        {featuredPost.category}
                      </span>
                    )}
                    {featuredPost.date && (
                      <>
                        <span className="text-gray-300">•</span>
                        <time className="text-xs text-gray-500">
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold leading-tight text-gray-900 tracking-[-0.02em] group-hover:text-gray-700 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    {featuredPost.description}
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary Articles Grid */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-8 md:gap-y-10 lg:gap-y-12">
            {remainingPosts.map((blog, index) => (
              <BlogCard blog={blog} key={blog.slug} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - McKinsey Style */}
      <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-gray-900 tracking-[-0.02em]">Never miss a story</h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Stay updated about AKRIN news as it happens
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 md:px-4 py-2 md:py-3 border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 flex-1 text-sm rounded-md"
              />
              <button className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export const BlogCard = ({ blog, variant = "grid" }: { blog: Blog; variant?: "grid" | "sidebar" | "main" }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  // McKinsey-style grid card
  if (variant === "grid") {
    return (
      <Link href={`/blog/${blog.slug}`} className="group block h-full">
        <article className="h-full flex flex-col space-y-6">
          {/* Image */}
          <div className="relative h-40 sm:h-44 md:h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <AkrinIcon className="w-16 h-16 text-gray-300" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col space-y-3 md:space-y-4 p-1">
            {/* Category & Date */}
            <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500">
              {blog.category && (
                <span className="font-medium uppercase tracking-wide">
                  {blog.category}
                </span>
              )}
              {blog.date && blog.category && (
                <span className="text-gray-300">•</span>
              )}
              {blog.date && (
                <time>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>

            {/* Title */}
            <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300 flex-grow tracking-[-0.01em]">
              {truncate(blog.title, 85)}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
              {truncate(blog.description, 120)}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  // Fallback to grid style for other variants
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="w-full h-full flex items-center justify-center">
            <AkrinIcon className="w-16 h-16 text-white/30" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {blog.category && (
            <span className="inline-block text-xs font-medium text-purple-600 mb-3 uppercase tracking-wide">
              {blog.category}
            </span>
          )}

          <h3 className="text-xl font-medium text-gray-900 mb-3 leading-snug group-hover:text-purple-600 transition-colors duration-300">
            {blog.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {blog.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            {blog.date && (
              <time>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            )}
            {blog.readTime && (
              <span>{blog.readTime}</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

type Blog = {
  title: string;
  description: string;
  slug: string;
  date?: string;
  readTime?: string;
  category?: string;
  featured?: boolean;
  image?: string | null;
};




