import {
  FaProjectDiagram,
  FaUserGraduate,
  FaTools,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import Reveal from "../../../../components/Reveal";

function FeaturesSection() {
  const features = [
    {
      icon: <FaProjectDiagram />,
      title: "Project Showcase",
      description:
        "Dedicated section to showcase software projects with descriptions and demonstrations.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Education",
      description:
        "Displays my academic background, achievements, and certifications.",
    },
    {
      icon: <FaTools />,
      title: "Technical Skills",
      description:
        "Highlights programming languages, frameworks, and development tools.",
    },
    {
      icon: <FaEnvelope />,
      title: "Contact Information",
      description:
        "Provides multiple ways for recruiters and companies to reach me.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description:
        "Optimized for desktop, tablet, and mobile devices.",
    },
  ];

  return (
    <section className="features-section">

      <Reveal><h2>Key Features</h2></Reveal>

      <div className="features-grid">

        {features.map((feature, index) => (

          <Reveal key={feature.title} delay={index * 0.06}>
          <div className="feature-card">

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
          </Reveal>

        ))}

      </div>

    </section>
  );
}

export default FeaturesSection;
