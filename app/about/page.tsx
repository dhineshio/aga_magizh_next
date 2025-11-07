'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <main>

      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-20 lg:py-24" >
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-nunito mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About AGA MAGIZH TRUST
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Creating positive change in our community since 2020
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section >

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Mission */}
            <div
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-[#fe5429]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#fe5429] p-3 rounded-xl">
                  <img src="/icons/ic_heart.svg" alt="Mission" className="w-8 h-8 filter brightness-0 invert" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary font-nunito">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                To create meaningful change in our community by providing essential resources, education support,
                and shelter for those in need. We are committed to building a society where every individual
                has access to basic necessities and opportunities for growth.
              </p>
            </div>

            {/* Vision */}
            <div
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-secondary"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary p-3 rounded-xl">
                  <img src="/icons/ic_tree_plantation.svg" alt="Vision" className="w-8 h-8 filter brightness-0 invert" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary font-nunito">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                A world where poverty, hunger, and homelessness are eliminated, and every person has the
                opportunity to live with dignity, access quality education, and contribute to a sustainable
                and compassionate society.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* About Organization */}
      <section className="py-16 lg:py-24" >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <div
              className="order-2 lg:order-1"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-6">
                About Our Organization
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base lg:text-lg leading-relaxed">
                  <strong>AGA MAGIZH TRUST</strong> (Registration No: 47/20) was founded in 2020 with a simple
                  yet powerful mission: to create positive change in our community through direct action and
                  sustainable programs.
                </p>
                <p className="text-base lg:text-lg leading-relaxed">
                  Since our inception, we have focused on four core areas: education support for underprivileged
                  children, hunger eradication through food assistance programs, providing shelter and support
                  for homeless individuals, and environmental sustainability through tree plantation initiatives.
                </p>
                <p className="text-base lg:text-lg leading-relaxed">
                  Our organization operates with complete transparency and has earned the trust of the community
                  through consistent delivery of programs and measurable impact on the lives of those we serve.
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className="order-1 lg:order-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="bg-[#f7f3ef] p-6 rounded-2xl">
                <img
                  src="/award_govt.jpeg"
                  alt="Government Recognition Award"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-gray-600 mt-4">
                  Recognized by Government of Tamil Nadu for outstanding social service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50" >
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Compassion */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/ic_heart.svg" alt="Compassion" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Compassion</h3>
              <p className="text-gray-600 text-sm">
                We approach every individual with empathy and understanding, recognizing their dignity and worth.
              </p>
            </div>

            {/* Transparency */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/ic_handshake.svg" alt="Transparency" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Transparency</h3>
              <p className="text-gray-600 text-sm">
                We maintain complete openness in our operations, finances, and impact reporting.
              </p>
            </div>

            {/* Sustainability */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/icons/ic_tree_plantation.svg" alt="Sustainability" className="w-8 h-8 filter brightness-0 invert" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We create long-term solutions that empower communities and protect our environment.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Impact Statistics */}
      <section className="py-16 lg:py-24 bg-primary" >
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-4">
              Our Impact Since 2020
            </h2>
            <p className="text-gray-200 text-lg">
              Measurable change in our community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-200">Lives Impacted</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">₹4.34L+</div>
              <div className="text-gray-200">Funds Raised</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">70+</div>
              <div className="text-gray-200">Awards Received</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">4+</div>
              <div className="text-gray-200">Years of Service</div>
            </div>
          </div>
        </div>
      </section >

      {/* Call to Action */}
      <section className="py-16 lg:py-24" >
        <div className="container mx-auto px-4 text-center">
          <div
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-6">
              Join Our Mission
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Every contribution, no matter how small, makes a significant difference in someone's life.
              Join us in creating a more compassionate and equitable society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Donate Now
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </section >
    </main>
  );
}