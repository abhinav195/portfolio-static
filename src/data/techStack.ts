import {
  Code2, Database, Cloud, Terminal, Coffee, Code, Server,
  Leaf, Shield, Boxes, Network, Zap, Container, ShipWheel,
  RefreshCw, TestTube, Search, Bot, Brain, MessageSquare,
  Sparkles, GitBranch, Workflow,
  LucideIcon
} from "lucide-react";


export interface Skill {
  name: string;
  icon: LucideIcon;
}


export interface TechCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}


export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "backend",
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      { name: "Java 21", icon: Coffee },
      { name: "Python", icon: Code },
      { name: "SQL", icon: Database },
      { name: "Spring Boot 3", icon: Leaf },
      { name: "Spring Cloud", icon: Cloud },
      { name: "FastAPI", icon: Zap },
      { name: "Microservices", icon: Boxes },
      { name: "Resilience4j", icon: Shield },
    ],
  },
  {
    id: "database",
    title: "Databases & Streaming",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Server },
      { name: "MySQL", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "Redis", icon: Zap },
      { name: "Vector DB (pgVector)", icon: Search },
      { name: "Kafka", icon: Network },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Container },
      { name: "Kubernetes (AKS)", icon: ShipWheel },
      { name: "Azure DevOps", icon: Cloud },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Testcontainers", icon: TestTube },
      { name: "Jaeger/Zipkin", icon: Search },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: Bot,
    skills: [
      { name: "Generative AI (LLMs)", icon: Brain },
      { name: "RAG", icon: Database },
      { name: "LangChain", icon: Sparkles },
      { name: "LangGraph", icon: Workflow },
      { name: "Prompt Engineering", icon: MessageSquare },
      { name: "Agentic Workflows", icon: Bot },
    ],
  },
];
