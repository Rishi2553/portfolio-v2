import {
  FaReact,
  FaCss3Alt,
  FaMobileAlt,
  FaGitAlt,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

function LearningSection() {

  const learnings = [
    {
      icon: <FaReact />,
      title: "React Fundamentals",
      description:
        "Built my first complete React application using reusable components and props.",
    },
    {
      icon: <FaCss3Alt />,
      title: "Responsive UI Design",
      description:
        "Learned to create layouts that work across desktop and mobile devices.",
    },
    {
      icon: <FaCode />,
      title: "Component-Based Development",
      description:
        "Organized the application into reusable and maintainable React components.",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      description:
        "Used Git for version control and GitHub to manage project source code.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Frontend Development",
      description:
        "Improved my understanding of modern frontend development using React and CSS.",
    },
    {
      icon: <FaLightbulb />,
      title: "Foundation for Portfolio V2",
      description:
        "The experience gained from this project inspired the improved architecture and design of my current portfolio.",
    },
  ];

  return (
    <section className="learning-section">

      <h2>What I Learned</h2>

      <p className="learning-intro">
        Developing Portfolio V1 strengthened my frontend development
        fundamentals and laid the foundation for building larger and
        better React applications.
      </p>

      <div className="learning-grid">

        {learnings.map((item) => (

          <div
            key={item.title}
            className="learning-card"
          >

            <div className="learning-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LearningSection;