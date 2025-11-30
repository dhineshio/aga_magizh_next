'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShoppingBag, Heart, Users, Package, Gift, Target, CheckCircle, HandHeart } from 'lucide-react';
import Image from 'next/image';

export default function GrocerySupportPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  const programFeatures = [
    { icon: ShoppingBag, title: 'Essential Supplies', description: 'Monthly groceries including rice, dal, oil, and more' },
    { icon: Package, title: 'Quality Products', description: 'Only the best quality essential items for families' },
    { icon: Gift, title: 'Special Packages', description: 'Festival and emergency relief packages' },
    { icon: Users, title: 'Family Support', description: 'Tailored packages based on family size and needs' },
  ];

  const impactStats = [
    { number: '1000+', label: 'Families Supported' },
    { number: '200+', label: 'Monthly Distributions' },
    { number: '15+', label: 'Essential Items' },
    { number: '100%', label: 'Quality Assured' },
  ];

  const whatWeProvide = [
    'Rice, wheat, and other staple grains',
    'Pulses and lentils (dal)',
    'Cooking oil and spices',
    'Sugar, salt, and tea',
    'Toiletries and hygiene products',
    'Cleaning supplies',
    'Baby care products for families with infants',
    'Special items during festivals',
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
              Grocery & Essential Support
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Providing essential supplies to families in need
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
                Our Grocery & Essential Support program ensures that underprivileged families have 
                access to basic necessities. We distribute monthly grocery packages containing essential 
                food items and household supplies.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Each package is carefully prepared to meet the nutritional and household needs of families, 
                helping them maintain dignity and stability during difficult times. We focus on quality, 
                quantity, and the specific needs of each family.
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
                  src="/works/grocery_help.jpeg"
                  alt="Grocery Support"
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
              Program Features
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              How we support families with essential supplies
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

      {/* What We Provide */}
      <section className="py-16 lg:py-24 bg-[#f7f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                What We Provide
              </h2>
              <p className="text-gray-700 text-lg">
                Essential items included in our support packages
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatWeProvide.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#fe5429] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
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
              Support Families in Need
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Your contribution can provide essential groceries to families struggling to make ends meet. 
              Help us ensure no family goes without basic necessities.
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
