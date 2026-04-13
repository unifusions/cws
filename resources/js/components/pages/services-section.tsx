import { ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/button"
import React, { useRef } from "react";

import ServiceCard from "./service-card";
import { time } from "console";
import useWindowResize from "@/hooks/use-window-resize";

const SERVICES = [
    {
        id: 1,
        label_no: "01",
        label: "Identity & Brand Creation",
        description: "We just don’t create awesome logos and typography, but awesome brands that your consumers will like to remember. Our Branding service encompasses all everything from ideation till market and launch and more."
    },
    {
        id: 2,
        label_no: "02",
        label: "Graphic Design & Print Collateral",
        description: "Great looking assets are a must! From web pages to email blasts to social media posts, from print ads to posters to brochures, everything must look great! Our graphic design services cover both online and offline besides a whole array of Print and Dispatch services."

    },
    {
        id: 3,
        label_no: "03",
        label: "Online & Social Strategy",
        description: "We help you develop a winning online strategy for your brand that maximizes your brand effectiveness while minimizing the effort, time and money required to achieve your online and social goals."
    },

    {
        id: 4,
        label_no: "04",
        label: "Online Marketing",
        description: "Simply stated, we get results. Whether you are looking for more website traffic, more leads, more sales, more social followers, higher engagement rates, higher email open rates … whatever your needs – we get it done. Guaranteed."
    }, {
        id: 5,
        label_no: "05",
        label: "Website Design & Development",
        description: "Our experienced design team will create the best looking and most effective website possible – within your budget and on time. Our website capabilities extend from simple websites to micro sites to complex e-commerce portals, forums and more."
    }, {
        id: 6,
        label_no: "06",
        label: "Social Media Marketing & Advertising",
        description: "Growing your social media footprint and creating engaged followers is an art and a science. You need a talented team leading the charge. And we promise to deliver. Whether Google, Facebook, Instagram or beyond, we can decipher them all and make them work for you."
    }, {
        id: 7,
        label_no: "07",
        label: "State-of-the-art App, Web & Software Development",
        description: "We’re experts at building solid app, reliable software, and fast web applications from the ground up. We’re industry agnostic and build everything with the user experience in mind. Our decade old expertise in Design & Coding is backed by research and understanding of your need. That’s how we deliver beautiful apps and functional software that you and your customers will love."
    }, {
        id: 8,
        label_no: "08",
        label: "Content Development",
        description: "Great content is the engine that makes everything run. Your website, sales material, email blasts, social media posts, etc. – all need great content writing, and at Unifusions, we do more than just write great content."
    }, {
        id: 9,
        label_no: "09",
        label: "Uniforms & Gifting",
        description: "At Unifusions, one of our main service offerings is Contemporary, Custom Made Apparels & Corporate Institutional Uniforms as we believe that everyone deserves to feel and look their best while on-the-job. As a collaborative Uniform design firm and supplier, we are motivated by a dual passion to produce stylish, authentic, well-made clothing for the modern workforce (clothing that we actually wear), while relentlessly pursuing a better tech enabled uniform experience for our clients and their stakeholders tasked with managing the uniform production process."
    }
];

export default function ServicesSection() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({

        target: ref,

        offset: ['start start', 'end end']

    })

    return (

        <section ref={ref} className="bg-background relative ">

            <motion.div
                className=" sticky top-3 md:top-2  p-16 overflow-clip">
                <h2 className="text-5xl md:text-8xl text-accent  font-semibold tracking-tighter leading-tighter">
                    What we do ?
                </h2>
                <p className="text-2xl md:text-4xl text-foreground/50">And we do it pretty well</p>
            </motion.div>
            <div className=" ">
                {SERVICES.map((service, index) => {

                    const targetScale = 1 - ((SERVICES.length - index) * 0.07);
                    //  const targetScale = 0.4;
                    const targetOpacity = 1 - ((SERVICES.length - index) / SERVICES.length) * 0.1;
                    const start = index / SERVICES.length;
                    return (

                        <ServiceCard
                            progress={scrollYProgress} range={[start, 1]} targetScale={targetScale}
                            key={service.id} service={service} i={index}
                            targetOpacity={targetOpacity}
                        />

                    )
                })}
            </div>


        </section>

    )
}