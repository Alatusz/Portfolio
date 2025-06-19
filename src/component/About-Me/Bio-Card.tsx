// BioSection.tsx
const BioCard = () => {
  return (
    <>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent mb-4">
        My Story
      </h2>
      <div className="bg-transparent border-slate-700 rounded-2xl backdrop-blur-sm mb-8">
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
    </>
  );
};

export default BioCard;
