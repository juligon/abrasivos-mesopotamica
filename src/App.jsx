import { Element } from "react-scroll";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import WhatsAppButton from "./components/whatsapp button/WhatsAppButton";
import Products from "./pages/products/Products";

export default function App() {
	return (
		<div>
			<Navbar />
			<Element name="home">
				<Home />
			</Element>
			<Element name="about">
				<About />
			</Element>
			<Element name="products">
				<Products />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
			<Footer />
			<WhatsAppButton />
		</div>
	);
}
