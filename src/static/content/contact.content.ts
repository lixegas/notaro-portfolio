import {IconType} from "react-icons";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

interface Contact {
  icon: IconType;
  to: string;
  content: string;
}

interface ContactContent {
  title: string;
  description: string;
  contacts: Contact[]
}

const CONTACT_CONTENT: ContactContent = {
  title: "**Contattami** subito!",
  description: "Sono una persona dinamica, motivata e orientata alla **risoluzione** di problemi complessi. Amo mettermi in gioco e affrontare nuove sfide con entusiasmo e determinazione.Cerco opportunità stimolanti in cui poter contribuire concretamente con le mie competenze e la mia **passione** per l’innovazione. Hai un progetto interessante? **Parliamone!**",
  contacts: [
  {
    icon: MdEmail,
    to: "mailto:peppino.tech05@gmail.com",
    content: "peppino.tech05@gmail.com"
  },
  {
    icon: FaLinkedin,
    to: "https://www.linkedin.com/in/peppino-notaro-b3890427b/",
    content: "Peppino Notaro"
  },
  {
    icon: FaGithub,
    to: "https://github.com/lixegas/",
    content: "Lixegas"
  },
  {
    icon: PiInstagramLogo,
    to: "https://www.instagram.com/notaro.technologies/",
    content: "@notaro.technologies"
  }]
}

export {CONTACT_CONTENT};