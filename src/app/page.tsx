import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { TestimonialCards } from "@/components/TestimonialCards";
import Upcomingwebinars from "@/components/UpcomingWebinars";
// import Upcomingwebinars from "@/components/Upcomingwebinars";
// import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-1xl text-center">Chai11 aur Code111</h1> */}
      <HeroSection/>
      <FeaturedCourses/> 
      <WhyChooseUs/>
      <TestimonialCards/>
      <Upcomingwebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
