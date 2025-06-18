type SkillCardProps = {
  title: string;
  listItem: string[];
};

const SkillCard = ({ title, listItem }: SkillCardProps) => {
  return (
    <div className="card-skills">
      <div className="relative z-10">
        <div className="flex justify-between">
          <span className="font-bold">{title}</span>
          <div className="flex flex-row gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-dot animation-delay-0"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-dot animation-delay-200"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-dot animation-delay-400"></div>
          </div>
        </div>
        <hr className="my-2 text-gray-400" />
        <ul className="list-disc pl-4">
          {listItem.map((item, index) => (
            <li
              key={index}
              className="text-white transition-colors duration-200 opacity-100 animate-slide-in-item"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 opacity-0"></div>
    </div>
  );
};

export default SkillCard;
