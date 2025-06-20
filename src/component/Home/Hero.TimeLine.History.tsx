import timeline from "../../assets/data/timeline.json";

// Types
type TimelineItemProps = {
  position: "left" | "right";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  logoIcon: string;
};

const TimelineItem = ({
  position,
  title,
  company,
  location,
  period,
  description,
  logoIcon,
}: TimelineItemProps) => {
  return (
    <div className="relative padding-base center">
      {/* Left Card */}
      {position === "left" && (
        <div className="w-1/2 pr-20 mr-auto">
          <div className="bg-black/30 backdrop-blur-sm padding-base rounded-lg shadow-md border border-gray-200/30 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <h6 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                  {title}
                </h6>
                <small className="bg-gradient-blue shadow-md border-2 border-cyan-300 text-white px-3 py-1 rounded-full text-xs hover:scale-105 transition-all duration-200">
                  {period}
                </small>
              </div>
              <div className="flex items-center gap-2 mb-3 text-gray-300">
                <span className="font-medium group-hover:text-blue-300 transition-colors duration-200">
                  {company}
                </span>
                <span className="group-hover:text-blue-200 transition-colors duration-200">
                  • {location}
                </span>
              </div>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-200">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty space for right position */}
      {position === "right" && <div className="w-1/2"></div>}

      {/* Center Timeline Circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        {/* Pulsing Background */}
        <div className="absolute h-12 w-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-ping-slow"></div>
        {/* Logo Container */}
        <div className="relative bg-transparent backdrop-blur-sm rounded-full p-2 border border-white/20 hover:scale-110 transition-transform duration-300">
          <img
            src={logoIcon}
            alt={`${company} logo`}
            className="h-8 w-8 rounded-full object-cover transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right Card */}
      {position === "right" && (
        <div className="w-1/2 pl-20 ml-auto">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/30 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <h6 className="font-semibold text-white group-hover:text-emerald-300 transition-colors duration-200">
                  {title}
                </h6>
                <small className="bg-gradient-green shadow-md text-white px-3 py-1 border-2 border-emerald-300 rounded-full text-xs hover:scale-105 transition-all duration-200">
                  {period}
                </small>
              </div>
              <div className="flex items-center gap-2 mb-3 text-gray-300">
                <span className="font-medium group-hover:text-emerald-300 transition-colors duration-200">
                  {company}
                </span>
                <span className="group-hover:text-emerald-200 transition-colors duration-200">
                  {location}
                </span>
              </div>
              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-200">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty space for left position */}
      {position === "left" && <div className="w-1/2"></div>}
    </div>
  );
};

// Main Component
const HeroTimeLineHistory = () => {
  return (
    <div className="w-[1280px] card-glassmorphism-transparent center flex-col justify-center gap-base padding-base margin-content rounded-base">
      <h4 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent py-10">
        Work Experience
      </h4>
      <div className="relative w-full">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-green-400 to-purple-400 transform -translate-x-1/2 z-0"></div>

        {timeline.map((exp, index) => (
          <div key={index} className="relative">
            <TimelineItem
              position={exp.position as "left" | "right"}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              logoIcon={exp.logoIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTimeLineHistory;
