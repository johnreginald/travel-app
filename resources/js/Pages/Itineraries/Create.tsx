import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, useForm} from "@inertiajs/react";
import React from "react";
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaChevronLeft} from "react-icons/fa";

export default function Create({auth, tour}: PageProps) {
    const {data, setData, post, processing, reset, errors} = useForm({
        days_number: '',
        destination: '',
        eat: '',
        leisure: '',
        travel_by: '',

        start_at: '',
        end_at: '',

        location: '',
        activities: '',
        other_details: '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('itineraries.store', tour.id), {onSuccess: () => reset()});
    };

    const renderInput = (
        label: string,
        name: string,
        type: string,
        placeholder: string,
        value: any,
        onChange: (value: any) => void,
        error: string | undefined
    ) => (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {error && <InputError message={error} className="mt-2"/>}
        </div>
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add new Tour Itinerary</h2>}
        >
            <Head title="Tour Itineraries"/>

            <div className="mt-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('tours.show', tour.id)}>
                    <PrimaryButton className="mb-4">
                        <FaChevronLeft/> Back
                    </PrimaryButton>
                </Link>
            </div>

            <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={submit}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    {renderInput(
                        'Days',
                        'days_number',
                        'number',
                        'Days',
                        data.days_number,
                        (value: string) => setData('days_number', value),
                        errors.days_number
                    )}

                    {renderInput(
                        'Destination',
                        'destination',
                        'text',
                        'Destination',
                        data.destination,
                        (value: string) => setData('destination', value),
                        errors.destination
                    )}

                    {renderInput(
                        'Location',
                        'location',
                        'text',
                        'Location',
                        data.location,
                        (value: string) => setData('location', value),
                        errors.location
                    )}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_at">
                            Start Time
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="start_at" type="time"
                            placeholder="Start Date"
                            value={data.start_at}
                            onChange={e => setData('start_at', e.target.value)}
                        />
                        <InputError message={errors.start_at} className="mt-2"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_at">
                            End Time
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="end_at"
                            type="time"
                            placeholder="End Date"
                            value={data.end_at}
                            onChange={e => setData('end_at', e.target.value)}
                        />
                        <InputError message={errors.end_at} className="mt-2"/>
                    </div>

                    {renderInput(
                        'Eat',
                        'eat',
                        'text',
                        'Eat',
                        data.eat,
                        (value: string) => setData('eat', value),
                        errors.eat
                    )}

                    {renderInput(
                        'Leisure',
                        'leisure',
                        'text',
                        'Leisure',
                        data.leisure,
                        (value: string) => setData('leisure', value),
                        errors.leisure
                    )}

                    {renderInput(
                        'Transport',
                        'travel_by',
                        'text',
                        'Transport',
                        data.travel_by,
                        (value: string) => setData('travel_by', value),
                        errors.travel_by
                    )}

                    {renderInput(
                        'Activities',
                        'activities',
                        'text',
                        'Activities',
                        data.activities,
                        (value: string) => setData('activities', value),
                        errors.activities
                    )}

                    {renderInput(
                        'Other details',
                        'other_details',
                        'text',
                        'Other details',
                        data.other_details,
                        (value: string) => setData('other_details', value),
                        errors.other_details
                    )}

                    <div className="flex items-center justify-between">
                        <PrimaryButton type="submit" className="py-2">
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </AuthenticatedLayout>
    );
}
