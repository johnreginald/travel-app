import React, {ChangeEvent} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaChevronLeft} from "react-icons/fa";

export default function Create({auth}: PageProps) {
    const {data, setData, post, processing, reset, errors} = useForm({
        name: '',
        description: '',
        price: '',
        image: new File([], ''),
        start_date: '',
        end_date: '',
        max_people: '',
        min_people: '',
        status: 'public',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tours.store'), {onSuccess: () => reset()});
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setData('image', e.target.files[0]);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Tour</h2>}
        >
            <Head title="Create new Tour"/>

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
                            onChange={handleFileChange}
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="min_people">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
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
                        <PrimaryButton type="submit" className="py-2">
                            Create Tour
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
