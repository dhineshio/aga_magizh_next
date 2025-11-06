import { Heart } from "lucide-react";
import HeroCarousel from "./components/HeroCarousel";
import OurWorkCarousel from "./components/OurWorkCarousel";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#f7f3ef]">
        <div className="bg-primary min-h-[70vh] lg:h-[70vh] w-full md:w-[98%] ml-auto md:rounded-l-2xl">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full gap-6 lg:gap-4 px-4 md:px-6 py-8 lg:py-0">
            {/* Left Side */}
            <div className="order-2 lg:order-1 flex-1 flex justify-center flex-col h-full gap-3 lg:gap-3 w-full">
              <p 
                className="text-secondary text-2xl sm:text-3xl md:text-4xl font-tertiary"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Help make a difference
              </p>
              <p 
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-nunito  font-bold leading-16"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Together, Let's Create a Caring Society
              </p>
              <p 
                className="text-gray-200 text-base md:text-lg mt-2 md:mt-4"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Join our mission to support and uplift the needy. Your donation provides food, shelter, and hope for a better future.
              </p>
              <div 
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 md:mt-6 mb-6 md:mb-12"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-6 py-3 rounded-lg transition-colors cursor-pointer duration-200 w-full sm:w-auto text-base md:text-lg font-semibold">
                  Donate Now
                </button>
                <a href="#" className="inline-flex items-center justify-center text-xs sm:text-sm gap-2 text-white underline font-bold uppercase w-full sm:w-auto">
                  <Heart size={20} className="text-secondary" /> Be a Volunteer
                </a>
              </div>
            </div>
            {/* Right Side - Auto-sliding Carousel */}
            <div 
              className="order-1 lg:order-2 flex-1 flex items-center justify-center h-full w-full lg:w-auto"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <HeroCarousel />
            </div>
          </div>
        </div>
        {/* Fundraising Section */}
        <div className="w-full px-4 sm:px-6 md:max-w-[90%] lg:max-w-[80%] mx-auto my-8 md:my-12 pb-8 md:pb-12">
          <div className="flex flex-col lg:flex-row justify-around items-center md:items-stretch gap-8 md:gap-4">
            {/* Medical Aid */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 w-full md:w-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="./ic_donate.svg" alt="Medical Aid Icon" className="w-12 h-12 md:w-16 md:h-16 shrink-0" />
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-extrabold font-nunito">Medical Aid</p>
                <p className="text-xs md:text-sm text-gray-600">Essential help for health.</p>
              </div>
            </div>
            
            {/* Divider - Hidden on mobile */}
            <div className="block w-full h-px lg:h-18 lg:w-px bg-gray-300"></div>
          
            {/* Trust Funds */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 w-full md:w-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="./ic_funds.svg" alt="Trust Funds Icon" className="w-12 h-12 md:w-16 md:h-16 shrink-0" />
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-extrabold font-nunito">Trust Funds</p>
                <p className="text-xs md:text-sm text-gray-600">Support those in need.</p>
              </div>
            </div>
            
            {/* Divider - Hidden on mobile */}
            <div className="block w-full h-px lg:h-18 lg:w-px bg-gray-300"></div>
            
            {/* Funds Raised */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 w-full md:w-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src="./ic_raised.svg" alt="Funds Raised Icon" className="w-12 h-12 md:w-16 md:h-16 shrink-0" />
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-extrabold font-nunito">Funds Raised</p>
                <p className="text-xs md:text-sm text-gray-600">Collect funds for causes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Our Work Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold font-nunito text-gray-800 mb-2">
            Our Work
          </h2>
          <div className="w-24 h-0.5 bg-[#fe5429] mx-auto"></div>
        </div>
        <OurWorkCarousel />
      </section>
    </main>
  );
}
