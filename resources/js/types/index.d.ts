export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

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
    current_people: number;
    status: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    tours: Tour[];
    tour: Tour;
};
