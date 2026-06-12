export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'UPay - Digital Wallet',
    desc: 'UPay redefines your wallet by consolidating QR payments, utility bill settlements, online purchases, and card transactions—conveniently unified in a single platform.',
    subdesc:
      'Built using SwiftUI and UIKit, uPay.al is designed for seamless performance and a smooth user experience across iOS devices.',
    href: 'https://apps.apple.com/us/app/upay-albania/id1518207112',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/upayLogo.png',
    logoStyle: {
      backgroundColor: '#f4f4f4',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'SwiftUI',
        path: '/assets/swiftUi.png',
      }
    ],
  },
  {
    title: 'Biznes UPay - Real-Time Business Dashboard',
    desc: 'Biznes uPay is a powerful web platform for businesses registered with uPay, offering real-time access to transactions, payments, and financial insights. Built to provide clarity and control, it enables businesses to track and manage finances effortlessly.',
subdesc: 'With Biznes uPay, companies can monitor operations in real time, review detailed transaction histories, and generate reports—through a secure, high-performance interface designed for speed and reliability.',
href: 'https://biznes.upay.al/',
texture: '/textures/project/project2.mp4',
logo: '/assets/upayLogo.png',
logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'c#',
        path: '/assets/Csharp_Logo.png',
      },
      {
        id: 2,
        name: 'Html',
        path: 'assets/HTML5_Badge_512.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.png',
      }
    ],
  },
  {
    title: 'Exoticjet – Luxury JetCar E-Commerce Platform',
    desc: 'Exoticjet is a high-end WordPress e-commerce site offering premium JetCar watercraft—vehicles blending the thrill of jet skiing with the luxury of exotic cars. Designed for effortless browsing and purchasing, it showcases customizable JetCar models with sleek visuals and seamless shopping.',
    subdesc: 'Built for performance and convenience, Exoticjet integrates responsive design, secure payment gateways, financing options, and streamlined product management—empowering customers to explore, customize, and buy their dream JetCar with confidence.',
    href: 'https://exoticjet.com/',
texture: '/textures/project/project3.mp4',
logo: '/assets/exoticjet.png',
logoStyle: {
      backgroundColor: '#f4f4f4',
      background: '#f4f4f4',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Wordpress',
        path: '/assets/wordpress.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/js.png',
      }
    ],
  },
  {
    title: 'Lavazza Blue Albania – Premium Coffee Experience',
    desc: 'Lavazza Blue Albania is the official website for Lavazza Blue products in Albania, showcasing a premium selection of coffee capsules, machines, and accessories tailored for the Albanian market.',
    subdesc:
      'A clean, visually rich platform designed to highlight the Lavazza Blue product range, brand story, and where-to-buy information—delivering an elegant and engaging experience for coffee enthusiasts.',
    href: 'https://lavazzablue.al/',
    texture: '/assets/lavazza-screenshot.png',
    logo: '/assets/Logo-Coffee-Trade-Lavazza-3-scaled-e1770470674250.png',
    logoStyle: {
      backgroundColor: '#f4f4f4',
      border: '0.2px solid #8B0000',
      boxShadow: '0px 0px 60px 0px #8B00004D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'WordPress',
        path: '/assets/wordpress.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
    ],
  },
  {
    title: 'SeekFake – Exposing Deepfakes and Misinformation with Machine Intelligence',
    desc: 'SeekFake is a startup building an intelligent fact-verification platform that detects deepfakes and verifies the authenticity of news articles, social media posts, and other online content. Leveraging advanced Natural Language Processing (NLP) and real-time data from trusted sources, it assesses the credibility of any claim or media snippet.',
    subdesc: 'As the Frontend Developer, I focused on crafting a fast, intuitive, and responsive interface that makes complex AI-driven verification results clear and accessible to users—helping combat the growing threat of manipulated media.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/fulllogo-w.jpeg',
    logoStyle: {
      backgroundColor: '#0000',
      border: '0.2px solid #f4f4f4',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: '/assets/js.png',
      }
    ],
  }
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.004 : isMobile ? 0.009 : 0.005,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5.5, -6, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [6, 4, 0] : isTablet ? [7, 3, 0] : [12, 3, -10],
    ringPosition: isSmall ? [-3, 2, 0] : isMobile ? [-3, 2, 0] : isTablet ? [-7, 1, 0] : [-8.7, 2.5, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Unioni Financiar Tiranë',
    pos: 'Software Developer',
    duration: '2022 - Present',
    title: "As a key contributor to the functionality and user experience of three financial administration websites built on the C# .NET framework, and an iOS application developed with SwiftUI and Swift, I ensure the seamless operation and continuous improvement of these platforms. My responsibilities include: Maintenance and Optimization: Ensuring the smooth operation of financial administration websites and the iOS application by promptly resolving any issues and implementing necessary updates. Collaboration: Working closely with cross-functional teams to deliver high-quality solutions that meet evolving business requirements. Continuous Improvement: Contributing to the enhancement of our digital platforms through proactive problem-solving and innovation. My role is pivotal in maintaining the performance, reliability, and user satisfaction of our digital financial solutions.",
    icon: '/assets/unioni_financiar_tirana_logo.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'WoW Digital',
    pos: 'React Developer',
    duration: '2022 - 2022',
    title: "In my role, I immersed myself in ReactJS, JavaScript, and HTML/CSS, applying these skills to advance web development projects. I focused on implementing and optimizing features to elevate the overall user experience.",
    icon: '/assets/wow.jpeg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Local Web',
    pos: 'Intership trainee',
    duration: '2021 - 2021',
    title: "During my internship, I cultivated proficiency in HTML/CSS, ReactJS, and PHP. I actively participated in various projects, applying these technologies to develop and enhance web solutions.",
    icon: '/assets/localwebit_logo.jpeg',
    animation: 'salute',
  },
];
