import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo-abrasivos-mesopotamica-color.png";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg fixed-top"
			data-bs-theme="dark"
			style={{ backgroundColor: "#0f0f0f" }}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img id="logo" src={Logo} alt="Logo" style={{ height: "45px" }} />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								Inicio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								Sobre nosotros
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClass="active"
								to="products"
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								Productos
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-75}
								duration={500}
								style={{ color: "#DF2935" }}
							>
								Contacto
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
