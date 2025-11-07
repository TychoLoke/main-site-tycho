export const pageConfigs = {
  index: {
    slug: 'index',
    route: '/',
    file: 'index.html',
    meta: {
      title:
        'Elevate Your IT Mastery with Tycholoke.com | Expert-led Training, Speaking & Consultation | Tycho Loke, Trainer, Speaker, Consultant',
      description:
        "Dive into expert-led IT workshops, speaking events, and personalized consultations at Tycho Loke's platform. Elevate your mastery in Microsoft tech, cybersecurity, and strategic tech marketing",
      ogTitle: '',
      ogDescription:
        "Dive into expert-led IT workshops, speaking events, and personalized consultations at Tycho Loke's platform. Elevate your mastery in Microsoft tech, cybersecurity, and strategic tech marketing",
      keywords: 'microsoft technologies, dynamic speaking engagements, expert-led training workshops',
      ogUrl: '',
      twitterTitle:
        'Elevate Your IT Mastery with Tycholoke.com | Expert-led Training, Speaking & Consultation | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription:
        "Dive into expert-led IT workshops, speaking events, and personalized consultations at Tycho Loke's platform. Elevate your mastery in Microsoft tech, cybersecurity, and strategic tech marketing",
      canonicalPath: '/',
    },
  },
  about: {
    slug: 'about',
    route: '/about',
    file: 'about.html',
    meta: {
      title:
        'About Tycho Loke: Expert in Microsoft Technologies and IT Consulting | Tycho Loke, Trainer, Speaker, Consultant',
      description:
        "Meet Tycho Loke, a passionate IT consultant and speaker specializing in Microsoft technologies and tech sales. Discover how his expertise and dedication to empowerment through education can elevate your IT mastery. Learn more about Tycho's journey and services.",
      ogTitle: '',
      ogDescription:
        "Meet Tycho Loke, a passionate IT consultant and speaker specializing in Microsoft technologies and tech sales. Discover how his expertise and dedication to empowerment through education can elevate your IT mastery. Learn more about Tycho's journey and services.",
      keywords: 'tycho loke, it consultant, microsoft technologies',
      ogUrl: '',
      twitterTitle:
        'About Tycho Loke: Expert in Microsoft Technologies and IT Consulting | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription:
        "Meet Tycho Loke, a passionate IT consultant and speaker specializing in Microsoft technologies and tech sales. Discover how his expertise and dedication to empowerment through education can elevate your IT mastery. Learn more about Tycho's journey and services.",
      canonicalPath: '/about',
    },
  },
  contact: {
    slug: 'contact',
    route: '/contact',
    file: 'contact.html',
    meta: {
      title:
        'Contact Tycho Loke: Your IT Mastery Partner - Get In Touch Now | Tycho Loke, Trainer, Speaker, Consultant',
      description:
        "Ready to elevate your IT skills or transform your business with tech? Contact Tycho Loke today for expert guidance in Microsoft technologies, cloud solutions, and tech sales strategies. Let's connect and explore how we can achieve your goals together",
      ogTitle: '',
      ogDescription:
        "Ready to elevate your IT skills or transform your business with tech? Contact Tycho Loke today for expert guidance in Microsoft technologies, cloud solutions, and tech sales strategies. Let's connect and explore how we can achieve your goals together",
      keywords: 'elevate it skills, transform business with tech, contact tycho loke',
      ogUrl: '',
      twitterTitle:
        'Contact Tycho Loke: Your IT Mastery Partner - Get In Touch Now | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription:
        "Ready to elevate your IT skills or transform your business with tech? Contact Tycho Loke today for expert guidance in Microsoft technologies, cloud solutions, and tech sales strategies. Let's connect and explore how we can achieve your goals together",
      canonicalPath: '/contact',
    },
  },
  events: {
    slug: 'events',
    route: '/events',
    file: 'events.html',
    meta: {
      title: 'Events | Tycho Loke, Trainer, Speaker, Consultant',
      description: '',
      ogTitle: '',
      ogDescription: '',
      keywords: '',
      ogUrl: '',
      twitterTitle: 'Events | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription: '',
      canonicalPath: '/events',
    },
  },
  experiences: {
    slug: 'experiences',
    route: '/experiences',
    file: 'experiences.html',
    meta: {
      title: 'Experiences | Tycho Loke, Trainer, Speaker, Consultant',
      description: '',
      ogTitle: '',
      ogDescription: '',
      keywords: '',
      ogUrl: '',
      twitterTitle: 'Experiences | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription: '',
      canonicalPath: '/experiences',
    },
  },
  faq: {
    slug: 'faq',
    route: '/faq',
    file: 'faq.html',
    meta: {
      title: 'FAQ | Tycho Loke, Trainer, Speaker, Consultant',
      description: '',
      ogTitle: '',
      ogDescription: '',
      keywords: '',
      ogUrl: '',
      twitterTitle: 'FAQ | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription: '',
      canonicalPath: '/faq',
    },
  },
  portfolio: {
    slug: 'portfolio',
    route: '/portfolio',
    file: 'portfolio.html',
    meta: {
      title: 'Portfolio | Tycho Loke, Trainer, Speaker, Consultant',
      description: '',
      ogTitle: '',
      ogDescription: '',
      keywords: '',
      ogUrl: '',
      twitterTitle: 'Portfolio | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription: '',
      canonicalPath: '/portfolio',
    },
  },
  services: {
    slug: 'services',
    route: '/services',
    file: 'services.html',
    meta: {
      title:
        'Professional IT Services by Tycho Loke: Training, Speaking, Consultations | Tycho Loke, Trainer, Speaker, Consultant',
      description:
        "Explore Tycho Loke's IT services, including customized training workshops, engaging speaking engagements, and strategic consultations. Elevate your expertise in Microsoft technologies and tech sales with tailored support designed for your success.",
      ogTitle: '',
      ogDescription:
        "Explore Tycho Loke's IT services, including customized training workshops, engaging speaking engagements, and strategic consultations. Elevate your expertise in Microsoft technologies and tech sales with tailored support designed for your success.",
      keywords: 'strategic consultations, tech sales, engaging speaking engagements',
      ogUrl: '',
      twitterTitle:
        'Professional IT Services by Tycho Loke: Training, Speaking, Consultations | Tycho Loke, Trainer, Speaker, Consultant',
      twitterDescription:
        "Explore Tycho Loke's IT services, including customized training workshops, engaging speaking engagements, and strategic consultations. Elevate your expertise in Microsoft technologies and tech sales with tailored support designed for your success.",
      canonicalPath: '/services',
    },
  },
};

export const pageList = Object.values(pageConfigs);

export const routeMap = pageList.reduce((acc, config) => {
  acc[config.route] = config;
  acc[config.route.replace(/^\//, '')] = config;
  acc[config.file] = config;
  acc[config.file.replace(/\.html$/, '')] = config;
  acc[`/${config.file}`] = config;
  return acc;
}, {});

