import Reveal from "../../../../components/Reveal";

import ChallengeCard from "../components/ChallengeCard";

import challenges from "../data/challenges";

import "../styles/ChallengesSection.css";

function ChallengesSection() {

    return (

        <section className="challenges-section">

            <Reveal direction="down">

                <h2 className="section-title">

                    Challenges & Solutions

                </h2>

            </Reveal>

            <Reveal delay={0.1}>

                <p className="challenge-subtitle">

                    Every project presents unique engineering challenges.
                    DriveLedger was designed with practical solutions to
                    deliver a smooth, maintainable, and offline-first experience.

                </p>

            </Reveal>

            <div className="challenge-grid">

                {challenges.map((item, index) => (

                    <Reveal
                        key={item.id}
                        delay={index * 0.12}
                    >

                        <ChallengeCard item={item} />

                    </Reveal>

                ))}

            </div>

        </section>

    );

}

export default ChallengesSection;