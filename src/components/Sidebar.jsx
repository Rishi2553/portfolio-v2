import Profile from './Profile';
import Navigation from './Navigation';
import Footer from './Footer';
import './Sidebar.css';

    const scrollToSection = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: 'smooth'
            });
    };

function Sidebar() {

    return (
        <aside className="sidebar">

            <Profile />
            <Navigation scrollToSection={scrollToSection} />
            <Footer />



        </aside>
    );
}

export default Sidebar;