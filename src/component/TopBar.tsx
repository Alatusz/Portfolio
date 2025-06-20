import { Outlet } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonCustom from "./ButtonCustom";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar-glassmorphism center justify-center animate-slide-down">
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
          <ThemeSwitcher />
        </div>
      </div>
      {/* Outlet */}
      <div className="mt-[80px]">
        <Outlet />
      </div>
    </>
  );
};

export default TopBar;
