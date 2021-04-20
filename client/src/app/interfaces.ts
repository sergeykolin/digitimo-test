export interface iReview {
    name: string;
    email: string;
    age?: number;
    gender?: number;
    country?: string;
    rating: number;
    orign_page?: string;
    note?: string;
}

export interface iGender {
    name: string;
    type: number;
}

export interface iCountryAnalytics {
    name?: string;
    count?: number;
}

export interface iAnalytics {
    female: number,
    male: number,
    average_age: number,
    average_rating: number,
    countries: iCountryAnalytics[],
    total: number,
    without_gender?: number,
    indicated_age: number,
}

export interface iCountry {
    code: string;
    id: string;
}