import {Head, Link} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {PageProps} from "@/types";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaEdit, FaTrash} from "react-icons/fa";

export default function Show({auth, tour}: PageProps) {
    const deleteItinerary = (id: number) => {

    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tours</h2>}
        >
            <Head title="Tours"/>

            <div className="my-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <img src={tour.image_url} alt={tour.name}
                         className="mb-5 border rounded-lg shadow"/>

                    <h4 className="mb-5 text-lg">{tour.name} - {tour.human_readable_status} Tour</h4>

                    <p className="mb-5">{tour.description}</p>

                    <p className="mb-5"><b>Price</b>: {tour.human_readable_price}</p>

                    <p className="mb-5"><b>Start Date</b> - {tour.human_readable_start_date} ~ <b>End
                        Date</b> - {tour.human_readable_end_date}</p>

                    <p className="mb-5">Group Size - minimum <b>{tour.min_people}</b> to
                        maximum <b>{tour.max_people}</b> (current ~ {tour.current_people})</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8 pb-10">

                <div className="flex">
                    <h2 className="mb-5 text-lg text-bold mr-5">Itineraries</h2>
                    <Link href={route('itineraries.create', {tour: tour.id})}>
                        <PrimaryButton className="ml-auto">Add Itinerary</PrimaryButton>
                    </Link>
                </div>

                {tour.itineraries.map(itinerary => (
                    <div className="bg-white shadow-md" key={itinerary.id}>
                        <div className="bg-sky-500 px-8 py-1 flex justify-between items-center">
                            <h4 className="text-lg text-white">{itinerary.human_readable_days_number}</h4>
                            <div className="flex gap-2">
                                <Link href={route('itineraries.edit', {
                                    tour: tour.id,
                                    itinerary: itinerary.id
                                })}>
                                    <div className="text-gray-900">
                                        <FaEdit/>
                                    </div>
                                </Link>

                                <div className="text-red-600 cursor-pointer" onClick={() => deleteItinerary(tour.id)}>
                                    <FaTrash/>
                                </div>
                            </div>
                        </div>

                        <div className="px-8 py-3">
                            <p className="mb-5"><b>Destination:</b> {itinerary.destination}</p>
                            <p className="mb-5"><b>Location:</b> {itinerary.location}</p>
                            <p className="mb-5">
                                <b>Start at</b> - {itinerary.start_at} ~ <b>End
                                at</b> - {itinerary.end_at}
                            </p>
                            <p className="mb-5"><b>Transport:</b> {itinerary.travel_by}</p>
                            <p>
                                <b>Activities</b>: {itinerary.eat}, {itinerary.leisure}, {itinerary.activities}, {itinerary.other_details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    )
}
