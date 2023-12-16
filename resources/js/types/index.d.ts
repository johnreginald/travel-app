export interface Tour {
    id: number;
    name: string;
    description: string;
    price: number;
    image?: File | string | null;
    created_at: string;
    updated_at: string;

    start_date: string;
    end_date: string;

    max_people: number;
    min_people: number;

    status: string;

    human_readable_status: string;
    human_readable_price: string;
    human_readable_start_date: string;
    human_readable_end_date: string;
    image_url: string;
}

export interface Itinerary {
    id: number;
    days_number: number;

    destination: string;
    eat: string;
    leisure: string;
    travel_by: string;

    start_at: string;
    end_at: string;

    location: string;
    activities: string;
    other_details: string;

    human_readable_days_number: string;
}

interface Booking {
    id: number;
    number_of_people: number;
    total_price: number;
    human_readable_booking_date: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    roles: string[];
    human_readable_created_date: string;
    email_verified_at: string;
}

interface Pagination {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    from: number;
    to: number;
}

interface TourPagination extends Pagination {
    data: Tour[];
}

interface ItineraryPagination extends Pagination {
    data: Itinerary[];
}

interface BookingPagination extends Pagination {
    data: Booking[];
}

interface UserPagination extends Pagination {
    data: User[];
    meta: Pagination;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    users: UserPagination;
    user: User;
    tours: TourPagination;
    tour: Tour;
    itinerary: Itinerary;
    pagination: Pagination;
    itineraries: ItineraryPagination;
    pagination_per_page: number;
    booking: Booking;
    bookings: BookingPagination;
    booking_grand_total: number;
    dashboard: {
        totalBookings: number;
        totalTours: number;
        totalEarnings: number;
        totalUsers: number;
    }
};
