'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeIn } from './animations'

const artworks = [
  { src: '/images/art/art7.jpg', alt: 'Portrait artwork', left: 0, top: 0, width: 431, height: 538 },
  { src: '/images/art/art5.jpg', alt: 'Flower artwork', left: 472, top: 13, width: 240, height: 202 },
  { src: '/images/art/art3.jpg', alt: 'Bird artwork', left: 464, top: 265, width: 244, height: 245 },
  { src: '/images/art/art2.jpg', alt: 'Rose artwork', left: 731, top: 17, width: 318, height: 490 },
  { src: '/images/art/art6.jpg', alt: 'Blue flowers artwork', left: 158, top: 610, width: 240, height: 202 },
  { src: '/images/art/art4.jpg', alt: 'Purple flowers artwork', left: 150, top: 862, width: 244, height: 245 },
  { src: '/images/art/art8.jpg', alt: 'Floral arrangement artwork', left: 471, top: 594, width: 361, height: 507 },
  { src: '/images/art/art1.jpg', alt: 'Abstract artwork', left: 905, top: 569, width: 354, height: 532 },
]

const mobileArtworks = [
  { src: '/images/art/art7.jpg', alt: 'Artwork 1' },
  { src: '/images/art/art5.jpg', alt: 'Artwork 2' },
  { src: '/images/art/art3.jpg', alt: 'Artwork 3' },
  { src: '/images/art/art2.jpg', alt: 'Artwork 4' },
  { src: '/images/art/art6.jpg', alt: 'Artwork 5' },
  { src: '/images/art/art4.jpg', alt: 'Artwork 6' },
  { src: '/images/art/art8.jpg', alt: 'Artwork 7' },
  { src: '/images/art/art1.jpg', alt: 'Artwork 8' },
]

export default function ArtGallery() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="px-6 lg:px-[100px]">
        <FadeIn>
          <h2 className="font-serif text-[60px] lg:text-[60px] text-text-dark mb-12 lg:mb-[163px]">Play</h2>
        </FadeIn>

        {/* Desktop Masonry Grid - matches Figma layout exactly */}
        <div className="hidden lg:block relative h-[1101px]">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              className="absolute overflow-hidden"
              style={{
                left: artwork.left,
                top: artwork.top,
                width: artwork.width,
                height: artwork.height,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Grid */}
        <motion.div 
          className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {mobileArtworks.map((artwork, index) => (
            <motion.div
              key={index}
              className="relative aspect-[3/4] overflow-hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={artwork.src}
                alt={artwork.alt}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
