import "../styles/HeroSection.css";

function HeroSection() {

  return (

    <section className="vamkha-connect-hero">

      <div className="vamkha-connect-hero-content">

        <span className="vamkha-project-badge">
          Client Project • VAMKHA Automation
        </span>

        <h1>
          VAMKHA Connect
        </h1>

        <h2>
          Weighing Scale Connectivity & Management Application
        </h2>

        <p>
          A mobile application developed for VAMKHA Automation to connect
          with, manage, and monitor VAMKHA weighing-scale devices through
          Bluetooth connectivity.
        </p>

        <button
          className="vamkha-hero-btn"
          onClick={() =>
            document
              .getElementById("vamkha-features")
              ?.scrollIntoView({
                behavior: "smooth"
              })
          }
        >
          Explore Features
          <span>↓</span>
        </button>

      </div>

    </section>

  );

}

export default HeroSection;