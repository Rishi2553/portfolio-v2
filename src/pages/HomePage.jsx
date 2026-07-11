import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainContent from "./home/sections/MainContent";

function HomePage() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {

        if (location.state?.scrollTo) {

            const section = document.getElementById(
                location.state.scrollTo
            );

            section?.scrollIntoView({
                behavior: "smooth",
            });

            // Remove state so refreshes don't scroll again
            navigate(".", {
                replace: true,
                state: {},
            });

        }

    }, [location, navigate]);

    return <MainContent />;
}

export default HomePage;