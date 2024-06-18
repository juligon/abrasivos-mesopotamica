//import { useState } from "react";
import { BiLogoWhatsapp, BiPhone, BiEnvelope, BiMap } from "react-icons/bi";
import "./Contact.css"
//const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Contact() {
  // const [input, setInput] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});
  // const [submitted, setSubmitted] = useState(false);
  // const [hasErrors, setHasErrors] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [name]: value,
  //   }));

  //   // Validate the form every time an input changes
  //   const validationErrors = validate({ ...input, [name]: value });
  //   setErrors(validationErrors);
  //   setHasErrors(Object.keys(validationErrors).length > 0);
  // };

  // const validate = (fields) => {
  //   const newErrors = {};
  //   if (!fields.name) newErrors.name = "El nombre es obligatorio.";
  //   if (!fields.email) {
  //     newErrors.email = "El email es obligatorio.";
  //   } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
  //     newErrors.email = "El email no es válido.";
  //   }
  //   if (!fields.subject) newErrors.subject = "El asunto es obligatorio.";
  //   if (!fields.message) newErrors.message = "El mensaje es obligatorio.";
  //   return newErrors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = validate(input);
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     setHasErrors(true);
  //     setSubmitted(false);
  //     return;
  //   }
  //   setErrors({});
  //   setHasErrors(false);

  //   const form = e.target;
  //   const formData = new FormData(form);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => {
  //       setSubmitted(true);
  //       setInput({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: "",
  //       });
  //     })
  //     .catch((error) => {
  //       setHasErrors(true);
  //       alert(error);
  //     });
  // };

  return (
    <div className="container-fluid contact" style={{paddingBottom: "2rem"}}>
      <div className="row">
        <p className="fs-4 fw-semibold">Contacto</p>
        <p className="fs-6">
          <div>
            <BiLogoWhatsapp style={{ fontSize: "18px" }} /> (0341) 155709575
          </div>
          <div>
            <BiPhone style={{ fontSize: "18px" }} /> (0341) 485 6263
          </div>
          {/* <div>
            <BiLogoInstagram style={{ fontSize: "18px" }} /> abrasivosmesopotamica
          </div> */}
          <div>
            <BiMap style={{ fontSize: "18px" }} /> Maipú 1820, Rosario, Santa Fe
          </div>
          <div>
            <BiEnvelope style={{ fontSize: "18px" }} /> info@abrasivosmesopotamica.com / ventas@abrasivosmesopatamica.com.ar
          </div>
        </p>
        <div className="col-12">
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAevot5U7YyMuTaRIoQKAEKsPWmxN0q0jY&q=Maipú+1820,Rosario,Santa+Fe,Argentina"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="col-12 col-md-6 pb-4">
          <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="nombre@ejemplo.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                id="subject"
                name="subject"
                value={input.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                name="message"
                rows="3"
                value={input.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            {!hasErrors && (
              <button
                type="submit"
                className="btn text-light float-end"
                style={{ backgroundColor: "#DF2935" }}
              >
                Enviar
              </button>
            )}
          </form>
          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              ¡Gracias por tu mensaje! Pronto nos pondremos en contacto.
            </div>
          )}
          {hasErrors && (
            <div className="alert alert-danger mt-3" role="alert">
              Por favor, corrige los errores en el formulario antes de enviar.
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}

