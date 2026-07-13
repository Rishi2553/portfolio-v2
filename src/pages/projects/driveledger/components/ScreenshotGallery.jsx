import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { screenshots } from "../data/screenshots";
import "../styles/ScreenshotGallery.css";

function ScreenshotGallery() {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setActive((prev) => (prev + 1) % screenshots.length);

        }, 3000);

        return () => clearInterval(timer);

    }, []);

    const getPosition = (index) => {

        const total = screenshots.length;

        let diff = (index - active + total) % total;

        switch (diff) {

            case 0:
                return "left";

            case 1:
                return "center";

            case 2:
                return "right";

            case 3:
                return "hidden-right";

            case 4:
                return "hidden-left";

            default:
                return "hidden-right";

        }

    };

    const getAnimation = (position) => {

        switch (position) {

            case "left":

                return {

                    x: -240,

                    scale: .88,

                    opacity: .55,

                    zIndex: 2,

                    rotate: -6

                };

            case "center":

                return {

                    x: 0,

                    scale: 1,

                    opacity: 1,

                    zIndex: 5,

                    rotate: 0

                };

            case "right":

                return {

                    x: 240,

                    scale: .88,

                    opacity: .55,

                    zIndex: 2,

                    rotate: 6

                };

            case "hidden-right":

                return {

                    x: 520,

                    scale: .75,

                    opacity: 0,

                    zIndex: 1,

                    rotate: 8

                };

            case "hidden-left":

                return {

                    x: -520,

                    scale: .75,

                    opacity: 0,

                    zIndex: 1,

                    rotate: -8

                };

            default:

                return {};

        }

    };

    return (

        <section className="screenshots-section">

            <h2 className="section-title">

                Application Screens

            </h2>

            <p className="screens-subtitle">

                Explore the complete DriveLedger workflow.

            </p>

            <div className="carousel">

                {screenshots.map((screen, index) => {

                    const position = getPosition(index);

                    const isCenter = position === "center";

                    return (

                        <motion.div

                            key={screen.id}

                            className={`phone ${isCenter ? "active-phone" : ""}`}

                            animate={getAnimation(position)}

                            transition={{
                                duration: .8,
                                ease: "easeInOut"
                            }}

                        >

                            <img

                                src={screen.image}

                                alt={screen.title}

                            />

                        </motion.div>

                    );

                })}

            </div>

            <div className="screen-info">

                <motion.h3

                    key={screenshots[(active + 1) % screenshots.length].title}

                    initial={{ opacity: 0, y: 12 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: .35 }}

                >

                    {screenshots[(active + 1) % screenshots.length].title}

                </motion.h3>

                <motion.p

                    key={screenshots[(active + 1) % screenshots.length].description}

                    initial={{ opacity: 0, y: 12 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: .35 }}

                >

                    {screenshots[(active + 1) % screenshots.length].description}

                </motion.p>

            </div>

        </section>

    );

}

export default ScreenshotGallery;