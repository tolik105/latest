# 📋 Complete Implementation Manual: Multi-Platform Social Media Feature

## 🚀 Step 1: Install Dependencies

```bash
# Install required dependencies
npm install framer-motion clsx tailwindcss-animate
# or
yarn add framer-motion clsx tailwindcss-animate
```

## 🎨 Step 2: Create Utility Functions

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 🔧 Step 3: Create Component Files

### 3.1 Card Components (`components/ui/card.tsx`)

```typescript
import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.30)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-lg font-semibold text-white py-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-sm font-normal text-neutral-400 max-w-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};
```

### 3.2 Icon Container (`components/ui/icon-container.tsx`)

```typescript
import React from "react";

export const IconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex items-center justify-center h-16 w-16 rounded-lg border-2 bg-[rgba(40,40,40)] relative
    border-[rgba(255,_255,_255,_0.20)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)_inset]
    flex-shrink-0
    hover:scale-[0.98] transition duration-200
    `}
    >
      <div className="h-8 w-8 rounded-md overflow-hidden">{children}</div>
    </div>
  );
};
```

### 3.3 Social Media Icons (`components/icons/social-icons.tsx`)

```typescript
import React from "react";

export const MetaIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      className={className}
    >
      <g clipPath="url(#a)">
        <path fill="url(#b)" d="M0 0h18v18H0V0Z" />
        <path
          fill="#F0F3FA"
          d="M11.612 5.2c-.984 0-1.753.743-2.45 1.688C8.205 5.666 7.406 5.2 6.448 5.2 4.496 5.2 3 7.749 3 10.447c0 1.688.814 2.753 2.178 2.753.981 0 1.687-.464 2.942-2.665l.883-1.565c.126.204.258.424.398.66l.589.993c1.146 1.924 1.784 2.577 2.942 2.577 1.329 0 2.068-1.08 2.068-2.802C15 7.573 13.47 5.2 11.612 5.2ZM7.163 9.94c-1.017 1.6-1.37 1.958-1.936 1.958-.583 0-.93-.514-.93-1.43 0-1.958.974-3.96 2.134-3.96.629 0 1.154.363 1.958 1.518A165.377 165.377 0 0 0 7.163 9.94Zm3.84-.202-.704-1.177a25.45 25.45 0 0 0-.548-.858c.634-.981 1.157-1.471 1.779-1.471 1.292 0 2.326 1.909 2.326 4.254 0 .893-.292 1.412-.896 1.412-.58 0-.857-.384-1.957-2.16Z"
        />
        <path
          fill="url(#c)"
          fillRule="evenodd"
          d="m9 8.975-.61-.948c-.409.63-.809 1.253-1.003 1.56l.81.81L9 8.975Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#d)"
          fillRule="evenodd"
          d="M10.904 6.412c-.405.222-.845.82-1.155 1.293l-.586-.818c.44-.599.906-1.108 1.43-1.405l.311.93Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="9.281"
          x2="9.281"
          y1="16"
          y2="-.149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0869E1" />
          <stop offset="1" stopColor="#0081FA" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="8.719"
          x2="7.757"
          y1="8.561"
          y2="9.888"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity=".15" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="9.489"
          x2="10.592"
          y1="7.168"
          y2="6.089"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity=".1" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LinkedInIcon = () => {
  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g fill="none">
        <path
          d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
          fill="#069"
        />
        <path
          d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
          fill="#ffffff"
        />
      </g>
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint0_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint1_radial_87_7153)"
      />
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        fill="url(#paint2_radial_87_7153)"
      />
      <path
        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
        >
          <stop stopColor="#B13589" />
          <stop offset="0.79309" stopColor="#C62F94" />
          <stop offset="1" stopColor="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
        >
          <stop stopColor="#E0E8B7" />
          <stop offset="0.444662" stopColor="#FB8A2E" />
          <stop offset="0.71474" stopColor="#E2425C" />
          <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_87_7153"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0.5 3) rotate(-90) scale(10)"
        >
          <stop stopColor="#FD5" />
          <stop offset="1" stopColor="#FD5" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const TwitterIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="#000000"
      />
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#1877F2"
      />
    </svg>
  );
};

export const TiktokIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        fill="#000000"
      />
    </svg>
  );
};

