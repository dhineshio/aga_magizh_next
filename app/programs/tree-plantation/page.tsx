'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Leaf, Heart, Users, TreePine, Sprout, Target, CheckCircle, HandHeart } from 'lucide-react';
import Image from 'next/image';

export default function TreePlantationPage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  const programFeatures = [
    { icon: TreePine, title: 'Mass Plantation', description: 'Large-scale tree plantation drives in communities' },
    { icon: Sprout, title: 'Native Species', description: 'Planting indigenous trees suitable for local climate' },
    { icon: Users, title: 'Community Involvement', description: 'Engaging locals in plantation and maintenance' },
    { icon: Target, title: 'Long-term Care', description: 'Regular monitoring and nurturing of planted trees' },
  ];

  const impactStats = [
    { number: '5,000+', label: 'Trees Planted' },
    { number: '25+', label: 'Plantation Sites' },
    { number: '85%', label: 'Survival Rate' },
    { number: '100+', label: 'Volunteers' },
  ];

  const environmentalBenefits = [
    'Reduces air pollution and improves air quality',
    'Combats climate change by absorbing CO2',
    'Prevents soil erosion and maintains fertility',
    'Provides habitat for birds and wildlife',
    'Reduces urban heat island effect',
    'Conserves water and improves groundwater levels',
    'Creates green spaces for community wellbeing',
    'Promotes biodiversity and ecological balance',
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
              Tree Plantation
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Growing green spaces for a sustainable future
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
                Our Tree Plantation program is committed to environmental conservation and creating 
                greener communities. We organize regular plantation drives to combat climate change 
                and promote ecological balance.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                By planting native tree species and involving local communities in the process, we 
                ensure long-term sustainability and environmental impact. Each tree planted is a step 
                towards a healthier planet for future generations.
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
                  src="/works/tree_plantation.jpg"
                  alt="Tree Plantation"
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
              Our Approach
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Strategic and sustainable tree plantation initiatives
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

      {/* Environmental Benefits */}
      <section className="py-16 lg:py-24 bg-[#f7f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                Environmental Benefits
              </h2>
              <p className="text-gray-700 text-lg">
                How tree plantation helps our planet and communities
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {environmentalBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#fe5429] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
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
              Plant Trees, Grow Hope
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Join our mission to make the world greener. Every tree planted is a gift to future generations 
              and a step towards environmental sustainability.
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
