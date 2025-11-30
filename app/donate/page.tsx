'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Heart, Users, GraduationCap, Home, Leaf, ShoppingBag, CheckCircle, CreditCard, Smartphone, Building, QrCode, Award } from 'lucide-react';
import Image from 'next/image';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    panCard: '',
    address: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 100,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || parseFloat(customAmount);
    console.log('Donation submitted:', { ...formData, amount, donationType });
    alert(`Thank you for your generous donation of ₹${amount}! We will send you the payment details shortly.`);
  };

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const impactCards = [
    { icon: Home, amount: '₹500', impact: 'Provide shelter support for 1 homeless person for a day' },
    { icon: Users, amount: '₹1000', impact: 'Feed 20 hungry people with nutritious meals' },
    { icon: GraduationCap, amount: '₹2500', impact: 'Educational supplies for 5 underprivileged children' },
    { icon: ShoppingBag, amount: '₹5000', impact: 'Monthly grocery essentials for 3 families' },
    { icon: Leaf, amount: '₹10000', impact: 'Plant 100 trees and support environmental conservation' },
    { icon: Heart, amount: '₹25000', impact: 'Comprehensive support for a community awareness program' },
  ];

  const whyDonateReasons = [
    { title: 'Transparency', description: 'Every rupee is accounted for and used effectively' },
    { title: 'Direct Impact', description: 'Your donation directly helps those in need' },
    { title: 'Tax Benefits', description: '80G tax exemption available for all donations' },
    { title: 'Regular Updates', description: 'Receive updates on how your donation is making a difference' },
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
              Make a Donation
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Your generosity transforms lives and builds hope for a better tomorrow
            </p>
            <div
              className="w-24 h-1 bg-secondary mx-auto mt-6"
              data-aos="fade-up"
              data-aos-delay="300"
            ></div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Your Impact
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              See how your contribution can make a real difference in the community
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {impactCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-nunito mb-3 text-center">
                  {card.amount}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {card.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                Choose Your Donation
              </h2>
              <p className="text-gray-700 text-lg">
                Select an amount or enter a custom donation
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
            </div>

            <div
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'one-time'
                        ? 'bg-[#fe5429] text-white'
                        : 'text-gray-700 hover:text-[#fe5429]'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === 'monthly'
                        ? 'bg-[#fe5429] text-white'
                        : 'text-gray-700 hover:text-[#fe5429]'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-lg border-2 font-bold text-lg transition-all ${
                          selectedAmount === amount
                            ? 'border-[#fe5429] bg-[#fe5429] text-white'
                            : 'border-gray-300 text-gray-700 hover:border-[#fe5429]'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 font-bold text-lg">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter custom amount"
                      min="100"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all text-lg"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-primary font-nunito mb-6">
                    Your Information
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                    {/* Phone and PAN */}
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
                        <label htmlFor="panCard" className="block text-sm font-semibold text-gray-700 mb-2">
                          PAN Card (for 80G certificate)
                        </label>
                        <input
                          type="text"
                          id="panCard"
                          name="panCard"
                          value={formData.panCard}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all"
                          placeholder="ABCDE1234F"
                          maxLength={10}
                        />
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
                        placeholder="Your address"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fe5429] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Leave a message or dedication..."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={!selectedAmount && !customAmount}
                    className="inline-flex items-center justify-center gap-2 bg-[#fe5429] hover:bg-[#cb411e] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-10 py-4 rounded-lg transition-colors text-lg font-semibold"
                  >
                    <Heart className="w-5 h-5" />
                    Proceed to Donate {(selectedAmount || customAmount) && `₹${(selectedAmount || parseFloat(customAmount)).toLocaleString()}`}
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    You'll receive payment details after submission
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code & Bank Details Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Other Ways to Donate
            </h2>
            <p className="text-gray-700 text-lg">
              Choose your preferred payment method
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* UPI/QR Code */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="text-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-nunito mb-4">
                  Scan & Donate
                </h3>
                <div className="bg-gray-100 p-6 rounded-xl mb-4">
                  <Image
                    src="/donate_scanner.jpeg"
                    alt="Donation QR Code"
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                </div>
                <p className="text-gray-700 text-sm">
                  Scan this QR code with any UPI app to donate instantly
                </p>
              </div>
            </div>

            {/* Bank Details */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="text-center mb-6">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary font-nunito mb-4">
                  Bank Transfer
                </h3>
              </div>
              <div className="space-y-4 text-left">
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">Account Name</p>
                  <p className="font-bold text-gray-900">AGA MAGIZH TRUST</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">Account Number</p>
                  <p className="font-bold text-gray-900">XXXXXXXXXXXX</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                  <p className="font-bold text-gray-900">XXXXXX</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                  <p className="font-bold text-gray-900">XXXXXXX Bank</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> After transfer, please email transaction details to{' '}
                    <a href="mailto:agamagizhtrust2020@gmail.com" className="text-[#fe5429] hover:underline">
                      agamagizhtrust2020@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
              Why Donate to Aga Magizh Trust?
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyDonateReasons.map((reason, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                <div className="bg-[#fe5429] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary font-nunito mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 lg:py-24 bg-[#f7f3ef]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
                <div className="bg-secondary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary font-nunito mb-4">
                  80G Tax Benefits
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Your donations to AGA MAGIZH TRUST are eligible for tax deduction under Section 80G of the Income Tax Act.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    <strong>Registration Number:</strong> 47/20
                  </p>
                  <p className="text-sm text-gray-600">
                    We will provide you with an 80G certificate for your donation, which you can use while filing your tax returns.
                    This allows you to claim deductions and reduce your taxable income.
                  </p>
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
            <Heart className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-nunito mb-6">
              Every Contribution Counts
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              No donation is too small. Every rupee you contribute helps us create lasting change in the lives of those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#form" className="bg-[#fe5429] hover:bg-[#cb411e] text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold">
                Donate Now
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
