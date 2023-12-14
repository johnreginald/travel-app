import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import {PageProps} from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {FaEdit, FaEye, FaTrash} from "react-icons/fa";
import PaginationLinks from "@/Components/PaginationLinks";

export default function Index({auth, tours, pagination_per_page}: PageProps) {
    const deleteTour = (id: number) => {
        if (confirm('Are you sure you want to delete this tour?')) {
            router.delete(route('tours.destroy', id));
        }
    };

    const header = (
        <div className="flex justify-between">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Tours</h2>
            {auth.user.roles && auth.user.roles.includes('Admin') && (
                <div>
                    <Link href={route('tours.create')}>
                        <PrimaryButton>
                            Create Tour
                        </PrimaryButton>
                    </Link>
                </div>
            )}
        </div>
    )

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={header}
        >
            <Head title="Tours"/>

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
                            Status
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Price
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Start Date
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            End Date
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {tours.data.length === 0 &&
                        <tr>
                            <td colSpan={4} className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">No tours found.</div>
                            </td>
                        </tr>
                    }

                    {tours.data.map((tour) => (
                        <tr key={tour.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <img src={tour.image_url} alt="tour image"
                                         className="w-20 h-20 rounded object-cover"/>
                                    <div className="ml-4 text-gray-900 text-base">{tour.name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.human_readable_status}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.human_readable_price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.human_readable_start_date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{tour.human_readable_end_date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-2">
                                    <Link href={route('tours.show', tour.id)}>
                                        <PrimaryButton className={"py-2"}>
                                            <FaEye/>
                                        </PrimaryButton>
                                    </Link>

                                    {auth.user.roles && auth.user.roles.includes('Admin') && (
                                        <>
                                            <Link href={route('tours.edit', tour.id)}>
                                                <PrimaryButton className={"py-2"}>
                                                    <FaEdit/>
                                                </PrimaryButton>
                                            </Link>

                                            <SecondaryButton onClick={() => deleteTour(tour.id)}>
                                                <FaTrash/>
                                            </SecondaryButton>
                                        </>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>

                {tours.total >= pagination_per_page && (
                    <PaginationLinks pagination={tours} onPageChange={
                        (page: number) => router.replace(route('tours.index', {page: page}))
                    }/>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
