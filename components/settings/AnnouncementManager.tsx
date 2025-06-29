import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAnnouncements } from '@/hooks/useAnnouncements';
import { Announcement } from '@/data/announcementData';
import { supabase } from '@/lib/supabase';

const AnnouncementManager: React.FC = () => {
  const { announcements, loading, error } = useAnnouncements();
  const [localAnnouncements, setLocalAnnouncements] = useState<Announcement[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (announcements.length > 0 && !loading) {
      setLocalAnnouncements(announcements);
    }
  }, [announcements, loading]);

  const handleToggleActive = async (id: number, currentActive: boolean) => {
    try {
      const response = await fetch(
        'https://vlljavdgteoqvqkmdzvw.supabase.co/functions/v1/c8804bd6-d09c-4d61-af79-92294ee6b726',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabase.auth.getSession()}`
          },
          body: JSON.stringify({
            action: 'toggle',
            announcement: { id, active: !currentActive }
          })
        }
      );

      if (!response.ok) throw new Error('Failed to update announcement');

      // Update local state
      setLocalAnnouncements(prev => 
        prev.map(a => a.id === id ? { ...a, active: !currentActive } : a)
      );

      toast({
        title: 'Announcement updated',
        description: `Announcement ${!currentActive ? 'activated' : 'deactivated'} successfully.`,
      });
    } catch (err) {
      console.error('Error updating announcement:', err);
      toast({
        title: 'Error',
        description: 'Failed to update announcement status.',
        variant: 'destructive',
      });
    }
  };

  const handleAddAnnouncement = async () => {
    if (!newAnnouncement.trim()) return;

    try {
      const announcement = {
        text: newAnnouncement.trim(),
        active: true,
        priority: localAnnouncements.length + 1
      };

      const response = await fetch(
        'https://vlljavdgteoqvqkmdzvw.supabase.co/functions/v1/c8804bd6-d09c-4d61-af79-92294ee6b726',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabase.auth.getSession()}`
          },
          body: JSON.stringify({
            action: 'create',
            announcement
          })
        }
      );

      if (!response.ok) throw new Error('Failed to add announcement');
      const result = await response.json();

      // Add to local state
      setLocalAnnouncements(prev => [...prev, result.data[0]]);
      setNewAnnouncement('');

      toast({
        title: 'Announcement added',
        description: 'New announcement added successfully.',
      });
    } catch (err) {
      console.error('Error adding announcement:', err);
      toast({
        title: 'Error',
        description: 'Failed to add new announcement.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return <div className="p-4">Loading announcements...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading announcements: {error}</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Announcement Manager</CardTitle>
        <CardDescription>
          Manage the scrolling announcements displayed on your site.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Add a new announcement..."
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddAnnouncement}>Add</Button>
          </div>

          <div className="space-y-2">
            {localAnnouncements.map((announcement) => (
              <div 
                key={announcement.id} 
                className="flex items-center justify-between p-3 border rounded-md"
              >
                <div className="flex-1">
                  <p className={announcement.active ? 'text-foreground' : 'text-muted-foreground'}>
                    {announcement.text}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Switch
                    checked={announcement.active}
                    onCheckedChange={() => handleToggleActive(announcement.id, announcement.active)}
                    id={`switch-${announcement.id}`}
                  />
                  <Label htmlFor={`switch-${announcement.id}`}>
                    {announcement.active ? 'Active' : 'Inactive'}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          {localAnnouncements.filter(a => a.active).length} active announcements
        </p>
      </CardFooter>
    </Card>
  );
};

export default AnnouncementManager;
