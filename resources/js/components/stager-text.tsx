import { motion } from "framer-motion";

export default function StaggerText({
  text,
  className = "",
  as: Component = "span",
  stagger = 0.03,
  duration = 0.4,
}) {
  const letters = text.split("");

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      animate="initial"
      className="inline-block"
    >
      <Component className={`inline-block ${className}`}>
        {letters.map((letter, index) => (
          <span key={index} className="relative inline-block overflow-hidden ">

            {/* 👇 Initial visible text */}
            <motion.span
              variants={{
                initial: { y: "0%" },
                hovered: { y: ["100%", "0%"] },
              }}
              transition={{
                duration,
                ease: [0.22, 1, 0.36, 1],
                delay: index * stagger,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>

            {/* 👇 Animated incoming text */}
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: ["0%", "100%"] },
              }}
              transition={{
                duration,
                ease: [0.22, 1, 0.36, 1],
                delay: index * stagger,
              }}
              className="absolute left-0 top-0 inline-block "
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>

          </span>
        ))}
      </Component>
    </motion.div>
  );
}