import busCover from "../assets/projects/bus-track-plus/bustrackplus.png";
import portfolioCover from "../assets/projects/portfolio/Portfolio_V1_banner.png";
import driveLedgerBanner from "../assets/projects/driveledger/screenshots/home.png";

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

    title: "DriveLedger",

    shortDescription:
        "Offline income and expense tracking application built with Flutter and SQLite for cab drivers.",

    image: driveLedgerBanner,

    technologies: [
        "Flutter",
        "SQLite",
        "Provider",
        "Excel"
    ],

    route: "/projects/driveledger",

    featured: true
},
{
  id: 3,

  title: "Developer Portfolio V1",

  shortDescription:
    "The first version of my developer portfolio, created to learn React, component-based architecture, responsive design, and modern frontend development.",

  image: portfolioCover,

  technologies: [
    "React",
    "CSS",
    "React Router"
  ],

  route: "/projects/portfolio-v1",

  featured: true
},
];

export default projects;