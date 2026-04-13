import FlipLinkWithIcon from "@/components/animated/flip-link-with-icon";
import AppLogo from "@/components/app-logo";
import {CardTitle, CardNumber} from "@/components/static/card-title";
import SectionTitle from "@/components/static/section-title";
import GuestLayout from "@/layouts/guest-layout";
import { ArrowDownRightIcon, ArrowRightIcon, ArrowUpRight, CornerRightUp, CornerRightUpIcon } from "lucide-react";

 

const pillTags = [
    "Uniforms", "Merchandising", "Corporate Gifting", "Workwear"
]

 
export default function Uniform() {
    return (
        <GuestLayout>

            <div className="  ">
                <div className="container mx-auto py-10">
                    <div className="max-w-48 mb-20">
                        <AppLogo color="light" />
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <ArrowRightIcon />

                        <span className="text-md uppercase font-bold tracking-tight">Our Offerings /  <span className="text-foreground/80">Uniforms & Giftings</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-5 items-end mb-20">
                        <div className="col-span-2">
                            <h2 className="text-4xl md:text-7xl font-black  leading-none tracking-tighter mb-6 ">
                                Uniforms & Gifting
                            </h2>

                            <div className="flex items-center gap-3">
                                {pillTags.map((pt) =>
                                    <div className="flex items-center border border-black rounded-full px-3 py-1 text-sm font-semibold cursor-pointer
                        hover:bg-black hover:text-white transition
                    ">{pt}
                                        <CornerRightUpIcon className="ms-2 h-4 w-4" /></div>
                                )}
                            </div>
                        </div>
                        <div></div>
                        <div className="align-end col-span-2">
                            <p className="text-3xl font-semibold tracking-tight leading-tight ">
                                Transforming uniforms from apparel identity. Custom engineered styles that reflect, comfort and confidence.
                            </p>
                        </div>

                    </div>

                </div>

                <section>
                    <div className="container mx-auto">
                        <FlipLinkWithIcon icon={ArrowUpRight} color="dark" >WHAT WE OFFER</FlipLinkWithIcon>
                        <SectionTitle >
                            Your One Stop Apparel Solution for all Industries.
                        </SectionTitle>
                        <p>
                            At Unifusions, one of our main service offerings is Contemporary, Custom Made Apparels & Corporate Institutional Uniforms as we believe that everyone deserves to feel and look their
                            best while on-the-job. As a colloborative Uniform design firm and supplier, we are motivated by a dual passion to produce stylish, authentic, well-made clothing
                            for the modern workforce, while relentlessly pursuing a better tech enabled uniform experience for our clients and their stakeholders tasked with managing the uniform production process.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                            <p>With deep and reliable garment industry connections, our supply chain-flexible approach to production allows clients to creatively, sustainably and continuously dress the people that bring their brand to life and proper thier organization forward.</p>
                            <p>The key to our success has been an unrelenting commitment to partnering with only the best manufacturers, producing the best quality embroidery and delivering the most efficient and
                                professional service.
                            </p>
                        </div>
                    </div>

                </section>

                <section className="bg-muted">
                    <div className="container mx-auto py-10">
                        <FlipLinkWithIcon icon={ArrowUpRight} color="dark">OUR APPROACH</FlipLinkWithIcon>
                        <SectionTitle>We understand your apparel needs. And all the goes into it. <span className="text-accent">Literally</span></SectionTitle>
                        <p className="max-w-5xl">
                            We take the time to know your uniform requirements inside-out from the fabric to the usage. The fit is everything. Color is key. Quality, a given.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-6">
                                <CardNumber>01 </CardNumber> 

                                <CardTitle>
  Bespoke Garment Design

                                </CardTitle>
                               <p>
                                Create a unique identity for your business apparel with out flexible customizing program. Select the garments that suit your company's image and then choose colours, 
                                buttons, trims, accessories and other embellishments from our extensive library of custom ideas. Our creative team follows design derivative processes to give maximum options with bulk-feasibility & buyer needs in mind.
                               </p>
                            </div>

                            
                        </div>



                    </div>

                </section>

            </div >

        </GuestLayout >

    );
}   