import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Dark() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark")
      return (
        <FaSun
          role="button"
          className="h-8 w-8 mt-1 mr-2"
          onClick={() => setTheme("light")}
        />
      );
    else
      return (
        <FaMoon
          role="button"
          className="h-8 w-8 mt-1 mr-2"
          onClick={() => setTheme("dark")}
        />
      );
  };
  return <>{renderThemeChanger()}</>;
}

export default Dark;
