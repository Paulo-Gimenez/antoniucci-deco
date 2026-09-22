export const site = {
    name: "Antoniucci",
    fullName: "Antoniucci Decorevestimientos",

    location: "Don Torcuato y alrededores",

    phone: "541139456336",

    instagram: "https://www.instagram.com/antoniucci_decorevestimiento/",

    whatsappMessage:
        "Hola Antoniucci, quisiera consultar por un presupuesto.",

    services: [
        {
            title: "Machimbre de PVC para techos",
            description:
                "Instalación de cielorrasos de PVC para renovar y transformar tus espacios.",
        },
        {
            title: "Trabajos en Steel Frame",
            description:
                "Trabajos generales en estructura Steel Frame según las características de cada proyecto.",
        },
    ],

    benefits: [
        {
            title: "Resistente a la humedad",
            description:
                "Una alternativa práctica para espacios donde la humedad es un factor a considerar.",
        },
        {
            title: "Fácil de limpiar",
            description:
                "Una superficie simple de mantener limpia, sin cuidados complicados.",
        },
        {
            title: "Bajo mantenimiento",
            description:
                "Una solución práctica que no requiere cuidados constantes.",
        },
        {
            title: "Terminación estética",
            description:
                "Una superficie uniforme que ayuda a renovar completamente el ambiente.",
        },
    ],
    processSteps: [
        {
            number: "01",
            title: "Contacto",
            description: "Nos contas que necesitas y coordinamos una visita.",
        },
        {
            number: "02",
            title: "Evaluacion",
            description: "Revisamos el espacio y definimos el trabajo a realizar.",
        },
        {
            number: "03",
            title: "Presupuesto",
            description: "Preparamos una propuesta clara y sin cargo.",
        },
        {
            number: "04",
            title: "Instalacion",
            description: "Coordinamos el trabajo para renovar tu espacio.",
        },
    ],

    faqs: [
        {
            question: "¿Qué es el machimbre de PVC?",
            answer: "El machimbre de PVC es un material de construcción utilizado para la fabricación de cielorrasos y revestimientos."
        }
    ]
};

export const processSteps = site.processSteps;
export const faqs = site.faqs;

export function getWhatsAppUrl() {
    const message = encodeURIComponent(site.whatsappMessage);

    return `https://wa.me/${site.phone}?text=${message}`;
}
