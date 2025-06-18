const Experience = () => {
  const education = [
    {
      title: "Bachelor of Computer Science",
      institution: "Rambhai Barni Rajabhat University (RBRU)",
      location: "Chanthaburi, Thailand",
      period: "2021 - 2025",
      description:
        "Pursuing a comprehensive Computer Science degree with focus on software development, algorithms, and system design.",
      status: "Current",
      gpa: "3.45",
    },
  ];

  const experience = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2023 - Present",
      description:
        "Developing custom websites and web applications for small businesses and individuals. Specializing in React.js, Node.js, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      type: "Work",
    },
    {
      title: "Web Development Intern",
      company: "Local Tech Startup",
      location: "Chanthaburi, Thailand",
      period: "Jun 2023 - Aug 2023",
      description:
        "Assisted in developing company website and internal tools. Gained hands-on experience with full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Internship",
    },
  ];

  const projects = [
    {
      title: "University Management System",
      period: "2024",
      description:
        "Developed as final year project - a comprehensive system for managing student records, course enrollment, and academic progress.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    },
    {
      title: "E-Learning Platform",
      period: "2023",
      description:
        "Group project creating an online learning platform with video streaming, quizzes, and progress tracking features.",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    },
  ];

  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-RWD-2023",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialId: "FCC-JS-2023",
    },
    {
      title: "React Development Course",
      issuer: "Coursera",
      date: "2024",
      credentialId: "COURSERA-REACT-2024",
    },
  ];

  return (
    <div className="main-card-container">
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Experience & Education
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              My academic journey, work experience, and professional development
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-slate-200 mb-6 flex items-center">
              Education
            </h2>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm mb-4"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-200 mb-1">
                        {edu.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-slate-400 text-sm mb-2">
                        {edu.description}
                      </p>
                      {edu.gpa && (
                        <p className="text-slate-300 text-sm">
                          GPA:{" "}
                          <span className="text-purple-400">{edu.gpa}</span>
                        </p>
                      )}
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center text-slate-400 text-sm mb-1">
                        {edu.period}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm mb-2">
                        {edu.location}
                      </div>
                      <div className="bg-green-500/20 text-green-400 border-green-500/30">
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-slate-200 mb-6 flex items-center">
              Work Experience
            </h2>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm mb-6"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-200 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-slate-400 text-sm mb-4">
                        {exp.description}
                      </p>
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="border-purple-500/30 text-purple-300"
                            >
                              {tech}
                            </div>
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
                      <div
                        className={
                          exp.type === "Work"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Projects Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-slate-200 mb-6">
              Academic Projects
            </h2>
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm mb-4"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-slate-200">
                      {project.title}
                    </h3>
                    <span className="text-slate-400 text-sm">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-semibold text-slate-200 mb-6">
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                      {cert.title}
                    </h3>
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
