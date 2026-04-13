 
import { dashboard, login, register } from '@/routes';
import GuestLayout from '@/layouts/guest-layout';
import HeroSection from '@/components/pages/hero-section';
import AboutSection from '@/components/pages/about-section';
import ServicesSection from '@/components/pages/services-section';
import ClientSection from '@/components/pages/client-section';
import { useRef } from 'react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
 
 

 const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  
     const scrollToNextSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

    return (
        <GuestLayout>
          
            <HeroSection learnMoreClick = {() => scrollToNextSection(section2Ref)}/>
            <AboutSection ref = {section2Ref}/>
            <ServicesSection />
            <ClientSection />
        </GuestLayout>
    );
}


// ORIGINAL SCRIPT

//    <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
//                 <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
//                     <nav className="flex items-center justify-end gap-4">
//                         {auth.user ? (
//                             <Link
//                                 href={dashboardUrl}
//                                 className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
//                             >
//                                 Dashboard
//                             </Link>
//                         ) : (
//                             <>
//                                 <Link
//                                     href={login()}
//                                     className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
//                                 >
//                                     Log in
//                                 </Link>
//                                 {canRegister && (
//                                     <Link
//                                         href={register()}
//                                         className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
//                                     >
//                                         Register
//                                     </Link>
//                                 )}
//                             </>
//                         )}
//                     </nav>
//                 </header>
              
               
//             </div>