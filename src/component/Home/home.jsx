import HeroSection from "./components/header";
import AboutSection from "./components/about";
import Features from "./components/features";
import VendorPerks from "./components/vendor";
import Map from './components/map.jsx'
import Testimonials from './components/Testimonials'


function Home() {

  return (
    <>
    <HeroSection />
    <AboutSection />
    <Features />
    <VendorPerks/>
    <Map/>
    <Testimonials/>
    </>
  )
}

export default Home