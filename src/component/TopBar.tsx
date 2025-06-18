import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonCustom from "./ButtonCustom";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`
        w-[1200px] h-[60px] flex justify-center border-solid border-1 border-gray-200 rounded-full shadow-md mx-auto my-4
        sticky top-4 z-50
        transition-all duration-500 ease-out animate-slide-down
        ${
          isScrolled
            ? "bg-white backdrop-blur-lg hover:bg-white/50 shadow-lg border-gray-200 text-gray-800"
            : "card-transparent backdrop-blur-md hover:bg-white/90 shadow-md border-gray-200/30 text-white"
        }
      `}
      >
        <div className="flex items-center h-full gap-4">
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
        <div className="flex items-center h-full gap-4">
          <ThemeSwitcher />
        </div>
      </div>

      {/* This is where child routes will be rendered */}
      <Outlet />
    </>
  );
};

export default TopBar;
