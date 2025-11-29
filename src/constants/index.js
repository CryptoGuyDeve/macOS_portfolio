const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "November 20, 2025",
    title:
      "Advancing Web Development: Expertise in React, Next.js, and TypeScript",
    summary:
      "Leveraging cutting-edge technologies—React for dynamic UIs, Next.js for optimized performance, and TypeScript for robust, scalable code—to build enterprise-grade web applications and innovative digital solutions.",
    image:
      "[Placeholder for a professional image representing modern web development]",
    link: "/blog/modern-web-stack-expertise",
  },
  {
    id: 2,
    date: "October 5, 2025",
    title: "Strategic Local Partnerships: Delivering Bespoke Digital Solutions",
    summary:
      "Successfully collaborated with local businesses to understand their unique challenges and deliver tailored digital products that enhance operational efficiency and market presence, fostering strong community ties.",
    image:
      "[Placeholder for a professional image depicting collaboration or local business]",
    link: "/blog/strategic-local-partnerships",
  },
  {
    id: 3,
    date: "August 15, 2025",
    title:
      "Open Source Contribution: Impactful Participation in Google Summer of Code",
    summary:
      "Contributed significantly to an open-source project through Google Summer of Code, demonstrating advanced problem-solving, collaborative development, and adherence to best practices in a global software engineering environment.",
    image:
      "[Placeholder for a professional image representing open source or coding collaboration]",
    link: "/blog/gsoc-impactful-contribution",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Host",
    items: ["Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/CryptoGuyDeve",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Faiz_Rrhman",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/faizu-rrehman-4856b4319/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Grouplyy",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "About Grouplyy.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Grouplyy is a modern social media platform designed for real-time sharing, conversations, and community engagement.",
            "Built with Next.js, Appwrite, and Tailwind CSS, Grouplyy delivers a fast, clean, and smooth user experience.",
            "Users can post threads, share thoughts, react to content, and chat with friends instantly using the built-in messaging system.",
            "The goal of Grouplyy is to create a minimal, distraction-free platform where people can connect without noise—simple, fast, and modern.",
          ],
        },
        {
          id: 2,
          name: "Grouplyy Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://www.grouplyy.xyz",
          position: "top-10 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Sward.lol",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Sward.lol Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Sward.lol is a clean, fast, and modern AI-powered profile website generator.",
            "It allows users to instantly create stylish, minimal, and professional personal sites with dynamic themes and smooth animations.",
            "The goal is to make personal branding effortless—just enter your info, and Sward.lol builds a fully responsive mini-website optimized for sharing.",
            "Built with Next.js, Tailwind CSS, and powerful UI components, Sward.lol offers a premium experience on all devices.",
          ],
        },
        {
          id: 2,
          name: "sward.lol",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sward.lol", // replace with your actual URL
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    // ▶ Project 3
    {
      id: 7,
      name: "TrustStartup",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "TrustStartup Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "TrustStartup is a modern startup listing platform where users can explore trusted startups along with real-time revenue data.",
            "It helps founders showcase their startups, gain exposure, and build credibility through transparent revenue insights.",
            "The UI is clean, minimal, and built for speed—using Next.js, Tailwind CSS, and smooth animations for a premium experience.",
            "TrustStartup simplifies the discovery of early-stage companies and gives users a clear view of startup growth and performance.",
          ],
        },
        {
          id: 2,
          name: "truststartup.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "", // replace with your actual domain if different
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/gal1.jpg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal1.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/gal2.jpg",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/gal3.jpg",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/gal1.jpg", // replace with your actual image
      description: [
        "Hey! I’m Faiz Ur Rehman 👋, a web and app developer from Lahore, Pakistan.",
        "With 3 years of experience, I specialize in JavaScript, React, React Native, and Next.js—building fast, clean, and modern digital products.",
        "I love creating smooth UI, meaningful UX, and scalable apps that feel premium, whether it’s a social media platform, SaaS tool, or full-stack startup project.",
        "When I’m not coding, you’ll probably find me designing UIs, experimenting with new tech, or working on one of my passion projects like Grouplyy, Sward.lol, or TrustStartup.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf (adding later)",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // href: "/your/resume/path.pdf", // adding later
    },
  ],
};


const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
