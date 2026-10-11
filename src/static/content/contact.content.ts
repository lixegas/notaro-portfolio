import {IconType} from "react-icons";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

interface Contact {
  icon: IconType;
  label: string;
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
  description: "Sono una persona dinamica, motivata e orientata alla **risoluzione** di problemi complessi. Amo mettermi in gioco e affrontare nuove sfide con entusiasmo e determinazione. Cerco opportunità stimolanti in cui poter contribuire concretamente con le mie competenze e la mia **passione** per l’innovazione. Hai un progetto interessante? **Parliamone!**",
  contacts: [
  {
    icon: MdEmail,
    label: "Email",
    to: "mailto:peppino.tech05@gmail.com",
    content: "peppino.tech05@gmail.com"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    to: "https://www.linkedin.com/in/peppino-notaro-b3890427b/",
    content: "Peppino Notaro"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    to: "https://github.com/lixegas/",
    content: "Lixegas"
  },
  {
    icon: PiInstagramLogo,
    label: "Instagram",
    to: "https://www.instagram.com/peppino.notaro/",
    content: "@peppino.notaro"
  }]
}

export {CONTACT_CONTENT};