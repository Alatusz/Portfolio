// BioSection.tsx
const BioCard = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <h2 className="text-center text-header-gradient-orange pb-4">
          My Story
        </h2>
      <div className="bg-transparent rounded-2xl backdrop-blur-sm border ring-4 ring-white/30 hover:scale-105 hover:shadow-lg transform transition-all duration-p-10">
        <div className="p-6">
          <p className="text-slate-300 leading-relaxed mb-4">
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
