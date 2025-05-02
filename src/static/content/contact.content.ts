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
  description: "Sono un ragazzo molto **dinamico** a cui piace mettersi in gioco e risolvere i problemi piú difficili.\nCerco nuove opportunità per lavorare su progetti **innovativi** in cui contribuire con le mie abilitá e la mia passione.\nCosa aspetti? **Contattami!**",
  contacts: [
  {
    icon: MdEmail,
    to: "mailto:peppino.notaro@gmail.com",
    content: "peppino.notaro@gmail.com"
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