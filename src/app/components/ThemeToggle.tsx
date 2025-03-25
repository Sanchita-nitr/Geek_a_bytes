"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md"
    >
      {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
    </button>
  );
}
