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
      Building{" "}
      <a
        href="https://upcycledsupplyco.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Upcycled Supply Co
      </a>
      .{" "}
      <br />
      Data Analytics & Product Management @ GIA 💎
      <br />
      MSBA, UC San Diego
    </>
  ),

  summary:
    "I have a background in analytics and product management, with a focus on building products that solve real user problems and drive measurable growth.\n\nAt [GIA](https://www.gia.edu/), I work across web and mobile products, partnering with design and engineering to shape product strategy, prioritize roadmaps, and use analytics to improve user adoption and customer experience.\n\nOutside of work, I founded [Upcycled Supply Co](https://upcycledsupplyco.com/), a sustainable outdoor gear brand that has given me firsthand experience in product development, go-to-market strategy, growth marketing, and wholesale sales. I also built [STOA](https://www.stoamarkets.com/), a SaaS tool inspired by challenges I experienced while selling at local markets, taking it from idea to launch.\n\nI recently completed my M.S. in Business Analytics at [UC San Diego's Rady School of Management](https://rady.ucsd.edu/), with a focus on experimentation, machine learning, consumer behavior, and brand management.",
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
    "AI Enablement",
    "Product Strategy",
    "Product Roadmapping",
    "PRD Writing",
    "User Research",
    "No-Code",
    "Airtable",
    "Shopify",
    "Power BI",
    "Looker Studio",
    "Tableau",
    "Vendor Management",
    "Executive Communication",
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
      title: "Data Analyst, Product Management",
      logoUrl: "/gia-logo.svg",
      start: "May 2024",
      end: "Present",
      description:
        "- Own product strategy and roadmap for the GIA mobile app; launched a web-to-app conversion funnel that grew MAU ~53% in 3 months\n- Built the product analytics stack using SQL, connecting Amplitude, GA4, and Power BI into Snowflake via Boomi to standardize KPI tracking\n- Diagnosed the inscription-matching bottleneck and partnered with engineering to ship UI and backend improvements, cutting match time ~85%\n- Led product strategy and wrote the PRD to extend an existing web client platform onto mobile, working across design, engineering, and operations to deliver a streamlined mobile-first experience\n- Lead adoption of Claude and AI tooling across the product team: automated Amplitude reporting with AI agents, ran an LLM-based support-ticket analysis for large-scale pain-point discovery, and drove enablement through AI training for 50+ stakeholders",
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
        "- Built and scaled a multi-channel e-commerce brand across DTC, wholesale, and retail; sold 2,000+ units to date\n- Landed retail accounts, including REI, through direct outreach and a wholesale strategy\n- Ran Meta ad campaigns end to end (audience testing, creative iteration, budget allocation), using performance data to refine targeting and improve conversion\n- Grew Instagram following ~150% in 4 months through structured content testing, hook iteration, and creator collaborations\n- Tested product mix, pricing, and channel strategy against sales data to sharpen SKU focus and lift conversion",
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
      dates: "Apr 2026 - Jun 2026",
      active: false,
      description:
        "STOA is a SaaS platform built for independent market organizers. Organizers create a market, share an application link, and manage vendor applications through a dashboard: approving, declining, and communicating with vendors via automated emails. Built with Next.js, MongoDB, and Resend. Still live at [stoamarkets.com](https://www.stoamarkets.com/), though active development is currently paused.",
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
      image: "/v2-stoa-fallback.png",
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
