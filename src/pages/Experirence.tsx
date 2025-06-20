const Experience = () => {
  const experience = [
    {
      title: "Frontend Developer Cooperative Education",
      company: "Lexnetix Co.,LTD",
      location: "Chanthaburi, Thailand",
      period: "May 2025 - Aug 2025",
      description:
        "Engaged as a Frontend Developer Co-op, I contributed to a live, production-level PDPA (Personal Data Protection Act) web application. My role involved developing and implementing user interfaces to ensure the system's compliance with legal data privacy standards.",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "Fluent UI",
      ],
      type: "Internship",
    },
  ];

  const projects = [
    {
      title: "Simple E-Commerce Platform",
      period: "2024",
      description:
        "Developed as final year project - a comprehensive system for managing student records, course enrollment, and academic progress.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "React",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      title: "UX/UI Design for Application",
      period: "2023",
      description:
        "Group project creating an online learning platform with video streaming, quizzes, and progress tracking features.",
      technologies: ["Figma"],
    },
    {
      title: "Fish Counting with Digital Image Processing",
      period: "2023",
      description:
        "Individual project focused on creating a responsive and user-friendly website for a local business.",
      technologies: ["Python"],
    },
    {
      title: "Waste Classification with Machine Learning",
      period: "2023",
      description:
        "Completed a responsive web design course, gaining hands-on experience in HTML, CSS, and JavaScript.",
      technologies: ["Python"],
    },
  ];

  const certifications = [
    {
      title: "Example Certification",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-RWD-2023",
    },
  ];

  return (
    <div className="main-card-container">
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Experience
            </h2>
            <p className=" text-slate-300 max-w-2xl mx-auto">
              My academic journey, work experience, and professional development
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <h4 className="font-semibold text-slate-200 mb-6 flex items-center">
              Work Experience
            </h4>
            {experience.map((exp, index) => (
              <div key={index} className="card-box-slate rounded-base mb-6">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <h5 className="font-semibold text-slate-200 mb-1">
                        {exp.title}
                      </h5>
                      <p className="text-purple-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-slate-400 text-sm mb-4">
                        {exp.description}
                      </p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <small
                              key={techIndex}
                              className=" text-slate-300 border border-gray-500/30 tag"
                            >
                              {tech}
                            </small>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center text-slate-400 text-sm mb-1">
                        {exp.period}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm mb-2">
                        {exp.location}
                      </div>
                      <small
                        className={
                          exp.type == "Work"
                            ? "bg-green-500/20 text-green-400 border-green-500/30 tag"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30 tag"
                        }
                      >
                        {exp.type}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Projects Section */}
          <div className="mb-12">
            <h4 className="font-semibold text-slate-200 mb-6">
              Academic Projects
            </h4>
            {projects.map((project, index) => (
              <div key={index} className="card-box-slate rounded-base mb-4">
                <div className="padding-base gap-base">
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="font-semibold text-slate-200">
                      {project.title}
                    </h5>
                    <span className="text-slate-400 text-sm">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <small
                        key={techIndex}
                        className="text-slate-300 border border-gray-500/30 tag"
                      >
                        {tech}
                      </small>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-3xl font-semibold text-slate-200 mb-6">
              Certifications
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card-box-slate rounded-base">
                  <div className="p-6">
                    <h5 className="font-semibold text-slate-200 mb-2">
                      {cert.title}
                    </h5>
                    <p className="text-purple-400 text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-400 text-sm mb-2">
                      Issued: {cert.date}
                    </p>
                    <p className="text-slate-500 text-xs">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
