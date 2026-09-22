import { getWhatsAppUrl, site } from "../data/site";

export function Hero() {
    return (
        <section className="hero-section relative min-h-[100svh] overflow-hidden bg-[var(--color-dark)]">
            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    bg-no-repeat
                    hero-background
                "
                style={{
                    backgroundImage:
                        "url('/herobanner.jpg')",
                }}
            />
            <div
                className="
                    absolute
                    inset-0
                    bg-linear-to-b
                    from-black/45
                    via-black/55
                    to-[var(--color-dark)]
                "
            />
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-[100svh]
                    flex-col
                    justify-end
                    px-5
                    pb-10
                    pt-20
                    sm:px-8
                "
            >
                <div className="hero-content mx-auto w-full max-w-7xl">
                    <span
                        className="hero-item hero-eyebrow 
                            mb-4
                            block
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[var(--color-blue)]
                        "
                    >
                        Machimbre de PVC para techos
                    </span>

                    <h1
                        className="hero-item hero-title 
                            max-w-3xl
                            text-4xl
                            font-bold
                            leading-[1.05]
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-7xl
                        "
                    >
                        Renová tu techo
                        <span className="block text-[var(--color-blue)]">
                            sin una obra complicada.
                        </span>
                    </h1>

                    <p
                        className="hero-item hero-copy 
                            mt-5
                            max-w-xl
                            text-base
                            leading-relaxed
                            text-white/80
                            sm:text-lg
                        "
                    >
                        Instalación de machimbre de PVC para
                        cielorrasos. Una terminación limpia y moderna,
                        práctica para el día a día y fácil de mantener.
                    </p>

                    <div
                        className="hero-item hero-details 
                            mt-6
                            flex
                            flex-col
                            gap-3
                            text-sm
                            text-white/90
                            sm:flex-row
                        "
                    >
                        <span>📍 {site.location}</span>

                        <span className="hidden sm:inline">
                            •
                        </span>

                        <span>Visita y presupuesto sin cargo</span>
                    </div>

                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-item hero-cta 
                            mt-8
                            inline-flex
                            w-full
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-whatsapp)]
                            px-6
                            py-4
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-[var(--color-whatsapp-hover)]
                            active:scale-[0.98]
                            sm:w-auto
                        "
                    >
                        Solicitar presupuesto
                        <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
