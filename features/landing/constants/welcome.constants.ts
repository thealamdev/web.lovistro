import type { WelcomeSlide } from "../types/welcome.types";

export const WELCOME_SLIDES: WelcomeSlide[] = [
    {
        id: 1,
        highlight: "Begin Your",
        title: "Journey to Love",
        description:
            "Find meaningful connections and your perfect life partner with Lovistro.",
    },
    {
        id: 2,
        highlight: "Matchmaking",
        title: "You Can Trust",
        description:
            "Verified profiles and matches aligned with your values and aspirations.",
    },
    {
        id: 3,
        highlight: "Find, Connect",
        title: "and Cherish",
        description:
            "Find, Connect, Swipe, chat, and build a lasting bond with your ideal partner.",
    },
];

export const TOTAL_STEPS = WELCOME_SLIDES.length;
export const AUTOPLAY_DELAY = 3000;

export const socialButtonClass =
    "h-12 w-full gap-2 rounded-lg bg-[#333533] text-sm font-medium text-foreground hover:bg-[#3d3f3d]";
