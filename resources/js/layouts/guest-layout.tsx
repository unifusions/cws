 
import type { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
// import GuestNavbar from './guest/guest-navbar';
import GuestFooter from './guest/guest-footer';

import { ReactLenis } from 'lenis/react'

export default function GuestLayout({
    title,
    breadcrumbs = [],
    children,
}: {
    title?:string;
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {

     

    return (
        <>
          <ReactLenis root />
         
             


            <div className="min-h-screen bg-background">

                {/* <GuestNavbar /> */}
                <main>
                    {children}
                </main>
            </div>
            <GuestFooter />


        </>
    );
}
