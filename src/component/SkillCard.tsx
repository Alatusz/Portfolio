type SkillCardProps = {
  title: string;
  listItem: string[];
};

const SkillCard = ({ title, listItem }: SkillCardProps) => {
  return (
    <div className="card-skills padding-small">
      <div className="z-10">
        <div className="flex justify-between">
          <h6 className="font-bold">{title}</h6>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-dot animation-delay-0"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-dot animation-delay-200"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-dot animation-delay-400"></div>
          </div>
        </div>
        <hr />
        <ul className="list-disc">
          {listItem.map((item, index) => (
            <li key={index} className="animate-slide-in-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
