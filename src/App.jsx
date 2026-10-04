import Navbar from "./components/layout/Navbar"
import HeroSection from "./sections/HeroSection"
import StatsSection from "./sections/StatsSection"
import ScrollProgress from "./animation/ScrollProgress"
import AboutSection from "./sections/AboutSection"
import AcademicsSection from "./sections/AcademicsSection"
import SportsSection from "./sections/SportsSection"
import Testimonials from "./sections/Testimonials"
import CTASection from "./sections/CTASection"
import Footer from "./components/layout/Footer"
import CustomCursor from "./animation/CustomCursor"





function App() {
  return (
    <>
      <ScrollProgress />  
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AcademicsSection />
      <SportsSection />
      <Testimonials /> 
      <CTASection />
      <Footer />
       <CustomCursor />
    </>
  )
}

export default App