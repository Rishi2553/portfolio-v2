import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

import { architecture } from "../data/architecture";

import "../styles/ProjectArchitecture.css";

function ProjectArchitecture() {

    return (

        <section className="architecture-section">

            <h2 className="section-title">
                Project Architecture
            </h2>

            <p className="architecture-subtitle">
                DriveLedger follows a clean layered architecture to keep the user interface,
                business logic, and data management independent, making the application
                scalable and easy to maintain.
            </p>

            <div className="architecture-container">

                {architecture.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div key={item.id}>

                            <motion.div
                                className="architecture-card"
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8
                                }}
                            >

                                <div className="architecture-icon">

                                    <Icon />

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <span className="architecture-tag">

                                    {item.subtitle}

                                </span>

                                <p>

                                    {item.description}

                                </p>

                            </motion.div>

                            {index !== architecture.length - 1 && (

                                <motion.div
                                    className="architecture-arrow"
                                    initial={{
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: index * 0.2
                                    }}
                                    viewport={{ once: true }}
                                >

                                    <FaArrowDown />

                                </motion.div>

                            )}

                        </div>

                    );

                })}

            </div>

        </section>

    );

}

export default ProjectArchitecture;