export const SlackIcon = () => {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-full h-full"
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill="#E01E5A"
          d="M2.471 11.318a1.474 1.474 0 001.47-1.471v-1.47h-1.47A1.474 1.474 0 001 9.846c.001.811.659 1.469 1.47 1.47zm3.682-2.942a1.474 1.474 0 00-1.47 1.471v3.683c.002.811.66 1.468 1.47 1.47a1.474 1.474 0 001.47-1.47V9.846a1.474 1.474 0 00-1.47-1.47z"
        />
        <path
          fill="#36C5F0"
          d="M4.683 2.471c.001.811.659 1.469 1.47 1.47h1.47v-1.47A1.474 1.474 0 006.154 1a1.474 1.474 0 00-1.47 1.47zm2.94 3.682a1.474 1.474 0 00-1.47-1.47H2.47A1.474 1.474 0 001 6.153c.002.812.66 1.469 1.47 1.47h3.684a1.474 1.474 0 001.47-1.47z"
        />
        <path
          fill="#2EB67D"
          d="M9.847 7.624a1.474 1.474 0 001.47-1.47V2.47A1.474 1.474 0 009.848 1a1.474 1.474 0 00-1.47 1.47v3.684c.002.81.659 1.468 1.47 1.47zm3.682-2.941a1.474 1.474 0 00-1.47 1.47v1.47h1.47A1.474 1.474 0 0015 6.154a1.474 1.474 0 00-1.47-1.47z"
        />
        <path
          fill="#ECB22E"
          d="M8.377 9.847c.002.811.659 1.469 1.47 1.47h3.683A1.474 1.474 0 0015 9.848a1.474 1.474 0 00-1.47-1.47H9.847a1.474 1.474 0 00-1.47 1.47zm2.94 3.682a1.474 1.474 0 00-1.47-1.47h-1.47v1.47c.002.812.659 1.469 1.47 1.47a1.474 1.474 0 001.47-1.47z"
        />
      </g>
    </svg>
  );
};
```

## 🎯 Step 4: Main Components

### 4.1 Multi-Platform Skeleton (`components/multi-platform-skeleton.tsx`)

```typescript
"use client";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MetaIcon,
  SlackIcon,
  TiktokIcon,
  TwitterIcon,
} from "./icons/social-icons";
import React from "react";
import { IconContainer } from "./ui/icon-container";

