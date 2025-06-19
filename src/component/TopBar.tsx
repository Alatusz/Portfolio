import { Outlet } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonCustom from "./ButtonCustom";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar-glassmorphism animate-slide-down mx-auto">
        <div className="center h-full">
          <ButtonCustom label="Home" onClick={() => navigate("/")} />
          <ButtonCustom
            label="About Me"
            onClick={() => navigate("/about-me")}
          />
          <ButtonCustom
            label="Experience"
            onClick={() => navigate("/experirence")}
          />
          <ButtonCustom label="Skills" onClick={() => navigate("/skills")} />
          <ButtonCustom label="Contact" onClick={() => navigate("/contact")} />
          <ButtonCustom label="Project" onClick={() => navigate("/project")} />
        </div>
        <div className="center h-full">
          <ThemeSwitcher />
        </div>
      </div>
      {/* Outlet */}
      <Outlet />
    </>
  );
};

export default TopBar;
