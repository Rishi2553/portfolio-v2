import { FaLightbulb } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

import "./ChallengeCard.css";

function ChallengeCard({ item }) {

    return (

        <div className="challenge-card">

            <div className="challenge-header">

                <div className="challenge-icon">

                    <MdErrorOutline />

                </div>

                <h3>

                    Challenge

                </h3>

            </div>

            <p className="challenge-text">

                {item.challenge}

            </p>

            <div className="divider"></div>

            <div className="solution-header">

                <div className="solution-icon">

                    <FaLightbulb />

                </div>

                <h3>

                    Solution

                </h3>

            </div>

            <p className="solution-text">

                {item.solution}

            </p>

        </div>

    );

}

export default ChallengeCard;