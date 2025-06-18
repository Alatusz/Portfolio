// COMPONENT
import TopBar from "./component/TopBar";
import HeroProfile from "./component/Hero.Profile";
import HeroAboutMe from "./component/Hero.About.Me";
import HeroTimeLineHistory from "./component/Hero.TimeLine.History";

// CSS
import "./App.css";
import { Route } from "react-router-dom";

// APP
function App() {
  return (
    <Route path="/">
      <TopBar />
      <HeroProfile />
      <HeroAboutMe />
      <HeroTimeLineHistory />
    </Route>
  );
}

export default App;
