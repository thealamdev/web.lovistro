import { STEPS } from "../constants/onboard.constants";

export type Steps = (typeof STEPS)[keyof typeof STEPS];