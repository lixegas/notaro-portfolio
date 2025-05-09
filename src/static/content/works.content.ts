
interface Work {
  image: string;
  title: string;
  description: string;
  githubTo?: string;
  hrefTo?: string;
  technologies: string[];
}

interface WorkContent {
  title: string;
  subtitle: string;
  works: Work[];
}

const WORK_CONTENT: WorkContent = {
  title: "I miei **lavori**",
  subtitle: "Una selezione dei miei lavori più **recenti** e **significativi**",
  works: [
    {
      title: "Ecommerce",
      description: "Progettazione di un ecommerce con architettura a microservizi per garantire scalabilità, mantenibilità e gestione di grandi volumi di dati. Implementato un sistema di autenticazione e autorizzazione, comunicazione asincrona tra i microservizi, ottimizzazione della latenza e gestione efficiente dei dati e dei file.",
      githubTo: "https://github.com/lixegas/ecommerce",
      image: "images/ecommerce.png",
      technologies: ["Java", "Spring Boot", "MySQL", "MongoDB", "Kafka", "Redis", "AWS", "Docker & Kubernetes"]
    },
    {
      title: "Company management",
      description: "Applicazione gestionale monolitica progettata per ottimizzare i processi aziendali, con operazioni CRUD e gestione avanzata dei dati, migliorando le performance e l'archiviazione sicura dei file.",
      githubTo: "https://github.com/lixegas/carparts-be",
      image: "images/carparts.png",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "AWS", "Docker"]
    },
    {
      title: "VitoBot",
      description: "VitoBot è un bot per Discord che aiuta a gestire server Minecraft auto-ospitati, monitorando l'IP del server di hosting e una lista di server Minecraft selezionati dall'amministratore.",
      githubTo: "https://github.com/ikiwq/vito-bot",
      image: "images/vitobot1.png",
      technologies: ["Typescript", "Discord.js"]
    },
    {
      title: "Auth system",
      description: "Sistema di autenticazione basato su token che garantisce accesso sicuro e scalabile. Gli utenti ricevono un token dopo l'accesso, da usare per accedere alle risorse protette. Il token è rinnovabile e sostituisce la gestione delle sessioni lato server.",
      githubTo: "https://github.com/lixegas/java-spring-jwt-auth",
      image: "images/auth.png",
      technologies: ["Java", "Spring Security"]
    }
  ]
}

export {WORK_CONTENT, type Work};