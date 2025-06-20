const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 80 },
        { name: "TypeScript", percentage: 75 },
        { name: "Tailwind CSS", percentage: 88 },
      ],
    },
    {
      title: "Backend Development",
      icon: "",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", percentage: 70 },
        { name: "Express.js", percentage: 65 },
        { name: "Python", percentage: 60 },
        { name: "PHP", percentage: 55 },
      ],
    },
    {
      title: "Database",
      icon: "",
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MySQL", percentage: 75 },
        { name: "MongoDB", percentage: 65 },
        { name: "PostgreSQL", percentage: 60 },
      ],
    },
    {
      title: "Design & Tools",
      icon: "",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", percentage: 70 },
        { name: "Git/GitHub", percentage: 85 },
        { name: "VS Code", percentage: 90 },
        { name: "Photoshop", percentage: 60 },
      ],
    },
  ];

  return (
    <div className="main-card-container">
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="font-bold text-transparent bg-clip-text
            
             bg-gradient-to-r from-purple-400 to-pink-400 mb-4"
            >
              Skills & Technologies
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              percentages
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-2 gap-8 mb-8">
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
                      <h5 className=" font-semibold text-slate-200">
                        {category.title}
                      </h5>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex justify-between items-center mb-2"
                        >
                          <span className="text-slate-300">{skill.name}</span>
                          <div className="flex items-center w-3/4">
                            <span className="w-full bg-slate-700 rounded-full h-3 relative">
                              <div
                                className={`h-full rounded-full bg-white transition-all duration-1000 ease-out shadow-lg`}
                                style={{ width: `${skill.percentage}%` }}
                              />
                            </span>
                            <span className="text-slate-400 ml-2 min-w-[40px] text-right">
                              {skill.percentage}%
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
