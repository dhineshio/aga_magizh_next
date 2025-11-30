'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home, Heart, Users, Clock, MapPin, Target, CheckCircle, HandHeart } from 'lucide-react';
import Image from 'next/image';

export default function HomelessRescuePage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  const programFeatures = [
    { icon: Home, title: 'Emergency Shelter', description: 'Providing immediate shelter and safety for homeless individuals' },
    { icon: Heart, title: 'Basic Necessities', description: 'Food, clothing, blankets, and essential supplies' },
    { icon: Users, title: 'Counseling Support', description: 'Mental health support and life skills counseling' },
    { icon: Target, title: 'Rehabilitation', description: 'Programs to help reintegrate into society' },
  ];

  const impactStats = [
    { number: '500+', label: 'People Helped' },
    { number: '50+', label: 'Rescue Operations' },
    { number: '24/7', label: 'Availability' },
    { number: '100%', label: 'Commitment' },
  ];

  const howWeHelp = [
    'Street outreach to identify homeless individuals in need',
    'Immediate provision of food, water, and essential supplies',
    'Emergency shelter and temporary accommodation',
    'Medical assistance and health checkups',
    'Rehabilitation programs and skill development',
    'Connection to government welfare schemes',
    'Family reunification support when possible',
    'Long-term follow-up and monitoring',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <div
              className="inline-block bg-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Programs
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-nunito mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Rescue For Homeless People
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Providing hope, shelter, and support to those who need it most
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="400"
            ></div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-6">
                About This Program
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Our Homeless Rescue Program is dedicated to reaching out to individuals living on the streets, 
                providing them with immediate support and long-term solutions for a better life.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                We believe that everyone deserves dignity, safety, and the opportunity for a fresh start. 
                Through our comprehensive approach, we address immediate needs while working towards 
                sustainable rehabilitation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/volunteer" 
                  className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                >
                  <Users className="w-5 h-5" />
                  Volunteer With Us
                </a>
                <a 
                  href="/donate" 
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
                >
                  <Heart className="w-5 h-5" />
                  Support This Program
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/works/homeless_rescue.jpeg"
                  alt="Homeless Rescue"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                <div className="text-4xl lg:text-5xl font-bold text-[#fe5429] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              What We Provide
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Comprehensive support to help homeless individuals rebuild their lives
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 lg:py-24 bg-[#f7f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                How We Help
              </h2>
              <p className="text-gray-700 text-lg">
                Our step-by-step approach to supporting homeless individuals
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {howWeHelp.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#fe5429] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <HandHeart className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-6">
              Help Us Reach More People
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Your support can provide shelter, food, and hope to those living on the streets. 
              Join us in making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate" className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Donate Now
              </a>
              <a href="/volunteer" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
