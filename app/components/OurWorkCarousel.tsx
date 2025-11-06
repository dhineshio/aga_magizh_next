'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const workCards = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Providing quality education to underprivileged children and helping them build a brighter future.',
    image: '/slide_01.png',
    category: 'Education'
  },
  {
    id: 2,
    title: 'Healthcare Services',
    description: 'Delivering essential medical care and health services to communities in need.',
    image: '/slide_02.png',
    category: 'Healthcare'
  },
  {
    id: 3,
    title: 'Food Security',
    description: 'Ensuring no one goes hungry by providing nutritious meals to those facing food insecurity.',
    image: '/slide_03.png',
    category: 'Food Aid'
  },
  {
    id: 4,
    title: 'Clean Water Initiative',
    description: 'Bringing clean and safe drinking water to remote villages and underserved areas.',
    image: '/slide_01.png',
    category: 'Water'
  },
  {
    id: 5,
    title: 'Shelter & Housing',
    description: 'Building safe homes and providing shelter for families affected by disasters and poverty.',
    image: '/slide_02.png',
    category: 'Housing'
  },
  {
    id: 6,
    title: 'Women Empowerment',
    description: 'Empowering women through skill development, education, and economic opportunities.',
    image: '/slide_03.png',
    category: 'Empowerment'
  },
  {
    id: 7,
    title: 'Child Welfare',
    description: 'Protecting children\'s rights and ensuring their safety, health, and well-being.',
    image: '/slide_01.png',
    category: 'Children'
  },
  {
    id: 8,
    title: 'Disaster Relief',
    description: 'Providing immediate assistance and support to communities affected by natural disasters.',
    image: '/slide_02.png',
    category: 'Emergency'
  }
];

export default function OurWorkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 }
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {workCards.map((card) => (
            <div
              key={card.id}
              className="flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] min-w-0"
            >
              <div className="h-[450px] border-2 border-gray-200 flex flex-col rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="h-[250px] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-secondary px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{card.category}</span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-nunito mb-3 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                  <button className="mt-4 text-primary font-semibold text-sm hover:underline self-start">
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
        {workCards.map((_, index) => (
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
