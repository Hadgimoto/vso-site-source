import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const seoData = {
    title: 'Services - Veterans Services Ohio',
    description: 'Explore the services offered by Veterans Services Ohio, including housing support, career assistance, health & wellness, and community programs.',
    openGraph: {
      image: 'https://veteransservicesohio.org/images/services-hero.jpg'
    }
  };

  // Define the missing text variables
  const services_hero_description = "We provide comprehensive support services designed to help veterans transition to civilian life, access benefits, and thrive in their communities.";
  const services_overview_description = "Our team of dedicated professionals works with veterans to address their unique needs and connect them with the resources they deserve.";
  const services_approach_description = "We take a holistic approach to veteran support, addressing immediate needs while building long-term stability and success.";
  const services_eligibility_description = "Our services are available to veterans of all branches, their spouses, and dependents. Eligibility requirements vary by program.";
  const services_get_started_description = "Contact our office to schedule an initial consultation. Our team will guide you through the application process and available services.";
  const services_cta_description = "Our team is ready to help you navigate available resources and find the support you need. Reach out today to get started.";
  
  // Success stories
  const success_story_1 = "The housing support program helped me find stable housing after struggling for years. I finally have a place to call home.";
  const success_story_name_1 = "James R., Army Veteran";
  
  const success_story_2 = "Through career assistance, I found a job that values my military experience and provides for my family.";
  const success_story_name_2 = "Maria T., Navy Veteran";
  
  const success_story_3 = "The wellness programs helped me address my PTSD and reconnect with my community. I'm grateful for the support.";
  const success_story_name_3 = "David L., Marine Corps Veteran";

  return (
    <MainLayout seo={seoData}>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">{services_hero_description}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help</h2>
              <p className="text-lg mb-4">{services_overview_description}</p>
              <p className="text-lg">{services_approach_description}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Eligibility</h3>
              <p className="mb-4">{services_eligibility_description}</p>
              <h3 className="text-xl font-bold mb-4">Get Started</h3>
              <p className="mb-6">{services_get_started_description}</p>
              <Button>Contact Us</Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">Our Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Housing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Providing safe, affordable housing options and assistance for veterans in need.</p>
              </CardContent>
              <CardFooter>
                <Link to="/services/housing-support" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Career Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Job training, resume building, and employment connections for veterans.</p>
              </CardContent>
              <CardFooter>
                <Link to="/services/career-assistance" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Physical and mental health resources to support veteran wellbeing.</p>
              </CardContent>
              <CardFooter>
                <Link to="/services/health-wellness" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Events and activities that foster connection among veterans and their families.</p>
              </CardContent>
              <CardFooter>
                <Link to="/services/community-programs" className="w-full">
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{success_story_1}"</p>
              <p className="font-semibold">- {success_story_name_1}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{success_story_2}"</p>
              <p className="font-semibold">- {success_story_name_2}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{success_story_3}"</p>
              <p className="font-semibold">- {success_story_name_3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{services_cta_description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              Apply for Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;