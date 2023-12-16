import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router} from '@inertiajs/react';
import {PageProps} from "@/types";
import PaginationLinks from "@/Components/PaginationLinks";
import PrimaryButton from "@/Components/PrimaryButton";
import {FaEdit, FaTrash} from "react-icons/fa";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Index({auth, users, pagination_per_page}: PageProps) {

    const deleteUser = (id: number) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(route('users.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Tours"/>

            <div className="mt-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Name
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Email
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Role
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Created Date
                        </th>
                        <th scope="col"
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {users.data.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                    className="text-sm text-gray-900">{user.roles.join(', ')}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.human_readable_created_date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex gap-2">
                                    {auth.user.roles && auth.user.roles.includes('Admin') && (
                                        <>
                                            <Link href={route('users.edit', user.id)}>
                                                <PrimaryButton className={"py-2"}>
                                                    <FaEdit/>
                                                </PrimaryButton>
                                            </Link>

                                            <SecondaryButton onClick={() => deleteUser(user.id)}>
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

                {users.meta.total >= pagination_per_page && (
                    <PaginationLinks pagination={users.meta} onPageChange={
                        (page: number) => router.replace(route('users.index', {page: page}))
                    }/>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
