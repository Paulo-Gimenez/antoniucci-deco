import { site } from "../data/site";

export function Services() {
    return (
        <section className="bg-[var(--color-light)] px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="reveal" data-reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-dark)]">
                    Nuestros servicios
                </span>

                <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
                    Soluciones para tu espacio.
                </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {site.services.map((service, index) => (
                        <article
                            key={service.title}
                            className="reveal 
                                group
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                shadow-sm
                            "
                            data-reveal
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-[var(--color-light)]">
                                <img
                                    src={
                                        index === 0
                                            ? "/detail-pvc.jpg"
                                            : "/detail.png"
                                    }
                                    alt={service.title}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition
                                        duration-500
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <div className="p-6">
                                <span className="text-sm font-semibold text-[var(--color-blue-dark)]">
                                    0{index + 1}
                                </span>

                                <h3 className="mt-2 text-xl font-bold text-[var(--color-charcoal)]">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-[var(--color-charcoal)]/60">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
