import { useState } from "react";
import { FaBullseye, FaRegCheckCircle } from "react-icons/fa";

type Trait = {
  name: string;
  percentage: number;
  color: string;
};

type profileData = {
  type: string;
  name: string;
  description: string;
  traits: Trait[];
  strengths: string[];
  uniqueAbilities: string[];
  weakness: string[];
};

const profileData: profileData[] = [
  {
    type: "INFJ",
    name: "The Advocate",
    description:
      "Creative, insightful, and passionate about helping others achieve their goals. Known for their idealism and strong sense of personal integrity.",
    traits: [
      {
        name: "Introvert",
        percentage: 100,
        color: "from-purple-800 to-pink-500",
      },
      {
        name: "Intuition",
        percentage: 100,
        color: "from-purple-700 to-purple-500",
      },
      {
        name: "Feeling",
        percentage: 100,
        color: "from-green-700 to-green-500",
      },
      {
        name: "Judging",
        percentage: 100,
        color: "from-blue-900 to-blue-700",
      },
    ],
    strengths: [
      "Empathetic",
      "Insightful and Visionary",
      "Determined and Decisive",
      "Effective Communicators",
      "Principled and Ethical",
    ],
    uniqueAbilities: [
      "Intuitive Understanding of People",
      "Inspiring and Guiding",
      "Strategic Planning",
      "Connecting Disparate Ideas",
      "Excellent Listeners and Deep Counselors",
    ],
    weakness: [
      "Can be overly sensitive to criticism or conflict.",
      "Prone to burnout from overextending themselves to help others.",
      "Difficulty opening up completely, even to close friends, holding back parts of themselves.",
      "Can be perfectionistic and overly critical of themselves.",
      "Tendency to take on others' problems as their own, leading to emotional exhaustion.",
      "Sometimes struggle with practical, day-to-day details.",
    ],
  },
];

const MBTICard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-[800px] min-h-[1000px] mx-auto ">
      <div className="w-full">
        <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          MBTI Personality
        </h3>

        {/* Flip Card Container */}
        <div className="perspective-1000 w-full">
          <div
            className={`flip-card-inner cursor-pointer ${
              isFlipped ? "flipped" : ""
            }`}
            onClick={handleFlip}
          >
            {/* Front Side - INFJ Overview */}
            <div className="flip-card-face flip-card-front">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-6 md:p-10 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-2xl">
                    INFJ
                  </div>
                  <div>
                    <h5 className="text-2xl md:text-3xl font-bold text-slate-200 mb-4">
                      The Advocate
                    </h5>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                      {profileData[0].description}
                    </p>
                  </div>

                  {/* Traits */}
                  <div className="w-full max-w-2xl space-y-4 md:space-y-6">
                    {profileData[0].traits.map((trait, idx) => (
                      <div key={idx} className="space-y-2 md:space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-slate-200 text-base md:text-lg">
                            {trait.name}
                          </span>
                          <span className="text-slate-300 font-medium">
                            {trait.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-3 md:h-4 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${trait.color} transition-all duration-1000 ease-out shadow-lg`}
                            style={{ width: `${trait.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Back Side - Detailed Information */}
            <div className="flip-card-face flip-card-back">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-6 md:p-10 hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Strengths */}
                  <div className="bg-slate-700/30 rounded-xl p-4 md:p-6">
                    <h5 className="font-bold text-green-400 mb-4 flex items-center gap-2 text-lg md:text-xl">
                      <FaRegCheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                      Strengths
                    </h5>
                    <ul className="space-y-2 md:space-y-3">
                      {profileData[0].strengths.map((strength, idx) => (
                        <li
                          key={idx}
                          className="text-green-200 flex items-start gap-3 text-sm md:text-base"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Unique Abilities */}
                  <div className="bg-slate-700/30 rounded-xl p-4 md:p-6">
                    <h5 className="font-bold text-yellow-400 mb-4 flex items-center gap-2 text-lg md:text-xl">
                      <FaBullseye className="w-5 h-5 md:w-6 md:h-6" />
                      Unique Abilities
                    </h5>
                    <ul className="space-y-2 md:space-y-3">
                      {profileData[0].uniqueAbilities.map((ability, idx) => (
                        <li
                          key={idx}
                          className="text-yellow-200 flex items-start gap-3 text-sm md:text-base"
                        >
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{ability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="bg-slate-700/30 rounded-xl p-4 md:p-6 lg:col-span-2">
                    <h5 className="font-bold text-red-400 mb-4 flex items-center gap-2 text-lg md:text-xl">
                      <FaBullseye className="w-5 h-5 md:w-6 md:h-6" />
                      Areas for Growth
                    </h5>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
                      {profileData[0].weakness.map((weakness, idx) => (
                        <li
                          key={idx}
                          className="text-red-200 flex items-start gap-3 text-sm md:text-base"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTICard;
