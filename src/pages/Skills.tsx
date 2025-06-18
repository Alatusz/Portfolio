const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: "",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 65 },
        { name: "Python", level: 60 },
        { name: "PHP", level: 55 },
      ],
    },
    {
      title: "Database",
      icon: "",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    {
      title: "Design & Tools",
      icon: "",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Photoshop", level: 60 },
      ],
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Express.js",
    "Python",
    "PHP",
  ];

  return (
    <div className="main-card-container">
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Skills & Technologies
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                      ></div>
                      <h2 className="text-xl font-semibold text-slate-200">
                        {category.title}
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="text-slate-300">{skill.name}</span>
                            <span className="text-slate-400">
                              <progress value={50} max={100} />
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technologies Grid */}
          <div className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
                Technologies I Work With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-3 text-center text-slate-300 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
