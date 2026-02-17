export interface Project {
  id: string;
  title: string;
  category: string;
  repoUrl?: string;
  tech: string[];
  stats: string[];
  shortDescription: string;
  fullDescription: string;
  hasDeepDive: boolean;
  image?: string;
  gallery?: string[];
  demoGifs?: string[];  // ✅ NEW PROPERTY
}


export const projects: Project[] = [
  {
    id: "ticketblitz",
    title: "TicketBlitz",
    category: "Polyglot Event Ticketing Platform",
    repoUrl: "https://github.com/abhinav195/TicketBlitz",
    tech: ["Java 21", "Spring Boot 3", "Kafka", "Redis", "K8s", "Python", "FastAPI", "LangChain", "PostgreSQL", "Stripe"],
    stats: [
      "8 Microservices",
      "Pessimistic Locking",
      "0% Overselling",
      "Survival Mode AI",
      "Kafka Sagas",
      "Resilience4j",
      "Circuit Breakers",
      "Rate Limiting",
      "Testcontainers",
      "90% Coverage"
    ],
    shortDescription: "Polyglot, production-grade distributed system combining Java Spring Boot with Python FastAPI and LangChain for high-performance AI operations.",
    fullDescription: "Built an 8-service polyglot microservices ecosystem (7 Java + 1 Python) orchestrated on Kubernetes. Implemented Database-per-Service pattern with 4 PostgreSQL instances and Redis caching. Replaced Optimistic Locking with Pessimistic Locking (SELECT ... FOR UPDATE) to guarantee 0% over-selling under 10k concurrent users. Designed Choreography Saga pattern with Kafka for distributed consistency (Booking → Payment → Notification) with automated compensating transactions. Integrated a 'Survival Mode' recommendation engine using Python FastAPI, LangChain, and pgVector to serve personalized event suggestions when primary inventory services are under load. Hardened for production with Resilience4j (Circuit Breakers, Rate Limiters, Retry mechanisms) and validated with Testcontainers achieving 90% code coverage.",
    hasDeepDive: true,
    image: "/ticketblitz-arch.png",
    gallery: ["/ticketblitz-arch.png","/attacker.gif", "/defender.gif"],
    demoGifs: ["/attacker.gif", "/defender.gif"]
  },
  {
    id: "fault-tolerant-rag",
    title: "Fault-Tolerant RAG Bot",
    category: "Generative AI & Autonomous Agents",
    repoUrl: "https://github.com/abhinav195/fault-tolerant-rag-bot",
    tech: ["FastAPI", "LangGraph", "ChromaDB", "Docker", "Gemini 1.5"],
    stats: ["Self-Healing Auth", "Circular Key Rotation", "Hallucination Guard"],
    shortDescription: "A resilient RAG system with self-correcting logic, automatic API key rotation, and graph-based validation workflows.",
    fullDescription: "Built a production-grade autonomous agent using LangGraph state machines. Features a 'Self-Healing' brain that detects rate limits (429 errors) and automatically rotates between multiple Google API keys. Implemented a 3-stage validation pipeline (Search → Summarize → Verify) to prevent hallucinations, with automatic retries for low-quality retrieval.",
    hasDeepDive: true,
    image: "/rag-flow-1.png",
    gallery: ["/rag-flow-1.png", "/rag-flow-2.png", "/rag-flow-3.png"]
  },
  {
    id: "library-system",
    title: "Dist. Library Core",
    category: "Microservices Ecosystem",
    repoUrl: "https://github.com/abhinav195/Library-Management-System",
    tech: ["Spring Cloud", "OpenFeign", "Zipkin", "Resilience4j"],
    stats: ["4 Microservices", "Centralized Auth", "Circuit Breakers"],
    shortDescription: "Fault-tolerant microservice ecosystem with gateway routing and inter-service communication.",
    fullDescription: "Designed a 4-service backend (Users, Books, Issues, Gateway) using Spring Cloud. Implemented centralized JWT authentication at the Gateway level. Utilized OpenFeign for declarative inter-service communication and Resilience4j for circuit breaking to prevent cascading failures.",
    hasDeepDive: true,
    image: "/librarymanagementsystem_arch.png"
  },
  {
    id: "smart-parking",
    title: "Smart Parking API",
    category: "DevOps & Observability",
    repoUrl: "https://github.com/abhinav195/Smart-parking",
    tech: ["Docker", "PostgreSQL", "Flyway", "Actuator"],
    stats: ["Structured Logs", "Correlation IDs", "80% Test Cov"],
    shortDescription: "Containerized REST API with structured logging, distributed tracing, and database migrations.",
    fullDescription: "Engineered a production-style REST API for parking management. Implemented structured JSON logging with Correlation IDs for end-to-end tracing. Managed database schema changes using Flyway migrations and ensured system reliability with custom Actuator health indicators.",
    hasDeepDive: true,
    image: "/smartparking_arch.png"
  },
  {
    id: "meditrack",
    title: "MediTrack Logic",
    category: "Algorithmic Core",
    repoUrl: "https://github.com/abhinav195/MediTrack",
    tech: ["Java 21", "Algorithms", "File I/O", "Validation"],
    stats: ["Smart Scheduling", "Conflict Resolution", "Symptom Matching"],
    shortDescription: "Intelligent appointment booking engine with auto-rescheduling and specialist routing algorithms.",
    fullDescription: "Built a robust logic engine for clinic operations. Developed a 'Smart Booking' algorithm that automatically resolves schedule conflicts and handles weekend rollovers. Implemented a 'Symptom Matching' router to direct patients to the correct specialist based on input keywords.",
    hasDeepDive: true,
    image: "/meditrack_arch.png"
  },
  {
    id: "mqtt-iot",
    title: "IoT Telemetry Engine",
    category: "Real-Time Systems",
    // NO repoUrl - Company project
    tech: ["Python3", "MQTT", "ECU-Test", "InfluxDB"],
    stats: ["1k+ Msgs/Day", "Sub-2s Latency", "Real-Time"],
    shortDescription: "Robust MQTT message handler for real-time automobile telemetry ingestion.",
    fullDescription: "Engineered a high-throughput telemetry ingestion pipeline. Processes 1,000+ daily telemetry messages from ECU-Test units with sub-2-second latency. Integrated with InfluxDB for real-time time-series visualization and monitoring.",
    hasDeepDive: false // 🔒 Not clickable
  },
  {
    id: "dspace-auto",
    title: "DSpace Automation",
    category: "Python Pipeline",
    // NO repoUrl - Company project
    tech: ["Python3", "Pandas", "Automation", "ETL"],
    stats: ["8hrs Saved/Wk", "Auto-Metadata", "Zero Manual Ops"],
    shortDescription: "Automated data processing pipeline eliminating manual workflows for library archives.",
    fullDescription: "Developed a Python-based ETL pipeline to automate complex library archiving workflows. Replaced manual metadata entry with automated script-based extraction and formatting, reducing weekly processing time by 8 hours and eliminating human error.",
    hasDeepDive: false // 🔒 Not clickable
  }
];
