import { OnboardFormState } from '../types/onboard-form.types';

export const INITIAL_ONBOARD_FORM: OnboardFormState = {
    name: '',
    birthday: '',

    countryCode: '+880',
    phoneNumber: '',

    gender: null,
    religion: null,

    maritalStatus: '',

    nationalities: [],
    languages: [],

    photos: [],
    acknowledgment: false,
};