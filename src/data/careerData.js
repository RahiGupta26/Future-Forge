export const careerData = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: '💻',
    tagline: 'Build the digital world, one line of code at a time',
    color: '#6C63FF',
    gradient: 'linear-gradient(135deg, #6C63FF, #3B82F6)',
    skills: [
      { name: 'JavaScript / TypeScript', level: 95, category: 'core' },
      { name: 'React / Angular / Vue', level: 90, category: 'core' },
      { name: 'Node.js / Python', level: 85, category: 'core' },
      { name: 'Data Structures & Algorithms', level: 90, category: 'fundamental' },
      { name: 'System Design', level: 80, category: 'advanced' },
      { name: 'Git & Version Control', level: 95, category: 'tools' },
      { name: 'SQL & NoSQL Databases', level: 85, category: 'core' },
      { name: 'CI/CD & DevOps Basics', level: 75, category: 'tools' },
      { name: 'Testing & Debugging', level: 85, category: 'fundamental' },
      { name: 'API Design (REST / GraphQL)', level: 88, category: 'core' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 600000, label: '₹6L' },
      { year: 'Year 2', salary: 1000000, label: '₹10L' },
      { year: 'Year 4', salary: 1800000, label: '₹18L' },
      { year: 'Year 6', salary: 2800000, label: '₹28L' },
      { year: 'Year 8', salary: 4000000, label: '₹40L' },
      { year: 'Year 10+', salary: 6000000, label: '₹60L+' }
    ],
    companies: [
      { name: 'Google', logo: '🔵', type: 'FAANG' },
      { name: 'Microsoft', logo: '🟦', type: 'FAANG' },
      { name: 'Amazon', logo: '🟠', type: 'FAANG' },
      { name: 'Flipkart', logo: '🟡', type: 'Indian Tech' },
      { name: 'Razorpay', logo: '🔷', type: 'Startup' },
      { name: 'Atlassian', logo: '🔹', type: 'Product' },
      { name: 'Adobe', logo: '🔴', type: 'Product' },
      { name: 'Stripe', logo: '🟣', type: 'Fintech' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Stand-up meeting with team', icon: '☕', duration: '15 min' },
      { time: '9:30 AM', activity: 'Code review & PR feedback', icon: '👀', duration: '1 hr' },
      { time: '10:30 AM', activity: 'Feature development — deep coding', icon: '💻', duration: '2.5 hrs' },
      { time: '1:00 PM', activity: 'Lunch break & recharge', icon: '🍱', duration: '1 hr' },
      { time: '2:00 PM', activity: 'Architecture discussion / Design doc', icon: '📝', duration: '1 hr' },
      { time: '3:00 PM', activity: 'Bug fixing & debugging', icon: '🐛', duration: '1.5 hrs' },
      { time: '4:30 PM', activity: 'Writing tests & documentation', icon: '✅', duration: '1 hr' },
      { time: '5:30 PM', activity: 'Learning / Side project / Open source', icon: '📚', duration: '1 hr' },
      { time: '6:30 PM', activity: 'Wrap-up & plan tomorrow', icon: '🌅', duration: '30 min' }
    ],
    projects: [
      { title: 'Personal Portfolio Website', description: 'Build a responsive portfolio showcasing your projects, skills, and blog posts.', difficulty: 'Beginner', tech: ['HTML', 'CSS', 'JavaScript', 'React'] },
      { title: 'E-Commerce Platform', description: 'Full-stack e-commerce app with cart, payments, and admin dashboard.', difficulty: 'Intermediate', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
      { title: 'Real-Time Chat Application', description: 'WebSocket-based chat with rooms, typing indicators, and media sharing.', difficulty: 'Intermediate', tech: ['React', 'Socket.io', 'Node.js', 'Redis'] },
      { title: 'Task Management System', description: 'Kanban-style project management tool with drag-and-drop, teams, and analytics.', difficulty: 'Advanced', tech: ['React', 'TypeScript', 'PostgreSQL', 'Docker'] },
      { title: 'Open Source Contribution', description: 'Contribute to a popular open-source project. Fix bugs, add features, write docs.', difficulty: 'Advanced', tech: ['Git', 'Any Language', 'GitHub Actions'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'Junior Developer', description: 'Learn fundamentals, build projects, get first job. Focus on one tech stack.' },
      { year: 'Year 2-3', milestone: 'Mid-Level Developer', description: 'Lead small features, mentor juniors, learn system design. First promotion.' },
      { year: 'Year 4-5', milestone: 'Senior Developer', description: 'Own major systems, drive technical decisions, lead projects end-to-end.' },
      { year: 'Year 6-8', milestone: 'Staff / Lead Engineer', description: 'Cross-team impact, architect solutions, influence tech strategy.' },
      { year: 'Year 10+', milestone: 'Principal / CTO Track', description: 'Company-wide technical leadership, industry recognition, shape engineering culture.' }
    ],
    interviewPrep: {
      questions: [
        'Explain the difference between var, let, and const in JavaScript.',
        'What is the virtual DOM and how does React use it?',
        'Design a URL shortener like bit.ly — walk through the system design.',
        'Implement a LRU Cache with O(1) get and put operations.',
        'What are SOLID principles? Give examples in your preferred language.',
        'Explain the event loop in JavaScript. How do promises work?',
        'How would you optimize a slow database query?',
        'Describe a challenging bug you fixed. What was your approach?'
      ],
      tips: [
        'Practice DSA daily on LeetCode — aim for 300+ problems',
        'Build 3-5 solid projects that demonstrate different skills',
        'Contribute to open source for real-world coding experience',
        'Mock interviews are essential — practice with peers weekly',
        'Learn system design fundamentals even as a junior developer',
        'Write clean, readable code during interviews — communicate your thought process'
      ],
      resources: [
        { name: 'LeetCode', url: 'https://leetcode.com', type: 'Practice' },
        { name: 'NeetCode Roadmap', url: 'https://neetcode.io', type: 'Roadmap' },
        { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', type: 'Learning' },
        { name: 'JavaScript.info', url: 'https://javascript.info', type: 'Reference' }
      ]
    },
    mentorAdvice: [
      { question: 'How do I start my career?', answer: 'Start by mastering one programming language deeply — I recommend JavaScript or Python. Build 3-5 solid projects, contribute to open source, and start applying. Your first job matters less than getting started. Learn on the job and stay curious!' },
      { question: 'What skills should I focus on?', answer: 'Focus on fundamentals first: Data Structures, Algorithms, and one full-stack technology. Then expand to System Design, Testing, and DevOps. Soft skills like communication and teamwork are equally important. Never stop learning!' },
      { question: 'How do I crack FAANG interviews?', answer: 'It typically takes 3-6 months of dedicated prep. Solve 300+ LeetCode problems (focus on patterns, not quantity). Master system design for senior roles. Do weekly mock interviews. Study behavioral questions with the STAR method. Consistency beats intensity.' },
      { question: 'What is the best tech stack to learn?', answer: 'For web development: React + Node.js + PostgreSQL is a powerful combo. But the best stack is the one you can build complete projects with. Focus on understanding concepts deeply rather than chasing every new framework.' },
      { question: 'How to handle imposter syndrome?', answer: 'Every developer feels this — even senior engineers at FAANG. Remember: you do not need to know everything. Focus on growth, not perfection. Keep a "wins journal" of things you have learned. Compare yourself to your past self, not to others.' }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: '📊',
    tagline: 'Turn raw data into powerful insights that drive decisions',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    skills: [
      { name: 'Python / R Programming', level: 95, category: 'core' },
      { name: 'Machine Learning', level: 90, category: 'core' },
      { name: 'Deep Learning (TensorFlow/PyTorch)', level: 80, category: 'advanced' },
      { name: 'Statistics & Probability', level: 92, category: 'fundamental' },
      { name: 'SQL & Data Wrangling', level: 88, category: 'core' },
      { name: 'Data Visualization (Matplotlib/Tableau)', level: 85, category: 'tools' },
      { name: 'NLP / Computer Vision', level: 75, category: 'advanced' },
      { name: 'Feature Engineering', level: 85, category: 'core' },
      { name: 'Big Data (Spark/Hadoop)', level: 70, category: 'tools' },
      { name: 'A/B Testing & Experimentation', level: 80, category: 'fundamental' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 700000, label: '₹7L' },
      { year: 'Year 2', salary: 1200000, label: '₹12L' },
      { year: 'Year 4', salary: 2200000, label: '₹22L' },
      { year: 'Year 6', salary: 3500000, label: '₹35L' },
      { year: 'Year 8', salary: 5000000, label: '₹50L' },
      { year: 'Year 10+', salary: 7500000, label: '₹75L+' }
    ],
    companies: [
      { name: 'Google AI', logo: '🧠', type: 'FAANG' },
      { name: 'Meta', logo: '🔵', type: 'FAANG' },
      { name: 'Netflix', logo: '🔴', type: 'FAANG' },
      { name: 'Swiggy', logo: '🟠', type: 'Indian Tech' },
      { name: 'Tiger Analytics', logo: '🐯', type: 'Analytics' },
      { name: 'Fractal', logo: '🔷', type: 'Analytics' },
      { name: 'Mu Sigma', logo: '📐', type: 'Analytics' },
      { name: 'OpenAI', logo: '🤖', type: 'AI Research' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Check model performance metrics', icon: '📈', duration: '30 min' },
      { time: '9:30 AM', activity: 'Data exploration & cleaning', icon: '🧹', duration: '2 hrs' },
      { time: '11:30 AM', activity: 'Feature engineering & model training', icon: '⚙️', duration: '2 hrs' },
      { time: '1:30 PM', activity: 'Lunch break', icon: '🍱', duration: '1 hr' },
      { time: '2:30 PM', activity: 'Stakeholder meeting — present insights', icon: '📊', duration: '1 hr' },
      { time: '3:30 PM', activity: 'A/B test analysis & reporting', icon: '🔬', duration: '1.5 hrs' },
      { time: '5:00 PM', activity: 'Research papers & new techniques', icon: '📚', duration: '1 hr' },
      { time: '6:00 PM', activity: 'Documentation & code cleanup', icon: '📝', duration: '30 min' },
      { time: '6:30 PM', activity: 'Wrap-up & plan experiments', icon: '🌅', duration: '30 min' }
    ],
    projects: [
      { title: 'Exploratory Data Analysis Dashboard', description: 'Analyze and visualize a real-world dataset. Create interactive charts and derive insights.', difficulty: 'Beginner', tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'] },
      { title: 'Movie Recommendation System', description: 'Build a collaborative filtering recommendation engine using ML algorithms.', difficulty: 'Intermediate', tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'] },
      { title: 'Sentiment Analysis Pipeline', description: 'NLP pipeline that analyzes customer reviews and classifies sentiment in real-time.', difficulty: 'Intermediate', tech: ['Python', 'NLTK', 'TensorFlow', 'FastAPI'] },
      { title: 'Fraud Detection Model', description: 'Build a model to detect fraudulent transactions using imbalanced classification techniques.', difficulty: 'Advanced', tech: ['Python', 'XGBoost', 'SMOTE', 'MLflow'] },
      { title: 'End-to-End ML Pipeline', description: 'Production ML pipeline with data ingestion, training, deployment, and monitoring.', difficulty: 'Advanced', tech: ['Python', 'Docker', 'Airflow', 'AWS SageMaker'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'Junior Data Analyst', description: 'Master Python, SQL, and statistics. Build a strong portfolio of EDA projects.' },
      { year: 'Year 2-3', milestone: 'Data Scientist', description: 'Build ML models in production. Learn deep learning and experiment design.' },
      { year: 'Year 4-5', milestone: 'Senior Data Scientist', description: 'Lead ML projects, mentor team, influence product decisions with data.' },
      { year: 'Year 6-8', milestone: 'Lead / Principal DS', description: 'Define data strategy, build ML platforms, cross-org impact.' },
      { year: 'Year 10+', milestone: 'Head of Data Science / AI', description: 'Shape company AI vision, build and lead large data teams.' }
    ],
    interviewPrep: {
      questions: [
        'Explain the bias-variance tradeoff with an example.',
        'How do you handle missing data in a dataset?',
        'Explain the difference between L1 and L2 regularization.',
        'Design a recommendation system for an e-commerce platform.',
        'What evaluation metrics would you use for an imbalanced classification problem?',
        'Explain how gradient descent works. What are its variants?',
        'How would you design an A/B test for a new feature?',
        'What is the curse of dimensionality?'
      ],
      tips: [
        'Master statistics — it is the foundation of data science',
        'Build end-to-end projects, not just Jupyter notebooks',
        'Learn SQL deeply — most DS interviews include SQL rounds',
        'Practice explaining complex concepts simply',
        'Kaggle competitions are great for building practical skills',
        'Understand business context — data science is about solving problems'
      ],
      resources: [
        { name: 'Kaggle', url: 'https://kaggle.com', type: 'Practice' },
        { name: 'StatQuest YouTube', url: 'https://youtube.com/statquest', type: 'Learning' },
        { name: 'Fast.ai', url: 'https://fast.ai', type: 'Course' },
        { name: 'Towards Data Science', url: 'https://towardsdatascience.com', type: 'Blog' }
      ]
    },
    mentorAdvice: [
      { question: 'How do I start in data science?', answer: 'Start with Python and statistics. Take courses on Coursera or fast.ai. Build projects using real datasets from Kaggle. Focus on understanding the math behind algorithms, not just using libraries. A strong portfolio beats certifications.' },
      { question: 'Do I need a PhD?', answer: 'No! While a PhD helps for research roles, most industry data science positions value practical skills and project experience. A strong portfolio, Kaggle profile, and solid fundamentals will get you far. Focus on building things.' },
      { question: 'Python or R?', answer: 'Python is the industry standard and more versatile. Start with Python. R is great for statistical analysis and academic research, but Python ecosystem (pandas, scikit-learn, PyTorch) dominates industry. You can always learn R later.' },
      { question: 'How important is math?', answer: 'Very important for understanding, but you do not need a math degree. Focus on: Linear Algebra, Calculus (gradients), Probability & Statistics, and Optimization. Understanding the intuition behind algorithms is more important than proofs.' },
      { question: 'How to transition from another field?', answer: 'Many successful data scientists come from non-CS backgrounds. Leverage your domain expertise — a biologist who can code ML is more valuable than a generic DS in biotech. Start with online courses, build projects in your domain, and network.' }
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    icon: '🎨',
    tagline: 'Craft beautiful experiences that users love',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    skills: [
      { name: 'Figma / Sketch / Adobe XD', level: 95, category: 'core' },
      { name: 'User Research & Testing', level: 90, category: 'fundamental' },
      { name: 'Wireframing & Prototyping', level: 92, category: 'core' },
      { name: 'Visual Design & Typography', level: 88, category: 'core' },
      { name: 'Design Systems', level: 85, category: 'advanced' },
      { name: 'HTML / CSS / Basic JS', level: 75, category: 'tools' },
      { name: 'Interaction Design', level: 88, category: 'core' },
      { name: 'Accessibility (a11y)', level: 80, category: 'fundamental' },
      { name: 'Motion Design', level: 70, category: 'advanced' },
      { name: 'Information Architecture', level: 85, category: 'fundamental' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 500000, label: '₹5L' },
      { year: 'Year 2', salary: 900000, label: '₹9L' },
      { year: 'Year 4', salary: 1600000, label: '₹16L' },
      { year: 'Year 6', salary: 2500000, label: '₹25L' },
      { year: 'Year 8', salary: 3500000, label: '₹35L' },
      { year: 'Year 10+', salary: 5000000, label: '₹50L+' }
    ],
    companies: [
      { name: 'Apple', logo: '🍎', type: 'FAANG' },
      { name: 'Google', logo: '🔵', type: 'FAANG' },
      { name: 'Airbnb', logo: '🏠', type: 'Product' },
      { name: 'CRED', logo: '💳', type: 'Indian Startup' },
      { name: 'Swiggy', logo: '🟠', type: 'Indian Tech' },
      { name: 'Figma', logo: '🎨', type: 'Design Tool' },
      { name: 'Spotify', logo: '🟢', type: 'Product' },
      { name: 'Notion', logo: '📝', type: 'Product' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Review design feedback & comments', icon: '💬', duration: '30 min' },
      { time: '9:30 AM', activity: 'User research & interviews', icon: '🎙️', duration: '1.5 hrs' },
      { time: '11:00 AM', activity: 'Wireframing & ideation', icon: '✏️', duration: '2 hrs' },
      { time: '1:00 PM', activity: 'Lunch & design inspiration', icon: '🍱', duration: '1 hr' },
      { time: '2:00 PM', activity: 'High-fidelity design in Figma', icon: '🎨', duration: '2.5 hrs' },
      { time: '4:30 PM', activity: 'Design review with developers', icon: '👥', duration: '1 hr' },
      { time: '5:30 PM', activity: 'Usability testing & iteration', icon: '🔄', duration: '1 hr' },
      { time: '6:30 PM', activity: 'Portfolio & learning', icon: '📚', duration: '30 min' }
    ],
    projects: [
      { title: 'Mobile App Redesign', description: 'Redesign an existing app with improved UX. Include research, wireframes, and hi-fi mockups.', difficulty: 'Beginner', tech: ['Figma', 'User Research', 'Prototyping'] },
      { title: 'Design System', description: 'Create a comprehensive design system with components, tokens, and documentation.', difficulty: 'Intermediate', tech: ['Figma', 'Storybook', 'Documentation'] },
      { title: 'E-Commerce UX Case Study', description: 'End-to-end UX case study for an e-commerce platform with user testing results.', difficulty: 'Intermediate', tech: ['Figma', 'Maze', 'User Testing'] },
      { title: 'Dashboard Design', description: 'Design a complex analytics dashboard with data visualization and responsive layouts.', difficulty: 'Advanced', tech: ['Figma', 'Data Viz', 'Responsive Design'] },
      { title: 'Accessibility Audit & Redesign', description: 'Audit an existing product for accessibility issues and redesign to meet WCAG standards.', difficulty: 'Advanced', tech: ['Figma', 'WCAG', 'Screen Readers'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'Junior UI Designer', description: 'Master design tools, build portfolio, learn design principles. Land first design role.' },
      { year: 'Year 2-3', milestone: 'UX/UI Designer', description: 'Own end-to-end design projects, conduct user research, build design systems.' },
      { year: 'Year 4-5', milestone: 'Senior Designer', description: 'Lead design for a product area, mentor juniors, influence product strategy.' },
      { year: 'Year 6-8', milestone: 'Design Lead / Manager', description: 'Build and lead design team, define design culture, cross-functional leadership.' },
      { year: 'Year 10+', milestone: 'Head of Design / VP Design', description: 'Shape company design vision, build world-class design organization.' }
    ],
    interviewPrep: {
      questions: [
        'Walk us through your design process for a recent project.',
        'How do you handle disagreements with product managers or developers?',
        'Design a food delivery app for elderly users — talk through your approach.',
        'How do you measure the success of a design?',
        'What is your approach to accessibility in design?',
        'Describe a time you advocated for the user against business pressure.',
        'How do you prioritize design tasks with limited resources?',
        'Critique this existing app design and suggest improvements.'
      ],
      tips: [
        'Your portfolio is your resume — invest time in case studies',
        'Always explain your WHY — reasoning matters more than pixels',
        'Learn basic HTML/CSS — it earns developer trust and respect',
        'Practice whiteboard design challenges with a timer',
        'Stay updated with design trends but focus on timeless principles',
        'Network in the design community — attend meetups and conferences'
      ],
      resources: [
        { name: 'Dribbble', url: 'https://dribbble.com', type: 'Inspiration' },
        { name: 'Nielsen Norman Group', url: 'https://nngroup.com', type: 'Research' },
        { name: 'Figma Community', url: 'https://figma.com/community', type: 'Resources' },
        { name: 'Laws of UX', url: 'https://lawsofux.com', type: 'Learning' }
      ]
    },
    mentorAdvice: [
      { question: 'How do I build a portfolio?', answer: 'Quality over quantity — 3-5 strong case studies beat 20 dribbble shots. Each case study should show: problem, research, process, solution, and results. Include real projects, redesigns, or conceptual work. Show your thinking, not just final pixels.' },
      { question: 'Figma or Sketch?', answer: 'Figma, hands down. It is the industry standard, free for students, browser-based, and has the best collaboration features. Master Figma first: auto-layout, components, variants, prototyping. The tool matters less than your design thinking.' },
      { question: 'Do I need to code?', answer: 'You do not need to be a developer, but knowing HTML/CSS basics is a superpower. It helps you design feasible interfaces, communicate with developers, and understand constraints. Learning basic React is a bonus that sets you apart.' },
      { question: 'How important is user research?', answer: 'It is everything. Beautiful designs that do not solve user problems are art, not design. Learn to conduct user interviews, usability tests, and surveys. Data-informed design decisions are what separate good designers from great ones.' },
      { question: 'How to handle creative block?', answer: 'Step away from the screen. Browse Dribbble, Behance, or real-world design for inspiration. Talk to users — their pain points spark ideas. Try crazy 8s sketching. Remember: your first design is never your best. Iteration is the process.' }
    ]
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    icon: '☁️',
    tagline: 'Design and build the infrastructure that powers the internet',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
    skills: [
      { name: 'AWS / Azure / GCP', level: 95, category: 'core' },
      { name: 'Docker & Kubernetes', level: 90, category: 'core' },
      { name: 'Infrastructure as Code (Terraform)', level: 88, category: 'core' },
      { name: 'Networking & Security', level: 85, category: 'fundamental' },
      { name: 'CI/CD Pipelines', level: 90, category: 'core' },
      { name: 'Microservices Architecture', level: 85, category: 'advanced' },
      { name: 'Linux Administration', level: 88, category: 'fundamental' },
      { name: 'Monitoring & Observability', level: 82, category: 'tools' },
      { name: 'Cost Optimization', level: 78, category: 'advanced' },
      { name: 'Serverless Computing', level: 80, category: 'core' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 600000, label: '₹6L' },
      { year: 'Year 2', salary: 1200000, label: '₹12L' },
      { year: 'Year 4', salary: 2200000, label: '₹22L' },
      { year: 'Year 6', salary: 3500000, label: '₹35L' },
      { year: 'Year 8', salary: 5000000, label: '₹50L' },
      { year: 'Year 10+', salary: 7000000, label: '₹70L+' }
    ],
    companies: [
      { name: 'AWS', logo: '☁️', type: 'Cloud Provider' },
      { name: 'Microsoft Azure', logo: '🟦', type: 'Cloud Provider' },
      { name: 'Google Cloud', logo: '🔵', type: 'Cloud Provider' },
      { name: 'Infosys', logo: '🔷', type: 'Consulting' },
      { name: 'HashiCorp', logo: '⬛', type: 'DevOps' },
      { name: 'Red Hat', logo: '🔴', type: 'Enterprise' },
      { name: 'Datadog', logo: '🐕', type: 'Monitoring' },
      { name: 'Snowflake', logo: '❄️', type: 'Data Cloud' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Check infrastructure alerts & dashboards', icon: '🔔', duration: '30 min' },
      { time: '9:30 AM', activity: 'Architecture review meeting', icon: '📐', duration: '1 hr' },
      { time: '10:30 AM', activity: 'Write Infrastructure as Code (Terraform)', icon: '📝', duration: '2 hrs' },
      { time: '12:30 PM', activity: 'Lunch break', icon: '🍱', duration: '1 hr' },
      { time: '1:30 PM', activity: 'Security audit & compliance check', icon: '🔒', duration: '1.5 hrs' },
      { time: '3:00 PM', activity: 'CI/CD pipeline optimization', icon: '🔄', duration: '1.5 hrs' },
      { time: '4:30 PM', activity: 'Cost analysis & optimization', icon: '💰', duration: '1 hr' },
      { time: '5:30 PM', activity: 'Team mentoring & knowledge sharing', icon: '👨🏫', duration: '1 hr' },
      { time: '6:30 PM', activity: 'Cloud certification study', icon: '📚', duration: '30 min' }
    ],
    projects: [
      { title: 'Deploy a Static Website on AWS S3', description: 'Host a static website using S3, CloudFront, and Route 53 with CI/CD.', difficulty: 'Beginner', tech: ['AWS S3', 'CloudFront', 'GitHub Actions'] },
      { title: 'Containerized Microservices', description: 'Deploy a multi-service application on Kubernetes with auto-scaling and monitoring.', difficulty: 'Intermediate', tech: ['Docker', 'Kubernetes', 'Helm', 'Prometheus'] },
      { title: 'Serverless API Backend', description: 'Build a fully serverless REST API using Lambda, API Gateway, and DynamoDB.', difficulty: 'Intermediate', tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SAM'] },
      { title: 'Multi-Cloud Infrastructure', description: 'Design and deploy infrastructure across multiple cloud providers using Terraform.', difficulty: 'Advanced', tech: ['Terraform', 'AWS', 'GCP', 'Ansible'] },
      { title: 'Disaster Recovery Architecture', description: 'Design and implement a multi-region disaster recovery solution with automated failover.', difficulty: 'Advanced', tech: ['AWS', 'Route53', 'RDS', 'CloudFormation'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'Cloud Engineer / DevOps', description: 'Learn Linux, networking, one cloud platform. Get AWS/Azure certified.' },
      { year: 'Year 2-3', milestone: 'Senior Cloud Engineer', description: 'Master IaC, Kubernetes, CI/CD. Design scalable architectures.' },
      { year: 'Year 4-5', milestone: 'Cloud Architect', description: 'Lead cloud migration projects, define architecture standards, multi-cloud expertise.' },
      { year: 'Year 6-8', milestone: 'Principal Architect', description: 'Enterprise-wide cloud strategy, build cloud centers of excellence.' },
      { year: 'Year 10+', milestone: 'VP Infrastructure / CTO', description: 'Define technology vision, lead massive-scale infrastructure organizations.' }
    ],
    interviewPrep: {
      questions: [
        'Design a highly available web application architecture on AWS.',
        'How do you handle secrets management in cloud environments?',
        'Explain the difference between vertical and horizontal scaling.',
        'How would you migrate a monolithic application to microservices?',
        'Design a CI/CD pipeline for a large development team.',
        'How do you optimize cloud costs without sacrificing performance?',
        'Explain the CAP theorem and its implications for distributed systems.',
        'How do you ensure security in a multi-tenant cloud environment?'
      ],
      tips: [
        'Get certified — AWS Solutions Architect is the gold standard',
        'Build real projects on cloud platforms using free tier',
        'Learn Terraform deeply — it is used everywhere',
        'Understand networking fundamentals — VPC, subnets, DNS',
        'Practice drawing architecture diagrams for every system you use',
        'Cost optimization skills are highly valued and often tested'
      ],
      resources: [
        { name: 'AWS Free Tier', url: 'https://aws.amazon.com/free', type: 'Practice' },
        { name: 'Cloud Resume Challenge', url: 'https://cloudresumechallenge.dev', type: 'Project' },
        { name: 'Terraform Docs', url: 'https://terraform.io', type: 'Reference' },
        { name: 'A Cloud Guru', url: 'https://acloudguru.com', type: 'Learning' }
      ]
    },
    mentorAdvice: [
      { question: 'AWS, Azure, or GCP?', answer: 'Start with AWS — it has the largest market share and most job openings. Once you master one platform, concepts transfer easily. AWS Solutions Architect certification is the most recognized. But do not ignore multi-cloud skills long-term.' },
      { question: 'How important are certifications?', answer: 'Very important for cloud roles, especially early career. They validate your knowledge and open doors. Start with AWS Cloud Practitioner, then Solutions Architect Associate. Each certification typically leads to a 10-20% salary bump.' },
      { question: 'DevOps or Cloud Architecture?', answer: 'They overlap heavily. Start with DevOps (CI/CD, containers, automation) and naturally grow into architecture. DevOps gives you hands-on skills, while architecture adds the strategic thinking. Both paths lead to high-paying senior roles.' },
      { question: 'How do I practice without spending money?', answer: 'Use AWS Free Tier, GCP always-free products, and Azure free account. LocalStack simulates AWS locally. Minikube runs Kubernetes on your laptop. The Cloud Resume Challenge is a free, structured project. Many labs on A Cloud Guru are included.' },
      { question: 'Is cloud just a trend?', answer: 'Absolutely not. Cloud is the foundation of modern tech. Every company is either on the cloud or migrating. Gartner predicts cloud spending will exceed $1 trillion by 2027. Cloud architects are among the highest-paid tech roles globally.' }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    icon: '🔒',
    tagline: 'Protect the digital world from threats and vulnerabilities',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    skills: [
      { name: 'Network Security', level: 92, category: 'core' },
      { name: 'Penetration Testing', level: 88, category: 'core' },
      { name: 'SIEM & Threat Detection', level: 85, category: 'core' },
      { name: 'Cryptography', level: 80, category: 'fundamental' },
      { name: 'Python / Bash Scripting', level: 82, category: 'tools' },
      { name: 'Incident Response', level: 88, category: 'core' },
      { name: 'Vulnerability Assessment', level: 90, category: 'core' },
      { name: 'Cloud Security', level: 78, category: 'advanced' },
      { name: 'Forensics & Malware Analysis', level: 75, category: 'advanced' },
      { name: 'Compliance (ISO 27001/GDPR)', level: 80, category: 'fundamental' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 500000, label: '₹5L' },
      { year: 'Year 2', salary: 900000, label: '₹9L' },
      { year: 'Year 4', salary: 1800000, label: '₹18L' },
      { year: 'Year 6', salary: 3000000, label: '₹30L' },
      { year: 'Year 8', salary: 4500000, label: '₹45L' },
      { year: 'Year 10+', salary: 7000000, label: '₹70L+' }
    ],
    companies: [
      { name: 'CrowdStrike', logo: '🦅', type: 'Security' },
      { name: 'Palo Alto Networks', logo: '🛡️', type: 'Security' },
      { name: 'Google Security', logo: '🔵', type: 'FAANG' },
      { name: 'Deloitte Cyber', logo: '🔷', type: 'Consulting' },
      { name: 'FireEye', logo: '🔥', type: 'Security' },
      { name: 'Cisco', logo: '🌐', type: 'Networking' },
      { name: 'IBM Security', logo: '🔹', type: 'Enterprise' },
      { name: 'Quick Heal', logo: '🏥', type: 'Indian Security' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Review overnight security alerts', icon: '🚨', duration: '1 hr' },
      { time: '10:00 AM', activity: 'Vulnerability scanning & assessment', icon: '🔍', duration: '2 hrs' },
      { time: '12:00 PM', activity: 'Lunch break', icon: '🍱', duration: '1 hr' },
      { time: '1:00 PM', activity: 'Penetration testing', icon: '🎯', duration: '2 hrs' },
      { time: '3:00 PM', activity: 'Incident response & investigation', icon: '🕵️', duration: '1.5 hrs' },
      { time: '4:30 PM', activity: 'Security awareness training', icon: '📢', duration: '1 hr' },
      { time: '5:30 PM', activity: 'Report writing & documentation', icon: '📝', duration: '1 hr' },
      { time: '6:30 PM', activity: 'CTF practice & learning', icon: '🏴', duration: '30 min' }
    ],
    projects: [
      { title: 'Home Lab Security Setup', description: 'Build a home lab with virtual machines, firewalls, and intrusion detection systems.', difficulty: 'Beginner', tech: ['VirtualBox', 'pfSense', 'Snort', 'Kali Linux'] },
      { title: 'Web Application Pentesting', description: 'Find and exploit vulnerabilities in intentionally vulnerable web apps.', difficulty: 'Intermediate', tech: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'Kali'] },
      { title: 'SIEM Implementation', description: 'Set up a SIEM solution to collect, analyze, and alert on security events.', difficulty: 'Intermediate', tech: ['Splunk', 'ELK Stack', 'Suricata', 'Sigma'] },
      { title: 'Malware Analysis Lab', description: 'Analyze malware samples in a sandbox environment and write detailed reports.', difficulty: 'Advanced', tech: ['REMnux', 'IDA Pro', 'Ghidra', 'Wireshark'] },
      { title: 'Bug Bounty Program', description: 'Participate in bug bounty programs and find real vulnerabilities in production systems.', difficulty: 'Advanced', tech: ['Burp Suite', 'Recon Tools', 'Custom Scripts'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'SOC Analyst / Jr. Security', description: 'Learn networking, get CompTIA Security+, monitor security alerts.' },
      { year: 'Year 2-3', milestone: 'Security Analyst', description: 'Conduct vulnerability assessments, learn pentesting, get CEH/OSCP.' },
      { year: 'Year 4-5', milestone: 'Senior Security Engineer', description: 'Lead security projects, incident response, architecture reviews.' },
      { year: 'Year 6-8', milestone: 'Security Architect / Manager', description: 'Define security strategy, build security team, compliance leadership.' },
      { year: 'Year 10+', milestone: 'CISO', description: 'Chief Information Security Officer — enterprise-wide security leadership.' }
    ],
    interviewPrep: {
      questions: [
        'Explain the CIA triad with real-world examples.',
        'How would you respond to a ransomware attack?',
        'What is the difference between symmetric and asymmetric encryption?',
        'Explain SQL injection and how to prevent it.',
        'How do you perform a vulnerability assessment?',
        'What is the OWASP Top 10? Explain any three.',
        'Describe the incident response lifecycle.',
        'How do you secure a cloud environment?'
      ],
      tips: [
        'Get CompTIA Security+ as your first certification',
        'Practice on TryHackMe and HackTheBox regularly',
        'Learn networking deeply — it is the foundation of security',
        'Build a home lab for hands-on practice',
        'Follow security researchers on Twitter for latest threats',
        'Participate in CTF competitions to sharpen skills'
      ],
      resources: [
        { name: 'TryHackMe', url: 'https://tryhackme.com', type: 'Practice' },
        { name: 'HackTheBox', url: 'https://hackthebox.com', type: 'Practice' },
        { name: 'OWASP', url: 'https://owasp.org', type: 'Reference' },
        { name: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', type: 'Learning' }
      ]
    },
    mentorAdvice: [
      { question: 'Is cybersecurity hard to get into?', answer: 'It requires dedication but is very accessible. Start with networking basics (CompTIA Network+), then security fundamentals (Security+). Practice on TryHackMe and build a home lab. The field has a massive talent shortage — demand far exceeds supply.' },
      { question: 'Do I need a CS degree?', answer: 'No! Many successful security professionals are self-taught or come from IT backgrounds. Certifications (Security+, CEH, OSCP) often matter more than degrees. Hands-on skills and a portfolio of CTF achievements speak louder than diplomas.' },
      { question: 'Red team or blue team?', answer: 'Start with blue team (defense) — it builds your foundation in monitoring, detection, and incident response. Then explore red team (offense) for pentesting and exploitation. Purple team (both) is the most valuable combination. Try both and see what excites you.' },
      { question: 'Best certifications to get?', answer: 'Progression path: CompTIA Security+ → CEH → OSCP (gold standard for pentest) → CISSP (for leadership). Each opens different doors. Security+ for entry, OSCP for technical roles, CISSP for management. Get them in order.' },
      { question: 'How is the job market?', answer: 'Exceptional. There is a global shortage of 3.5 million cybersecurity professionals. Every company needs security. Salaries are above average and growing. Remote work is common. It is one of the most future-proof career paths in tech.' }
    ]
  },
  {
    id: 'mobile-developer',
    title: 'Mobile App Developer',
    icon: '📱',
    tagline: 'Build apps that live in millions of pockets worldwide',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    skills: [
      { name: 'React Native / Flutter', level: 90, category: 'core' },
      { name: 'iOS (Swift/SwiftUI)', level: 85, category: 'core' },
      { name: 'Android (Kotlin/Jetpack)', level: 85, category: 'core' },
      { name: 'Mobile UI/UX Design', level: 88, category: 'core' },
      { name: 'REST APIs & GraphQL', level: 85, category: 'core' },
      { name: 'State Management', level: 82, category: 'fundamental' },
      { name: 'Firebase / Backend Services', level: 80, category: 'tools' },
      { name: 'App Store Optimization', level: 72, category: 'advanced' },
      { name: 'Testing (Unit/UI/Integration)', level: 78, category: 'fundamental' },
      { name: 'Push Notifications & Analytics', level: 75, category: 'tools' }
    ],
    salaryGrowth: [
      { year: 'Fresher', salary: 550000, label: '₹5.5L' },
      { year: 'Year 2', salary: 1000000, label: '₹10L' },
      { year: 'Year 4', salary: 1800000, label: '₹18L' },
      { year: 'Year 6', salary: 2800000, label: '₹28L' },
      { year: 'Year 8', salary: 4000000, label: '₹40L' },
      { year: 'Year 10+', salary: 5500000, label: '₹55L+' }
    ],
    companies: [
      { name: 'Apple', logo: '🍎', type: 'FAANG' },
      { name: 'Google', logo: '🔵', type: 'FAANG' },
      { name: 'PhonePe', logo: '🟣', type: 'Indian Fintech' },
      { name: 'Zomato', logo: '🔴', type: 'Indian Tech' },
      { name: 'Dream11', logo: '🏏', type: 'Indian Startup' },
      { name: 'Uber', logo: '⬛', type: 'Mobility' },
      { name: 'Instagram', logo: '📸', type: 'Social' },
      { name: 'Paytm', logo: '🔵', type: 'Indian Fintech' }
    ],
    dailyRoutine: [
      { time: '9:00 AM', activity: 'Check crash reports & analytics', icon: '📊', duration: '30 min' },
      { time: '9:30 AM', activity: 'Sprint standup meeting', icon: '☕', duration: '15 min' },
      { time: '10:00 AM', activity: 'Feature development & coding', icon: '📱', duration: '2.5 hrs' },
      { time: '12:30 PM', activity: 'Lunch break', icon: '🍱', duration: '1 hr' },
      { time: '1:30 PM', activity: 'UI implementation & animations', icon: '🎨', duration: '2 hrs' },
      { time: '3:30 PM', activity: 'Code review & testing', icon: '🔍', duration: '1.5 hrs' },
      { time: '5:00 PM', activity: 'Bug fixing & optimization', icon: '🐛', duration: '1 hr' },
      { time: '6:00 PM', activity: 'App Store / Play Store updates', icon: '🚀', duration: '30 min' },
      { time: '6:30 PM', activity: 'Learning new frameworks & tools', icon: '📚', duration: '30 min' }
    ],
    projects: [
      { title: 'Todo App with Local Storage', description: 'Build a beautiful todo app with categories, reminders, and local persistence.', difficulty: 'Beginner', tech: ['React Native', 'AsyncStorage', 'Expo'] },
      { title: 'Weather App', description: 'Real-time weather app with location detection, forecasts, and beautiful animations.', difficulty: 'Beginner', tech: ['Flutter', 'Weather API', 'Geolocation'] },
      { title: 'Social Media App', description: 'Instagram-like app with feed, stories, chat, and real-time notifications.', difficulty: 'Intermediate', tech: ['React Native', 'Firebase', 'Cloud Messaging'] },
      { title: 'Fitness Tracking App', description: 'Track workouts, calories, and progress with charts and health integrations.', difficulty: 'Advanced', tech: ['Flutter', 'HealthKit', 'SQLite', 'Charts'] },
      { title: 'Cross-Platform E-Commerce', description: 'Full-featured e-commerce app with payments, cart, and admin panel for iOS and Android.', difficulty: 'Advanced', tech: ['React Native', 'Stripe', 'Node.js', 'MongoDB'] }
    ],
    timeline: [
      { year: 'Year 1', milestone: 'Junior Mobile Developer', description: 'Learn one framework (React Native or Flutter), build and publish first app.' },
      { year: 'Year 2-3', milestone: 'Mobile Developer', description: 'Build complex apps, learn native development, optimize performance.' },
      { year: 'Year 4-5', milestone: 'Senior Mobile Developer', description: 'Lead mobile team, architect app structure, mentor developers.' },
      { year: 'Year 6-8', milestone: 'Mobile Lead / Architect', description: 'Define mobile strategy, build frameworks, cross-platform decisions.' },
      { year: 'Year 10+', milestone: 'Director of Mobile / CTO', description: 'Lead engineering organization, product strategy, tech vision.' }
    ],
    interviewPrep: {
      questions: [
        'Explain the React Native bridge. How does it communicate with native code?',
        'What is the difference between StatefulWidget and StatelessWidget in Flutter?',
        'How do you handle state management in a large mobile app?',
        'Describe the mobile app lifecycle (iOS and Android).',
        'How do you optimize app performance and reduce battery usage?',
        'Explain push notification architecture.',
        'How do you handle offline-first app functionality?',
        'Design a ride-sharing app like Uber — explain the mobile architecture.'
      ],
      tips: [
        'Publish at least 2 apps on the App Store / Play Store',
        'Learn both React Native AND one native platform (Swift or Kotlin)',
        'Focus on smooth animations and 60fps — users notice janky apps',
        'Understand mobile-specific challenges: battery, network, storage',
        'Study Material Design and Human Interface Guidelines',
        'Build a GitHub portfolio with well-documented mobile projects'
      ],
      resources: [
        { name: 'React Native Docs', url: 'https://reactnative.dev', type: 'Reference' },
        { name: 'Flutter Docs', url: 'https://flutter.dev', type: 'Reference' },
        { name: 'Ray Wenderlich', url: 'https://kodeco.com', type: 'Tutorials' },
        { name: 'Mobile Dev Weekly', url: 'https://mobiledevweekly.com', type: 'Newsletter' }
      ]
    },
    mentorAdvice: [
      { question: 'React Native or Flutter?', answer: 'Both are excellent. React Native is great if you know JavaScript/React already — huge ecosystem and job market. Flutter offers better performance and beautiful UI out of the box with Dart. For jobs in India, React Native has more openings. Pick one and master it.' },
      { question: 'Should I learn native development?', answer: 'Eventually, yes. Understanding native platforms (Swift for iOS, Kotlin for Android) makes you a much stronger cross-platform developer. You will debug issues faster and unlock platform-specific features. Start cross-platform, then learn one native platform.' },
      { question: 'How to get my app noticed?', answer: 'App Store Optimization (ASO) is key: great screenshots, keywords, and descriptions. Get early reviews from friends and communities. Share on Product Hunt, Reddit, and Twitter. Build something that solves a real problem — word of mouth is the best marketing.' },
      { question: 'Freelance or full-time?', answer: 'Start full-time to build skills and learn from experienced teams. After 2-3 years, freelancing becomes very lucrative for mobile developers. Mobile apps are in high demand. You can also build your own apps and generate passive income through the app stores.' },
      { question: 'How competitive is the job market?', answer: 'Very favorable for mobile developers. Every company needs a mobile app. React Native and Flutter developers are especially in demand because companies want cross-platform solutions. Senior mobile developers are among the highest-paid in the industry.' }
    ]
  }
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'SDE II at Google',
    avatar: '👩💻',
    text: 'Future Forge helped me visualize my entire career path as a software engineer. The skills roadmap and interview prep were game-changers!'
  },
  {
    name: 'Rahul Verma',
    role: 'Data Scientist at Netflix',
    avatar: '👨🔬',
    text: 'I was confused between data science and software engineering. The simulator showed me exactly what each day looks like. Now I love my career!'
  },
  {
    name: 'Ananya Patel',
    role: 'UX Lead at CRED',
    avatar: '👩🎨',
    text: 'The career timeline feature gave me a clear 10-year plan. I could see the exact milestones I needed to hit. Incredibly motivating!'
  },
  {
    name: 'Vikram Singh',
    role: 'Cloud Architect at AWS',
    avatar: '👨💼',
    text: 'From certification paths to salary expectations, Future Forge had everything. It is like having a senior mentor in your pocket.'
  }
];
