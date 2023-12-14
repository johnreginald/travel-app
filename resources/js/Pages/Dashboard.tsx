import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function Dashboard({auth, dashboard}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12 grid grid-cols-4 gap-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                    <div className="p-6 text-gray-900">
                        <h4 className="text-bold text-lg mb-4">Total Earnings</h4>
                        <p>
                            {dashboard.totalEarnings}
                        </p>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                    <div className="p-6 text-gray-900">
                        <h4 className="text-bold text-lg mb-4">Total Bookings</h4>
                        <p>
                            {dashboard.totalBookings}
                        </p>
                    </div>
                </div>


                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                    <div className="p-6 text-gray-900">
                        <h4 className="text-bold text-lg mb-4">Total Tours</h4>
                        <p>{dashboard.totalTours}</p>
                    </div>
                </div>


                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-center">
                    <div className="p-6 text-gray-900">
                        <h4 className="text-bold text-lg mb-4">Total Users</h4>
                        <p>
                            {dashboard.totalUsers}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
