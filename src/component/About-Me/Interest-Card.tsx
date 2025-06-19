// InterestsCard.tsx

const interests = [
  "Gaming",
  "Watching Movies",
  "Reading Books",
  "Web Development",
];

const InterestsCard = () => {
  return (
    <>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center">
        <span className="mr-2" />
        Personal Interests
      </h2>
      <div className="bg-transparent border-slate-700 rounded-2xl backdrop-blur-sm">
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-transparent border border-purple-500/20 rounded-lg p-3 text-center text-slate-300 hover:bg-purple-500/20 transition-colors"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestsCard;
