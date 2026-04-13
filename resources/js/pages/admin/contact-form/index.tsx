import { Head } from '@inertiajs/react';
import AppearanceTabs from '@/components/appearance-tabs';
import Heading from '@/components/heading';
import { usePage } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
export default function ContactFormIndex() {
    const { formleads } = usePage().props;
    return (
        <div className='p-4'>
 

          

          
            <Head title="Contact Form" />

            <h1 className="sr-only">Contact Form        </h1>

            <div className="space-y-6">
                <Heading
                    variant="small"
                    title="Contact Form Submissions"
                    description="View and manage your contact form submissions"
                />

                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead className="text-right">Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {formleads.map((lead: any) => (
                            <TableRow key={lead.id}>
                                <TableCell className="font-medium">{lead.name}</TableCell>
                                <TableCell>{lead.email}</TableCell>
                                <TableCell>{lead.phone}</TableCell>
                                <TableCell className="text-right">{lead.message}</TableCell>
                            </TableRow>
                        ))}
                       
                    </TableBody>
                </Table>

               
            </div>
        </div>
    );
}

ContactFormIndex.layout = {
    breadcrumbs: [
        {
            title: 'Contact Form',
            href: '/leads',
        },
    ],
};
