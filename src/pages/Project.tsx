const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "Completed",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "In Progress",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions, forecasts, and interactive maps using external APIs.",
      image: "",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and optimized performance.",
      image: "",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "Completed",
    },
    {
      title: "Blog CMS",
      description:
        "A content management system for bloggers with markdown support, image uploads, and SEO optimization features.",
      image: "",
      technologies: ["PHP", "MySQL", "Bootstrap", "TinyMCE"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      status: "Completed",
    },
    {
      title: "Restaurant Booking System",
      description:
        "An online reservation system for restaurants with table management, customer profiles, and automated email confirmations.",
      image: "",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      status: "In Progress",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-500" : "bg-yellow-500";
  };

  return (
    <div className="main-card-container">
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A showcase of my web development projects, from simple websites to
              complex applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`${getStatusColor(project.status)} text-white`}
                    >
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-slate-400 text-sm">
                      {project.date}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-xs border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Live Demo
                      </a>
                    </button>
                    <button className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
