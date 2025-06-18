type SkillCardProps = {
  title: string;
  listItem: string[];
};

const SkillCard = ({ title, listItem }: SkillCardProps) => {
  return (
    <div className="min-w-[250px]">
      <div className="card-transparent p-6 rounded-lg shadow-md border-1 border-gray-200/30 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          <div className="flex justify-between">
            <span className="font-bold group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </span>
            <div className="flex flex-row gap-1">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-dot animation-delay-0"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-dot animation-delay-200"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-dot animation-delay-400"></div>
            </div>
          </div>
          <hr className="my-2 text-gray-400" />
          <div className="px-5">
            <ul>
              {listItem.map((item, index) => (
                <li
                  key={index}
                  className="list-disc text-white group-hover:text-black hover:text-blue-600 transition-colors duration-200 animate-slide-in-item opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default SkillCard;
