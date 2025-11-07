import { Handshake, Heart, HeartIcon, HeartOff } from "lucide-react";
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
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-nunito  font-bold lg:leading-16"
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
      <section className="container mx-auto pt-6 pb-24 px-4">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-xl md:text-3xl font-extrabold font-nunito text-gray-800 mb-2">
            Our Work
          </h2>
          <div className="w-24 h-0.5 bg-[#fe5429] mx-auto"></div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <OurWorkCarousel />
        </div>
      </section>

      {/* Donation Section */}
      <section className="relative">
        <div className="hidden lg:block absolute h-[300px] sm:h-[400px] lg:h-[500px] bg-[#f7f3ef] -z-10 w-full sm:w-[350px] lg:w-[450px] rounded-r-2xl" ></div>
        <div className="container mx-auto lg:pt-12 pb-24 px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div 
              className="flex-1 flex items-center justify-center order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-full bg-[#f7f3ef] rounded-2xl overflow-hidden">
                <img src="./donate_scanner.jpeg" alt="Donation QR Code" className="w-full h-full object-cover" />
              </div>
            </div>
            <div 
              className="flex-1 flex flex-col gap-4 lg:gap-6 order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-2">
                <p
                  className="text-[#fe5429] text-2xl md:text-4xl font-tertiary"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Help make a difference
                </p>
                <p
                  className="text-2xl lg:text-4xl xl:text-5xl font-nunito font-extrabold leading-tight"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  A trusted non-profit charity organization
                </p>
              </div>
              <p
                className="text-gray-800 text-base lg:text-lg my-2 lg:my-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Our non-profit charity center is trustworthy as well as to changing the world. Our goal is to create good change in our community by providing assistance to those in need and offering funding.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-2 pb-6 lg:pb-10 border-b"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="flex-1 flex items-center justify-start gap-3 lg:gap-4">
                  <div className="bg-[#fe5429] shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl flex items-center justify-center rotate-45 p-3 lg:p-4">
                    <img src="./icons/ic_handshake.svg" alt="Donate" className="-rotate-45 w-full h-full" />
                  </div>
                  <p className="font-extrabold font-nunito text-base sm:text-xl lg:text-2xl text-left">Be a Hero, Contribute Now</p>
                </div>
                <div className="flex-1 flex items-center justify-start gap-3 lg:gap-4">
                  <div className="bg-secondary shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl flex items-center justify-center rotate-45 p-3 lg:p-4">
                    <img src="./icons/ic_help_children.svg" alt="Help Children" className="-rotate-45 w-full h-full" />
                  </div>
                  <p className="font-extrabold font-nunito text-base sm:text-xl lg:text-2xl text-left">Help Children with Donations</p>
                </div>
              </div>
              <ul 
                className="flex flex-col gap-3 lg:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <img src="./icons/ic_heart.svg" width={20} height={20} className="sm:w-6 sm:h-6" alt="" /> 
                  Providing essential resources to underserved communities.
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <img src="./icons/ic_heart.svg" width={20} height={20} className="sm:w-6 sm:h-6" alt="" /> 
                  Offering support through educational and health programs.
                </li>
                <li className="flex items-center gap-2 text-sm sm:text-base">
                  <img src="./icons/ic_heart.svg" width={20} height={20} className="sm:w-6 sm:h-6" alt="" /> 
                  Facilitating volunteer opportunities for community involvement.
                </li>
              </ul>
              <button 
                className="w-full sm:w-fit bg-[#fe5429] hover:bg-[#cb411e] text-white px-6 py-3 rounded-lg transition-colors cursor-pointer duration-200 text-base lg:text-lg font-semibold mt-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Support Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
