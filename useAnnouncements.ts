import { useState, useEffect } from 'react';
import { Announcement, announcements as defaultAnnouncements } from '@/data/announcementData';
import { supabase } from '@/lib/supabase';

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(defaultAnnouncements);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        
        // Try to fetch from Supabase function
        const response = await fetch(
          'https://vlljavdgteoqvqkmdzvw.supabase.co/functions/v1/3d5828f6-ca53-43a5-a939-96cc3d7563d7',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch announcements');
        }

        const data = await response.json();
        
        if (data.announcements && Array.isArray(data.announcements)) {
          setAnnouncements(data.announcements);
        }
      } catch (err) {
        console.error('Error fetching announcements:', err);
        setError('Failed to load announcements');
        // Fallback to default announcements
        setAnnouncements(defaultAnnouncements);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return { announcements, loading, error };
};
