
interface NavbarLink {
  text: string;
  to: string;
}

interface NavbarContent {
  links: NavbarLink[];
}

const NAVBAR_CONTENT: NavbarContent = {
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