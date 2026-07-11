import {
  FaProjectDiagram,
  FaUserGraduate,
  FaTools,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

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

      <h2>Key Features</h2>

      <div className="features-grid">

        {features.map((feature) => (

          <div
            className="feature-card"
            key={feature.title}
          >

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturesSection;