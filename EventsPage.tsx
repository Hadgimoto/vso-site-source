import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { fetchEvents, sampleEvents, Event } from '@/data/eventData';
import FeaturedSponsors from '@/components/events/FeaturedSponsors';
import CalendarDisplay from '@/components/events/CalendarDisplay';

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedEvents = await fetchEvents();
        
        // If we have data from the API, use it; otherwise, fall back to sample data
        if (fetchedEvents.length > 0) {
          setEvents(fetchedEvents);
        }
      } catch (err) {
        console.error('Failed to load events:', err);
        setError('Failed to load events. Using sample data instead.');
        // Fallback to sample data on error
        setEvents(sampleEvents);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  const seo = {
    title: 'Veterans Events | Veterans Services Ohio',
    description: 'Upcoming events, workshops, and gatherings for veterans in Ohio.',
    canonical: window.location.href,
    openGraph: {
      title: 'Veterans Events in Ohio',
      description: 'Find and participate in events for veterans across Ohio.',
    },
  };

  return (
    <MainLayout seo={seo}>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-700">{error}</p>
            </div>
          )}

          <FeaturedSponsors />

          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Loading events...</p>
            </div>
          ) : (
            <CalendarDisplay events={events} />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default EventsPage;
