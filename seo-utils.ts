import type { SEOData } from '@/types';

/**
 * Generates JSON-LD schema markup for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Veterans Services Ohio',
    url: 'https://veteransservicesohio.org',
    logo: 'https://veteransservicesohio.org/logo.png',
    sameAs: [
      'https://facebook.com/veteransservicesohio',
      'https://twitter.com/vsoohio',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Axess Family Services',
      url: 'https://axessfamilyservices.org'
    }
  };
}

/**
 * Generates JSON-LD schema markup for service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Veterans Services Ohio',
      url: 'https://veteransservicesohio.org'
    },
    url: service.url
  };
}

/**
 * Generates JSON-LD schema markup for blog post
 */
export function generateBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  author: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: post.url,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Veterans Services Ohio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://veteransservicesohio.org/logo.png'
      }
    },
    image: post.image || 'https://veteransservicesohio.org/default-blog-image.jpg'
  };
}

/**
 * Generates JSON-LD schema markup for product
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      url: product.url
    },
    image: product.image || 'https://veteransservicesohio.org/default-product-image.jpg'
  };
}

/**
 * Generates meta tags for SEO
 */
export function generateMetaTags(seo: SEOData) {
  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    openGraph: {
      title: seo.openGraph?.title || seo.title,
      description: seo.openGraph?.description || seo.description,
      image: seo.openGraph?.image || 'https://veteransservicesohio.org/default-og-image.jpg',
      url: seo.canonical
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterCard?.title || seo.title,
      description: seo.twitterCard?.description || seo.description,
      image: seo.twitterCard?.image || 'https://veteransservicesohio.org/default-twitter-image.jpg'
    }
  };
}