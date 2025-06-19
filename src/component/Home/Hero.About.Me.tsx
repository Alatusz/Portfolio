import Profile2 from "../../assets/img/profile2.jpg";

import SkillCard from "../SkillCard";

const HeroAboutMe = () => {
  return (
    <div className="w-[1280px] mx-auto flex flex-col items-center justify-center gap-2 p-4 my-20 bg-white/10 border border-gray-200/30 rounded-2xl backdrop-blur-sm animate-slide-in-bottom opacity-0 animation-delay-700">
      <h4 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent p-6 animate-bounce-gentle">
        About Me
      </h4>
      <div className="grid grid-cols-2 p-8">
        <div className="w-full animate-slide-in-left opacity-0 animation-delay-900">
          <img
            src={Profile2}
            height={1000}
            width={580}
            className="hover:scale-105 transition-transform duration-500 hover:shadow-2xl rounded-4xl"
          />
        </div>
        <div className="w-[600px] flex flex-col gap-6 animate-slide-in-right  animation-delay-1000">
          <div className="journey-card">
            <span className="font-bold text-lg">This is my journey</span>
            <hr className="my-2 border-gray-400" />
            <div>
              <p className="text-xs p-4">
                As a lifelong gamer, my passion for play seamlessly transitioned
                into a fascination with creation. My journey into coding began
                in 9th grade, where I quickly discovered a natural aptitude for
                development. That same year, I proudly earned a gold medal in a
                provincial-level competition, solidifying my path. Now, as a
                fourth-year university student, I'm eager to apply my skills
                through a Co-op Education program, marking an exciting new
                chapter in my continuous growth as a developer.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {/* Programming Language */}
            <div className="animate-fade-in-up opacity-0 animation-delay-1200">
              <SkillCard
                title="Programming "
                listItem={["Python", "Java", "C++", "JavaScript", "TypeScript"]}
              />
            </div>
            {/* Front-End Skill */}
            <div className="animate-fade-in-up opacity-0 animation-delay-1300">
              <SkillCard
                title="Front End"
                listItem={["HTML", "CSS", "Tailwind", "React", "Vite.JS"]}
              />
            </div>

            {/* Back-End Skill */}
            <div className="animate-fade-in-up opacity-0 animation-delay-1400">
              <SkillCard
                title="Back End"
                listItem={["Node.js", "Express", "MongoDB", "PostgreSQL"]}
              />
            </div>
            {/* Other Skills */}
            <div className="animate-fade-in-up opacity-0 animation-delay-1500">
              <SkillCard
                title="Other Skills"
                listItem={["GitHub", "GitLab", "Notion", "SourceTree"]}
              />
            </div>
            {/* Language */}
            <div className="animate-fade-in-up opacity-0 animation-delay-1600 col-span-2">
              <SkillCard
                title="Language"
                listItem={["Thai", "English", "Japanese"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutMe;
