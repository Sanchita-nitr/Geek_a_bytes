
import About from "./components/About";
import Destinations from "./components/DestinationPlaces";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItineraryDisplay from "./components/ItineraryDisplay";
import Navbar from "./components/Navbar";
import Packages from "./components/Package";
import RealTimeUpdates from "./components/RealTimeUpdates";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <About />
      <Packages />
      <Destinations />
      <ItineraryDisplay />
      <RealTimeUpdates />
      <ThemeToggle />
      <Footer />
    </div>
  );
}
