'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
              Get In Touch
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Have questions or want to make a difference? We'd love to hear from you
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Phone */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Phone</h3>
              <p className="text-gray-600 text-sm mb-2">Call us directly</p>
              <a href="tel:+917824015120" className="text-[#fe5429] hover:underline font-semibold">
                +91 78240 15120
              </a>
            </div>

            {/* Email */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Email</h3>
              <p className="text-gray-600 text-sm mb-2">Send us a message</p>
              <a href="mailto:agamagizhtrust2020@gmail.com" className="text-[#fe5429] hover:underline font-semibold break-all">
                agamagizhtrust2020@gmail.com
              </a>
            </div>

            {/* Address */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Address</h3>
              <p className="text-gray-600 text-sm mb-2">Visit our office</p>
              <p className="text-gray-700 font-semibold text-sm">
                Tamil Nadu, India
              </p>
            </div>

            {/* Working Hours */}
            <div
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary font-nunito mb-3">Hours</h3>
              <p className="text-gray-600 text-sm mb-2">We're available</p>
              <p className="text-gray-700 font-semibold text-sm">
                Mon - Sat: 9AM - 6PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side - Form */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Your support and inquiries help us serve the community better.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
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
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Make a Donation</option>
                    <option value="volunteer">Become a Volunteer</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Request Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors w-full sm:w-auto text-lg font-semibold"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - Additional Info */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="bg-[#f7f3ef] p-8 rounded-2xl h-full">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary font-nunito mb-6">
                  Why Contact Us?
                </h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-[#fe5429] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/ic_give_logo.svg" alt="Donate" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Make a Donation</h4>
                      <p className="text-gray-700 text-sm">
                        Learn about various ways to contribute and make an impact in our community programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/ic_heart.svg" alt="Volunteer" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Volunteer With Us</h4>
                      <p className="text-gray-700 text-sm">
                        Join our team of dedicated volunteers and help us create meaningful change in the community.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/ic_handshake.svg" alt="Partner" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Partner With Us</h4>
                      <p className="text-gray-700 text-sm">
                        Explore partnership opportunities to amplify our collective impact on society.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#fe5429] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/ic_help_children.svg" alt="Support" className="w-6 h-6 filter brightness-0 invert" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Request Support</h4>
                      <p className="text-gray-700 text-sm">
                        If you or someone you know needs assistance, reach out to us and we'll do our best to help.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-secondary">
                  <p className="text-gray-700 text-sm italic">
                    "Your message matters to us. We typically respond within 24-48 hours during business days."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-700 text-lg">
              We welcome visitors during our office hours
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              {/* Replace this with actual Google Maps embed or map component */}
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary font-nunito mb-2">
                  AGA MAGIZH TRUST
                </h3>
                <p className="text-gray-600">
                  Tamil Nadu, India
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Registration No: 47/20
                </p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Every action counts. Whether it's a donation, volunteering your time, or simply spreading the word,
              you can help us create a better tomorrow.
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
      </section>
    </main>
  );
}
