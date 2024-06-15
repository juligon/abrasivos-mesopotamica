import "./Home.css";
// import img1 from "../../assets/abrasivos-1.jpg";
// import img2 from "../../assets/abrasivos-2.jpg";
// import img3 from "../../assets/abrasivos-3.jpg";
import logoFortex from "../../assets/logos marcas/logo-fortex.png";
import logoTyrolit from "../../assets/logos marcas/logo-tyrolit.png";
import logoDobleA from "../../assets/logos marcas/logo-doble-a.png";
import logoEzeta from "../../assets/logos marcas/logo-ezeta.png";
import { Link } from "react-scroll";

export default function Home() {
	return (
		<div>
			{/* carousel */}
			{/* <div id="carouselExampleCaptions" className="carousel slide">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>
								Some representative placeholder content for the first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={img2} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src={img3} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div> */}
			<div className="container-fluid header">
				<div className="col-md-4 me-auto">
					<div className="text-light" style={{ paddingTop: "10rem" }}>
						<p className="fs-2 fw-semibold">¡Bienvenidos!</p>
						<p className="fs-6">
							En Abrasivos Mesopotámica somos especialistas en distribución de
							artículos e insumos para ferreterías, rectificadoras, metalurgicas
							y pinturerias.
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
				</div>
			</div>

			<div className="container-fluid marcas text-center pb-4">
				<div className="row g-4 pt-1 pb-1">
					<div className="col">
						<img
							src={logoFortex}
							alt="logo-fortex"
							className="logo"
						/>
					</div>
					<div className="col">
						<img
							src={logoTyrolit}
							alt="logo-tyrolit"
							className="logo"
						/>
					</div>
					<div className="col">
						<img
							src={logoDobleA}
							alt="logo-doble-a"
							className="logo"
						/>
					</div>
					<div className="col">
						<img 
							src={logoEzeta} 
							alt="logo-ezeta"
							className="logo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
