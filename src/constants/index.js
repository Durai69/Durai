
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  aws,
  mui,
  figma,
  git,
  html,
  javascript,
  mongodb,
  reactjs,
  redux,
  tailwind,
  java,
  python,
  sql,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import company logos
import lakshmiLifeScience from "../assets/company/meta.png"; // Replace with actual Lakshmi Life Science logo


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "Lakshmi Life Science Unit-1",
    icon: lakshmiLifeScience,
    iconBg: "#E6DEDD",
    date: "6 Months",
    points: [
      "Developed an internal web app enabling departments to survey each other to improve performance and collaboration.",
      "Developed Python back-end logic with a focus on error handling and data validation to prevent crashes.",
      "Built and maintained the front-end interface using React JS, enhancing knowledge in modern front-end technologies.",
      "Technologies Used: Python, Flask, SQLAlchemy, Paseto, MS SQL, React JS and Tailwind CSS.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Durai proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Durai does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Durai optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "LPG E-commerce Website",
    description:
      "Developed and deployed a responsive, minimal e-commerce site for a local LPG distributor, featuring services and an online request-quote interface with verified cross-device compatibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://srisingamudaiyaarlpgs.vercel.app",
  },
  {
    name: "Contact Book Manager",
    description:
      "Engineered a desktop and command-line application in an academic group project to manage personal contacts, implementing full CRUD functionality and an intuitive Java Swing UI.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "white-text-gradient",
      },
      {
        name: "cli",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Internal Survey Portal",
    description:
      "Developed an internal web app enabling departments to survey each other to improve performance and collaboration. Built a Python back-end focusing on error handling and data validation to prevent crashes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "white-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
