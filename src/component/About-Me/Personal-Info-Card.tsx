// PersonalInfoCard.tsx
import React from "react";
import type { IconType } from "react-icons";

type PersonalInfo = {
  icon: IconType;
  label: string;
  value: string;
};

type PersonalInfoCardProps = {
  personalInfo: PersonalInfo[];
};

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  personalInfo,
}) => {
  return (
    <>
      <h2 className="min-h-screen text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-6">
        Personal Information
      </h2>
      <div className="flex items-center gap-8">
        <div className="bg-transparent border-slate-700 rounded-2xl backdrop-blur-sm p-6">
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700"
              >
                <div className="text-slate-400 text-2xl">
                  {item.icon && <item.icon />}
                </div>
                <div className="text-slate-400 text-2xl"></div>
                <div>
                  <span className="text-slate-400 text-sm">{item.label}:</span>
                  <p className="text-slate-200 text-base font-medium">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoCard;
