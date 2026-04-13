
import AppLogoIcon from "@/components/app-logo-icon";
import { ArrowUpRight } from "lucide-react";
import {motion } from "motion/react";
const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap 
       tracking-tighter text-white leading-tight
      text-7xl font-black  md:text-9xl"
      style={{
        lineHeight: 1,
      }}
    >
      <div className="pe-3">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 pe-3">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block  "
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

       

    </motion.a>
  );
};


const FooterLink = ({ children, href, icon: Icon }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative flex items-center  gap-3 overflow-hidden  
      tracking-tighter text-white leading-tight
       font-base  "
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
              {l}
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
              {l}
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


export default function GuestFooter() {

    
    return (
        <>
            <div className="m-3 bg-black rounded-lg p-3 text-white/70">

                <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-6 px-3 my-9 md:mb-30">

                    <div>
                        <div className="flex items-center gap-3">
                            <AppLogoIcon className="h-10 w-10" />
                            <div className="text-white text-3xl md:text-4xl font-semibold">
                                Let's Shape <br /> Your Next Idea
                            </div>
                        </div>
                        {/* <div>
                            <div>Mo-Fr</div>
                            <div>11am - 9pm</div>
                        </div> */}
                    </div>
                    <div className="text-white md:text-end">
                        <p className="text-3xl font-bold tracking-tighter">+ (91) 9941 994 993</p>
                        <p className="text-4xl font-semibold underline tracking-tighter">hello@unifusions.com</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 ">
                    <div className="grid  gap-2   px-3   text-black">
                       
      <FooterLink href="/privacy" icon={ArrowUpRight}>Privacy  </FooterLink>
      {/* <FooterLink href="#" icon={ArrowUpRight}>Terms</FooterLink> */}
      
    
                    </div>
                    <div className="md:col-span-2 md:text-end">
                        <FlipLink href="https://www.unifusions.com">Unifusions</FlipLink>
                       
                        {/* <div>A Private Limited Company</div> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 md:gap-6  px-3 border-t border-white/10 pt-6 mt-6">
                    <div className="text-sm md:text-base font-semibold col-span-2">
                        © 2019 - {new Date().getFullYear()}. Unifusions, A Private Limited Company
                    </div>
                    <div className="col-span-3">

                    </div>

                    <div className="text-sm md:text-base md:text-end text-base font-semibold">
                        [Since 2019]
                    </div>
                </div>
            </div>
        </>
    )
}