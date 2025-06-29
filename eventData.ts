import { supabase } from '@/lib/supabase';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  time: string;
  category?: string;
  sponsored?: boolean;
  featured?: boolean;
}

// Function to fetch events from Supabase
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });
    
    if (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
    
    // Map the database column names to our interface properties
    return data?.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      date: item.event_date, // Map event_date from DB to date in our interface
      location: item.location,
      time: item.time,
      category: item.category,
      sponsored: item.sponsored,
      featured: item.featured
    })) || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    return sampleEvents; // Return sample data as fallback
  }
};

// CRUD operations for admin functionality
export const createEvent = async (event: Omit<Event, 'id'>): Promise<Event | null> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([{
        title: event.title,
        description: event.description,
        event_date: event.date,
        location: event.location,
        time: event.time,
        category: event.category,
        sponsored: event.sponsored,
        featured: event.featured
      }])
      .select();

    if (error) {
      console.error('Error creating event:', error);
      return null;
    }

    return data?.[0] as Event;
  } catch (error) {
    console.error('Error creating event:', error);
    return null;
  }
};

export const updateEvent = async (event: Event): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('events')
      .update({
        title: event.title,
        description: event.description,
        event_date: event.date,
        location: event.location,
        time: event.time,
        category: event.category,
        sponsored: event.sponsored,
        featured: event.featured
      })
      .eq('id', event.id);

    if (error) {
      console.error('Error updating event:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating event:', error);
    return false;
  }
};

export const deleteEvent = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting event:', error);
    return false;
  }
};

// Sample events data for initial development
export const sampleEvents: Event[] = [
  {
    id: 1,
    title: 'Veterans Job Fair',
    description: 'Connect with employers looking to hire veterans.',
    date: '2023-11-10',
    location: 'Columbus Convention Center',
    time: '10:00 AM - 3:00 PM',
    category: 'Community',
    sponsored: true,
    featured: true
  },
  {
    id: 2,
    title: 'PTSD Support Group',
    description: 'Weekly support group for veterans dealing with PTSD.',
    date: '2023-11-15',
    location: 'Veterans Memorial Hall',
    time: '6:00 PM - 7:30 PM',
    category: 'Health',
    sponsored: false,
    featured: false
  },
  {
    id: 3,
    title: 'Benefits Workshop',
    description: 'Learn about VA benefits and how to apply.',
    date: '2023-11-22',
    location: 'Online Webinar',
    time: '1:00 PM - 2:30 PM',
    category: 'Education',
    sponsored: false,
    featured: true
  },
  {
    id: 4,
    title: 'Veterans Day Parade',
    description: 'Annual parade honoring our veterans.',
    date: '2023-11-11',
    location: 'Downtown Columbus',
    time: '11:00 AM - 1:00 PM',
    category: 'Veterans',
    sponsored: true,
    featured: true
  },
  {
    id: 5,
    title: 'Housing Assistance Seminar',
    description: 'Information on housing programs for veterans.',
    date: '2023-12-05',
    location: 'Community Center',
    time: '5:30 PM - 7:00 PM',
    category: 'Education',
    sponsored: false,
    featured: false
  }
];
