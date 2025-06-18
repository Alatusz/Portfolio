import Profile3 from "../assets/img/profile3.jpg";
import OFA from "../assets/img/profileAnimation.gif";
import ButtonModalCustom from "./ButtonModalCustom";

const HeroProfile = () => {
  return (
    <div className="w-[1200px] flex flex-col mx-auto items-center gap-6 my-20">
      {/* Profile Image with Glowing Animation */}
      <div className="relative group">
        {/* Background Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 animate-pulse blur-lg"></div>

        {/* Rotating Border Ring */}
        <div className="absolute -inset-2 rounded-full animate-spin-slow">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
        </div>

        {/* Profile Image */}
        <div className="relative transform transition-transform duration-300 hover:scale-105">
          <img
            src={Profile3}
            height={300}
            width={300}
            className="relative z-10 ring-4 ring-white/20 shadow-2xl hover:ring-white/40 transition-all duration-300 rounded-full"
          />
        </div>
      </div>

      {/* Animated Text */}
      <span className="text-8xl font-bold bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
        Alatusz
      </span>
      <span className="text-4xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent animate-fade-in-up opacity-0 animation-delay-500">
        I'm Front-End Developer
      </span>
      <ButtonModalCustom label="ONE FOR ALL" image={OFA} />
    </div>
  );
};

export default HeroProfile;
