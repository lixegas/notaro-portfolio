interface HomeContent {
  greeting: string;
  name: string;
  rolesPrefix: string;
  roles: string[];
  description: string;
  contantCaption: string;
  seeMyWorksCaption: string;
}

const HOME_CONTENT: HomeContent = {
  greeting: "Ciao, sono",
  name: "Peppino **Notaro**",
  rolesPrefix: "Sviluppo",
  roles: ["backend scalabili", "microservizi", "applicazioni fullstack", "API sicure"],
  description: "**Sviluppatore Fullstack** orientato all’innovazione, con esperienza nella progettazione e realizzazione di **soluzioni digitali avanzate** basate sulle più **moderne tecnologie**.",
  contantCaption: "Contattami",
  seeMyWorksCaption: "Guarda i miei lavori",
}

export {HOME_CONTENT};
