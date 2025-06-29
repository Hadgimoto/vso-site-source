import React from 'react';
import { Megaphone } from 'lucide-react';
import { useAnnouncements } from '@/hooks/useAnnouncements';

const AnnouncementTickerWithData: React.FC = () => {
  const { announcements, loading, error } = useAnnouncements();
  const [isPaused, setIsPaused] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Don't render if loading or error
  if (loading) return <AnnouncementPlaceholder />;
  if (error || announcements.length === 0) return null;

  React.useEffect(() => {
    if (!scrollRef.current) return;

    const scrollElement = scrollRef.current;
    let animationId: number;
    let position = 0;

    const scroll = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(scroll);
        return;
      }

      position -= 1;
      
      // Reset position when the entire content has scrolled
      if (Math.abs(position) >= scrollElement.scrollWidth / 2) {
        position = 0;
      }
      
      scrollElement.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, announcements]);

  return (
    <div 
      className="bg-[#112240] text-white h-10 overflow-hidden flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex-shrink-0 px-4 flex items-center border-r border-gray-600 h-full">
        <Megaphone size={18} className="mr-2" />
        <span className="text-xs font-bold tracking-wider">ANNOUNCEMENTS</span>
      </div>
      
      <div className="overflow-hidden relative flex-grow">
        <div 
          ref={scrollRef} 
          className="whitespace-nowrap inline-block"
          style={{ paddingLeft: '100%' }} // Start offscreen
        >
          {/* Duplicate announcements to create seamless loop */}
          {announcements.map((announcement) => (
            <span key={announcement.id} className="px-6 text-sm">
              {announcement.text}
            </span>
          ))}
          {announcements.map((announcement) => (
            <span key={`dup-${announcement.id}`} className="px-6 text-sm">
              {announcement.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple placeholder while loading
const AnnouncementPlaceholder: React.FC = () => (
  <div className="bg-[#112240] text-white h-10 flex items-center">
    <div className="flex-shrink-0 px-4 flex items-center border-r border-gray-600 h-full">
      <Megaphone size={18} className="mr-2" />
      <span className="text-xs font-bold tracking-wider">ANNOUNCEMENTS</span>
    </div>
    <div className="px-4">
      <div className="h-4 w-64 bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
);

export default AnnouncementTickerWithData;
