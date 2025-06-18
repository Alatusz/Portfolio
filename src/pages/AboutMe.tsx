const AboutMe = () => {
  const personalInfo = [
    { icon: "", label: "Age", value: "21 years old" },
    { icon: "", label: "Location", value: "Chanthaburi, Thailand" },
    {
      icon: "",
      label: "Education",
      value: "RBRU University - Computer Science",
    },
    { icon: "", label: "Goal", value: "Full Stack Developer" },
  ];

  const interests = [
    "Gaming",
    "Watching Movies",
    "Reading Books",
    "Web Development",
  ];
  return (
    <div className="main-card-container">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-100 mb-4">
          About Me
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Get to know me better - my background, personality, and what drives me
          forward
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Personal Info Card */}
        <div className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
              Personal Information
            </h2>
            <div className="space-y-4">
              {personalInfo.map((item, index) => {
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div>
                      <span className="text-slate-400 text-sm">
                        {item.label}:
                      </span>
                      <p className="text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MBTI Card */}
        <div className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-green-400 mb-6">
              Personality
            </h2>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 bg-green-400 to-green-200 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                INFJ
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-2">
                The Advocate
              </h3>
              <p className="text-slate-400 text-sm">
                Creative, insightful, and passionate about helping others
                achieve their goals. Known for their idealism and strong sense
                of personal integrity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            My Story
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Hi! I'm Patipat Trisuk, a 21-year-old Computer Science student from
            the beautiful province of Chanthaburi, Thailand. Currently in my
            final year at RBRU University, I'm passionate about web development
            and creating digital experiences that make a difference.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As an INFJ personality type, I bring creativity, dedication, and a
            user-focused approach to every project. My goal is to secure a
            position as a Web Developer where I can contribute to meaningful
            projects while continuing to grow my skills in this ever-evolving
            field.
          </p>
        </div>
      </div>

      {/* Interests Section */}
      <div className="bg-slate-800/50 border-slate-700 rounded-2xl backdrop-blur-sm">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
            <span className="mr-2" />
            Personal Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center text-slate-300 hover:bg-purple-500/20 transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
