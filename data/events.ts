export type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
};

export const EVENTS: EventItem[] = [
  {
    title: 'Copilot Kickstart Roadshow',
    date: 'Q1 2025',
    location: 'Amsterdam, Copenhagen, Berlin',
    description: 'A three-city activation helping organisations design secure Copilot pilots with change frameworks that stick.'
  },
  {
    title: 'Secure Collaboration Summit',
    date: 'May 2025',
    location: 'Utrecht & Virtual',
    description: 'A blended conference for CISOs and comms leaders combining threat modelling labs with executive storytelling clinics.'
  },
  {
    title: 'Women in Tech Storylab',
    date: 'July 2025',
    location: 'Hybrid – Rotterdam HQ',
    description: 'An invite-only mastermind elevating underrepresented voices with coaching on presentation craft, content, and confidence.'
  }
];
