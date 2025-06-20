// BioSection.tsx
const BioCard = () => {
  return (
    <div className="max-w-[600px] min-h-[600px] center flex-col margin-content gap-large">
      <h3 className="text-header-gradient-orange pb-4">My Story</h3>
      <div className="bg-transparent rounded-large backdrop-blur-sm border border-gray-200/30 ring-2 ring-white/30 hover:scale-105 hover:shadow-lg transition">
        <div className="padding-base">
          <p className="text-slate-300 leading-relaxed">
            Hi! I'm Patipat Trisuk, a 21-year-old Computer Science student from
            the beautiful province of Chanthaburi, Thailand. Currently in my
            final year at RBRU University, I'm passionate about web development
            and creating digital experiences that make a difference.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As an INFJ personality type, I bring creativity, dedication, and a
            user-focused approach to every project. My goal is to secure a
            position as a Web Developer where I can contribute to meaningful
            projects while continuing to grow my skills in this ever-evolving
            field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioCard;
