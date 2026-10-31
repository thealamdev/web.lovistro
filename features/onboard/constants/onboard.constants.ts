export const ONBOARD_STEPS = {
    GREETING: 'greeting',
    NAME: 'name',
    BIRTHDAY: 'birthday',
    PHONE: 'phone',
    GENDER: 'gender',
    RELIGION: 'religion',
    MARITAL_STATUS: 'marital-status',
    NATIONALITY: 'nationality',
    LANGUAGE: 'language',
    GALLERY: 'gallery',
} as const;

export type OnboardSteps =
    (typeof ONBOARD_STEPS)[keyof typeof ONBOARD_STEPS];