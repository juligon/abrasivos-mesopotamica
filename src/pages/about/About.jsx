import "./About.css";
import { Link } from "react-scroll";

export default function About() {
	return (
		<div className="container-fluid about" style={{ paddingTop: "2rem" }}>
			<div className="row">
				<div className="col-12 col-md-6">
					<p className="fs-4 fw-semibold">Sobre nosotros</p>
					<p className="fs-6">
						Somos Abrasivos Mesopotámica, una empresa familiar fundada por Mario
						A. Gambedotti en el año 1992 en la ciudad de Rosario, Santa Fe. Nos
						dedicamos a la distribución de artículos e insumos para ferreterías,
						rectificadoras, metalurgicas y pinturerias.
					</p>
					<p className="fs-6">
						Contamos con una amplia cartera de clientes que nos eligen
						diariamente por nuestro servicio y atención personalizada.
					</p>
					<p className="fs-6">
						Zonas de distribucion: Entre Ríos, Corrientes, Santa Fe y Buenos
						Aires.
					</p>
					<div className="d-flex pt-4">
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-75}
							duration={500}
							className="btn text-light"
							style={{ backgroundColor: "#DF2935" }}
						>
							Contactanos
						</Link>
					</div>
				</div>

				<div className="col-12 col-md-6">
					<div className="mt-4 imagen"></div>
				</div>
			</div>
		</div>
	);
}
