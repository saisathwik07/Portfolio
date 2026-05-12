import { ExternalLink, Github } from "lucide-react";

const projects = [
  // ── Featured Projects (Top 3) ──
  {
    title: "Greenhouse as a Service (GaaS)",
    description:
      "Full-stack IoT-powered greenhouse management platform with real-time sensor monitoring, multi-admin access control, role-based authentication, and AI-driven plant health insights. Built with React, Node.js, and MongoDB.",
    link: "https://gaas-drab.vercel.app",
    color: "from-emerald-500 to-green-600",
    tags: ["React", "Node.js", "MongoDB", "IoT"],
    featured: true,
  },
  {
    title: "Sycora — TaskFlow App",
    description:
      "A modern task management application built for Ethara AI. Features include task creation, real-time collaboration, drag-and-drop workflows, and an intuitive kanban-style interface for team productivity.",
    link: "https://sycora-production.up.railway.app/",
    color: "from-violet-500 to-purple-600",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "AiCruiter — Smart Interview Assistant",
    description:
      "AI-powered interview platform with Vapi voice agent, automated question generation via OpenRouter GPT-4, real-time candidate evaluation, and comprehensive feedback analytics. Built with Next.js and Supabase.",
    link: "https://github.com/saisathwik07/Smart-Interview-Assistant-main",
    color: "from-teal-500 to-cyan-500",
    tags: ["Next.js", "Supabase", "Vapi AI", "OpenAI"],
    featured: true,
  },
  // ── All Other Projects ──
  {
    title: "Plant Disease Detection",
    description:
      "Deep learning-powered plant disease identification system using image classification. Trained CNN models to detect and classify plant diseases from leaf images with high accuracy for agricultural applications.",
    link: "https://github.com/saisathwik07/Plant-disease-detection",
    color: "from-lime-500 to-green-500",
    tags: ["Python", "Deep Learning", "CNN"],
    featured: false,
  },
  {
    title: "Smart Crop Recommendation System",
    description:
      "Trained and compared multiple ML models (Random Forest, Gradient Boosting, Decision Tree). Full-stack web app with REST APIs for real-time crop prediction and fertilizer recommendations.",
    link: "https://github.com/saisathwik07/Crop-Prediction",
    color: "from-green-400 to-emerald-600",
    tags: ["Python", "ML", "Flask", "REST API"],
    featured: false,
  },
  {
    title: "GitHub User Finder",
    description:
      "A sleek web application to search and explore GitHub user profiles. Fetches real-time data from the GitHub API to display repositories, followers, bio, and contribution activity.",
    link: "https://github.com/saisathwik07/Github-User-Finder",
    color: "from-gray-600 to-slate-800",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    featured: false,
  },
  {
    title: "Expense Tracker",
    description:
      "Developed using React, TypeScript, Vite, and Tailwind CSS. Improved UI responsiveness by 40% using optimized component rendering. Modular React hooks for state management.",
    link: "https://github.com/saisathwik07/Expense-Tracker",
    color: "from-purple-500 to-pink-500",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    featured: false,
  },
  {
    title: "Amazon Clone",
    description:
      "Developed a fully functional Amazon front-page clone using modern web technologies. Features include product listing layout, shopping cart UI, and responsive design with HTML and CSS.",
    link: "https://github.com/saisathwik07/Amazon-clone",
    color: "from-orange-400 to-red-500",
    tags: ["HTML", "CSS"],
    featured: false,
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Classic Tic-Tac-Toe game with a clean, interactive UI. Supports two-player mode with win detection, draw handling, and game reset functionality. Built with vanilla JavaScript.",
    link: "https://github.com/saisathwik07/Tic-Tac-Toe",
    color: "from-indigo-500 to-blue-600",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "Modern weather application with real-time weather data, forecasts, and location-based information. Features include temperature, humidity, wind speed, and animated weather icons.",
    link: "https://github.com/saisathwik07/Weather-App",
    color: "from-sky-400 to-blue-500",
    tags: ["JavaScript", "API", "CSS"],
    featured: false,
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency converter with 99%+ accuracy API exchange rates. Refined UI/UX to achieve sub-1s conversion time, boosting user interaction and satisfaction.",
    link: "https://github.com/saisathwik07/Currency-Converter",
    color: "from-yellow-400 to-amber-500",
    tags: ["JavaScript", "API", "CSS"],
    featured: false,
  },
  {
    title: "TODO App",
    description:
      "Feature-rich TODO application with task creation, editing, deletion, and local storage persistence. Clean and intuitive UI for effective task management and productivity tracking.",
    link: "https://github.com/saisathwik07/TODO-APP",
    color: "from-blue-400 to-cyan-500",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="section-heading">Projects</h2>
          <span className="section-heading-bg">Projects</span>
          <p className="text-muted-foreground mt-4">
            A showcase of my work — from full-stack platforms to AI/ML solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Featured Projects
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group relative ring-1 ring-yellow-500/20 hover:ring-yellow-500/40 transition-all"
            >
              {/* Featured badge */}
              <div className="absolute top-3 right-3 z-10 bg-yellow-500/90 text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                ★ Featured
              </div>
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="text-2xl font-bold text-white opacity-90 group-hover:opacity-100 transition-opacity px-4 text-center relative z-10 drop-shadow-lg">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-foreground/10 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* All Other Projects */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            All Projects
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="text-2xl font-bold text-white opacity-80 group-hover:opacity-100 transition-opacity px-4 text-center relative z-10 drop-shadow-lg">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-foreground/10 text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-16 mb-16">
          {[
            { num: "2", label: "Internships" },
            { num: "12", label: "Projects" },
            { num: "2", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground">{stat.num}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* More projects */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            More projects on Github
          </h3>
          <p className="text-muted-foreground italic mb-6">
            Building scalable web applications and exploring AI/ML solutions
          </p>
          <a
            href="https://github.com/saisathwik07"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
