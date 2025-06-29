import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { generateOrganizationSchema } from '@/lib/seo-utils';

const AboutPage: React.FC = () => {
  const seoData = {
    title: 'About Us - Veterans Services Ohio',
    description: 'Learn about Veterans Services Ohio, our mission, vision, and the team dedicated to supporting Ohio veterans.',
    openGraph: {
      image: 'https://veteransservicesohio.org/images/about-hero.jpg'
    }
  };

  const organizationSchema = generateOrganizationSchema();
  
  // Define placeholder content instead of using template literals
  const about_hero_description = "Dedicated to serving Ohio's veterans with comprehensive support services, resources, and community programs that honor their service and sacrifice.";
  const mission_statement = "To provide Ohio veterans with the support, resources, and advocacy they need to thrive in civilian life while honoring their service to our nation.";
  const vision_statement = "A future where every Ohio veteran has access to the care, opportunities, and community they deserve, enabling them to lead fulfilling lives after military service.";

  return (
    <MainLayout seo={seoData}>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Veterans Services Ohio</h1>
            <p className="text-xl mb-8">{about_hero_description}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg">{mission_statement}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg">{vision_statement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member placeholders */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-blue-700">Executive Director</p>
              <p className="mt-4">Veteran with 20+ years of service dedicated to supporting fellow veterans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-blue-700">Program Manager</p>
              <p className="mt-4">Specialized in veteran transition programs and community outreach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold">Robert Johnson</h3>
              <p className="text-blue-700">Veterans Advocate</p>
              <p className="mt-4">Former military officer focused on policy and legislative support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="prose max-w-none">
            <p>Founded in 2005, Veterans Services Ohio has grown from a small volunteer organization to a comprehensive support network serving thousands of veterans across the state. Our organization was born from the recognition that returning service members needed dedicated resources to successfully transition to civilian life.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
