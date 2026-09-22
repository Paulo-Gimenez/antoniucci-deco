import { getWhatsAppUrl } from "../data/site";

export function BeforeAfter() {
    return (
        <section className="bg-[var(--color-dark)] text-white">
            <div className="grid lg:grid-cols-2">
                <div className="reveal grid grid-cols-2" data-reveal>
                    <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                            src="/before.png"
                            alt="Techo antes de la renovación"
                            className="h-full w-full object-cover"
                        />

                        <span className="absolute left-4 top-4 rounded-md bg-black/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
                            Antes
                        </span>
                    </div>

                    <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                            src="/after.png"
                            alt="Techo terminado con machimbre de PVC"
                            className="h-full w-full object-cover"
                        />

                        <span className="absolute left-4 top-4 rounded-md bg-[var(--color-blue)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide">
                            Después
                        </span>
                    </div>
                </div>

                <div className="flex items-center px-5 py-12 sm:px-8 lg:px-12">
                    <div className="reveal max-w-lg" data-reveal>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                            Mirá la diferencia
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Así transformamos los espacios.
                        </h2>

                        <p className="mt-5 leading-relaxed text-white/65">
                            Cada techo tiene sus propias características.
                            Visitamos el lugar, evaluamos el trabajo y
                            preparamos un presupuesto acorde a tu proyecto.
                        </p>

                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                mt-7
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
                                transition
                                hover:bg-[var(--color-whatsapp-hover)]
                                sm:w-auto
                            "
                        >
                            Quiero presupuestar mi techo
                            <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
