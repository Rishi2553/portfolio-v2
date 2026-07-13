import Reveal from "../../../../components/Reveal";

import TechCard from "../components/TechCard";
import techStack from "../data/techStack";

import "../styles/TechStack.css";

function TechStack() {

    return (

        <section className="tech-stack-section">

            <Reveal direction="down">

                <h2 className="section-title">

                    Technology Stack

                </h2>

            </Reveal>

            <Reveal delay={0.1}>

                <p className="tech-subtitle">

                    DriveLedger is built using a modern Flutter architecture
                    with offline-first storage, clean state management,
                    and reliable data backup capabilities.

                </p>

            </Reveal>

            <div className="tech-grid">

                {techStack.map((tech, index) => (

                    <Reveal
                        key={tech.id}
                        delay={0.15 * index}
                    >

                        <TechCard tech={tech} />

                    </Reveal>

                ))}

            </div>

        </section>

    );

}

export default TechStack;