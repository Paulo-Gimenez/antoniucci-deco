import { getWhatsAppUrl, site } from "../data/site";

export function Footer() {
    return (
        <footer className="bg-[var(--color-dark)] text-white">
            <section className="px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue)]">
                            ¿Pensás renovar tu techo?
                        </span>

                        <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight sm:text-5xl">
                            Contanos qué necesitás.
                        </h2>

                        <p className="mt-4 max-w-md text-white/60">
                            Coordinamos una visita y preparamos tu
                            presupuesto sin cargo.
                        </p>
                    </div>

                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-whatsapp)]
                            px-7
                            py-4
                            text-sm
                            font-semibold
                            transition
                            hover:bg-[var(--color-whatsapp-hover)]
                        "
                    >
                        Solicitar presupuesto
                        <span className="ml-2">→</span>
                    </a>
                </div>
            </section>

            <div className="border-t border-white/10">
                <div
                    className="
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        gap-5
                        px-5
                        py-7
                        text-sm
                        sm:px-8
                        md:flex-row
                        md:items-center
                        md:justify-between
                    "
                >
                    <div>
                        <p className="font-semibold">
                            {site.fullName}
                        </p>

                        <p className="mt-1 text-white/40">
                            {site.location}
                        </p>
                    </div>

                    <div className="flex gap-5">
                        <a
                            href={site.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/60 transition hover:text-white"
                        >
                            Instagram
                        </a>

                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/60 transition hover:text-white"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                <p className="px-5 pb-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/20 sm:px-8">
                    Sitio desarrollado por Gisultech
                </p>
            </div>
        </footer>
    );
}
