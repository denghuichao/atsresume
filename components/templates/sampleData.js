// Sample data for template previews
const sampleData = {
  classic: {
    name: "SARAH JOHNSON",
    position: "Senior Software Engineer",
    contactInformation: "+1-415-555-0123",
    email: "sarah.johnson@email.com",
    address: "San Francisco, CA",
    profilePicture: "",
    profilePictureName: "",
    selectedTemplate: "classic",
    socialMedia: [
      {
        socialMedia: "LinkedIn",
        link: "linkedin.com/in/sarah-johnson",
        platform: "linkedin"
      },
      {
        socialMedia: "Github",
        link: "github.com/sarahjohnson",
        platform: "github"
      }
    ],
    summary: "Experienced software engineer with 7+ years developing scalable web applications. Passionate about clean code, system architecture, and team leadership.",
    education: [
      {
        "school": "University of California, Berkeley",
        "degree": "Master of Computer Science",
        "startYear": "2018-08-20",
        "endYear": "2020-05-15"
      }
    ],
    workExperience: [
      {
        "company": "Tech Innovations Inc",
        "position": "Senior Software Engineer",
        "description": "Leading development of cloud-native applications serving 2M+ users globally.",
        "keyAchievements": "Improved system performance by 40% through microservices architecture\nLed a team of 5 engineers in agile development practices\nReduced deployment time from 2 hours to 15 minutes using CI/CD",
        "startYear": "2021-03-01",
        "endYear": "Present"
      },
      {
        "company": "StartupXYZ",
        "position": "Full Stack Developer",
        "description": "Built responsive web applications using React, Node.js, and PostgreSQL.",
        "keyAchievements": "Developed 3 major features that increased user engagement by 60%\nImplemented automated testing resulting in 95% code coverage",
        "startYear": "2020-06-01",
        "endYear": "2021-02-28"
      }
    ],
    projects: [
      {
        "name": "E-commerce Platform",
        "description": "Full-stack e-commerce solution with payment integration and real-time inventory management.",
        "keyAchievements": "Built with React, Node.js, and MongoDB\nIntegrated Stripe payment processing\nImplemented real-time notifications using WebSocket",
        "link": "github.com/sarahjohnson/ecommerce-platform",
        "startYear": "2022-01-01",
        "endYear": "2022-03-01"
      },
      {
        "name": "Task Management API",
        "description": "RESTful API service for team collaboration and project management with real-time synchronization.",
        "keyAchievements": "Designed scalable microservices architecture\nImplemented JWT authentication and role-based access control\nAchieved 99.9% uptime with Docker containerization and Kubernetes",
        "link": "github.com/sarahjohnson/task-management-api",
        "startYear": "2021-09-01",
        "endYear": "2021-12-01"
      }
    ],
    skills: [
      {
        title: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "Go"]
      },
      {
        title: "Frontend Technologies",
        skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
      },
      {
        title: "Backend & Database",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"]
      }
    ],
    languages: ["English (Native)", "Spanish (Conversational)"],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional Developer"
    ]
  },

  modern: {
    name: "ALEX CHEN",
    position: "UX/UI Designer & Frontend Developer",
    contactInformation: "+1-650-555-0199",
    email: "alex.chen@design.com",
    address: "Palo Alto, CA",
    profilePicture: "",
    profilePictureName: "",
    selectedTemplate: "modern",
    socialMedia: [
      {
        socialMedia: "Portfolio",
        link: "alexchen.design",
        platform: "website"
      },
      {
        socialMedia: "Dribbble",
        link: "dribbble.com/alexchen",
        platform: "website"
      }
    ],
    summary: "Creative UX/UI designer with strong frontend development skills. Specialized in creating user-centered digital experiences that balance aesthetics with functionality.",
    education: [
      {
        "school": "Stanford University",
        "degree": "Bachelor of Design",
        "startYear": "2017-09-01",
        "endYear": "2021-06-15"
      }
    ],
    workExperience: [
      {
        "company": "Design Studio Pro",
        "position": "Senior UX/UI Designer",
        "description": "Leading design for B2B SaaS applications with focus on user research and data-driven design decisions.",
        "keyAchievements": "Increased user satisfaction scores by 35% through redesign initiatives\nConducted 50+ user interviews and usability tests\nCreated design system used across 8 product teams",
        "startYear": "2022-01-15",
        "endYear": "Present"
      },
      {
        "company": "Startup Labs",
        "position": "Product Designer",
        "description": "End-to-end product design from concept to implementation for mobile and web applications.",
        "keyAchievements": "Designed 3 award-winning mobile apps with 4.8+ App Store ratings\nImproved conversion rates by 45% through A/B testing",
        "startYear": "2021-07-01",
        "endYear": "2021-12-31"
      }
    ],
    projects: [
      {
        "name": "HealthTech Mobile App",
        "description": "iOS and Android app for healthcare professionals with complex data visualization.",
        "keyAchievements": "Designed intuitive interface for 200+ healthcare providers\nImplemented accessibility standards (WCAG 2.1 AA)\nPrototyped with Figma and tested with real users",
        "link": "alexchen.design/healthtech",
        "startYear": "2023-02-01",
        "endYear": "2023-05-01"
      },
      {
        "name": "Financial Dashboard",
        "description": "Web-based analytics dashboard for financial services with real-time data visualization.",
        "keyAchievements": "Built responsive design with React and D3.js\nOptimized for mobile and tablet viewing\nAchieved 99.9% uptime and fast loading speeds",
        "link": "alexchen.design/fintech-dashboard",
        "startYear": "2022-08-01",
        "endYear": "2022-11-01"
      }
    ],
    skills: [
      {
        title: "Design Tools",
        skills: ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "Framer"]
      },
      {
        title: "Frontend Development",
        skills: ["React", "TypeScript", "SCSS", "Tailwind CSS", "Next.js"]
      },
      {
        title: "UX Research",
        skills: ["User Interviews", "Usability Testing", "A/B Testing", "Analytics"]
      }
    ],
    languages: ["English (Native)", "Mandarin (Native)", "Japanese (Basic)"],
    certifications: [
      "Google UX Design Professional Certificate",
      "Nielsen Norman Group UX Certification"
    ]
  },

  creative: {
    name: "MAYA RODRIGUEZ",
    position: "Creative Director & Brand Strategist",
    contactInformation: "+1-323-555-0177",
    email: "maya@creativestudio.com",
    address: "Los Angeles, CA",
    profilePicture: "",
    profilePictureName: "",
    selectedTemplate: "creative",
    socialMedia: [
      {
        socialMedia: "Instagram",
        link: "instagram.com/mayacreates",
        platform: "instagram"
      },
      {
        socialMedia: "Portfolio",
        link: "mayarodriguez.studio",
        platform: "website"
      }
    ],
    summary: "Award-winning creative director with 10+ years experience in brand strategy, visual identity, and digital marketing campaigns for Fortune 500 companies.",
    education: [
      {
        "school": "Art Center College of Design",
        "degree": "Master of Fine Arts",
        "startYear": "2012-09-01",
        "endYear": "2014-05-15"
      }
    ],
    workExperience: [
      {
        "company": "Global Brand Agency",
        "position": "Creative Director",
        "description": "Leading creative strategy and execution for major brands including Nike, Apple, and Tesla.",
        "keyAchievements": "Managed creative teams of 15+ designers and strategists\nDelivered 25+ successful brand campaigns with average 150% ROI\nWon 8 industry awards including Cannes Lions and D&AD Pencils",
        "startYear": "2019-01-01",
        "endYear": "Present"
      },
      {
        "company": "Boutique Creative Studio",
        "position": "Senior Art Director",
        "description": "Conceptualized and executed integrated marketing campaigns for lifestyle and tech brands.",
        "keyAchievements": "Increased brand awareness by 200% for startup clients\nLed rebranding projects that resulted in 40% revenue growth",
        "startYear": "2016-03-01",
        "endYear": "2018-12-31"
      }
    ],
    projects: [
      {
        "name": "Sustainable Fashion Campaign",
        "description": "360-degree brand campaign promoting eco-friendly fashion for international retailer.",
        "keyAchievements": "Created visual identity and campaign strategy\nProduced content for digital, print, and outdoor advertising\nAchieved 5M+ social media impressions and 30% sales increase",
        "link": "mayarodriguez.studio/sustainable-fashion",
        "startYear": "2023-03-01",
        "endYear": "2023-07-01"
      },
      {
        "name": "Tech Startup Rebrand",
        "description": "Complete brand transformation for AI-powered fintech startup from concept to market launch.",
        "keyAchievements": "Designed logo, brand guidelines, and website interface\nCreated launch campaign across 5 digital platforms\nHelped secure $2M Series A funding through compelling brand presentation",
        "link": "mayarodriguez.studio/fintech-rebrand",
        "startYear": "2022-08-01",
        "endYear": "2023-01-01"
      }
    ],
    skills: [
      {
        title: "Creative Strategy",
        skills: ["Brand Strategy", "Creative Direction", "Campaign Development", "Storytelling"]
      },
      {
        title: "Design & Production",
        skills: ["Adobe Creative Suite", "Figma", "Cinema 4D", "After Effects", "Photography"]
      }
    ],
    languages: ["English (Native)", "Spanish (Native)", "French (Intermediate)"],
    certifications: [
      "Google Ads Creative Certification",
      "Facebook Blueprint Certification"
    ]
  },

  minimalist: {
    name: "DAVID KIM",
    position: "Product Manager",
    contactInformation: "+1-206-555-0165",
    email: "david.kim@productco.com",
    address: "Seattle, WA",
    profilePicture: "",
    profilePictureName: "",
    selectedTemplate: "minimalist",
    socialMedia: [
      {
        socialMedia: "LinkedIn",
        link: "linkedin.com/in/david-kim-pm",
        platform: "linkedin"
      }
    ],
    summary: "Product manager with 6+ years experience driving product strategy and execution for B2B SaaS platforms. Led cross-functional teams to deliver features used by 500K+ users.",
    education: [
      {
        "school": "Stanford University",
        "degree": "MBA, Product Management",
        "startYear": "2016-09-01",
        "endYear": "2018-05-15"
      }
    ],
    workExperience: [
      {
        "company": "TechFlow Solutions",
        "position": "Senior Product Manager",
        "description": "Lead product strategy for enterprise workflow automation platform.",
        "keyAchievements": "Launched 3 major product features that increased user engagement by 45%\nManaged product roadmap for $10M+ ARR product line\nCollaborated with engineering, design, and sales teams",
        "startYear": "2020-01-01",
        "endYear": "Present"
      }
    ],
    projects: [
      {
        "name": "User Analytics Dashboard",
        "description": "End-to-end product development of analytics platform for enterprise customers.",
        "keyAchievements": "Designed user experience and managed development cycle\nIncreased customer retention by 30% through data insights\nIntegrated with 15+ third-party data sources",
        "link": "productanalytics.techflow.com",
        "startYear": "2021-06-01",
        "endYear": "2021-12-01"
      }
    ],
    skills: [
      {
        title: "Product Strategy",
        skills: ["Product Roadmapping", "Market Research", "Competitive Analysis", "User Research"]
      },
      {
        title: "Technical Skills",
        skills: ["SQL", "Python", "Tableau", "Jira", "Figma"]
      }
    ],
    languages: ["English (Native)", "Korean (Native)"],
    certifications: [
      "Certified Product Manager (CPM)",
      "Google Analytics Certified"
    ]
  },

  executive: {
    name: "JENNIFER THOMPSON",
    position: "Chief Technology Officer",
    contactInformation: "+1-617-555-0198",
    email: "j.thompson@innovatetech.com",
    address: "Boston, MA",
    profilePicture: "",
    profilePictureName: "",
    selectedTemplate: "executive",
    socialMedia: [
      {
        socialMedia: "LinkedIn",
        link: "linkedin.com/in/jennifer-thompson-cto",
        platform: "linkedin"
      }
    ],
    summary: "Technology executive with 15+ years leading high-performing engineering teams. Proven track record of scaling technology infrastructure for rapid growth companies.",
    education: [
      {
        "school": "MIT",
        "degree": "Ph.D. Computer Science",
        "startYear": "2005-09-01",
        "endYear": "2008-05-15"
      }
    ],
    workExperience: [
      {
        "company": "InnovateTech Corp",
        "position": "Chief Technology Officer",
        "description": "Lead technology strategy and engineering organization for $50M+ revenue company.",
        "keyAchievements": "Scaled engineering team from 15 to 80+ engineers\nArchitected cloud infrastructure supporting 10M+ users\nReduced system downtime by 99.5% through infrastructure improvements",
        "startYear": "2018-03-01",
        "endYear": "Present"
      }
    ],
    projects: [
      {
        "name": "Cloud Migration Initiative",
        "description": "Led company-wide migration from on-premise to cloud infrastructure.",
        "keyAchievements": "Reduced infrastructure costs by 40%\nImproved system performance by 300%\nZero-downtime migration completed in 6 months",
        "link": "github.com/innovatetech/cloud-migration",
        "startYear": "2020-01-01",
        "endYear": "2020-06-01"
      },
      {
        "name": "AI-Powered Analytics Platform",
        "description": "Spearheaded development of machine learning platform for business intelligence and predictive analytics.",
        "keyAchievements": "Generated $5M+ in new revenue streams\nReduced data processing time from hours to minutes\nPatented 3 innovative algorithms for real-time data analysis",
        "link": "github.com/innovatetech/ai-analytics",
        "startYear": "2021-01-01",
        "endYear": "2022-03-01"
      }
    ],
    skills: [
      {
        title: "Leadership",
        skills: ["Team Building", "Strategic Planning", "Technology Vision", "Board Reporting"]
      },
      {
        title: "Technical Architecture",
        skills: ["Cloud Computing", "Microservices", "DevOps", "Security", "Scalability"]
      }
    ],
    languages: ["English (Native)", "French (Conversational)"],
    certifications: [
      "AWS Certified Solutions Architect",
      "Certified Information Systems Security Professional (CISSP)"
    ]
  }
};

export const getSampleDataForTemplate = (templateId) => {
  return sampleData[templateId] || sampleData.classic;
};

export const getAllSampleData = () => {
  return sampleData;
};

export default sampleData;
