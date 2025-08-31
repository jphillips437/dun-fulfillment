"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  '/images/carousel1.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpg',
  '/images/carousel4.jpg',
]

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (idx: number) => {
    setCurrent((idx + images.length) % images.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      next();
    }, AUTO_PLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg h-96">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-96 relative">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      {/* Manual Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-2 shadow"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-2 shadow"
        aria-label="Next slide"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-orange' : 'bg-white/70'} border border-orange`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
