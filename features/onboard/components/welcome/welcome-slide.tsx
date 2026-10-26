import type { WelcomeSlide as WelcomeSlideType } from "../../types/welcome.types";

type PageProps = {
    slide: WelcomeSlideType;
};

export function WelcomeSlide({ slide }: PageProps) {
    return (
        <div className="min-w-0 shrink-0 grow-0 basis-full">
            <h1 className="flex flex-col items-start gap-3">
                <span className="rounded-md bg-primary px-2 py-0.5 text-[#1B212D] text-[32px] font-bold leading-10">
                    {slide.highlight}
                </span>
                <span className="text-foreground text-[32px] font-bold leading-8">{slide.title}</span>
            </h1>
            <p className="mt-6 text-base leading-5 text-muted-foreground">
                {slide.description}
            </p>
        </div>
    );
}