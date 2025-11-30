'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Handshake, Building, Users, Target, Award, TrendingUp, CheckCircle, Globe, Heart, Briefcase, Mail, Phone } from 'lucide-react';

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    organizationType: '',
    partnershipType: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
    alert('Thank you for your interest in partnering with us! We will contact you soon to discuss opportunities.');
    // Reset form
    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      organizationType: '',
      partnershipType: '',
      message: ''
    });
  };

  const partnershipTypes = [
    {
      icon: Building,
      title: 'Corporate Partnership',
      description: 'Partner with us through CSR initiatives, employee volunteering programs, and cause marketing campaigns.',
      benefits: ['Brand visibility', 'CSR fulfillment', 'Employee engagement', 'Tax benefits']
    },
    {
      icon: Handshake,
      title: 'NGO Collaboration',
      description: 'Collaborate with other NGOs to amplify our collective impact and reach more communities in need.',
      benefits: ['Resource sharing', 'Knowledge exchange', 'Joint programs', 'Wider reach']
    },
    {
      icon: Globe,
      title: 'Government Partnership',
      description: 'Work with government bodies to implement community development programs at scale.',
      benefits: ['Policy support', 'Funding access', 'Large-scale impact', 'Credibility']
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'Engage local communities, schools, and institutions in our mission to create sustainable change.',
      benefits: ['Grassroots support', 'Local expertise', 'Community trust', 'Sustainability']
    },
    {
      icon: Briefcase,
      title: 'Service Partnership',
      description: 'Provide pro-bono services like legal, marketing, technology, or consulting support.',
      benefits: ['Skill sharing', 'Cost efficiency', 'Innovation', 'Professional growth']
    },
    {
      icon: Heart,
      title: 'Funding Partnership',
      description: 'Support our programs through grants, sponsorships, or long-term financial commitments.',
      benefits: ['Direct impact', 'Transparency', 'Recognition', '80G benefits']
    },
  ];

  const whyPartner = [
    {
      icon: Target,
      title: 'Proven Impact',
      description: 'We have a track record of successful programs that create lasting change in communities.'
    },
    {
      icon: Award,
      title: 'Government Recognition',
      description: 'Recognized by government authorities with proper registration and certifications.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Oriented',
      description: 'Continuously expanding our reach and impact with innovative approaches.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Operations',
      description: 'Complete transparency in operations, funding utilization, and impact reporting.'
    },
  ];

  const partnershipProcess = [
    { step: '1', title: 'Initial Contact', description: 'Reach out to us through the form or contact details' },
    { step: '2', title: 'Discussion', description: 'We discuss your goals and our partnership opportunities' },
    { step: '3', title: 'Planning', description: 'Together we create a partnership plan that works for both' },
    { step: '4', title: 'Agreement', description: 'Formalize the partnership with clear terms and objectives' },
    { step: '5', title: 'Implementation', description: 'Execute the partnership programs and initiatives' },
    { step: '6', title: 'Monitoring', description: 'Regular updates, reports, and impact assessments' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-nunito mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Partner With Us
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Together, we can create greater impact and transform more lives
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Why Partner With Aga Magizh Trust?
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              We offer transparent, impactful, and mutually beneficial partnership opportunities
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyPartner.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Explore various ways to collaborate with us and make a difference
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {type.description}
                </p>
                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#fe5429] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Partnership Process
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Simple and transparent steps to establish a meaningful partnership
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnershipProcess.map((process, index) => (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                    <div className="bg-[#fe5429] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary font-nunito mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {process.description}
                    </p>
                  </div>
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-0.5 bg-secondary"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                Partnership Inquiry Form
              </h2>
              <p className="text-gray-700 text-lg">
                Let's discuss how we can work together to create impact
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Organization Name */}
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    placeholder="Your organization name"
                  />
                </div>

                {/* Contact Person and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                      Website (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>

                {/* Organization Type and Partnership Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      value={formData.organizationType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="corporate">Corporate</option>
                      <option value="ngo">NGO/Non-Profit</option>
                      <option value="government">Government</option>
                      <option value="educational">Educational Institution</option>
                      <option value="community">Community Organization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Partnership Interest *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select partnership type</option>
                      <option value="corporate">Corporate Partnership</option>
                      <option value="ngo">NGO Collaboration</option>
                      <option value="government">Government Partnership</option>
                      <option value="community">Community Partnership</option>
                      <option value="service">Service Partnership</option>
                      <option value="funding">Funding Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your partnership idea *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share your goals, ideas, and how you'd like to collaborate with us..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-10 py-4 rounded-lg transition-colors text-lg font-semibold"
                  >
                    <Handshake className="w-5 h-5" />
                    Submit Partnership Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-primary font-nunito mb-6">
                Let's Connect Directly
              </h3>
              <p className="text-gray-700 mb-8">
                Have immediate questions? Feel free to reach out to us directly
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-[#fe5429] w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Email Us</p>
                    <a href="mailto:agamagizhtrust2020@gmail.com" className="text-[#fe5429] hover:underline font-semibold">
                      agamagizhtrust2020@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Call Us</p>
                    <a href="tel:+917824015120" className="text-[#fe5429] hover:underline font-semibold">
                      +91 7824015120
                    </a>
                  </div>
                </div>
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
            <Handshake className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-6">
              Let's Create Impact Together
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Join hands with us to make a meaningful difference in the lives of those who need it most.
              Together, we can achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#form" className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Start Partnership Discussion
              </a>
              <a href="/contact" className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
