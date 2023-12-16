import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import {PageProps} from "@/types";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaChevronLeft} from "react-icons/fa";

export default function Edit({auth, user}: PageProps) {
    const {data, setData, put, reset, errors} = useForm({
        name: user.name,
        email: user.email,
        role: user.roles[0] ?? 'User',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        put(route('users.update', user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Editing - {user.name}</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-3xl mx-auto sm:px-6 lg:px-8">
                <Link href={route('users.index')}>
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
                            placeholder="Name"
                        />
                        {errors && <InputError message={errors.name} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            placeholder="Email"
                        />
                        {errors && <InputError message={errors.email} className="mt-2"/>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                            Role
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled"
                            id="role"
                            value={data.role}
                            onChange={e => setData('role', e.target.value)}
                        >
                            <option value="User" selected={user.roles.includes('User')}>User</option>
                            <option value="Admin" selected={user.roles.includes('Admin')}>Admin</option>
                            <option value="Editor" selected={user.roles.includes('Editor')}>Editor</option>
                        </select>
                        <InputError message={errors.role} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <PrimaryButton type="submit" className="py-2">
                            Update User
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
