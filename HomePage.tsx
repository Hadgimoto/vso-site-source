import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroVideoCarousel from '@/components/home/HeroVideoCarousel';
import LogoCarousel from '@/components/home/LogoCarousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { generateOrganizationSchema } from '@/lib/seo-utils';

const HomePage: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', { email });
    setEmail('');
  };

  const seoData = {
    title: 'Veterans Services Ohio - Supporting Ohio Veterans',
    description: 'Veterans Services Ohio provides housing, career assistance, wellness care, and community programs for Ohio\'s veterans.',
    openGraph: {
      image: 'https://d64gsuwffb70l.cloudfront.net/6814267e73b04e46ea3a8eea_1746728750946_b272bb2b.jpeg'
    }
  };

  const organizationSchema = generateOrganizationSchema();

  return (
    <MainLayout seo={seoData}>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <div className="w-full">
        <HeroVideoCarousel />
        <LogoCarousel />

        <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl">Housing Support</CardTitle>
                </CardHeader>
                <CardContent className="py-3 sm:py-4">
                  <p className="text-sm sm:text-base leading-relaxed">Providing safe, affordable housing options and assistance for veterans in need.</p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl">Career Assistance</CardTitle>
                </CardHeader>
                <CardContent className="py-3 sm:py-4">
                  <p className="text-sm sm:text-base leading-relaxed">Job training, resume building, and employment connections for veterans.</p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl">Health & Wellness</CardTitle>
                </CardHeader>
                <CardContent className="py-3 sm:py-4">
                  <p className="text-sm sm:text-base leading-relaxed">Physical and mental health resources to support veteran wellbeing.</p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl">Community Programs</CardTitle>
                </CardHeader>
                <CardContent className="py-3 sm:py-4">
                  <p className="text-sm sm:text-base leading-relaxed">Events and activities that foster connection among veterans and their families.</p>
                </CardContent>
                <CardFooter className="pt-3 sm:pt-4">
                  <Button variant="outline" size="sm" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
                <p className="italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">"Veterans Services Ohio helped me find stable housing after years of struggle. Their support changed my life."</p>
                <p className="font-semibold text-sm sm:text-base">- John D., Army Veteran</p>
              </div>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
                <p className="italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">"The career assistance program connected me with employers who value my military experience. I'm now in a fulfilling job."</p>
                <p className="font-semibold text-sm sm:text-base">- Sarah M., Navy Veteran</p>
              </div>
              <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
                <p className="italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">"The wellness programs have been crucial for my recovery. I've found a community that understands what I've been through."</p>
                <p className="font-semibold text-sm sm:text-base">- Michael T., Marine Corps Veteran</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Stay Updated</h2>
            <p className="mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg">Subscribe to our newsletter to receive updates on our programs, events, and ways to get involved.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:max-w-md"
              />
              <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;