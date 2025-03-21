import { a } from "maath/dist/objectSpread2-284232a6.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ai,
  ae,
  pr,
  ps,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  canva,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  cc,
  vsc,
  tiktok,
} from "../assets";

import avt1 from "../assets/avatar1.jpg";
import avt2 from "../assets/avatar2.jpg";
import avt3 from "../assets/avatar3.jfif";
import project1 from "../assets/protifolio5.jpeg";
import project2 from "../assets/portfolio1.jpeg";
import project3 from "../assets/tefrhida.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
 

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },

];

const experiences = [
  {
    title: "Web Application Develop",
    company_name: "React",
    icon: vsc,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Design",
    company_name: "Figma",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024- Present",
    points: [
      "Design & organized web applications features using Figma and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Translate designs to code reviews and providing constructive feedback to other developers.",
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "Professional design, clean and good-looking. Hope for the next co-opporation.",
    name: "Son Anh Nguyen",
    designation: "CFO",
    company: "HA Smart",
    image: avt1,
  },
  {
    testimonial:
      "Awesome works, really cute and modern design! A little bit in a nick of time but the result still worthy.",
    name: "Huyen Trang Nguyen",
    designation: "COO",
    company: "DEF Corp",
    image: avt2,
  },
  {
    testimonial: "Great job! Very nice design, simple but effective.",
    name: "Ly Nguyen",
    designation: "CTO",
    company: "Sunhouse Co., LTD",
    image: avt3,
  },
];

const projects = [
  
 
  {
    name: "CareLink 👩‍⚕️",
    description:"CareLink is a web application designed to digitalize the healthcare and clinic management sector. It enables patients to book appointments and view their medical history while enhancing communication among doctors, medical staff, and patients. This streamlined process boosts operational efficiency and minimizes the risk of error. Ultimately, CareLink’s primary goal is to improve the overall patient experience, making healthcare services easier and simpler to access.",
    tags: [
      {
        name: "Angular",
        color: "text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      }, 
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      }, 
      {
        name: "Java",
        color:"text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300",
      },
     
      {
        name: "MySQL",
        color: "text-gradient",
      }, {
        name: "SpringBoot ,SpringSecurity ,WebSocket",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/helmihamraoui/Project-Java",
    link: "",
  }, 
  {
    name: "Cook Me 🍳",
    description:
      "A web application designed to help users discover and create recipes by addressing everyday challenges such as ingredient availability, dietary preferences, and time constraints. Our platform offers a seamless and dynamic user experience, providing tailored recipes with the added ability to chat with others for support and community engagement.",
    tags: [
      {
        name: "Angular, Material UI",
        color: "-text-gradient",
      },
      { 
      
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript, Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color:"green-text-gradient",
      }, 
      {
        name: "Node.js",
        color:"text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300",
      },      
    ],
    image: project2,
    source_code_link: "https://github.com/med-mokhtar-nasrali/MERN-Project",
    link: "",
  }, 
  {
    name: "Tferhida 🎉",
    description:
      "A dynamic website that allows users to connect with like-minded individuals and participate in group events. This platform fosters vibrant community interactions, enabling users to share their interests, exchange ideas, and engage in organized events with ease.",
    tags: [
      {
        name: "JavaScript",
        color:"text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      }, 
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Papoutta/tfarhida",
    link: "",
  }
];

export { services, technologies, experiences, testimonials, projects };
