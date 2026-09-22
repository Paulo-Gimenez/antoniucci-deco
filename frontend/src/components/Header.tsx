import { site } from "../data/site";

export function Header() {
    return (
        <header
            className="
                absolute
                inset-x-0
                top-0
                z-50
                border-b
                border-white/10
                bg-transparent
                backdrop-blur
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-18
                    max-w-7xl
                    items-center
                    justify-between
                    px-5
                    sm:px-8
                "
            >
                <a href="#" className="flex items-center gap-3">
                    <img
                        src="/icon.png"
                        alt="Antoniucci"
                        className="size-10 rounded-lg object-cover"
                    />

                    <div className="leading-none">
                        <p className="text-sm font-bold tracking-[0.18em] text-white">
                            {site.name.toUpperCase()}
                        </p>

                        <p className="mt-1 text-[9px] tracking-[0.22em] text-white/60">
                            DECOREVESTIMIENTOS
                        </p>
                    </div>
                </a>

                <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 sm:inline-flex"
                >
                    <InstagramIcon />
                    Instagram
                </a>

                <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="
                        flex
                        size-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        text-[0px]
                        sm:hidden
                    "
                >
                    ◎
                    <InstagramIcon />
                </a>
            </div>
        </header>
    );
}

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
    );
}
