import { Heart } from "lucide-react";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <section className="bg-[#f7f3ef] h-screen">
      {/* Hero Section */}
      <div className="bg-primary h-[70vh] w-[98%] ml-auto rounded-l-2xl">
        <div className="container mx-auto flex items-center justify-center h-full gap-4">
          {/* Left Side */}
          <div className="flex-1 flex justify-center flex-col h-full gap-3">
            <p 
              className="text-secondary text-4xl font-tertiary"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Help make a difference
            </p>
            <p 
              className="text-white text-6xl font-nunito font-bold"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Together, Let's Create a Caring Society
            </p>
            <p 
              className="text-gray-200  text-lg mt-4"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Join our mission to support and uplift the needy. Your donation provides food, shelter, and hope for a better future.
            </p>
            <div 
              className="flex items-center gap-8 mt-6 mb-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
               <button className="inline-flex items-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-4 py-3 rounded-lg transition-colors cursor-pointer duration-200">Donate Now</button>
               <a href="#" className="inline-flex items-center text-sm gap-2 text-white underline font-bold uppercase"><Heart size={24} className="text-secondary" /> Be a Volunteer</a>
            </div>
          </div>
          {/* Right Side - Auto-sliding Carousel */}
          <div 
            className="flex-1 flex items-center justify-center h-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <HeroCarousel />
          </div>
        </div>
      </div>
      {/* End Hero Section */}
    </section>
  );
}
