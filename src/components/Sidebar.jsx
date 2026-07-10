import Profile from './Profile';
import Navigation from './Navigation';
import Footer from './Footer';
import './Sidebar.css';
import { useLocation, useNavigate } from "react-router-dom";

// const scrollToSection = (id) => {
//     document
//         .getElementById(id)
//         ?.scrollIntoView({
//             behavior: 'smooth'
//         });
// };

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {

        setIsSidebarOpen(false);

        if (location.pathname === "/") {

            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
            });

            return;
        }

        navigate("/", {
            state: {
                scrollTo: id,
            },
        });
    };

    return (
        <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`}>

            <Profile />
            <Navigation scrollToSection={scrollToSection} />
            <Footer />



        </aside>
    );
}

export default Sidebar;