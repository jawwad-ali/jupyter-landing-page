import AboutUs from "./components/AboutUs";
import Customize from "./components/Customize";
import HeroSection from "./components/HeroSection";
import Websites from "./components/Websites";
import Widgets from "./components/Widgets";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Widgets />
      <Websites />
      <Customize />
    </main>
  ); 
}
