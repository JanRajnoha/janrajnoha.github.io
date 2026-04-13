export const projects = [
  {
    id: 1,
    title: 'Cloud Cash',
    image: '/img/portfolio/CloudCash.png',
    tags: ['POS System', '.NET', 'Azure'],
    description: [
      'Cloud Cash is a full-featured <strong>Point of Sale system</strong> originally built for Para Bellum Lounge and evolved into a complete management suite for any gastronomic establishment.',
      'Built on <strong>Windows App SDK</strong> and <strong>Blazor</strong>, backed by a <strong>.NET REST API</strong> and <strong>Azure SQL</strong>. Covers inventory, order processing, analytics, and multi-device support.',
      "This project also served as Jan's <strong>Master's Thesis</strong> at Brno University of Technology.",
    ],
    links: [
      { label: 'Website',          href: 'https://cloudcash.cz',  iconClass: 'fas fa-external-link-alt', variant: 'primary' },
      { label: "Master's Thesis",  href: '/docs/MT-JR.pdf',       iconClass: 'fas fa-file-pdf',          variant: 'outline-light' },
    ],
  },
  {
    id: 2,
    title: 'Para Bellum Lounge',
    image: '/img/portfolio/ParaBellum.png',
    tags: ['Website', 'HTML/CSS/JS'],
    description: [
      'Website for <strong>Para Bellum Lounge</strong>, a shisha bar in Brno co-founded by Jan Rajnoha in 2021.',
      "Built with pure <strong>HTML, CSS and JavaScript</strong> — clean, responsive, showcasing the bar's menu, gallery, and contact details.",
    ],
    links: [
      { label: 'Website', href: 'https://parabellumlounge.cz/', iconClass: 'fas fa-external-link-alt', variant: 'primary' },
    ],
  },
  {
    id: 3,
    title: 'ISUF',
    image: '/img/portfolio/ISUF.png',
    tags: ['Framework', 'UWP', 'Bachelor Thesis'],
    description: [
      "<strong>Information System Unification Framework</strong> — a UWP framework for building information system applications on Windows, developed as Jan's <strong>Bachelor's Thesis</strong>.",
      'The framework unifies common UI patterns for information systems: data management, navigation, and local storage. It grew from the architecture of The Daily Notes and generalises it into a reusable foundation.',
    ],
    links: [
      { label: 'GitHub',             href: 'https://github.com/JanRajnoha/ISUF', iconClass: 'fab fa-github',   variant: 'outline-light' },
      { label: "Bachelor's Thesis",  href: '/docs/BT-JR.pdf',                    iconClass: 'fas fa-file-pdf', variant: 'outline-light' },
    ],
  },
  {
    id: 4,
    title: 'The Daily Notes',
    image: '/img/portfolio/TDN_Logo.png',
    tags: ['Organizer App', 'UWP', 'Windows'],
    description: [
      'A modern <strong>Windows 10 / Mobile organizer app</strong> for activities, to-dos, notes, and personal productivity.',
      'Built on <strong>UWP</strong> with XML local storage, a beta distribution pipeline, and a modular plugin architecture. Originally targeting Windows Mobile, it evolved to leverage the Fluent Design System on desktop.',
      'The architectural patterns from TDN were later abstracted into the ISUF framework.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JanRajnoha/TheDailyNotes', iconClass: 'fab fa-github', variant: 'outline-light' },
    ],
  },
  {
    id: 5,
    title: 'Chatter',
    image: '/img/portfolio/Chatter.png',
    tags: ['Chat App', 'WPF', 'Azure SQL'],
    description: [
      '<strong>School project.</strong> A team communication app with organisation / group support, admin and user roles, and a clean interface inspired by Microsoft Teams.',
      'Built on <strong>WPF</strong> for Windows, with <strong>Azure SQL Server</strong> as the database backend.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JanRajnoha/Chatter', iconClass: 'fab fa-github', variant: 'outline-light' },
    ],
  },
  {
    id: 6,
    title: 'IVS Calculator',
    image: '/img/portfolio/IVSCalc.png',
    tags: ['Calculator', 'UWP', 'CI/CD'],
    description: [
      '<strong>School project</strong> focused on teamwork — version control, build pipelines, continuous integration, MS Teams notifications, and Kanban-style project management.',
      'The <strong>UWP</strong> calculator is split into app + library modules, with an update system and built-in help.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JanRajnoha/IVSCalc', iconClass: 'fab fa-github', variant: 'outline-light' },
    ],
  },
];
