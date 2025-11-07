export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Do you tailor workshops for our existing Microsoft tenant and policies?',
    answer:
      'Absolutely. Every engagement starts with a discovery sprint where we review your governance, adoption telemetry, and personas so the labs, demos, and success measures feel native to your organisation.'
  },
  {
    question: 'Can we book Tycho to host or speak at our conference?',
    answer:
      'Yes. From MC-ing a multi-day summit to delivering a 25 minute keynote or moderating panels, we co-design formats that amplify your event goals and ensure accessible, inclusive delivery.'
  },
  {
    question: 'How do you measure impact after a training or keynote?',
    answer:
      'You receive a momentum kit with pulse survey templates, executive summaries, and recommended next actions. When requested we also co-author board-ready reports with adoption metrics and qualitative insights.'
  },
  {
    question: 'Do you work with partners and agencies?',
    answer:
      'Yes—we frequently embed with creative agencies, Microsoft partners, and ISVs to extend their delivery capacity. White-label options and joint GTM campaigns are available.'
  }
];
