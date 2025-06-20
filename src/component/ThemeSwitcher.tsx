import React, { useState, useEffect } from "react";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<number>(6);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const themeOptions = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="grid center">
      <div className="rounded-base transition duration-300 hover:opacity-80 hover:scale-105">
        <select
          className="p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          value={theme}
          onChange={(e) => setTheme(Number(e.target.value))}
        >
          {themeOptions.map((item) => (
            <option key={item} value={item} className="text-black">
              Theme {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
