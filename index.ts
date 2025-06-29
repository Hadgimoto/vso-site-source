// Define types for the application

// Navigation
export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

// SEO
export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
  };
  twitterCard?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

// Blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  categories: string[];
  tags: string[];
  featuredImage?: string;
  seo?: SEOData;
}

// Products
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  inStock: boolean;
  categories: string[];
  seo?: SEOData;
}

// Projects/Builds
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
  seo?: SEOData;
}

// Forms
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}
