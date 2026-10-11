import {IconType} from "react-icons";
import {SiAngular, SiApachekafka, SiCss3, SiGit, SiHtml5, SiJavascript, SiJsonwebtokens, SiLinux, SiMongodb, SiMysql, SiNextdotjs, SiPython, SiReact, SiSpring, SiTypescript} from "react-icons/si";
import {DiJava} from "react-icons/di";

interface Technology {
  icon: IconType;
  name: string;
}

const RIBBON_TECHNOLOGIES: Technology[] = [
  {icon: DiJava, name: "Java"},
  {icon: SiSpring, name: "Spring"},
  {icon: SiMysql, name: "MySQL"},
  {icon: SiMongodb, name: "MongoDB"},
  {icon: SiHtml5, name: "HTML"},
  {icon: SiCss3, name: "CSS"},
  {icon: SiJavascript, name: "JavaScript"},
  {icon: SiTypescript, name: "TypeScript"},
  {icon: SiPython, name: "Python"},
  {icon: SiLinux, name: "Linux"},
  {icon: SiGit, name: "Git"},
  {icon: SiJsonwebtokens, name: "JWT"},
  {icon: SiApachekafka, name: "Kafka"},
  {icon: SiNextdotjs, name: "Next.js"},
  {icon: SiReact, name: "React"},
  {icon: SiAngular, name: "Angular"},
]

export {RIBBON_TECHNOLOGIES, type Technology};
