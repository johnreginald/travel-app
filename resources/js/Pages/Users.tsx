import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {PageProps} from "@/types";
import PaginationLinks from "@/Components/PaginationLinks";

export default function Index({auth, users, pagination_per_page}: PageProps) {
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
                                <div className="text-sm text-gray-900">{user.role}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.human_readable_created_date}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <select
                                    className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline disabled"
                                    onChange={(e) => {
                                        router.put(route('users.upgradeRole', {user: user.id}), {
                                            role: e.target.value
                                        })
                                    }}>
                                    <option disabled selected>Select Role</option>
                                    <option value="Admin" selected={user.role === 'Admin'}>Admin</option>
                                    <option value="Editor" selected={user.role === 'Editor'}>Editor</option>
                                </select>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>

                {users.total > pagination_per_page && (
                    <PaginationLinks pagination={users} onPageChange={
                        (page: number) => router.replace(route('users.index', {page: page}))
                    }/>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
