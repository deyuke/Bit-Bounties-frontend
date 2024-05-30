export type Posting = {
    key?: number;
    id: number;
    company_id: number;
    title: string;
    slug: string;
    description: string;
    is_active: number;
    created_at: string;
    updated_at: string;
}

export type Company = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    street: string;
    postal_code: string;
    city: string;
    country: string;
    created_at: string;
    updated_at: string;
}

export type Bounty = Posting & {
    company_name: string;
}