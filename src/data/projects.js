import busCover from "../assets/projects/bus-track-plus/admin.png";
import portfolioCover from "../assets/profile.jpg";

const projects = [
  {
    id: 1,

    title: "Smart Bus Tracking & Crowd Management System",

    shortDescription:
      "A full-stack public transportation management system built using Flutter, Spring Boot, MySQL and Firebase.",

    image: busCover,

    technologies: [
      "Flutter",
      "Spring Boot",
      "Firebase",
      "MySQL"
    ],

    route: "/projects/bus-track-plus",

    featured: true
  },

  {
    id: 2,

    title: "Developer Portfolio",

    shortDescription:
      "Modern responsive portfolio built using React and Framer Motion.",

    image: portfolioCover,

    technologies: [
      "React",
      "CSS",
      "Framer Motion"
    ],

    route: "/projects/portfolio",

    featured: true
  }
];

export default projects;