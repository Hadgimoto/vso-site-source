import React from 'react';
import { housingProgramLogos } from '@/data/logoData';

const LogoCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-transparent overflow-hidden">
      <div className="w-full relative">
        <div className="flex animate-scroll-slow">
          {/* First set of logos */}
          {housingProgramLogos.map((logo) => (
            <div key={`first-${logo.id}`} className="flex-shrink-0 mx-8">
              <div className="flex items-center justify-center min-h-[150px] bg-[#F5F5F5] rounded-md shadow-sm w-[300px]">
                <div className="p-4 flex items-center justify-center w-full h-full">
                  <img 
                    src={logo.imageUrl} 
                    alt={logo.alt} 
                    className="w-auto h-auto max-h-[120px] max-w-[250px] object-contain transition-all duration-300 hover:opacity-90"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {housingProgramLogos.map((logo) => (
            <div key={`second-${logo.id}`} className="flex-shrink-0 mx-8">
              <div className="flex items-center justify-center min-h-[150px] bg-[#F5F5F5] rounded-md shadow-sm w-[300px]">
                <div className="p-4 flex items-center justify-center w-full h-full">
                  <img 
                    src={logo.imageUrl} 
                    alt={logo.alt} 
                    className="w-auto h-auto max-h-[120px] max-w-[250px] object-contain transition-all duration-300 hover:opacity-90"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;