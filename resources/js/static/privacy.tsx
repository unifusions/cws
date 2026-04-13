import FlipLinkWithIcon from "@/components/animated/flip-link-with-icon";
import AppLogo from "@/components/app-logo";
import GuestLayout from "@/layouts/guest-layout";
import { ArrowDownRightIcon } from "lucide-react";


const ParaTitle = ({ children }) => {  
    return(
        <h3 className="text-2xl font-bold mb-1">
            {children}
        </h3>   
    )
 }
const Para = ({ children }) => {
    return (
        <p className="text-base tracking-tight mb-3">
            {children}
        </p>
    );
};
export default function Privacy() {
    return (
        <GuestLayout>
            <div className="container mx-auto py-10  ">
                <div className="max-w-48 mb-20">
                    <AppLogo color="light" />
                </div>

                <FlipLinkWithIcon icon={ArrowDownRightIcon} color="dark">PRIVACY </FlipLinkWithIcon>

                <h2 className="text-4xl md:text-7xl font-black  leading-none tracking-tighter mb-6 ">
                    Privacy Policy – Unifusions
                </h2>
                <p className="mb-3">
                    Effective Date: <b>09/06/2024</b>
                </p>


                <Para>
                    At <b>Unifusions</b>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit www.unifusions.com
                    or use our services.
                </Para>


                <ParaTitle>Information We Collect</ParaTitle>
                <div className="mb-3">
                    We may collect the following information:

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div>
                            <b>Personal Information</b>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business details (if provided)</li>

                            </ul>
                        </div>

                        <div>
                            <b>Technical Data</b>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Pages visited and time spent</li>
                            </ul></div>
                        <div>
                            <b>Communication Data</b>
                            <ul>
                                <li>Messages submitted via contact forms</li>
                                <li>Emails or WhatsApp communication</li>
                            </ul>
                        </div>

                    </div>






                </div>

                <ParaTitle>How We Use Your Information</ParaTitle>
                <Para>
                    We use your information to:
                    <ul>
                        <li>Respond to inquiries and provide support</li>
                        <li>Deliver our services (design, development, marketing, etc.)</li>
                        <li>Improve website performance and user experience</li>
                        <li>Send updates, proposals, or service-related communication</li>
                        <li>Maintain internal records and analytics</li>
                    </ul>

                </Para>

                <ParaTitle >Data Sharing & Disclosure</ParaTitle>
                <Para>
                    We may share data only with trusted service providers (hosting, analytics, etc.), When required by law or legal process or
                    To protect our business rights and security


                </Para>
                <ParaTitle>Cookies & Tracking Technologies</ParaTitle>
                <Para>
                    Our website may use cookies to enhance user experience, analyze traffic and usage patterns. You can disable cookies in your browser settings.

                </Para>

                <ParaTitle  >Data Security</ParaTitle>
                <p>
                    We implement industry-standard measures to protect your data. However, no online transmission is 100% secure, and we cannot guarantee absolute security.

                </p>
                <ParaTitle  >Your Rights</ParaTitle>
                <Para>
                    You have the right to access your data, request corrections, or ask for deletion. You can also withdraw consent for communication at any time by contacting us. To exercise these rights, please contact us at <a href="mailto:support@unifusions.com">support@unifusions.com</a>

                </Para>

                   <ParaTitle  >Third-Party Links</ParaTitle>
                <Para>
                 Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies before providing any information.

                </Para>


                 <ParaTitle  >Contact Us</ParaTitle>
                <Para  >
                For any privacy-related concerns or questions, please contact us at <a href="mailto:support@unifusions.com">support@unifusions.com</a>

                </Para>


            </div >

        </GuestLayout >

    );
}   