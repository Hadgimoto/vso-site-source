import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DonationContent from '@/components/donations/DonationPage';

const DonationPage: React.FC = () => {
  return (
    <MainLayout
      seo={{
        title: 'Donate - Veterans Services Ohio',
        description: 'Support our mission to help veterans in Ohio with your donation. Every contribution makes a difference in the lives of those who served.',
        openGraph: {
          title: 'Support Our Veterans - Donate Today',
          description: 'Your donation directly supports housing, healthcare, and community programs for veterans in need throughout Ohio.',
          image: '/hero-image.jpeg'
        }
      }}
    >
      <DonationContent />
    </MainLayout>
  );
};

export default DonationPage;
