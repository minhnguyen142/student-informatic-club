import { useState, useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

interface HeaderProps {
  darkMode: boolean;
}

export default function Header({ darkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (menuOpen && window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <div className="fixed z-20 w-full p-3 border-b-2 dark:border-b-slate-50 bg-white dark:bg-gray-700 text-orange-400 dark:text-blue-700 transition-all">
      <div className="max-w-6xl mx-auto flex items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width="50" height="50"></Image>
        </Link>
        <div className="hidden md:flex flex-1 justify-end space-x-8 mr-8">
          <Link
            href="works"
            className="text-orange-400 font-bold transition-opacity hover:opacity-70 dark:text-blue-700"
          >
            Works
          </Link>
            <Link
              href="works"
              className="text-orange-400 font-bold transition-opacity hover:opacity-70 dark:text-blue-700"
            >
              Posts
            </Link>
        </div>

        <div
          className="md:hidden flex flex-1 justify-end mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <button className="text-3xl hover:bg-slate-400 rounded-lg p-1 transition-all">
            <RiMenuFill />
          </button>
        </div>
        <ThemeToggle children={undefined} />

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-12 right-3 mt-1 bg-yellow-50 dark:bg-cyan-950 py-3 px-6 rounded-xl transition-all whitespace-pre`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              href="works"
              className="text-orange-400 font-bold transition-opacity hover:opacity-70 dark:text-blue-700"
            >
              Works
            </Link>
            <Link
              href="works"
              className="text-orange-400 font-bold transition-opacity hover:opacity-70 dark:text-blue-700"
            >
              Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
