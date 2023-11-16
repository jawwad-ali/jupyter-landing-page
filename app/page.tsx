import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
    </main>
  ); 
}
