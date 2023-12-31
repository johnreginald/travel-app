import React, {ChangeEvent} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaChevronLeft} from "react-icons/fa";

export default function Edit({auth, tour}: PageProps) {
    const {image, ...restOfTour} = tour;

    const {data, setData, post, reset, errors} = useForm({
        ...restOfTour,
        image: new File([], ''),
        _method: 'put',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tours.update', tour.id));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setData('image', e.target.files[0]);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editing - {tour.name}</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('tours.index')}>
                    <PrimaryButton className="mb-4">
                        <FaChevronLeft/> Back
                    </PrimaryButton>
                </Link>

                <form onSubmit={submit}
                      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            placeholder="Destination Name"
                        />
                        {errors && <InputError message={errors.name} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            rows={5}
                        />
                        {errors && <InputError message={errors.description} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price" type="number"
                            placeholder="Price"
                            value={data.price}
                            onChange={e => setData('price', parseInt(e.target.value))}
                        />
                        {errors && <InputError message={errors.price} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>

                        {data.image_url && (
                            <img src={data.image_url} alt={data.name} className="w-1/4 mb-5"/>
                        )}

                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="file"
                            id="image"
                            onChange={handleFileChange}
                        />
                        {errors && <InputError message={errors.image} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
                            Start Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="start_date" type="date"
                            placeholder="Start Date"
                            value={data.start_date}
                            onChange={e => setData('start_date', e.target.value)}
                        />
                        {errors && <InputError message={errors.start_date} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_date">
                            End Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="end_date"
                            type="date"
                            placeholder="End Date"
                            value={data.end_date}
                            onChange={e => setData('end_date', e.target.value)}
                        />
                        {errors && <InputError message={errors.end_date} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="max_people">
                            Max People
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="max_people" type="number"
                            placeholder="Max People"
                            value={data.max_people}
                            onChange={e => setData('max_people', parseInt(e.target.value))}
                        />
                        {errors && <InputError message={errors.max_people} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="max_people">
                            Min People
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="max_people" type="number"
                            placeholder="Min People"
                            value={data.min_people}
                            onChange={e => setData('min_people', parseInt(e.target.value))}
                        />
                        {errors && <InputError message={errors.max_people} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="max_people">
                            Status
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled"
                            id="status"
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                        {errors && <InputError message={errors.status} className="mt-2"/>}
                    </div>

                    <div className="flex items-center justify-between">
                        <PrimaryButton type="submit" className="py-2">
                            Update Tour
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
