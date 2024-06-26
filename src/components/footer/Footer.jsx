import "./Footer.css";
import Logo from "../../assets/logo/logo-abrasivos-mesopotamica-color.png";
import {
	BiLogoWhatsapp,
	BiLogoInstagram,
	BiEnvelope,
} from "react-icons/bi";

export default function Footer() {
	return (
		<div className="container-fluid zocalo-contacto">
			<div className="row pt-3 pb-3 align-items-center footer-content">
				<div className="col logo-container mb-2">
					<img id="logo" src={Logo} alt="Logo" className="logo" />
				</div>
				<div className="col icons-container">
					<a href="https://wa.me/5493415709575" target="_blank" rel="noreferrer">
						<BiLogoWhatsapp className="icon" />
					</a>
					<a href="https://www.instagram.com/abrasivosmesopotamica" target="_blank" rel="noreferrer">
						<BiLogoInstagram className="icon" />
					</a>
					<a href="mailto:info@abrasivosmesopotamica.com" target="_blank" rel="noreferrer">
						<BiEnvelope className="icon" />
					</a>
				</div>
			</div>
			<div className="row text-light pt-2 pb-2 zocalo-copyright">
				<div className="col text-start" style={{ fontSize: "10px" }}>
					© Copyright Abrasivos Mesopotámica - 2024. Todos los derechos
					reservados.
				</div>
				<div
					className="col text-end"
					style={{ fontSize: "10px", fontStyle: "italic", fontWeight: "bold" }}
				>
					powered by{" "}
					<a
						href="https://www.linkedin.com/in/juligon13/"
						target="_blank"
						rel="noreferrer"
						className="link"
					>
						Juligon
					</a>
				</div>
			</div>
		</div>
	);
}


