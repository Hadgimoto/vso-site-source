import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { BlogPost } from '@/types';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const seoData = {
    title: 'Blog - Veterans Services Ohio',
    description: 'Read the latest news, updates, and stories from Veterans Services Ohio.',
    openGraph: {
      image: 'https://veteransservicesohio.org/images/blog-hero.jpg'
    }
  };

  return (
    <MainLayout seo={seoData}>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl mb-8">Stay updated with the latest news, resources, and stories from Veterans Services Ohio.</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md flex-grow"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog post placeholders */}
            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Veterans Health Resources</CardTitle>
                <p className="text-sm text-gray-500">June 15, 2023 | John Smith</p>
              </CardHeader>
              <CardContent>
                <p>Learn about the latest health resources available to veterans in Ohio and how to access them.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Housing Support Program Updates</CardTitle>
                <p className="text-sm text-gray-500">May 22, 2023 | Jane Doe</p>
              </CardHeader>
              <CardContent>
                <p>New housing initiatives have been launched to support veterans in need across Ohio counties.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <CardTitle>Career Transition Success Stories</CardTitle>
                <p className="text-sm text-gray-500">April 10, 2023 | Mike Johnson</p>
              </CardHeader>
              <CardContent>
                <p>Read inspiring stories of veterans who successfully transitioned to civilian careers with our assistance.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Read More</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Pagination */}
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
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPage;