import { Handshake, Heart, HeartIcon, HeartOff, PlayIcon } from "lucide-react";
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
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Help make a difference
              </p>
              <p
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-nunito  font-bold lg:leading-16"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
              >
                Together, Let's Create a Caring Society
              </p>
              <p
                className="text-gray-200 text-base md:text-lg mt-2 md:mt-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                Join our mission to support and uplift the needy. Your donation provides food, shelter, and hope for a better future.
              </p>
              <div
                className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 md:mt-6 mb-6 md:mb-12"
                data-aos="zoom-in"
                data-aos-duration="500"
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
              data-aos-duration="600"
              data-aos-delay="150"
            >
              <HeroCarousel />
            </div>
          </div>
        </div>
        {/* Fundraising Section */}
        <div 
          className="w-full px-4 sm:px-6 md:max-w-[90%] lg:max-w-[80%] mx-auto my-8 md:my-12 pb-8 md:pb-12"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <div className="flex flex-col lg:flex-row justify-around items-center md:items-stretch gap-8 md:gap-4">
            {/* Medical Aid */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 w-full md:w-auto"
              data-aos="zoom-in"
              data-aos-duration="400"
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
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="150"
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
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="200"
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
        <div 
          className="text-center mb-12" 
          data-aos="fade-up" 
          data-aos-duration="500"
          data-aos-delay="50"
        >
          <h2 className="text-xl md:text-3xl font-extrabold font-nunito text-gray-800 mb-2">
            Our Work
          </h2>
          <div className="w-24 h-0.5 bg-[#fe5429] mx-auto"></div>
        </div>
        <div 
          data-aos="fade-up" 
          data-aos-duration="600" 
          data-aos-delay="150"
        >
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
              data-aos-duration="500"
              data-aos-delay="50"
            >
              <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-full bg-[#f7f3ef] rounded-2xl overflow-hidden">
                <img src="./donate_scanner.jpeg" alt="Donation QR Code" className="w-full h-full object-cover" />
              </div>
            </div>
            <div
              className="flex-1 flex flex-col gap-4 lg:gap-6 order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="flex flex-col gap-2">
                <p
                  className="text-[#fe5429] text-2xl md:text-4xl font-tertiary"
                  data-aos="fade-up"
                  data-aos-duration="400"
                  data-aos-delay="150"
                >
                  Help make a difference
                </p>
                <p
                  className="text-2xl lg:text-4xl xl:text-5xl font-nunito font-extrabold leading-tight"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  A trusted non-profit charity organization
                </p>
              </div>
              <p
                className="text-gray-800 text-base lg:text-lg my-2 lg:my-3"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="250"
              >
                Our non-profit charity center is trustworthy as well as to changing the world. Our goal is to create good change in our community by providing assistance to those in need and offering funding.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-2 pb-6 lg:pb-10 border-b"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
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
                data-aos-duration="400"
                data-aos-delay="350"
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
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                Support Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section>
        <div className="relative">
          {/* Call-to-Action Banner */}
          <div
            className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-[120px] lg:right-[120px] z-30 -top-25 sm:-top-20 lg:-top-[150px] bg-secondary min-h-[180px] sm:h-[200px] lg:h-[250px] rounded-2xl flex flex-col lg:flex-row overflow-hidden justify-between gap-4 lg:gap-5 p-4 sm:p-6 lg:px-18 lg:py-8"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="flex items-center justify-center h-full flex-1">
              <p
                className="text-primary font-extrabold font-nunito text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-center lg:text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Help us build a future filled with hope and opportunities
              </p>
            </div>
            <div
              className="flex items-center justify-center shrink-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg transition-colors cursor-pointer duration-200 text-sm sm:text-base lg:text-xl font-semibold w-full lg:w-auto">
                Discover More
              </button>
            </div>
          </div>

          {/* Background Image Section */}
          <div className="h-[90vh] sm:h-screen lg:h-[80vh] mt-[100px] sm:mt-[120px] lg:mt-[200px] relative">
            <img src="./students_bg.jpg" className="w-full h-full object-cover" alt="Students Background" />
            <div className="absolute inset-0 bg-primary/70"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 max-w-[1200px] mx-auto z-10 h-full flex flex-col items-center gap-8 lg:gap-16 justify-center px-4 sm:px-6 lg:px-8">

              {/* Header Section */}
              <div
                className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start pb-8 lg:pb-16 border-b-2 border-white mt-8 lg:mt-16 gap-6 lg:gap-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p
                  className="max-w-full lg:max-w-[700px] text-white font-extrabold font-nunito text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight capitalize text-center lg:text-left"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Support and contribute to their urgent needs
                </p>
                <div
                  className="flex items-center shrink-0 flex-col gap-2"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >
                  <div className="p-2 lg:p-3 border rounded-full bg-white/20 cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-white rounded-full p-3 lg:p-5 flex items-center justify-center">
                      <PlayIcon className="w-full h-full text-[#fe5429]" />
                    </div>
                  </div>
                  <p className="font-extrabold font-tertiary italic text-secondary text-xl sm:text-2xl lg:text-3xl">Watch Video</p>
                </div>
              </div>

              {/* Bottom Section */}
              <div
                className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div
                  className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5 text-center sm:text-left"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <img src="./icons/ic_give_logo.svg" alt="Give Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold max-w-md">Every small contribution can create a meaningful change.</p>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-delay="900"
                >
                  <button className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg transition-colors cursor-pointer duration-200 text-sm sm:text-base lg:text-xl font-semibold w-full sm:w-auto">
                    Support Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-12 sm:py-16 lg:py-24">
        <div className="hidden lg:block absolute right-0 h-[300px] sm:h-[400px] lg:h-[500px] bg-[#f7f3ef] -z-10 w-full sm:w-[350px] lg:w-[450px] rounded-l-2xl" ></div>
        <div className="container mx-auto lg:pt-12 px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Content Section */}
            <div
              className="flex-1 flex flex-col gap-4 lg:gap-6 order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="flex flex-col gap-3 lg:gap-4">
                <p
                  className="text-[#fe5429] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-tertiary"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  About Founder & President
                </p>
                <p
                  className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-nunito font-extrabold leading-tight"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Mr. Prakash, Founder & President of Agamagizh Trust
                </p>
              </div>
              <p
                className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                He has led the organization with resilience and determination since 2020. His journey from a challenging childhood to leading impactful social initiatives is an inspiration. Under his leadership, the trust has focused on education, hunger eradication, shelter for the homeless, and environmental sustainability.
              </p>
              
              {/* Awards Section */}
              <div 
                className="bg-primary/10 p-3 sm:p-4 lg:p-6 w-full rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="flex justify-center sm:justify-start shrink-0">
                  <img 
                    src="./award_govt.jpeg" 
                    width={120} 
                    height={120} 
                    alt="Government Award" 
                    className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[180px] xl:h-[180px] rounded-xl object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <ul className="flex flex-col gap-2 sm:gap-3">
                      <li 
                        className="flex items-start gap-2 text-xs sm:text-sm lg:text-base"
                        data-aos="fade-left"
                        data-aos-delay="700"
                      >
                        <img src="./icons/ic_heart.svg" width={16} height={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5 shrink-0" alt="" />
                        <span>Awarded by Government of Tamil Nadu</span>
                      </li>
                      <li 
                        className="flex items-start gap-2 text-xs sm:text-sm lg:text-base"
                        data-aos="fade-left"
                        data-aos-delay="800"
                      >
                        <img src="./icons/ic_heart.svg" width={16} height={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5 shrink-0" alt="" />
                        <span>70+ Recognitions from Various Organizations for Social Service</span>
                      </li>
                      <li 
                        className="flex items-start gap-2 text-xs sm:text-sm lg:text-base"
                        data-aos="fade-left"
                        data-aos-delay="900"
                      >
                        <img src="./icons/ic_heart.svg" width={16} height={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 mt-0.5 shrink-0" alt="" />
                        <span>Social Welfare Organization award</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div
              className="flex-1 flex items-center justify-center order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-[#f7f3ef] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="./founder.jpg" 
                  alt="Mr. Prakash - Founder & President of Agamagizh Trust" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
