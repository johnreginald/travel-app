import React from 'react';
import {Pagination} from "@/types";

interface PaginationProps {
    pagination: Pagination;
    onPageChange: (page: number) => void;
}

const PaginationLinks: React.FC<PaginationProps> = ({pagination, onPageChange}) => {
    const {current_page, last_page} = pagination;

    const handlePageChange = (page: number) => {
        if (page !== current_page) {
            onPageChange(page);
        }
    };

    return (
        <nav className="flex items-center justify-between my-5">
            <div>
                <p className="text-sm text-gray-700">
                    Showing page {current_page} of {last_page}
                </p>
            </div>
            <div>
                <ul className="flex space-x-2">
                    <li>
                        <button
                            onClick={() => handlePageChange(current_page - 1)}
                            disabled={current_page === 1}
                            className={`px-3 rounded-md ${
                                current_page === 1
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-gray-800 text-white hover:bg-gray-600'
                            }`}
                        >
                            Previous
                        </button>
                    </li>
                    {Array.from({length: last_page}, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => handlePageChange(page)}
                                className={`px-3 rounded-md ${
                                    page === current_page
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handlePageChange(current_page + 1)}
                            disabled={current_page === last_page}
                            className={`px-3 rounded-md ${
                                current_page === last_page
                                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    : 'bg-gray-800 text-white hover:bg-gray-600'
                            }`}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default PaginationLinks;
