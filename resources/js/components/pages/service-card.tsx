import { motion, useTransform } from "motion/react";

export default function ServiceCard({ service, progress, i, range, targetScale, targetOpacity }: any) {


    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(progress, range, [1, targetOpacity]);


    return (

        <motion.div className=" bg-white sticky top-35 md:top-60"
            style={{
                // scale,
                opacity,
                // top:`calc(10vh + ${i * 25}px)`
                
            }}
        >
            <motion.div className="min-h-90 p-16 bg-muted rounded-lg items-center"
                // style={{ scale }}
            >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                    <div className="col-span-2">
 <h2 className="text-6xl text-accent-secondary/20 md:text-9xl  ">
                    [{service.label_no}]
                </h2>
                    </div>
                    <div className="col-span-3">
   <h1 className="text-4xl  md:text-6xl font-bold tracking-tighter md:max-w-3/4 mb-3">
                    {service.label} <span className="text-accent">.</span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold tracking-tight">{service.description}</p>
                    </div>
                </div>
               

             
            </motion.div>


        </motion.div>
    )
}