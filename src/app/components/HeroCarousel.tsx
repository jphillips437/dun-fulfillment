import React from 'react'

const images = [
  '/carousel1',
  '/carousel2',
  '/carousel3',
  '/carousel4',
]

export default function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="flex transition-transform duration-700">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
