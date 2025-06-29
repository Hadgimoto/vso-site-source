import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { useShop } from '@/components/shop/ShopContext';
import CartDrawer from '@/components/shop/CartDrawer';
import ProductGrid from '@/components/shop/ProductGrid';
import FilterBar from '@/components/shop/FilterBar';
import ShopHero from '@/components/shop/ShopHero';
import { products, categories, sizes } from '@/data/shopData';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartOpen, setCartOpen] = useState(false);
  const { addToCart } = useShop();

  const handleAddToCart = (productId: string, size?: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }, size);
      setCartOpen(true);
    }
  };

  const handleFilterChange = (filters: {
    category?: string;
    size?: string;
    sort?: string;
    search?: string;
  }) => {
    let filtered = [...products];

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Apply size filter
    if (filters.size) {
      filtered = filtered.filter(p => p.sizes?.includes(filters.size || ''));
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply sorting
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'newest':
        default:
          // Assuming id represents order of addition
          filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  const seoData = {
    title: 'Shop - Veterans Services Ohio',
    description: 'Shop for merchandise and products that support Veterans Services Ohio programs.',
    openGraph: {
      image: 'https://veteransservicesohio.org/images/shop-hero.jpg'
    }
  };

  return (
    <MainLayout seo={seoData} onCartClick={() => setCartOpen(true)}>
      <ShopHero 
        title="Support Veterans—Shop with Purpose" 
        subtitle="Every purchase directly supports our mission to help veterans and their families."
      />

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar 
            categories={categories} 
            sizes={sizes} 
            onFilterChange={handleFilterChange} 
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid 
            products={filteredProducts} 
            onAddToCart={handleAddToCart} 
          />
          
          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-700 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          )}
        </div>
      </section>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
    </MainLayout>
  );
};

export default ShopPage;
