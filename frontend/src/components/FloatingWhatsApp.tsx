import { getWhatsAppUrl } from "../data/site";

export function FloatingWhatsApp() {
    return (
        <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="floating-whatsapp"
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2.5 21.5l4.8-1.2A9.8 9.8 0 1 0 12 2Zm0 16.8a7 7 0 0 1-3.6-1l-.3-.2-2.1.5.6-2.1-.2-.3A7.1 7.1 0 1 1 12 18.8Z"
                />
                <path
                    fill="currentColor"
                    d="M16.1 13.7c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1l-.6.8c-.1.1-.2.1-.4 0a5.8 5.8 0 0 1-1.7-1.1 6.4 6.4 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3c.1-.1.1-.3 0-.4l-.6-1.3c-.1-.3-.3-.2-.4-.2h-.4c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1 2.3a8.2 8.2 0 0 0 3 2.6c.4.2.8.3 1.1.4.5.1 1 .1 1.3.1.4-.1 1.2-.5 1.4-.9.2-.5.2-.9.1-1s-.2-.1-.4-.2Z"
                />
            </svg>
            <span>WhatsApp</span>
        </a>
    );
}
