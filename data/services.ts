export type Service = {
  title: string;
  summary: string;
  outcomes: string[];
};

export const SERVICES: Service[] = [
  {
    title: 'Modern Workplace & Microsoft 365 Mastery',
    summary:
      'Deep-dive enablement that helps teams adopt Microsoft 365, Copilot, and security tooling without the overwhelm.',
    outcomes: [
      'Role-based enablement plans for IT admins, champions, and executives',
      'Hands-on labs that mirror your tenant and governance guardrails',
      'Success scorecards and adoption dashboards built for leadership'
    ]
  },
  {
    title: 'Cybersecurity Awareness Intensives',
    summary:
      'High-energy simulations and workshops that translate threat intelligence into muscle memory for your organisation.',
    outcomes: [
      'Executive tabletop exercises anchored in real incidents',
      'Purple-team style labs with guided debrief and remediation playbooks',
      'Campaign materials your comms team can use immediately'
    ]
  },
  {
    title: 'Technical Storytelling & Keynotes',
    summary:
      'Keynotes, webinars, and MC engagements that connect technical strategy to business outcomes with clarity and energy.',
    outcomes: [
      'Narrative design support and slide doctoring sessions',
      'Audience journey mapping with interactive elements',
      'Post-event nurture kits to keep momentum strong'
    ]
  }
];
