import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "inicio": "Home",
      "portafolio": "Portfolio",
      "about": "About",
      "contact": "Contact",
      "networks": "Networks",
      "welcome": "Professional Photography",
      "welcome-text": "Welcome to our world through the lens. We are Julián and Mariana, and here you will find a collection of our most significant photographic works. We capture unique moments and emotions, freezing fragments of time forever. Explore our portfolio and discover beauty in the ordinary and the extraordinary.",
      "portraits": "Portraits",
      "nature": "Nature",
      "urban": "Urban",
      "experimental": "Experimental",
      "about-text": "We are Julian and Mariana, passionate about photography. Each image we capture is a window into our perspective on the world, reflecting our experiences and emotions. We specialize in portraits, landscapes, and urban photography, always seeking to tell stories and connect with people through our images.",
      "name": "Name:",
      "email": "Email:",
      "message": "Write a message:",
      "send": "Send"
    }
  },
  es: {
    translation: {
      "inicio": "Inicio",
      "portafolio": "Portafolio",
      "about": "Nosotros",
      "contact": "Contacto",
      "networks": "Redes",
      "welcome": "Fotografía Profesional",
      "welcome-text": "Bienvenidos a nuestro mundo a través del lente. Somos Julián y Mariana, y aquí encontrarás una colección de nuestros trabajos fotográficos más significativos. Capturamos momentos y emociones únicas, congelando fragmentos de tiempo para siempre. Explora nuestro portafolio y descubre la belleza en lo cotidiano y lo extraordinario.",
      "portraits": "Retratos",
      "nature": "Naturaleza",
      "urban": "Urbano",
      "experimental": "Experimental",
      "about-text": "Somos Julian y Mariana, apasionados por la fotografía. Cada imagen que capturamos es una ventana a nuestra perspectiva del mundo, reflejando nuestras experiencias y emociones. Nos especializamos en retratos, paisajes y fotografía urbana, siempre buscando contar historias y conectar con las personas a través de nuestras imágenes.",
      "name": "Nombre:",
      "email": "Correo:",
      "message": "Escriba un mensaje:",
      "send": "Enviar"
    }
  }
};

i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;