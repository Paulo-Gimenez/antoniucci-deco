export function About() {
    return (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
                <div className="reveal flex min-h-48 items-center justify-center overflow-hidden rounded-3xl bg-[var(--color-dark)] p-8" data-reveal>
                    <img
                        src="/icon.png"
                        alt="Antoniucci Decorevestimientos"
                        className="max-h-48 w-full object-contain"
                    />
                </div>

                <div className="reveal lg:px-8" data-reveal style={{ transitionDelay: "120ms" }}>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-blue-dark)]">
                        Sobre Antoniucci
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
                        Un trabajo hecho con nombre y apellido.
                    </h2>

                    <p className="mt-5 leading-relaxed text-[var(--color-charcoal)]/65">
                        Antoniucci Decorevestimientos es un emprendimiento
                        dedicado a la instalación de machimbre de PVC para
                        techos y trabajos generales en Steel Frame.
                    </p>

                    <p className="mt-4 leading-relaxed text-[var(--color-charcoal)]/65">
                        Trabajo directo, atención personalizada y presupuesto
                        sin cargo.
                    </p>

                    <div className="mt-8 border-l-2 border-[var(--color-blue)] pl-5">
                        <p className="font-medium italic text-[var(--color-charcoal)]">
                            “Un trabajo bien hecho habla por sí solo.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
