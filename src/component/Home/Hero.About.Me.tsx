import Profile2 from "../../assets/img/profile2.jpg";

import Cat from "../../assets/img/cute-cat.gif";

import SkillCard from "../SkillCard";

const HeroAboutMe = () => {
  return (
    <div className="w-[1280px] min-h-screen mx-auto card-glassmorphism-transparent flex-col animate-slide-in-bottom animation-delay-700 opacity-0 ">
      <div className="grid grid-cols-2">
        <div className="padding-base animate-slide-in-left opacity-0 animation-delay-900">
          <img src={Profile2} className="h-full rounded-base shadow-2xl" />
        </div>
        <div className="flex flex-col gap-base padding-base animate-slide-in-right animation-delay-1000">
          <div className="grid grid-cols-1 gap-base">
            <div className="journey-card padding-base">
              <div className="flex items-center justify-between">
                <h5 className="font-bold">This is my journey</h5>
                <img src={Cat} width={50} height={50} />
              </div>
              <hr />
              <div>
                <p>
                  As a lifelong gamer, my passion for play seamlessly
                  transitioned into a fascination with creation. My journey into
                  coding began in 9th grade, where I quickly discovered a
                  natural aptitude for development. That same year, I proudly
                  earned a gold medal in a provincial-level competition,
                  solidifying my path. Now, as a fourth-year university student,
                  I'm eager to apply my skills through a Co-op Education
                  program, marking an exciting new chapter in my continuous
                  growth as a developer.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-base">
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
