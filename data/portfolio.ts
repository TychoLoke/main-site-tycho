export type PortfolioItem = {
  title: string;
  client: string;
  description: string;
  impact: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'Global Copilot Pilot Launch',
    client: 'Fortune 200 Manufacturing Group',
    description:
      'Designed and delivered a 6-week enablement journey for 250 champions covering Copilot, Viva Insights, and secure automation.',
    impact: 'Champions delivered 300+ automation stories with a 92% confidence uplift in post-programme surveys.'
  },
  {
    title: 'Cyber Resilience Game Day',
    client: 'European Public Sector Collective',
    description:
      'Produced a cross-agency tabletop exercise blending executive decision labs with technical purple-team scenarios.',
    impact: 'Resulted in a refreshed incident playbook adopted by 12 agencies and a joint funding model for response tooling.'
  },
  {
    title: 'Keynote & Content Accelerator',
    client: 'Microsoft Inspire & Regional ISV partners',
    description:
      'Scripted and delivered an opening keynote and led speaker coaching for 18 partner sessions focused on AI go-to-market.',
    impact: 'Event satisfaction scores jumped 24 points and partners reported 3x pipeline velocity post-event.'
  }
];
