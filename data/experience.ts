export type ExperienceItem = {
  year: string;
  role: string;
  organisation: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: '2024',
    role: 'Founder & Principal Consultant',
    organisation: 'Tycholoke.com',
    highlights: [
      'Launched a boutique enablement studio delivering Microsoft 365 and Copilot adoption programmes across Europe and APAC',
      'Designed an evergreen curriculum for Microsoft Certified Trainer (MCT) communities'
    ]
  },
  {
    year: '2021 – 2023',
    role: 'Cloud Solutions Lead',
    organisation: 'Ingram Micro Cloud',
    highlights: [
      'Scaled partner enablement experiences for 5,000+ resellers',
      'Drove 40% YoY growth for Microsoft security workloads through immersive bootcamps'
    ]
  },
  {
    year: '2018 – 2021',
    role: 'Senior Technical Evangelist',
    organisation: 'Microsoft Netherlands',
    highlights: [
      'Hosted the flagship “Keep Secure” tour with 15,000 attendees',
      'Coached MVPs and community leaders on stage delivery and storytelling'
    ]
  }
];
