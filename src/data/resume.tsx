import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andrew Burda",
  initials: "AVB",
  url: "https://andrewburda.com",
  location: "San Diego, CA",
  locationLink: "https://www.google.com/maps/place/San+Diego,+CA",

  description: (
    <>
      Data Analyst @ GIA💎 | MSBA, UC San Diego. Currently building{" "}
      <a
        href="https://upcycledsupplyco.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Upcycled Supply Co
      </a>{" "}
      and shipping new projects soon.
    </>
  ),

  summary:
    "I'm a data analyst and product builder based in San Diego. At [GIA](https://www.gia.edu/), I use behavioral data and analytics to improve digital products across search and mobile. Outside of work, I build and launch things from the ground up, including [Upcycled Supply Co.](https://upcycledsupplyco.com/), a sustainable outdoor gear brand, and [STOA](/#projects), a tool inspired by a problem I experienced firsthand while selling at local markets. I recently completed my M.S. in Business Analytics at the Rady School of Management, where I focused on machine learning, experimentation, and consumer behavior.",
  avatarUrl: "/profile-image-5.png",
  skills: [
    "SQL",
    "Snowflake",
    "Amplitude",
    "A/B Testing",
    "Funnel Analysis",
    "KPI Design",
    "Python",
    "LLMs",
    "Prompt Engineering",
    "Product Strategy",
    "User Research",
    "No-Code",
    "Airtable",
    "Shopify",
    "Power BI",
    "Looker Studio",
    "Tableau",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aburda531@gmail.com",
    tel: "+13107490540",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rsm-aburda",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andrew-burda/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "Tableau",
        url: "https://public.tableau.com/app/profile/andrew.burda/vizzes",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aburda531@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Gemological Institute of America (GIA)",
      href: "https://www.gia.edu/",
      badges: [],
      location: "Carlsbad, CA",
      title: "Data Analyst, Product",
      logoUrl: "/gia-logo.svg",
      start: "May 2024",
      end: "Present",
      description:
        "- Led AI adoption workshop for 50+ stakeholders on practical LLM use cases across analytics, marketing, and education\n- Grew mobile app MAU by ~53% in 3 months and more than doubled app ratings through behavioral data analysis and targeted product improvements\n- Reduced inscription match time by ~85% by identifying performance bottlenecks and partnering with engineering on UI and workflow updates\n- Established cross-functional product analytics infrastructure using SQL, Snowflake, and Amplitude, standardizing KPI tracking across product, marketing, and operations",
    },
    {
      company: "Upcycled Supply Co",
      href: "https://upcycledsupplyco.com/",
      badges: [],
      location: "San Diego, CA",
      title: "Founder",
      logoUrl: "/upcycled-update-fav.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "- Secured retail placements at REI and Mesa Rim climbing gyms\n- Launched our crossbody bag line within the brand's first year\n- Fulfilled large-scale custom keychain orders for corporate and event clients\n- Built and managed end-to-end DTC operations across Shopify and Square-powered in-person channels",
    },
    {
      company: "STOA for Organizers",
      href: "https://www.stoamarkets.com/",
      badges: [],
      location: "Remote",
      title: "Product Builder",
      logoUrl: "/stoa-favicon.png",
      start: "Apr 2025",
      end: "Present",
      description:
        "- Building STOA for Organizers, a SaaS platform that replaces the Gmail/spreadsheet workflow for makers' market, craft fair, and farmers' market organizers\n- Organizers create a market, share a branded application link, and manage vendor applications through a dashboard with filtering, bulk actions, and one-click approval emails with deep-linked Venmo payment links\n- Analytics show vendor mix by category, booth size distribution, and estimated revenue in real time\n- Rebuilt from scratch in under 60 days: Next.js 15, TypeScript, MongoDB, Resend, NextAuth, Vercel. Live at stoamarkets.com",
    },
    {
      company: "Dune Labs Inc.",
      badges: [],
      href: "https://dunelabs.ai/",
      location: "Remote",
      title: "Data Analyst",
      logoUrl: "/dune labs logo.png",
      start: "Jan 2022",
      end: "Mar 2024",
      description:
        "Led data analysis and internal tool development initiatives, improving leak detection outcomes by 20% and increasing meter installer efficiency by 15%.",
    },
    {
      company: "California State Parks",
      href: "https://www.parks.ca.gov/",
      badges: [],
      location: "San Diego County, CA",
      title: "Ocean Lifeguard",
      logoUrl: "/cal state blue logo.png",
      start: "Jun 2018",
      end: "Present",
      description:
        "Seasonal ocean lifeguard responsible for water safety, emergency response, and public education across San Diego County beaches. Certified in AED, CPR, and open-water rescue.",
    },
  ],
  education: [
    {
      school: "UC San Diego, Rady School of Management",
      href: "https://rady.ucsd.edu/",
      degree: "Master of Science, Business Analytics (MSBA)",
      logoUrl: "/rady-final-fav.png",
      start: "2024",
      end: "2025",
      description: "- Coursework in machine learning, experimentation, customer analytics, and consumer behavior\n- Built and applied LLM workflows and predictive models to solve real-world business problems\n- Focused on connecting data and decision-making to product and brand strategy",
    },
    {
      school: "UC San Diego",
      href: "https://ucsd.edu/",
      degree: "Bachelor of Science, Cognitive Science, Human/Computer Interaction",
      logoUrl: "/ucsd-test-1.png",
      start: "2018",
      end: "2023",
      description: "- Focused on the intersection of human behavior, design, and technology\n- Studied UX research, cognitive systems, and how people interact with digital products\n- Built a foundation for thinking about product design and user-centered problem solving",
    },
  ],
  projects: [
    {
      title: "Upcycled Supply Co",
      href: "https://upcycledsupplyco.com/",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Upcycled Supply Co. is a sustainable outdoor gear brand transforming retired climbing rope into functional products. Now stocked at REI and Mesa Rim, with custom orders fulfilled for corporate clients and events.",
      technologies: [
        "Shopify",
        "Canva",
        "Brand Strategy",
        "Digital Marketing",
        "E-commerce Ops",
        "Sales Analytics",
        "Paid Acquisition",
        "AI Creative",
      ],
      links: [
        {
          type: "Website",
          href: "https://upcycledsupplyco.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Instagram",
          href: "https://www.instagram.com/upcycledsupplyco/",
          icon: <></>,
        },
      ],
      image: "/bag-image-with-rope.jpg",
      video: "",
    },
    {
      title: "STOA for Organizers",
      href: "https://www.stoamarkets.com/",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "STOA is a SaaS platform built for independent market organizers. Organizers create a market, share an application link, and manage vendor applications through a dashboard — approving, declining, and communicating with vendors via automated emails. Built with Next.js, MongoDB, and Resend. Live at [stoamarkets.com](https://www.stoamarkets.com/).",
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Resend",
        "NextAuth",
        "Vercel",
        "Product Strategy",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.stoamarkets.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Instagram",
          href: "https://www.instagram.com/stoamarkets/",
          icon: <></>,
        },
      ],
      image: "/stoa-organizers.png",
      video: "",
    },
    {
      title: "STOA Markets MVP",
      href: "https://stoamarkets.com",
      dates: "Sep 2025 - Dec 2025",
      active: false,
      description:
        "A two-sided marketplace for discovering and managing local pop-up markets. Built and launched an MVP in under 4 weeks using no-code tools and AI-assisted data structuring, reaching 224 active users through organic traffic before pausing to address the core marketplace liquidity constraint: organizer tooling.",
      technologies: [
        "Airtable",
        "Softr",
        "LLMs",
        "No-Code",
        "Product Strategy",
        "User Research",
        "Marketplace Design",
      ],
      links: [],
      image: "/stoa-card-title.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
