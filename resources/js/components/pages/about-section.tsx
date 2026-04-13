import StaggerText from "../stager-text";
import React, { forwardRef } from "react";

const AboutSection = forwardRef((props, ref) => {
    return (
        <div className="overflow-hidden relative m-6 rounded-lg" ref={ref} >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0 bg-contain
       bg-cover bg-no-repeat
    "
                style={{ background: "url(/images/noise.gif)" }}>
                {/* <img src="/images/noise.gif" alt="" className="object-cover h-full w-full" /> */}
            </div>
            <div className=" p-8 md:p-16 grid grid-cols-1 lg:grid-cols-5 gap-6 justify-between  items-center  ">
                <div className="col-span-3">
                    <StaggerText text="Creativity. Inovation. Determination" as="div" className="text-xs md:text-base  tracking-tight uppercase " />
                    <div></div>
                    <div className="text-3xl md:text-6xl tracking-tighter leader-tighter font-bold">
                        Pushing past the hardest of <span className="text-accent">challenges.</span> Getting better and better.
                    </div>

                </div>

                <div className="col-span-2 text-justify font-medium tracking-tight ">

                    <p className="mb-3">It’s this <b>passion</b> that makes us successful, and it’s this same passion we pour into our clients and help fulfil their creative needs.
                    </p>

                    <p> We are truly your one-stop agency for all your Creative, Design & Collateral requirements. No more outsourcing, trying to come up with your own strategies/ideas, being over sold and under promised, or having to shop all over for skilled creative – because we can do all that and more – at a price you’ll love!
                    </p>
                </div>
            </div>
        </div>
    )
})

export default AboutSection;