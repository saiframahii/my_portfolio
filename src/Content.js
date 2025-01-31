// import images
import Hero_person from "./assets/images/Hero/profile-pic.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import azureIcon from "./assets/images/Skills/figma.png"; // Example paths
import pythonIcon from "./assets/images/Skills/node.png";
import sqlIcon from "./assets/images/Skills/ps.png";
import etlIcon from "./assets/images/Skills/python.png";
import factoryIcon from "./assets/images/Skills/react.png";
import databricksIcon from "./assets/images/Skills/sketch.png";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
      text: "Home",
    },
    {
      link: "#aboutme",
      icon: BiUser,
      text: "About Me",
    },
    {
      link: "#timeline",
      icon: RiProjectorLine,
      text: "Timeline",
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
      text: "Contact",
    },
  ],
  hero: {
    title: "Data Consultant & PhD Researcher",
    firstName: "SAIF",
    LastName: "ALRAMAHI",
    btnText: "Contact Me",
    resumeLink: "/src/assets/resume/Saif Alramahi CV.pdf",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Data Engineering",
      },
    ],
  },
  aboutme: {
    title: "About Me",
    bio: "Hello! I'm Saif Alramahi, an experienced Data Consultant with three years of specialized expertise in cloud development and data engineering. I have developed a strong proficiency in Microsoft Azure services, alongside advanced skills in Python and SQL. My career has been defined by a commitment to delivering high-quality, scalable data solutions within enterprise environments.",
    skills_title: "My Skills",
    skills_content: [
      {
        name: "Microsoft Azure",
        para: "Proficient in Azure services for cloud engineering.",
        logo: azureIcon,
      },
      {
        name: "Python",
        para: "Advanced skills in Python for data engineering.",
        logo: pythonIcon,
      },
      {
        name: "SQL",
        para: "Expertise in SQL for database management.",
        logo: sqlIcon,
      },
      {
        name: "ETL Pipelines",
        para: "Experience in building and maintaining ETL pipelines.",
        logo: etlIcon,
      },
      {
        name: "Azure Data Factory",
        para: "Skilled in using Azure Data Factory for data workflows.",
        logo: factoryIcon,
      },
      {
        name: "Azure Databricks",
        para: "Proficient in using Azure Databricks for data processing.",
        logo: databricksIcon,
      },
    ],
    icon: MdArrowForward,
  },
  timeline: {
    title: "My Journey",
    events: [
      {
        type: "education",
        title: "PhD in Occupant-Centric Building Control Systems",
        organization: "Birmingham City University",
        date: "2024 - Present",
        // icon: birminghamIcon,
        details: [
          "Researching AI-driven frameworks for optimizing building automation systems.",
        ],
      },
      {
        type: "experience",
        title: "Azure Data Engineer",
        organization: "Kagool Ltd",
        date: "2021 - 2024",
        // icon: kagoolIcon,
        details: [
          "Developed Kagool’s Azure-based data migration platform (Velocity).",
          "Engineered robust ETL pipelines using Azure Data Factory and Databricks.",
          "Applied AI services (Azure OpenAI, Azure Search) to enhance functionality.",
        ],
      },
      {
        type: "education",
        title: "MSc in Renewable & Sustainable Energy Technologies",
        organization: "Northumbria University",
        date: "2020 - 2021",
        // icon: northumbriaIcon,
        details: ["Graduated with First Class Honors."],
      },
    ],
  },
  Contact: {
    title: "Contact Me",
    social_media: [
      {
        text: "sbramahi99@hotmail.com",
        icon: GrMail,
        link: "mailto:sbramahi99@hotmail.com",
      },
      {
        text: "Saif Alramahi",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/saif-alramahi-5a09521b8/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
