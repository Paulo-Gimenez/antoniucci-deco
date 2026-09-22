import { faqs } from "../data/site";

export function FAQ() {
    return (
        <section className="bg-[var(--color-light)] px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-3xl">
                <div className="reveal text-center" data-reveal>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-dark)]">
                        Preguntas frecuentes
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
                        Antes de presupuestar
                    </h2>
                </div>

                <div className="reveal mt-10 divide-y divide-black/10 rounded-2xl bg-white px-5" data-reveal style={{ transitionDelay: "100ms" }}>
                    {faqs.map((faq) => (
                        <details
                            key={faq.question}
                            className="group py-5"
                        >
                            <summary
                                className="
                                    flex
                                    cursor-pointer
                                    list-none
                                    items-center
                                    justify-between
                                    gap-4
                                    font-medium
                                    text-[var(--color-charcoal)]
                                "
                            >
                                {faq.question}

                                <span
                                    className="
                                        text-xl
                                        text-[var(--color-blue)]
                                        transition
                                        group-open:rotate-45
                                    "
                                >
                                    +
                                </span>
                            </summary>

                            <p className="mt-3 pr-8 text-sm leading-relaxed text-[var(--color-charcoal)]/60">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
