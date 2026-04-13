import FlipLinkWithIcon from "@/components/animated/flip-link-with-icon";
import AppLogo from "@/components/app-logo";
import GuestLayout from "@/layouts/guest-layout";
import { ArrowUpLeftIcon, ArrowUpRightIcon } from "lucide-react";

export default function Error404() {
    return (
      <GuestLayout title="Contact Us">
            <div className="container mx-auto py-10  ">
                <div className="max-w-48 mb-20">
                    <AppLogo color="light" />
                </div>

                <FlipLinkWithIcon icon={ArrowUpRightIcon} color="dark">404 ERROR </FlipLinkWithIcon>

                <h2 className="text-9xl md:text-9xl font-medium max-w-4xl leading-none tracking-tighter mb-6 ">
                 Oops! That page
can’t be found.
                </h2>


<p className="text-3xl max-w-4xl mb-6" >
    It looks like nothing was found at this location.
</p>
               <FlipLinkWithIcon icon={ArrowUpLeftIcon} color="dark" href="/">BACK TO HOME </FlipLinkWithIcon>
            </div>

        </GuestLayout>
    )
}   