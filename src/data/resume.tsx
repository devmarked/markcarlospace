import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mark",
  initials: "DV",
  url: "https://markedcarlo.io",
  location: "Philippines",
  locationLink: "",
  description:
    "Problem Solver & Builder. I bring ideas to life through web development, automation, and project management—whether mini-apps, integrations, or full platforms. Passionate about coding, AI, and Web3. Always experimenting, always shipping.",
  summary:
    "I’m a web developer with a strong foundation in project management, automation, coding, research, and problem solving. I’ve built websites and workflow automations, from small, focused mini-apps to full platforms. I also have a background in management, giving me the ability to handle both the technical and organizational sides of projects.",
  avatarUrl: "/me.jpg",
  skills: {
    "Frontend": [
      "HTML/CSS/JS",
      "React",
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Shadcn",
    ],
    "Backend": [
      "Node.js",
      "Python",
      "PHP",
    ],
    "DB & Services": [
      "Supabase",
      "Firebase",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
    "CMS": [
      "WordPress",
      "Shopify",
      "Squarespace",
      "Framer",
      "Webflow"
    ],
    "Hosting & Infrastructure": [
      "DNS Management",
      "SSL",
      "Vercel",
      "Cloudflare",
      "AWS",
      "DigitalOcean",
      "VPS",
    ],
    "Automations": [
      "AI Integrations",
      "n8n",
      "Zapier",
      "AirTable",
      "Playwright",
    ],
    "Marketing": [
      "SEO",
      "Google Search Console, Analytics, Tag Manager",
      "Mailchimp",
    ],
    "Misc": [
      "Web3",
      "Wallet Automation",
      "Protocol Testing",
      "SEO",
      "Project Management",
      "UI/UX Design",
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "markedcarlo@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/devmarked/",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mclumbayan/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/markedcarlo",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@MarkDev-jw9zs",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:markedcarlo@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "FeedbackIQ",
      href: "https://feedbackiq-smart.vercel.app/",
      active: true,
      dates: "",
      description:
        "FeedbackIQ is a comprehensive survey platform designed specifically for businesses to create, distribute, and analyze customer feedback with AI-powered insights. ",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://feedbackiq-smart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Video",
          href: "https://youtu.be/fkguwrMaDrM?si=Zp6Rzh8t_wl6dwJc",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/fiq.png",
      video:
        "",
    },
    {
      title: "Opoos",
      href: "https://opoos.vercel.app/",
      active: true,
      dates: "",
      description:
        "Opoos is a comprehensive internal tool designed specifically for sales teams and project managers to streamline the proposal and quotation workflow for website development projects.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "OpenAI",
        "n8n"
      ],
      links: [
        {
          type: "Website",
          href: "https://opoos.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Video",
          href: "https://youtu.be/fh0vuEF0EV0",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/op.png",
      video: "",
    },
    {
      title: "Candidate Screener",
      href: "#",
      active: true,
      dates: "",
      description:
        "Airtable Candidate Screener is an automated tool that allows you to screen candidates based on their skills and experience using AI.",
      technologies: [
        "Airtable",
        "N8N",
        "OpenAI",
      ],
      links: [
        {
          type: "Video",
          href: "https://youtu.be/8QOJFQM1_XM",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/n8n-hr.png",
      video: "",
    },
    {
      title: "Invoice Generator",
      href: "#",
      active: true,
      dates: "",
      description:
        "Invoice Generator is an automated tool that allows you to generate invoices for your clients.",
      technologies: [
        "Airtable",
        "N8N",
        "Invoice Generator API",
      ],
      links: [
        {
          type: "Video",
          href: "https://www.youtube.com/watch?v=Ol4oQZttpmw",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/invoice.png",
      video: "",
    },
    {
      title: "HomePro Website",
      href: "#",
      active: true,
      dates: "",
      description:
      "Developed a modern, high-performance website for HomePro, a professional repair company. Focused on clean design, fast load times, and seamless user experience using WordPress.",
      technologies: [
        "Wordpress",
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://homepro.markcarlo.space/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/homepro (2).png",
      video: "",
    },
    {
      title: "SolarPower Website",
      href: "#",
      active: true,
      dates: "",
      description:
        "Developed a modern, high-performance website for SolarPower, a solar energy provider. Focused on clean design, fast load times, and seamless user experience using WordPress.",
      technologies: [
        "Wordpress",
        ,
      ],
      links: [
        {
          type: "Website",
          href: "https://solarpower.markcarlo.space/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/solar.png",
      video: "",
    },
  ],
} as const;
