import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
  };

  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLImageElement;
              if (fallback) fallback.style.display = 'block';
            }}
          >
            <source src="https://vlljavdgteoqvqkmdzvw.supabase.co/storage/v1/object/public/hero-videos//MajesticFLag_VillageHero.mp4" type="video/mp4" />
          </video>
          <img
            src="/hero-image.jpeg"
            alt="Hero background"
            className="h-full w-full object-cover hidden"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl w-full">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-relaxed mb-3 sm:mb-4 lg:mb-6"
              style={{
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)'
              }}
            >
              Supporting Our Veterans
            </h1>
            <p 
              className="text-lg sm:text-xl leading-relaxed mt-6 opacity-90 max-w-2xl mx-auto"
              style={{
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              Providing essential services and support to those who served our country
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base mt-8"
              onClick={handleDonateClick}
            >
              DONATE NOW
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;