import { motion } from "framer-motion";

function Reveal({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
}) {
  const directions = {
    up: { y: 80 },
    down: { y: -80 },
    left: { x: -100 },
    right: { x: 100 },
    fade: {},
  };

  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;