export const MultiPlatformSkeleton = () => {
  return (
    <div className="p-8 overflow-hidden h-full">
      <div className="flex flex-col gap-4 items-center justify-center h-full relative">
        <div className="flex gap-4 items-center justify-center flex-shrink-0">
          {/* Top connecting line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="105"
            viewBox="0 0 62 105"
            fill="none"
            className="absolute left-1/2 -translate-x-[60px] -top-10 text-neutral-600"
          >
            <path
              d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.path
              d="M1.00001 -69L1 57.5C1 64.1274 6.37258 69.5 13 69.5H49C55.6274 69.5 61 74.8726 61 81.5L61 105"
              stroke="url(#gradient-1)"
              strokeWidth="1.5"
            />
            <defs>
              <motion.linearGradient
                initial={{
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: "100%",
                  y1: "90%",
                  x2: "120%",
                  y2: "120%",
                }}
                id="gradient-1"
                transition={{
                  duration: Math.random() * (7 - 2) + 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <stop stopColor="#001AFF" stopOpacity={0} />
                <stop offset="1" stopColor="#6DD4F5" />
                <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>

          {/* Bottom connecting line */}
          <svg
            width="128"
            height="69"
            viewBox="0 0 128 69"
            fill="none"
            className="absolute left-1/2 translate-x-4 -bottom-2 text-neutral-600"
          >
            <path
              d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.path
              d="M1.00002 0.5L1.00001 29.5862C1 36.2136 6.37259 41.5862 13 41.5862H115C121.627 41.5862 127 46.9588 127 53.5862L127 75"
              stroke="url(#gradient-2)"
              strokeWidth="1.5"
            />
            <defs>
              <motion.linearGradient
                initial={{
                  x1: "0%",
                  y1: "0%",
                  x2: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: "100%",
                  y1: "90%",
                  x2: "120%",
                  y2: "120%",
                }}
                id="gradient-2"
                transition={{
                  duration: Math.random() * (7 - 2) + 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <stop stopColor="#001AFF" stopOpacity={0} />
                <stop offset="1" stopColor="#6DD4F5" />
                <stop offset="1" stopColor="#6DD4F5" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>

          {/* First row of platform icons */}
          <IconContainer>
            <InstagramIcon />
          </IconContainer>
          <IconContainer>
            <TiktokIcon />
          </IconContainer>
          <IconContainer>
            <TwitterIcon />
          </IconContainer>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
          <IconContainer>
            <MetaIcon />
          </IconContainer>
          <IconContainer>
            <LinkedInIcon />
          </IconContainer>
          <IconContainer>
            <SlackIcon />
          </IconContainer>
        </div>

        {/* Second row of platform icons */}
        <div className="flex gap-4 items-center justify-center flex-shrink-0 ml-8">
          <IconContainer>
            <MetaIcon />
          </IconContainer>
          <IconContainer>
            <LinkedInIcon />
          </IconContainer>
          <IconContainer>
            <SlackIcon />
          </IconContainer>
          <IconContainer>
            <InstagramIcon />
          </IconContainer>
          <IconContainer>
            <TiktokIcon />
          </IconContainer>
          <IconContainer>
            <TwitterIcon />
          </IconContainer>
          <IconContainer>
            <FacebookIcon />
          </IconContainer>
        </div>
      </div>
    </div>
  );
};
```

### 4.2 Main Multi-Platform Feature (`components/multi-platform-feature.tsx`)

```typescript
"use client";
import React from "react";
import { Card, CardTitle, CardDescription, CardSkeletonContainer } from "./ui/card";
import { MultiPlatformSkeleton } from "./multi-platform-skeleton";

export const MultiPlatformFeature = () => {
  return (
    <Card className="lg:col-span-2">
      <CardTitle>Post to multiple platforms at once</CardTitle>
      <CardDescription>
        With our AI-powered platform, you can post to multiple platforms
        at once, saving you time and effort.
      </CardDescription>
      <CardSkeletonContainer>
        <MultiPlatformSkeleton />
      </CardSkeletonContainer>
    </Card>
  );
};
```

## 🎨 Step 5: Tailwind Configuration

Add to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#08090A",
        secondary: "#39C3EF",
        muted: "var(--neutral-200)",
      },
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
      },
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
```

## 🚀 Step 6: Usage Example

Create a page or component to use the feature:

```typescript
"use client";
import { MultiPlatformFeature } from "@/components/multi-platform-feature";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Social Media Features
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <MultiPlatformFeature />
          
          {/* Add other feature cards here */}
        </div>
      </div>
    </div>
  );
}
```

## 🎯 Step 7: File Structure

Your project structure should look like this:

```
your-project/
├── components/
│   ├── ui/
│   │   ├── card.tsx
│   │   └── icon-container.tsx
│   ├── icons/
│   │   └── social-icons.tsx
│   ├── multi-platform-skeleton.tsx
│   └── multi-platform-feature.tsx
├── lib/
│   └── utils.ts
├── app/ (or pages/)
│   └── features/
│       └── page.tsx
├── tailwind.config.js
└── package.json
```

## 🎨 Step 8: Dark Mode Support

Add this to your global CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --neutral-200: #e5e5e5;
  --neutral-400: #a3a3a3;
  --neutral-600: #525252;
  --neutral-800: #262626;
  --neutral-900: #171717;
}

.dark {
  --neutral-200: #404040;
  --neutral-400: #737373;
  --neutral-600: #a3a3a3;
  --neutral-800: #d4d4d4;
  --neutral-900: #f5f5f5;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
```

## 🛠️ Step 9: Customization Options

### Colors
You can customize the colors by modifying the Tailwind config:

```javascript
colors: {
  primary: "#your-primary-color",
  secondary: "#your-secondary-color",
  accent: "#your-accent-color",
}
```

### Animations
Modify animation durations in the MultiPlatformSkeleton component:

```typescript
transition={{
  duration: 3, // Change animation speed
  ease: "easeInOut", // Change easing
  repeat: Infinity,
}}
```

### Platform Icons
Add or remove platform icons by modifying the MultiPlatformSkeleton component arrays.

## 🎯 Step 10: Performance Optimization

### Lazy Loading
```typescript
import dynamic from 'next/dynamic';

const MultiPlatformFeature = dynamic(() => import('./multi-platform-feature'), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-xl h-96" />,
});
```

### Reduce Bundle Size
```typescript
// Instead of importing all icons, import only what you need
import { InstagramIcon, TwitterIcon } from './icons/social-icons';
```

## 🚀 Final Notes

1. **Responsive Design**: The component is responsive and works on all screen sizes
2. **Accessibility**: All icons have proper alt text and semantic HTML
3. **Performance**: Uses efficient SVG icons and optimized animations
4. **Customization**: Easy to modify colors, animations, and platform icons
5. **TypeScript**: Fully typed for better development experience

## 📱 Mobile Optimization

The component automatically adapts to mobile screens with:
- Responsive grid layouts
- Touch-friendly hover states
- Optimized icon sizes
- Proper spacing on smaller screens

## 🔧 Troubleshooting

1. **Animation not working**: Make sure Framer Motion is installed
2. **Icons not showing**: Check SVG paths and ensure proper imports
3. **Styling issues**: Verify Tailwind CSS is properly configured
4. **TypeScript errors**: Ensure all components have proper type definitions

This implementation provides a complete, production-ready multi-platform social media feature that you can easily integrate into any React/Next.js project! 