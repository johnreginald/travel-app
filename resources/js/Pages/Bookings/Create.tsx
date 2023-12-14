import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";

export default function Create({auth, tour}: PageProps) {
    const {data, setData, post, processing, reset, errors} = useForm({
        'number_of_people': 1,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('bookings.store', tour.id), {onSuccess: () => reset()});
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tours</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={submit}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <h4 className="mb-5 text-lg">Book for Tour - {tour.name}</h4>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number_of_people">
                            Number of People
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="number_of_people" type="number"
                            placeholder="Number of People"
                            value={data.number_of_people}
                            onChange={e => setData('number_of_people', parseInt(e.target.value))}
                        />
                        <InputError message={errors.number_of_people} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Book
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
