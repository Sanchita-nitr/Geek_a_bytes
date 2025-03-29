"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Destinations from "./components/DestinationPlaces";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItineraryDisplay from "./components/ItineraryDisplay";
import Navbar from "./components/Navbar";
import Packages from "./components/Package";
import RealTimeUpdates from "./components/RealTimeUpdates";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={darkMode ? "dark bg-orange-900 text-white" : "bg-white text-black"}>
      <Navbar />
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition duration-300"
      >
        {darkMode ? <FaSun className="text-yellow-500 text-xl" /> : <FaMoon className="text-gray-500 text-xl" />}
      </button>
      <Hero />
      <About />
      <Packages />
      <Destinations />
      <ItineraryDisplay />
      <RealTimeUpdates />
      <Footer />
    </div>
  );
}