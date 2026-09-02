import {
  FaBluetoothB,
  FaWeightHanging,
  FaMobileAlt,
  FaLink,
  FaCogs,
  FaVial
} from "react-icons/fa";

import "../styles/FeaturesSection.css";

function FeaturesSection() {

  const features = [

    {
      icon: <FaBluetoothB />,
      title: "Bluetooth Connectivity",
      description:
        "Connect the mobile application with supported VAMKHA weighing-scale devices through Bluetooth communication."
    },

    {
      icon: <FaWeightHanging />,
      title: "Weighing Scale Support",
      description:
        "Designed specifically to work with VAMKHA weighing-scale equipment and provide a convenient mobile interface."
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile Operation",
      description:
        "A dedicated mobile experience that allows operators to interact with connected weighing-scale equipment directly from a smartphone."
    },

    {
      icon: <FaLink />,
      title: "Device Connection Management",
      description:
        "Provides a structured way to discover, connect, and manage supported weighing-scale devices."
    },

    {
      icon: <FaCogs />,
      title: "Device Monitoring",
      description:
        "Helps operators monitor the state of connected equipment and maintain visibility of active device connections."
    },

    {
      icon: <FaVial />,
      title: "Bluetooth Testing",
      description:
        "VAMKHA BT Simulator provides an internal environment for testing and validating Bluetooth-based device communication."
    }

  ];

  return (

    <section className="vamkha-features">

      <div className="vamkha-features-container">

        <div className="vamkha-section-heading">

          <span className="vamkha-section-label">
            Key Features
          </span>

          <h2>
            Built Around the Weighing-Scale Workflow
          </h2>

          <p>
            The VAMKHA applications are designed around the practical
            requirements of connecting, operating, monitoring, and
            testing weighing-scale devices.
          </p>

        </div>


        <div className="vamkha-features-grid">

          {features.map((feature, index) => (

            <div
              className="vamkha-feature-card"
              key={index}
            >

              <div className="vamkha-feature-icon">
                {feature.icon}
              </div>

              <div className="vamkha-feature-content">

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FeaturesSection;