'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const workCards = [
  {
    id: 1,
    title: 'Rescue Homeless',
    description: 'Providing shelter and support to help homeless individuals thrive.',
    image: './works/homeless_rescue.jpeg',
    icon: './icons/ic_homeless.svg',
    borderColor: 'border-red-500',
    bgColor: 'bg-red-500',
  },
  {
    id: 2,
    title: 'Food Support',
    description: 'Delivering nutritious meals to families facing hunger and need.',
    image: './works/food_help.jpeg',
    icon: './icons/ic_food_support.svg',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Grocery Support',
    description: 'Providing essential groceries and supplies to families in need.',
    image: './works/grocery_help.jpeg',
    icon: './icons/ic_grocery_support.svg',
    borderColor: 'border-green-500',
    bgColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Education Support',
    description: 'Empowering children with quality education and learning resources.',
    image: './works/education_help.jpeg',
    icon: './icons/ic_education_support.svg',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'Tree Plantation',
    description: 'Planting trees and creating green spaces for a sustainable environment.',
    image: './works/tree_plantation.jpg',
    icon: './icons/ic_tree_plantation.svg',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-500',
  },
  {
    id: 6,
    title: 'Awareness Program',
    description: 'Conducting campaigns to raise health and community awareness.',
    image: './works/awarness_program.jpeg',
    icon: './icons/ic_awarness_program.svg',
    borderColor: 'border-pink-500',
    bgColor: 'bg-pink-500',
  },
  {
    id: 7,
    title: 'Awards',
    description: 'Recognizing excellence and dedication in community service and social impact.',
    image: './works/awards.jpeg',
    icon: './icons/ic_awards.svg',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-500',
  },
  {
    id: 8,
    title: 'Branch Office',
    description: 'Expanding our reach through new branches to serve more communities.',
    image: './works/branch_office.jpeg',
    icon: './icons/ic_office_branch.svg',
    borderColor: 'border-cyan-500',
    bgColor: 'bg-cyan-500',
  }
];

export default function OurWorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'start' }
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {workCards.map((card) => (
            <div
              key={card.id}
              className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] min-w-0"
            >
              <div className="h-[470px] border-2 border-primary/30 flex flex-col relative rounded-2xl overflow-hidden hover:shadow-2xl shadow-secondary/20 transition-all duration-300 bg-white select-none">
                <div className={`absolute top-[48%] z-10 rounded-full left-[50%] p-2 border border-dotted ${card.borderColor} transform -translate-x-1/2 -translate-y-1/2`}>
                <div className={`rounded-full ${card.bgColor} h-20 w-20 p-5 flex items-center justify-center`}>
                  <img src={card.icon} alt="icon" className="h-full w-full" />
                </div>
                </div>
                <div className={`min-h-[220px] max-h-[220px] relative overflow-hidden `}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover align-middle"
                  />
                  <div className="absolute inset-0 bg-primary/40"></div>
                </div>
                <div className="flex-2 p-6 flex flex-col justify-between mt-10">
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold font-nunito mb-3 text-gray-800">{card.title}</h3>
                    <p className="text-gray-600 text-center text-sm leading-relaxed">{card.description}</p>
                  </div>
                  <button className="mt-4 text-[#fe5429]  font-semibold text-sm hover:underline self-center">
                    Learn More →
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-10 ${
          !canScrollPrev && 'opacity-50 cursor-not-allowed'
        }`}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={scrollNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-10 ${
          !canScrollNext && 'opacity-50 cursor-not-allowed'
        }`}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
