import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import ButtonCustom from "./ButtonCustom";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <ButtonCustom label="Home" onClick={() => {}} />
        <ButtonCustom label="About Me" onClick={() => {}} />
        <ButtonCustom label="Experience" onClick={() => {}} />
        <ButtonCustom label="Skills" onClick={() => {}} />
        <ButtonCustom label="Contact" onClick={() => {}} />
      </div>
      <div className="flex items-center h-full gap-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default TopBar;
