// EducationTimeline.tsx
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcCalendar, FcReading } from "react-icons/fc";
import { LuBookOpen } from "react-icons/lu";
import { TiMortarBoard } from "react-icons/ti";

interface EducationItem {
  title: string;
  location: string;
  level: string;
  major?: string;
  period: string;
  gpa: string;
}

interface EducationTimelineProps {
  educationTimeline: EducationItem[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  educationTimeline,
}) => {
  return (
    <div className="flex flex-col gap-10 min-h-screen">
      <h2 className="text-center text-header-gradient-blue">
        Education Timeline
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[35px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-600"></div>

        <div className="space-y-8">
          {educationTimeline.map((item, index) => {
            return (
              <div key={index} className="relative flex items-center">
                {/* Timeline */}
                <div className="animate-ping-slow absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                {/* Content Card */}
                <div className="ml-20 w-full">
                  <div className=" edu-card group min-w-[800px] flex flex-col gap-3">
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex items-center gap-4">
                        <LuBookOpen className="group-hover:text-blue-600 transition-colors duration-200" />
                        <h3 className="text-xl font-bold text-slate-200 mb-2">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">
                          {item.gpa} / 4.00
                        </span>
                        <FaRegStar className="text-yellow-300 text-2xl group-hover:hidden" />
                        <FaStar className="text-yellow-300 text-2xl hidden group-hover:block" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="text-red-500 text-xs" />
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium text-slate-300 text-base">
                          Location :
                        </span>
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TiMortarBoard className="group-hover:text-blue-600 transition-colors duration-200" />
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium text-slate-300 text-base">
                          Level :
                        </span>
                        {item.level}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FcReading />
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium text-slate-300 text-base">
                          Major :
                        </span>
                        {item.major}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FcCalendar />
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium text-slate-300 text-base">
                          Period :
                        </span>
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
