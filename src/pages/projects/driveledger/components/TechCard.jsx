import {
    MdPhoneAndroid,
    MdAccountTree,
    MdStorage,
    MdBuild
} from "react-icons/md";

import "./TechCard.css";

function TechCard({ tech }) {

    const getIcon = () => {

        switch (tech.icon) {

            case "frontend":
                return <MdPhoneAndroid />;

            case "architecture":
                return <MdAccountTree />;

            case "database":
                return <MdStorage />;

            default:
                return <MdBuild />;
        }

    };

    return (

        <div className="tech-card">

            <div className="tech-icon">

                {getIcon()}

            </div>

            <h3>

                {tech.title}

            </h3>

            <p>

                {tech.description}

            </p>

            <div className="tech-list">

                {tech.technologies.map((item) => (

                    <span
                        key={item}
                        className="tech-chip"
                    >

                        {item}

                    </span>

                ))}

            </div>

        </div>

    );

}

export default TechCard;