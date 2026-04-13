import { ArrowRight, ArrowUpRight } from "lucide-react";


const clients = [
    {
        name: "Dvara KGFS",
        url: "/images/clients/dvara-kgfs.png"
    },
    {
        name: "Equitas Bank",
        url: "/images/clients/equitas.png"
    },
    {
        name: "Future Works",
        url: "/images/clients/future-works-logo.png"
    },



    {
        name: "Kawasaki",
        url: "/images/clients/kawasaki.png"
    }, {
        name: "One Dental World LLC",
        url: "/images/clients/odw-logo.png"
    },
    {
        name: "Knitech Industries",
        url: "/images/clients/knitech-industries.png"
    },

     {
        name: "Veds Music ",
        url: "/images/clients/veds-music.png"
    },

     

     {
        name: "Aalamaram Learning",
        url: "/images/clients/aalamaram-learning.png"
    },

    {
        name: "Level Up Learning Centre",
        url: "/images/clients/LevelUp-Logo.png"
    },
    {
        name: "Sai Ortho Care",
        url: "/images/clients/sai-ortho-care.png"
    },
     {
        name: "Cliniquest",
        url: "/images/clients/cliniquest.png"
    },

       {
        name: "PYK Yoga & Astrology",
        url: "/images/clients/pyk-client-logo.png"
    },
    {
        name:"Grass Root",
        url: "/images/clients/grassroot-logo.png"
    },
    {
        name:"Smart Nxt",
        url: "/images/clients/smart-nxt.png"
    },
    {
        name:"Strikerz",
        url: "/images/clients/strikerz.png"
    },
    {
        name:"Brooks Enviro Engineering",
        url: "/images/clients/bee-1.png"
    }

   
]

export default function ClientSection() {
    return (
        <div className="  py-16 px-12 ">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="col-span-2 text-3xl font-semibold tracking-tighter ">
                    <div className="text-base uppercase border-b border-foreground/10 me-8 flex items-center gap-6 pb-3 mb-3">
                        <span>Our Clients</span> <ArrowRight className="w-5 h-5  " />
                    </div>
                    <div> Some friends we made while working together. </div>



                </div>

                <div className="col-span-4 md:col-span-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 ">
                        {clients.map((client) => (
                            <div className="bg-white rounded-lg p-6 text-center  ">
                                <img src={client.url} alt={client.name} className="max-h-15" />

                            </div>
                        ))}



                    </div>
                </div>
            </div>
        </div>
    )
}