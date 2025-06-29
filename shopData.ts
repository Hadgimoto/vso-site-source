// Mock product data for the shop

export const products = [
  {
    id: '1',
    name: 'Veteran Support T-Shirt',
    description: '100% cotton t-shirt with Veterans Services Ohio logo. Proceeds support local veteran programs.',
    price: 24.99,
    image: 'https://placehold.co/400x300/navy/white?text=Veteran+T-Shirt&v=' + Date.now(),
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true
  },
  {
    id: '2',
    name: 'Military Branch Cap',
    description: 'Adjustable cap with embroidered military branch insignias. Show your service pride.',
    price: 21.99,
    image: 'https://placehold.co/400x300/navy/white?text=Military+Cap&v=' + Date.now(),
    category: 'Hats',
    sizes: ['One Size']
  },
  {
    id: '3',
    name: 'Patriotic Hoodie',
    description: 'Stay warm while showing your support with this comfortable patriotic hoodie.',
    price: 39.99,
    image: 'https://placehold.co/400x300/navy/white?text=Patriotic+Hoodie&v=' + Date.now(),
    category: 'Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Memorial Day Coffee Mug',
    description: 'Ceramic mug commemorating veterans\'s service and sacrifice.',
    price: 18.99,
    image: 'https://placehold.co/400x300/navy/white?text=Memorial+Mug&v=' + Date.now(),
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'Veterans Support Bracelet',
    description: 'Handcrafted bracelet with proceeds supporting veteran programs.',
    price: 12.50,
    image: 'https://placehold.co/400x300/navy/white?text=Support+Bracelet&v=' + Date.now(),
    category: 'Accessories'
  },
  {
    id: '6',
    name: 'American Flag Polo Shirt',
    description: 'Stylish polo shirt with subtle American flag design. Perfect for casual patriotic wear.',
    price: 32.99,
    image: 'https://placehold.co/400x300/navy/white?text=Flag+Polo&v=' + Date.now(),
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '7',
    name: 'Military Service Decal',
    description: 'Durable vinyl decal featuring military branch emblems for your car or home.',
    price: 8.99,
    image: 'https://placehold.co/400x300/navy/white?text=Service+Decal&v=' + Date.now(),
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Veteran Pride Long Sleeve Tee',
    description: 'Comfortable long sleeve t-shirt perfect for cooler weather.',
    price: 28.99,
    image: 'https://placehold.co/400x300/navy/white?text=Long+Sleeve+Tee&v=' + Date.now(),
    category: 'Shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];

export const categories = [
  'Shirts',
  'Hats',
  'Hoodies',
  'Accessories'
];

export const sizes = [
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'One Size'
];