
import Image from 'next/image'

const images = [
  '/images/carousel1.jpg',
  '/images/carousel2.jpg',
  '/images/carousel3.jpg',
  '/images/carousel4.jpg',
]

export default function HeroCarousel() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
      <div className="flex transition-transform duration-700">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={384}
              className="w-full h-96 object-cover rounded-xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
