import { useEffect, useState } from "react";
import Switch from "react-switch"; //Require installed "react-switch" to use switch
import { FiSun, FiMoon } from "react-icons/fi"; //Require installed "react-icons" to use icons

export default function ThemeToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkModePreferred);

    if (isDarkModePreferred) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-${darkMode ? "black" : "white"} text-${
        darkMode ? "white" : "black"
      }`}
    >
      <div className="flex items-center">
        <Switch
          onChange={toggleDarkMode}
          checked={darkMode}
          onColor="#333"
          offColor="#ccc"
          checkedIcon={<FiMoon className="absolute mt-1.5 mx-2" />}
          uncheckedIcon={<FiSun className="absolute mt-1.5 mx-1.5 text-orange-400" />}
        />
        {children}
      </div>
    </div>
  );
}
