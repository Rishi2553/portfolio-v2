import {
  FaMoneyBillWave,
  FaWallet,
  FaChartBar,
  FaFileExport,
  FaFileImport,
  FaDatabase,
} from "react-icons/fa";

import "../styles/FeaturesSection.css";

const features = [
  {
    icon: <FaMoneyBillWave />,
    title: "Income Tracking",
    description:
      "Record daily earnings from Ola, Uber, Rapido, and other income sources.",
  },
  {
    icon: <FaWallet />,
    title: "Expense Management",
    description:
      "Track fuel, maintenance, recharge, commissions, parking, and more.",
  },
  {
    icon: <FaChartBar />,
    title: "Smart Reports",
    description:
      "View daily, weekly, monthly, yearly, and custom financial reports.",
  },
  {
    icon: <FaFileExport />,
    title: "Excel Export",
    description:
      "Export all transactions into Excel for backup and sharing.",
  },
  {
    icon: <FaFileImport />,
    title: "Excel Import",
    description:
      "Restore previously exported data directly from Excel files.",
  },
  {
    icon: <FaDatabase />,
    title: "Offline First",
    description:
      "All information is stored locally using SQLite. No internet required.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section">

      <h2 className="section-title">
        Key Features
      </h2>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

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