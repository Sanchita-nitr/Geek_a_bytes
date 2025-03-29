"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Menu items list for easier mapping
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Online Booking", path: "/onlinebooking" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" }, 
  { name: "Signup", path: "/signup" },
  ];

  // Toggle menu function
  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close menu after selection
    router.push(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 shadow-lg">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-8 py-4">
        <div className="text-white text-2xl font-bold cursor-pointer">
          <button onClick={() => router.push("/")}>Om Tours</button>
        </div>
        <ul className="flex gap-10">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.path)}
                className="text-white text-xl font-bold transition-all duration-300 hover:scale-105"
                aria-label={item.name}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-4">
        <div className="text-white text-2xl font-bold">
          <button onClick={() => router.push("/")}>Om Tours</button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-lg bg-black/60 py-6 flex flex-col items-center space-y-6 text-white text-xl shadow-lg animate-slideInDown md:hidden">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="transition-all duration-300 hover:scale-105"
              aria-label={item.name}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
