import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Websites from "./components/Websites";
import Widgets from "./components/Widgets";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Widgets />
      <Websites />
    </main>
  ); 
}
