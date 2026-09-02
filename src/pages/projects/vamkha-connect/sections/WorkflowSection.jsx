import {
  FaWeightHanging,
  FaBluetoothB,
  FaMobileAlt,
  FaChartLine
} from "react-icons/fa";

import "../styles/WorkflowSection.css";

function WorkflowSection() {

  const steps = [

    {
      icon: <FaWeightHanging />,
      number: "01",
      title: "VAMKHA Weighing Scale",
      description:
        "The weighing scale provides the measurement data required for the workflow."
    },

    {
      icon: <FaBluetoothB />,
      number: "02",
      title: "Bluetooth Connection",
      description:
        "The weighing scale communicates with the mobile application through Bluetooth connectivity."
    },

    {
      icon: <FaMobileAlt />,
      number: "03",
      title: "VAMKHA Connect",
      description:
        "VAMKHA Connect manages the connected weighing-scale devices through a mobile interface."
    },

    {
      icon: <FaChartLine />,
      number: "04",
      title: "Data & Monitoring",
      description:
        "The application provides visibility of the connected devices and their received measurement data."
    }

  ];

  return (

    <section className="vamkha-workflow">

      <div className="vamkha-workflow-container">

        <div className="vamkha-section-heading">

          <span className="vamkha-section-label">
            How It Works
          </span>

          <h2>
            From Weighing Scale to Mobile Application
          </h2>

          <p>
            VAMKHA Connect provides a mobile workflow for connecting
            with and working alongside VAMKHA weighing-scale devices.
          </p>

        </div>


        <div className="vamkha-workflow-list">

          {steps.map((step, index) => (

            <div
              className="vamkha-workflow-step"
              key={step.number}
            >

              <div className="vamkha-workflow-number">
                {step.number}
              </div>

              <div className="vamkha-workflow-icon">
                {step.icon}
              </div>

              <div className="vamkha-workflow-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

              {index < steps.length - 1 && (

                <div className="vamkha-workflow-arrow">
                  ↓
                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WorkflowSection;