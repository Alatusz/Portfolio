import HeroAboutMe from "./Hero.About.Me";
import HeroProfile from "./Hero.Profile";
import HeroTimeLineHistory from "./Hero.TimeLine.History";

const HomeLayout = () => {
  return (
    <div>
      <HeroProfile />
      <HeroAboutMe />
      <HeroTimeLineHistory />
    </div>
  );
};

export default HomeLayout;
