// Edit this file to customize the whole portfolio.
export const profile = {
  name: 'Zewde Bekele Biru',
  role: 'Full-Stack Web Developer',
  photo: '/images/zewde-profile.jpg',
  phone: '0991305516',
  email: 'zewdebekele314@gmail.com',
  telegram: '@MycorownB12',
  github: '#', // TODO: put your GitHub profile URL here
  bio: [
    "Hello! I'm Zewde Bekele Biru, a passionate fourth-year Software Engineering student at Mekelle University and a dedicated Full-Stack Web Developer.",
    'I love transforming ideas into modern, scalable, and user-friendly digital experiences.',
    'My technical journey includes frontend development, backend engineering, database technologies, data structures, and machine learning.',
    'I believe that learning never stops in technology. I continuously explore new technologies, develop new skills, and improve my programming abilities.',
    'My ambition is to become an exceptional software engineer who creates innovative solutions and impactful digital products.',
  ],
};

export const nav = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

// icon = name of a lucide-react icon registered in src/components/SkillCard.jsx
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'FileCode2' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'React', icon: 'Atom' },
      { name: 'Vite', icon: 'Zap' },
      { name: 'Next.js', icon: 'Globe' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', icon: 'Terminal' },
      { name: 'Node.js', icon: 'Server' },
      { name: 'Django', icon: 'Layers' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'Django ORM', icon: 'Table2' },
    ],
  },
  {
    category: 'Computer Science',
    items: [
      { name: 'Data Structures', icon: 'Network' },
      { name: 'Problem Solving', icon: 'Puzzle' },
      { name: 'Software Engineering', icon: 'Cog' },
    ],
  },
  {
    category: 'Artificial Intelligence',
    items: [{ name: 'Machine Learning', icon: 'Brain' }],
  },
];

export const filters = [
  'All Projects',
  'Frontend',
  'Full-Stack',
  'Backend',
  'AI / Machine Learning',
];

// SAMPLE PLACEHOLDERS: replace with your real projects. image: '/images/projects/x.jpg' (optional)
export const projects = [
  {
    title: 'Sample Project: Frontend',
    category: 'Frontend',
    description: 'Placeholder. Describe a real frontend project here.',
    tech: ['React', 'Vite', 'CSS3'],
    github: '#',
    demo: '#',
    image: '',
  },
  {
    title: 'Sample Project: Full-Stack',
    category: 'Full-Stack',
    description: 'Placeholder. Describe a real full-stack project here.',
    tech: ['React', 'Django', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: '',
  },
  {
    title: 'Sample Project: Backend',
    category: 'Backend',
    description: 'Placeholder. Describe a real backend project here.',
    tech: ['Node.js', 'Python'],
    github: '#',
    demo: '#',
    image: '',
  },
  {
    title: 'Sample Project: AI / ML',
    category: 'AI / Machine Learning',
    description: 'Placeholder. Describe a real machine learning project here.',
    tech: ['Python', 'Machine Learning'],
    github: '#',
    demo: '#',
    image: '',
  },
];

export const education = [
  {
    school: 'Mekelle University',
    degree: 'Software Engineering',
    status: 'Fourth-Year Student',
    place: 'Ethiopia',
  },
];

export const learning = [
  'React',
  'Next.js',
  'Django',
  'Node.js',
  'PostgreSQL',
  'Machine Learning',
  'Data Structures',
  'System Design',
];