import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types';

const BuildsPage: React.FC = () => {
  const seoData = {
    title: 'Builds - Veterans Services Ohio',
    description: 'Explore our building projects and initiatives to support Ohio veterans.',
    openGraph: {
      image: 'https://veteransservicesohio.org/images/builds-hero.jpg'
    }
  };

  // Define the missing variables
  const builds_hero_description = 'Supporting our veterans through construction and renovation projects that improve facilities and create opportunities for our community.';
  
  return (
    <MainLayout seo={seoData}>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Builds</h1>
            <p className="text-xl mb-8">{builds_hero_description}</p>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders */}
            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Veterans Community Center</CardTitle>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    In Progress
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>Renovation of the downtown facility to create a multi-purpose community space for veterans.</p>
                <p className="mt-4 text-sm text-gray-500">Started: January 2023</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Memorial Park Upgrades</CardTitle>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                    Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>Renovation of the Veterans Memorial Park with new monuments and accessibility improvements.</p>
                <p className="mt-4 text-sm text-gray-500">Completed: November 2022</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Transitional Housing Units</CardTitle>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                    Planned
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>Construction of 12 new transitional housing units for veterans in need of temporary accommodation.</p>
                <p className="mt-4 text-sm text-gray-500">Planned Start: March 2024</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">Join our building projects as a volunteer or contribute materials to help us create better spaces for our veterans. Every skill level is welcome!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Volunteer</Button>
            <Button size="lg" variant="outline">Donate Materials</Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BuildsPage;
