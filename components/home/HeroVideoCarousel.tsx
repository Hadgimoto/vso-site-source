import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeroItem {
  type: 'video' | 'image';
  src: string;
  fallback?: string;
  title: string;
  description: string;
}

const heroItems: HeroItem[] = [
  {
    type: 'video',
    src: 'https://vlljavdgteoqvqkmdzvw.supabase.co/storage/v1/object/public/hero-videos//MajesticFLag_VillageHero.mp4',
    fallback: '/hero-image.jpeg',
    title: 'Supporting Our Veterans',
    description: 'Providing essential services and support to those who served our country'
  },
  {
    type: 'image',
    src: 'https://vlljavdgteoqvqkmdzvw.supabase.co/storage/v1/object/public/hero-videos//Coming_together%20hero.png',
    title: 'Coming Together',
    description: 'Building connections and fostering community among veterans'
  },
  {
    type: 'image',
    src: 'https://vlljavdgteoqvqkmdzvw.supabase.co/storage/v1/object/public/hero-videos//honoring_thoseserved.png',
    title: 'Honor & Service',
    description: 'Honoring those who served with dignity and respect'
  }
];

const HeroVideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? heroItems.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % heroItems.length;
    goToSlide(newIndex);
  };

  const handleDonateClick = () => {
    navigate('/donate');
  };

  const currentItem = heroItems[currentIndex];

  return (
    <section className="relative overflow-hidden w-full">
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          {currentItem.type === 'video' ? (
            <>
              <video
                key={currentItem.src}
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
                <source src={currentItem.src} type="video/mp4" />
              </video>
              {currentItem.fallback && (
                <img
                  src={currentItem.fallback}
                  alt="Hero background"
                  className="h-full w-full object-cover hidden"
                />
              )}
            </>
          ) : (
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl w-full">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-relaxed mb-3 sm:mb-4 lg:mb-6"
              style={{
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)'
              }}
            >
              {currentItem.title}
            </h1>
            <p 
              className="text-lg sm:text-xl leading-relaxed mt-6 opacity-90 max-w-2xl mx-auto"
              style={{
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              {currentItem.description}
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
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideoCarousel;