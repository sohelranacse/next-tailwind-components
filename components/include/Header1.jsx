import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, LightningBoltIcon } from "react-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <a>
            <LightningBoltIcon className="h-8 w-8 flex-shrink-0 mr-3" />
            <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
              Next-js Dev
            </span>
          </a>
        </Link>

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
