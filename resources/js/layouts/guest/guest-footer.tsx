
import AppLogoIcon from "@/components/app-logo-icon";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
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
      text-7xl font-black md:text-8xl  xl:text-9xl"
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
              <div className="text-white text-3xl xl:text-4xl font-semibold">
                Let's Shape <br /> Your Next Idea
              </div>
            </div>
            {/* <div>
                            <div>Mo-Fr</div>
                            <div>11am - 9pm</div>
                        </div> */}
          </div>
          <div className="text-white md:text-end">
            <p className="text-2xl xl:text-3xl font-bold tracking-tighter">+ (91) 9941 994 993</p>
            <p className="text-3xl xl:text-4xl font-semibold underline tracking-tighter">hello@unifusions.com</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 md:gap-6  px-3 border-t border-white/10 pt-6 mt-6">
          <div className="text-sm md:text-base font-semibold md:col-span-2  ">
            © 2019 - {new Date().getFullYear()}. Unifusions, A Private Limited Company
          </div>


          <div className="text-sm md:text-base md:text-end text-base font-semibold xl:col-span-2">
            [Since 2019]
          </div>
        </div>
      </div>

      <div className="fixed bottom-15 right-5 z-50 group animate-float-bounce hover:scale-110 transition flex items-center gap-2">
        <span className="bg-black text-white text-sm px-3 py-1 rounded shadow whitespace-nowrap">
          Chat with us
        </span>

        <a
          href="https://wa.me/919941994993?text=Hi"
          target="_blank"
          className="  z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg "
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.885.754 5.69 2.184 8.15L.105 32l7.7-2.02a15.96 15.96 0 0 0 8.195 2.25c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.83l-.48-.28-4.57 1.2 1.22-4.45-.31-.46a13.2 13.2 0 1 1 10.87 5.82zm7.43-9.92c-.41-.2-2.42-1.2-2.8-1.34-.38-.14-.66-.2-.94.2-.28.41-1.08 1.34-1.32 1.62-.24.28-.48.31-.89.1-.41-.2-1.74-.64-3.31-2.03-1.22-1.09-2.05-2.44-2.29-2.85-.24-.41-.03-.63.18-.83.19-.19.41-.48.62-.72.21-.24.28-.41.41-.69.14-.28.07-.52-.03-.72-.1-.2-.94-2.26-1.29-3.1-.34-.82-.69-.71-.94-.72h-.8c-.28 0-.72.1-1.1.52-.38.41-1.45 1.42-1.45 3.46s1.48 4.01 1.68 4.29c.21.28 2.9 4.43 7.02 6.21.98.42 1.75.67 2.35.86.99.31 1.89.27 2.6.17.79-.12 2.42-.99 2.76-1.94.34-.96.34-1.78.24-1.94-.1-.17-.38-.27-.79-.48z" />
          </svg>
        </a>

      </div>

    </>
  )
}