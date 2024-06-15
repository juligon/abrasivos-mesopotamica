import logoFortex from "../../assets/logos marcas/logo-fortex.png";
import logoTyrolit from "../../assets/logos marcas/logo-tyrolit.png";
import logoDobleA from "../../assets/logos marcas/logo-doble-a.png";
//import logoEzeta from "../../assets/logos marcas/logo-ezeta.png";
import fortexCatalog from "../../assets/catalogos/catalogo-fortex.pdf";
import tyrolitCatalog from "../../assets/catalogos/catalogo-tyrolit.pdf";
import dobleaCatalog from "../../assets/catalogos/catalogo-doble-a.pdf";
import { BiDownload } from "react-icons/bi";
import "./Products.css";

export default function Products() {
	return (
		<div className="container-fluid" style={{ paddingTop: "2rem" }}>
			<p className="fs-4 fw-semibold">Productos</p>
			<p className="fs-6">
				Ponemos a disposición los catálogos de nuestras marcas. Para
				presupuestos enviar mensaje de whatsapp o al formulario de contacto.
			</p>
			<div className="container products">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-4">
					<div className="col justify-content-center mb-4">
						<div className="card justify-content-center text-center mb-2">
							<img
								src={logoFortex}
								alt="logo-fortex"
								style={{ height: "70px", width: "auto" }}
							/>
						</div>
						<a href={fortexCatalog} download className="download-link">
							DESCARGAR CATÁLOGO <BiDownload />
						</a>
					</div>
					<div className="col justify-content-center mb-4">
						<div className="card justify-content-center text-center mb-2">
							<img
								src={logoTyrolit}
								alt="logo-tyrolit"
								style={{ height: "70px", width: "auto" }}
							/>
						</div>
						<a href={tyrolitCatalog} download className="download-link">
							DESCARGAR CATÁLOGO <BiDownload />
						</a>
					</div>
					<div className="col justify-content-center mb-4">
						<div className="card justify-content-center text-center mb-2">
							<img
								src={logoDobleA}
								alt="logo-doble-a"
								style={{ height: "70px", width: "auto" }}
							/>
						</div>
						<a href={dobleaCatalog} download className="download-link">
							DESCARGAR CATÁLOGO <BiDownload />
						</a>
					</div>
					{/* <div className="col justify-content-center mb-4">
						<div className="card justify-content-center text-center mb-2">
							<img
								src={logoEzeta}
								alt="logo-ezeta"
								style={{ height: "50px", width: "auto" }}
							/>
						</div>
						<a download className="download-link">
							DESCARGAR CATÁLOGO <BiDownload />
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
}
