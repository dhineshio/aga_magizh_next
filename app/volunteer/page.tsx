'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart, Users, Calendar, Clock, CheckCircle, Award, Smile, HandHeart, BookOpen, Utensils } from 'lucide-react';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    city: '',
    state: '',
    interests: [] as string[],
    availability: '',
    experience: '',
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

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      address: '',
      city: '',
      state: '',
      interests: [],
      availability: '',
      experience: '',
      message: ''
    });
  };

  const volunteerAreas = [
    { icon: '🏠', title: 'Homeless Rescue', description: 'Help us reach out to homeless people and provide them with support' },
    { icon: '🍲', title: 'Food Distribution', description: 'Assist in preparing and distributing meals to those in need' },
    { icon: '📚', title: 'Education Support', description: 'Teach and mentor underprivileged children' },
    { icon: '🌳', title: 'Tree Plantation', description: 'Join our environmental initiatives and plantation drives' },
    { icon: '🛒', title: 'Grocery Support', description: 'Help distribute essential supplies to families' },
    { icon: '📢', title: 'Awareness Programs', description: 'Participate in community awareness campaigns' },
  ];

  const benefits = [
    { icon: Heart, title: 'Make a Real Impact', description: 'See the direct result of your efforts in the community' },
    { icon: Users, title: 'Build Connections', description: 'Meet like-minded people who share your values' },
    { icon: BookOpen, title: 'Learn New Skills', description: 'Develop leadership, communication, and organizational skills' },
    { icon: Award, title: 'Recognition', description: 'Receive certificates and recognition for your contributions' },
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
              Become a Volunteer
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join our team of dedicated volunteers and help create positive change in the community
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Volunteering is more than giving your time—it's about being part of something bigger
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Areas Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Where You Can Help
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Choose from various programs based on your interests and availability
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {volunteerAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-secondary"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                Volunteer Application Form
              </h2>
              <p className="text-gray-700 text-lg">
                Fill out the form below to start your journey as a volunteer
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      placeholder="john@example.com"
                    />
                  </div>
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
                </div>

                {/* Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="18"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="both">Both</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    placeholder="Street address"
                  />
                </div>

                {/* City and State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="State"
                    />
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Areas of Interest *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Homeless Rescue', 'Food Distribution', 'Education Support', 'Tree Plantation', 'Grocery Support', 'Awareness Programs'].map((interest) => (
                      <label key={interest} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleCheckboxChange(interest)}
                          className="w-5 h-5 text-[#fe5429] border-gray-300 rounded focus:ring-[#fe5429]"
                        />
                        <span className="text-gray-700 text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Previous Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about any previous volunteer work or relevant experience..."
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to volunteer with us?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Share your motivation and what you hope to contribute..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-10 py-4 rounded-lg transition-colors text-lg font-semibold"
                  >
                    <HandHeart className="w-5 h-5" />
                    Submit Application
                  </button>
                </div>
              </form>
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
            <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-6">
              Join Our Community of Change-Makers
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Every volunteer makes a difference. Together, we can transform lives and build a better future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#form" className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Apply Now
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
