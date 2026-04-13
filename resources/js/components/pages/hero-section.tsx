import { App, Link } from "@inertiajs/react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";
import { motion } from "motion/react";
import StarSeperator from "../star-seperator";
import AppLogo from "../app-logo";
import TextType from "../animated/text-type";

// import * as heroMain from "@/assets/hero-main.jpg";
export default function HeroSection({ learnMoreClick }) {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">





            {/* Background Image */}
            <img
                src="/images/bg-img.webp" // replace with your image
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent/30 to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />


            <img
                src="/images/img-1.webp"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[900px] max-w-none z-20 sm:w-[100px]"

            />
            {/* Center Content */}

            <motion.div className="relative z-10 h-full flex items-start pt-40 md:pt-0 lg:items-center justify-center z-21"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                }}>
                <div>
                    <div className=" mx-auto max-w-[200px] md:max-w-sm mb-9">
                        <AppLogo color="dark"   />
                    </div>

                    <div className="max-w-5xl px-6 text-center">

                        {/* <p className="text-sm mb-4 opacity-80">
                            Design & Marketing that works
                        </p> */}

                        <h1 className="text-5xl md:text-7xl sm:text-2xl font-bold leading-tighter tracking-tighter">
                           True One Stop Solution Provider. <br/>
                           <TextType 
  text={["Under One Roof." ]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
 
                          
                        </h1>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row   items-center justify-center gap-4">
                            <motion.button whileHover={{ scale: 1.1 }} className="w-full sm:w-auto bg-white   text-black px-6 py-3 font-medium cursor-pointer" onClick={learnMoreClick}>
                                Learn More <ArrowDown className="w-4 h-4 inline-block ml-2" />
                            </motion.button>
                            <motion.a href="/contact" whileHover={{ scale: 1.1 }} className="w-full sm:w-auto border border-white px-6 py-3 font-medium">
                                Get A Free Quote <ArrowDownRight className="w-4 h-4 inline-block ml-2" />
                            </motion.a>
                        </div>
                    </div>
                </div>


            </motion.div>


            {/* Right Vertical Email */}
            <div className="opacity-0 md:opacity-70 absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right text-sm   z-20">
                hello@unifusions.com
            </div>

            {/* Bottom Services */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-black/40 backdrop-blur-md py-4 z-20">
                <motion.div animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }} className="flex whitespace-nowrap animate-marquee">
                    {/* First set */}
                    <div className="flex gap-10 text-sm   px-6">
                        <span className="flex items-center gap-6">Creative Strategy <StarSeperator /></span>
                        <span className="flex items-center gap-6">Art Direction <StarSeperator /> </span>
                        <span className="flex items-center gap-6">Brand Identity <StarSeperator /></span>
                        <span className="flex items-center gap-6">Website Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">App Development <StarSeperator /></span>
                        <span className="flex items-center gap-6">UI/UX Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">Print Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">Digital Advertising<StarSeperator /></span>
                        <span className="flex items-center gap-6">Corporate Uniforms<StarSeperator /></span>
                        <span className="flex items-center gap-6">Event Design & Production<StarSeperator /></span>
                        <span className="flex items-center gap-6">Proposals & Presentations<StarSeperator /></span>
                        <span className="flex items-center gap-6">Sales & Marketing Collaterals<StarSeperator /></span>
                        <span className="flex items-center gap-6">Photography <StarSeperator /></span>
                        <span className="flex items-center gap-6">Videography<StarSeperator /></span>
                    </div>

                    <div className="flex gap-10 text-sm px-6">
                        <span className="flex items-center gap-6   text-semibold">Creative Strategy <StarSeperator /></span>
                        <span className="flex items-center gap-6">Art Direction <StarSeperator /> </span>
                        <span className="flex items-center gap-6">Brand Identity <StarSeperator /></span>
                        <span className="flex items-center gap-6">Website Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">App Development <StarSeperator /></span>
                        <span className="flex items-center gap-6">UI/UX Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">Print Design <StarSeperator /></span>
                        <span className="flex items-center gap-6">Digital Advertising<StarSeperator /></span>
                        <span className="flex items-center gap-6">Corporate Uniforms<StarSeperator /></span>
                        <span className="flex items-center gap-6">Event Design & Production<StarSeperator /></span>
                        <span className="flex items-center gap-6">Proposals & Presentations<StarSeperator /></span>
                        <span className="flex items-center gap-6">Sales & Marketing Collaterals<StarSeperator /></span>
                        <span className="flex items-center gap-6">Photography <StarSeperator /></span>
                        <span className="flex items-center gap-6">Videography<StarSeperator /></span>
                    </div>

                </motion.div>
            </div>
        </section>

    )
}