import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { BeforeAfter } from "./components/Before-after";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { FAQ } from "./components/Faq";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16, rootMargin: "0px 0px -48px" },
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Benefits />
                <BeforeAfter />
                <Process />
                <Services />
                <About />
                <FAQ />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <Analytics />
        </>
    );
}

export default App;
