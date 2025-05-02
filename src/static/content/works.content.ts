
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
      description: "Ecommerce distribuito con architettura a microservizi per scalabilità e gestione di milioni di richieste giornaliere",
      githubTo: "https://github.com/lixegas/carparts-be",
      image: "images/ecommerce.png",
      technologies: ["Spring Boot", "MySQL", "Aws", "Redis"]
    }
  ]
}

export {WORK_CONTENT, type Work};