import { motion } from "framer-motion";

function Reveal({
  children,
  direction = "up",
  duration = 0.55,
  delay = 0,
}) {
  const directions = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: -32 },
    right: { x: 32 },
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
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
