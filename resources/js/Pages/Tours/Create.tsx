import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";

export default function Create({auth}: PageProps) {
    const {data, setData, post, processing, reset, errors} = useForm({
        name: '',
        description: '',
        price: '',
        image: null,
        start_date: '',
        end_date: '',
        max_people: '',
        min_people: '',
        current_people: '',
        status: 'public',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tours.store'), {onSuccess: () => reset()});
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

                    <h4 className="mb-5 text-lg">Create Tour</h4>

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
                        <InputError message={errors.name} className="mt-2"/>
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
                        <InputError message={errors.description} className="mt-2"/>
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
                            onChange={e => setData('price', e.target.value)}
                        />
                        <InputError message={errors.price} className="mt-2"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="file"
                            id="image"
                            onChange={e => setData('image', e.target.files[0])}
                        />
                        <InputError message={errors.image} className="mt-2"/>
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
                        <InputError message={errors.start_date} className="mt-2"/>
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
                        <InputError message={errors.end_date} className="mt-2"/>
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
                            onChange={e => setData('max_people', e.target.value)}
                        />
                        <InputError message={errors.max_people} className="mt-2"/>
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
                            onChange={e => setData('min_people', e.target.value)}
                        />
                        <InputError message={errors.max_people} className="mt-2"/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current_people">
                            Current People
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled"
                            id="current_people" type="number"
                            placeholder="Current People"
                            value={data.current_people}
                            onChange={e => setData('current_people', e.target.value)}
                        />
                        <InputError message={errors.current_people} className="mt-2"/>
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
                        <InputError message={errors.status} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
