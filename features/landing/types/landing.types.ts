import { STEPS } from "../constants/landing.constants";

export type Steps = (typeof STEPS)[keyof typeof STEPS];