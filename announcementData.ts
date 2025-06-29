// Sample announcement data for the scrolling billboard

export interface Announcement {
  id: number;
  text: string;
  active: boolean;
  priority: number;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    text: "This weekend: Veterans Memorial Parade in Columbus — Join Us!",
    active: true,
    priority: 1
  },
  {
    id: 2,
    text: "July 4th BBQ event sign-ups now open!",
    active: true,
    priority: 2
  },
  {
    id: 3,
    text: "We're 82% to our monthly housing goal — Thank you!",
    active: true,
    priority: 3
  },
  {
    id: 4,
    text: "Volunteer orientation this Thursday at 6PM - New volunteers welcome!",
    active: true,
    priority: 4
  },
  {
    id: 5,
    text: "Mental health resources available 24/7 - Call our support line at 1-800-555-VETS",
    active: true,
    priority: 5
  }
];
