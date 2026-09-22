import { processSteps } from "../data/site";

export function Process() {
    return (
        <section className="process-section bg-white px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="reveal max-w-xl" data-reveal>
                    <span className="text-xl font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-dark)]">
                        ¿Cómo trabajamos?
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
                        Así de simple.
                    </h2>
                </div>

                <div className="process-steps relative mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div
                        aria-hidden="true"
                        className="process-connector absolute bottom-6 left-6 top-6 w-px md:hidden"
                    />
                    {processSteps.map((step, index) => (
                        <article
                            key={step.number}
                            className="process-step reveal relative z-10 grid grid-cols-[3rem_1fr] items-start gap-x-4 gap-y-1 lg:block"
                            data-reveal
                            style={{ transitionDelay: `${index * 110}ms` }}
                        >
                            <div className="row-span-2 flex items-center gap-4 lg:row-auto">
                                <span
                                    className="process-number flex size-12 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                                >
                                    {step.number}
                                </span>

                                {index !== processSteps.length - 1 && (
                                    <div className="process-connector hidden h-px flex-1 lg:block" />
                                )}
                            </div>

                            <h3 className="self-center font-semibold text-[var(--color-charcoal)] lg:mt-5">
                                {step.title}
                            </h3>

                            <p className="col-start-2 mt-0 text-sm leading-relaxed text-[var(--color-charcoal)]/60 lg:mt-2">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
