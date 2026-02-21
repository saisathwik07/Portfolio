const projects = [
  {
    title: "Expense Tracker",
    description: "Developed using React, TypeScript, Vite, and Tailwind CSS. Improved UI responsiveness by 40% using optimized component rendering. Reduced state management complexity using modular React hooks.",
    link: "https://github.com/saisathwik07",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Smart Crop Recommendation System",
    description: "Trained and compared multiple machine learning models (Random Forest, Gradient Boosting, Decision Tree). Developed a full-stack web app with REST APIs for real-time crop prediction and fertilizer recommendations.",
    link: "https://github.com/saisathwik07",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Amazon Clone",
    description: "Developed a fully functional Amazon clone using modern web technologies. Features include product listing, shopping cart, user authentication, and responsive design with HTML and CSS.",
    link: "https://github.com/saisathwik07",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "TODO App",
    description: "Built a feature-rich TODO application with task creation, editing, deletion, and local storage persistence. Clean and intuitive UI for effective task management and productivity tracking.",
    link: "https://github.com/saisathwik07",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency converter in JavaScript with 99%+ accuracy API exchange rates. Refined UI/UX to achieve less than 1s conversion time, boosting user interaction and satisfaction.",
    link: "https://github.com/saisathwik07",
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Weather App",
    description: "Modern weather application with real-time weather data, forecasts, and location-based weather information. Features include temperature, humidity, wind speed, and beautiful UI with animated weather icons.",
    link: "https://github.com/saisathwik07",
    color: "from-sky-400 to-blue-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="section-heading">Projects</h2>
          <span className="section-heading-bg">Projects</span>
          <p className="text-muted-foreground mt-4">Below are the Projects done by me.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-foreground opacity-80 group-hover:opacity-100 transition-opacity px-4 text-center">
                  {project.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-16 mb-16">
          {[
            { num: "2", label: "Internships" },
            { num: "6", label: "Projects" },
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
          <h3 className="text-xl font-bold text-foreground mb-2">More projects on Github</h3>
          <p className="text-muted-foreground italic mb-6">Building scalable web applications and exploring AI/ML solutions</p>
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
