export type Gender = 'male' | 'female';

export type Religion =
    | 'muslim'
    | 'hindu'
    | 'christian'
    | 'buddhist'
    | 'other';

export type OnboardFormState = {
    name: string;
    birthday: string;

    countryCode: string;
    phoneNumber: string;

    gender: Gender | null;
    religion: Religion | null;

    maritalStatus: string;

    nationalities: string[];
    languages: string[];

    photos: string[];
    acknowledgment: boolean;
};