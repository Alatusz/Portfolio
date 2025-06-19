// MBTICard.tsx

import { BiCheckCircle, BiTargetLock } from "react-icons/bi";

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
        color: "bg-gradient-to-l from-purple-800 to-pink-500",
      },
      {
        name: "Intuition",
        percentage: 100,
        color: "bg-gradient-to-l from-purple-700 to-purple-500",
      },
      {
        name: "Feeling",
        percentage: 100,
        color: "bg-gradient-to-l from-green-700 to-green-500",
      },
      {
        name: "Judging",
        percentage: 100,
        color: "bg-gradient-to-l from-blue-900 to-blue-700",
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
      "Can be **overly sensitive** to criticism or conflict.",
      "Prone to **burnout** from overextending themselves to help others.",
      "Difficulty **opening up** completely, even to close friends, holding back parts of themselves.",
      "Can be **perfectionistic** and overly critical of themselves.",
      "Tendency to **take on others' problems** as their own, leading to emotional exhaustion.",
      "Sometimes **struggle with practical, day-to-day details**.",
    ],
  },
];

const MBTICard = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <h2 className="text-center text-header-gradient-green pb-4">
        MBTI Personality
      </h2>
      <div className="grid grid-cols-2 gap-10">
        {/* INFJ Card */}
        <div className="bg-transparent rounded-2xl backdrop-blur-sm border ring-4 ring-white/30 hover:scale-105 hover:shadow-lg transform transition-all duration-p-10">
          <div className="flex flex-col p-10 gap-8">
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-r from-[#2EB62C] to-[#83D475] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
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
            <div className="grid grid-cols-1 gap-6 mb-8">
              {profileData
                .flatMap((data) => data.traits)
                .map((trait, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-300">
                        {trait.name}
                      </span>
                      <span className="text-sm font-medium text-gray-300">
                        {trait.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${trait.color} transition-all duration-1000`}
                        style={{ width: `${trait.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* About INFJ */}
        <div className="bg-transparent rounded-2xl backdrop-blur-sm border ring-4 ring-white/30 hover:scale-105 hover:shadow-lg transform transition-all duration-p-10">
          <div className="flex flex-col p-10 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4  bg-transparent rounded-xl">
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <BiCheckCircle className="w-5 h-5" />
                  Strengths
                </h4>
                <ul className="space-y-1">
                  {profileData
                    .flatMap((data) => data.strengths)
                    .map((strength, idx) => (
                      <li
                        key={idx}
                        className="text-green-200 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="p-4 bg-transparent rounded-xl ">
                <h4 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                  <BiTargetLock className="w-5 h-5" />
                  Unique Abilities
                </h4>
                <ul className="space-y-1">
                  {profileData
                    .flatMap((data) => data.uniqueAbilities)
                    .map((uniqueAbilities, idx) => (
                      <li
                        key={idx}
                        className="text-yellow-200 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        {uniqueAbilities}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="p-4 bg-transparent rounded-xl col-span-2">
                <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                  <BiTargetLock className="w-5 h-5" />
                  Weakness
                </h4>
                <ul className="space-y-1">
                  {profileData
                    .flatMap((data) => data.weakness)
                    .map((weakness, idx) => (
                      <li
                        key={idx}
                        className="text-red-200 text-sm flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        {weakness}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTICard;
