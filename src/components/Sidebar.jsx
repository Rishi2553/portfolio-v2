import './Sidebar.css';

function Sidebar() {

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  };

  return (
    <aside className="sidebar">

      <h2 className="logo">RP</h2>

      <button onClick={() => scrollToSection('about')}>
        About Me
      </button>

      <button onClick={() => scrollToSection('skills')}>
        Skills
      </button>

      <button onClick={() => scrollToSection('projects')}>
        Projects
      </button>

      <button onClick={() => scrollToSection('career')}>
        Career Journey
      </button>

      <button onClick={() => scrollToSection('contact')}>
        Contact
      </button>

    </aside>
  );
}

export default Sidebar;