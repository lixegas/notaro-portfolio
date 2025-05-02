
interface NavbarLink {
  text: string;
  to: string;
}

interface NavbarContent {
  title: string;
  links: NavbarLink[];
}

const NAVBAR_CONTENT: NavbarContent = {
  title: "PEPPINO **NOTARO**",
  links: [
    {
      text: "Home",
      to: "#home"
    },
    {
      text: "Lavori",
      to: "#works"
    },
    {
      text: "Recensioni",
      to: "#reviews"
    },
    {
      text: "Contattami",
      to: "#contact"
    }
  ]
}

export {NAVBAR_CONTENT};