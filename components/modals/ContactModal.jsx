"use client";

import { closeContactModal } from "@/utlis/toggleContactModal";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ContactModal() {
  const pathname = usePathname();
  const elementRef = useRef(null);
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current && // Check if click is inside #mobileMenu
        containerRef.current.contains(event.target) &&
        elementRef.current && // Check if click is outside .gt-menu-area
        !elementRef.current.contains(event.target)
      ) {
        closeContactModal();
        // Add your custom logic here
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    closeContactModal();
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage({ type: "success", text: data.message });
        setFormData({
          nombre: "",
          apellidos: "",
          email: "",
          telefono: "",
          empresa: "",
          mensaje: ""
        });

        // Cerrar modal después de 2 segundos
        setTimeout(() => {
          closeContactModal();
          setSubmitMessage({ type: "", text: "" });
        }, 2000);
      } else {
        setSubmitMessage({
          type: "error",
          text: data.message || "Error al enviar el mensaje"
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage({
        type: "error",
        text: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      ref={containerRef}
      id="uc-contact-modal"
      data-uc-modal="overlay: true"
      className="uc-modal"
      style={{ display: "block" }}
      tabIndex={-1}
    >
      <div
        ref={elementRef}
        className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
          type="button"
          onClick={closeContactModal}
        >
          <i className="unicon-close" />
        </button>
        <div className="panel vstack gap-2 md:gap-4 text-center">
          <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
            <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
              <h4 className="h5 lg:h4 m-0">Agenda tu prueba gratuita ahora</h4>
              <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="vstack gap-2"
                >
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="nombre"
                      placeholder="Nombre*"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="text"
                      name="apellidos"
                      placeholder="Apellidos*"
                      value={formData.apellidos}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div
                    className="vstack lg:hstack gap-2"
                    style={{ flexDirection: "row" }}
                  >
                    <input
                      className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                      type="email"
                      name="email"
                      placeholder="Tu email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                      type="tel"
                      name="telefono"
                      placeholder="Número de teléfono*"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la empresa*"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                    name="mensaje"
                    placeholder="Tu mensaje.."
                    value={formData.mensaje}
                    onChange={handleChange}
                  />

                  {submitMessage.text && (
                    <div className={`p-3 rounded ${submitMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {submitMessage.text}
                    </div>
                  )}

                  <button
                    className="btn btn-primary btn-md text-white mt-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar prueba gratuita"}
                  </button>
                  <p className="fs-7 opacity-70 mt-2 text-center">
                    Personalizaremos tu experiencia según tus necesidades inmediatas y responderemos todas tus preguntas. ¡Prepárate para ver cómo funciona!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
