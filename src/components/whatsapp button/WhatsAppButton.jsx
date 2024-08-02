import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/5493415709575"
			className="whatsapp-button"
			target="_blank"
			rel="noopener noreferrer"
		>
			<FaWhatsapp size={36} />
		</a>
	);
}
