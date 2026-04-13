import {motion} from "motion/react";  

const DURATION = 0.25;
const STAGGER = 0.025;


const FlipLinkWithIcon = ({ children, href, icon: Icon, color }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className={`relative flex items-center  gap-3 overflow-hidden  
      tracking-tighter  leading-tight font-bold
       font-base ${color === "dark" ? "text-foreground" : "text-white"} `}
    //   style={{ lineHeight: 0.75 }}
    >

      {/* TEXT WRAPPER */}
      <div className="relative block overflow-hidden">

        {/* TOP TEXT */}
        <div className="">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
             {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="absolute inset-0  ">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
            {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </div>

      </div>

      {/* ICON (separate) */}
      {Icon && (
        <motion.span
          variants={{
            initial: { y: 0, opacity: 0.7 },
            hovered: { y: -5, opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center"
        >
          <Icon className="w-4 h-4  " />
        </motion.span>
      )}

    </motion.a>
  );
};


export default FlipLinkWithIcon;