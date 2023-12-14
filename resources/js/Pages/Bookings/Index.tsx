import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import {PageProps} from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {FaChevronLeft, FaEdit, FaTrash} from "react-icons/fa";
import PaginationLinks from "@/Components/PaginationLinks";

export default function Index({auth, tour, bookings, pagination_per_page}: PageProps) {
    const deleteBooking = (id: number) => {
        router.delete(route('tours.destroy', id));
    };

    const header = (
        <div className="flex justify-between">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Booking for Tour - {tour.name}</h2>
            <div>
                <Link href={route('bookings.create', tour.id)}>
                    <PrimaryButton>
                        Book Another
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    )

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={header}
        >
            <Head title="Bookings"/>

            <div className="mt-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('tours.show', tour.id)}>
                    <PrimaryButton className="mb-4">
                        <FaChevronLeft/> Back
                    </PrimaryButton>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Number of People
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Total
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Booked at
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.data.length === 0 &&
                        <tr>
                            <td colSpan={4} className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">No bookings found.</div>
                            </td>
                        </tr>
                    }

                    {bookings.data.map((booking) => (
                        <tr key={tour.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{booking.number_of_people}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{booking.total_price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{booking.human_readable_booking_date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-2">
                                    <Link href={route('tours.edit', booking.id)}>
                                        <PrimaryButton className={"py-2"}>
                                            <FaEdit/>
                                        </PrimaryButton>
                                    </Link>

                                    <SecondaryButton onClick={() => deleteBooking(booking.id)}>
                                        <FaTrash/>
                                    </SecondaryButton>
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>

                {bookings.total > pagination_per_page && (
                    <PaginationLinks pagination={bookings} onPageChange={
                        (page: number) => router.replace(route('bookings.index', {page: page}))
                    }/>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
