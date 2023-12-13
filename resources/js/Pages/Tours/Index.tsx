import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({auth, tours}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tours</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('tours.create')}>
                    <PrimaryButton>
                        Create Tour
                    </PrimaryButton>
                </Link>
            </div>

            <div className="mt-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <h2 className="mb-5 text-lg text-bold">Tour Packages</h2>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Name
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Description
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Price
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {tours.map((tour) => (
                        <tr key={tour.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.description}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={route('tours.edit', tour.id)}>
                                    <PrimaryButton>Edit</PrimaryButton>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
