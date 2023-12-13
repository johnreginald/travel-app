import {Head} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {PageProps} from "@/types";

export default function Show({auth, tour}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tours</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <img src={tour.image} alt={tour.name}
                         className="mb-5 border rounded-lg shadow"/>

                    <h4 className="mb-5 text-lg">{tour.name} - {tour.human_readable_status} Tour</h4>

                    <p className="mb-5">{tour.description}</p>

                    <p className="mb-5"><b>Price</b>: {tour.human_readable_price}</p>

                    <p className="mb-5"><b>Start Date</b> - {tour.human_readable_start_date} ~ <b>End
                        Date</b> - {tour.human_readable_end_date}</p>

                    <p className="mb-5">Group Size - mininum <b>{tour.min_people}</b> to
                        maximum <b>{tour.max_people}</b> (current ~ {tour.current_people})</p>
                </div>
            </div>


        </AuthenticatedLayout>
    )
}
