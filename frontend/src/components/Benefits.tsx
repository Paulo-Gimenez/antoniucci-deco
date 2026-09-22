import { site } from "../data/site";

const icons = ["💧", "✦", "⚙", "⌂"];

export function Benefits() {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="reveal max-w-xl" data-reveal>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-dark)]">
                        ¿Por qué elegirlo?
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
                        Machimbre de PVC
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-[var(--color-charcoal)]/65">
                        Una alternativa práctica para renovar tu techo,
                        con una terminación limpia, moderna y fácil de
                        mantener.
                    </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {site.benefits.map((benefit, index) => (
                        <article
                            key={benefit.title}
                            className="reveal 
                                rounded-2xl
                                border
                                border-black/5
                                bg-[var(--color-blue-soft)]
                                p-5
                            "
                            data-reveal
                            style={{ transitionDelay: `${index * 90}ms` }}
                        >
                            <div
                                className="
                                    flex
                                    size-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    text-xl
                                    shadow-sm
                                "
                            >
                                {icons[index]}
                            </div>

                            <h3 className="mt-5 font-semibold text-[var(--color-charcoal)]">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/60">
                                {benefit.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
