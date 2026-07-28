import { useCallback, useEffect, useMemo, useState } from 'react'

const collectionBanners = [
  {
    id: 'ardeur',
    eyebrow: 'Original Product Photography',
    title: 'Ardeur',
    subtitle: 'Collection',
    description:
      'Statement fashion pieces photographed from ZEAL original product collections.',
    banner: 'ardeur-own-the-vibe.jpeg',
    folder: 'Ardeur',
    cover: '0W2A9686.JPG',
    images: [
      '0A0A0743.png',
      '0A0A0756.JPG',
      '0A0A9626.JPG',
      '0A0A9635.JPG',
      '0W2A0022.JPG',
      '0W2A0032.JPG',
      '0W2A0052.JPG',
      '0W2A0066.JPG',
      '0W2A9656.JPG',
      '0W2A9668.JPG',
      '0W2A9677.JPG',
      '0W2A9686.JPG',
      '0W2A9697.JPG',
      '0W2A9707.JPG',
      '0W2A9720.JPG',
      '0W2A9730.JPG',
      '0W2A9746.JPG',
      '0W2A9755.JPG',
      '0W2A9767.JPG',
      '0W2A9773.JPG',
      '0W2A9789.JPG',
      '0W2A9798.JPG',
      '0W2A9812.JPG',
      '0W2A9823.JPG',
      '0W2A9837.JPG',
      '0W2A9838.JPG',
      '0W2A9859.JPG',
      '0W2A9868.JPG',
      '0W2A9881.JPG',
      '0W2A9890.JPG',
      '0W2A9899.JPG',
      '0W2A9910.JPG',
      '0W2A9922.JPG',
      '0W2A9932.JPG',
      '0W2A9945.JPG',
      '0W2A9968.JPG',
      '0W2A9983.JPG',
      '0W2A9987.JPG',
    ],
  },
  {
    id: 'codez',
    eyebrow: 'Original Product Photography',
    title: 'Codez',
    subtitle: 'Collection',
    description:
      'A broad catalogue of ZEAL product looks, colours, silhouettes and coordinated styles.',
    banner: 'codez-kids.jpeg',
    folder: 'Codez',
    cover: '48.jpg',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.png',
      '13.png',
      '14.png',
      '15.png',
      '16.png',
      '17.png',
      '18.png',
      '19.jpg',
      '20.png',
      '21.jpg',
      '22.png',
      '23.png',
      '24.jpg',
      '25.jpg',
      '26.jpg',
      '27.jpg',
      '28.jpg',
      '29.jpg',
      '30.jpg',
      '31.jpg',
      '32.jpg',
      '33.jpg',
      '34.jpg',
      '35.jpg',
      '36.jpg',
      '37.jpg',
      '38.jpg',
      '39.jpg',
      '40.jpg',
      '41.jpg',
      '42.jpg',
      '43.jpg',
      '44.jpg',
      '45.jpg',
      '46.jpg',
      '47.jpg',
      '48.jpg',
      '49.jpg',
      '50.jpg',
      '51.jpg',
      '52.jpg',
      '53.jpg',
      '54.jpg',
      '55.jpg',
      '56.jpg',
      '57.jpg',
      '58.jpg',
      '59.jpg',
      '60.jpg',
      '61.jpg',
      '62.jpg',
      '63.jpg',
      '64.jpg',
      '65.png',
    ],
  },
  {
    id: 'fervoro',
    eyebrow: 'Original Product Photography',
    title: 'Fervoro',
    subtitle: 'Collection',
    description:
      'Premium product visuals highlighting refined styling, fit and seasonal detailing.',
    banner: 'fervoro.png',
    folder: 'Fervoro',
    cover: '8.JPG',
    images: [
      '1.JPG',
      '2.JPG',
      '3.JPG',
      '4.JPG',
      '5.JPG',
      '6.JPG',
      '7.JPG',
      '8.JPG',
      '9.JPG',
      '10.JPG',
      '11.JPG',
      '12.JPG',
      '13.JPG',
      '14.JPG',
      '15.JPG',
      '16.JPG',
      '17.JPG',
      '18.JPG',
      '19.JPG',
      '20.JPG',
    ],
  },
  {
    id: 'girls-womens',
    eyebrow: 'Original Product Photography',
    title: 'Girls & Womens',
    subtitle: 'Collection',
    description:
      'Comfort-led silhouettes, expressive colour stories and versatile fashion for women and girls.',
    banner: 'girls-and-womens.jpg',
    folder: 'Girls and Womens',
    cover: '4.jpg',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
      '17.jpg',
      '18.jpg',
      '19.jpg',
      '20.jpg',
      '21.jpg',
    ],
  },
  {
    id: 'infants',
    eyebrow: 'Original Product Photography',
    title: 'Infants',
    subtitle: 'Collection',
    description:
      'Soft constructions, gentle fabrics, playful details and easy silhouettes created for early adventures.',
    banner: 'infants.png',
    folder: 'infants',
    cover: '1.jpg',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpeg',
      '4.jpeg',
      '5.jpeg',
      '6.jpeg',
      '7.jpeg',
      '8.jpeg',
      '9.jpeg',
      '10.jpg',
      '11.jpeg',
      '12.jpeg',
    ],
  },
  {
    id: 'acid-wash',
    eyebrow: 'Original Product Photography',
    title: 'Acid Wash',
    subtitle: 'Collection',
    description:
      'Washed finishes and relaxed product styling from ZEAL original photography.',
    banner: 'acid-wash.png',
    folder: 'Acid wash',
    cover: '1.png',
    images: [
      '1.png',
      '2.png',
      '3.png',
      '4.png',
      '5.png',
      '6.png',
      '7.png',
      '8.png',
      '9.png',
      '10.png',
    ],
  },
  {
    id: 'revisited',
    eyebrow: 'Original Product Photography',
    title: 'Revisited',
    subtitle: 'Collection',
    description:
      'A focused edit of refreshed looks and original ZEAL product imagery.',
    banner: 'revisited.png',
    folder: 'Revisited',
    cover: '3.JPG',
    images: ['1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '6.JPG', '7.JPG'],
  },
]

const heroBanners = Array.from({ length: 8 }, (_, index) => ({
  id: `banner-${index + 1}`,
  file: `Banner ${index + 1}.jpg`,
  alt: `ZEAL product hero banner ${index + 1}`,
}))

const filters = [
  { id: 'all', label: 'All Collections' },
  ...collectionBanners.map((collection) => ({
    id: collection.id,
    label: collection.title,
  })),
]

const productImagePath = (folder, file) =>
  `/Product%20images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`

const bannerImagePath = (file) =>
  `/Product%20banners/${encodeURIComponent(file)}`

const galleryItems = collectionBanners.flatMap((collection) =>
  collection.images.map((file, index) => ({
    id: `${collection.id}-${file}`,
    category: collection.id,
    categoryLabel: collection.title,
    lookNumber: index + 1,
    image: productImagePath(collection.folder, file),
    alt: `${collection.title} product image ${String(index + 1).padStart(
      2,
      '0',
    )}`,
  })),
)

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function ProductShopPage() {
  const [activeBanner, setActiveBanner] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')

  const changeBanner = useCallback((direction) => {
    setActiveBanner((currentBanner) => {
      const nextBanner = currentBanner + direction

      if (nextBanner < 0) {
        return heroBanners.length - 1
      }

      return nextBanner % heroBanners.length
    })
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      changeBanner(1)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [changeBanner])

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') {
      return galleryItems
    }

    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <section
        className="relative isolate overflow-hidden bg-[#111111]"
        aria-label="ZEAL product collection hero banner"
      >
        <div className="relative aspect-[1900/850] w-full bg-[#111111]">
          {heroBanners.map((banner, index) => {
            const isActive = index === activeBanner

            return (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  isActive
                    ? 'visible scale-100 opacity-100'
                    : 'invisible scale-[1.01] opacity-0'
                }`}
              >
                <img
                  src={bannerImagePath(banner.file)}
                  alt={banner.alt}
                  className="h-full w-full object-contain object-center"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}

          <button
            type="button"
            aria-label="Previous hero banner"
            onClick={() => changeBanner(-1)}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/55 bg-black/25 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#171717] sm:left-5 sm:h-12 sm:w-12"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next hero banner"
            onClick={() => changeBanner(1)}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/55 bg-black/25 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#171717] sm:right-5 sm:h-12 sm:w-12"
          >
            <ArrowIcon />
          </button>
        </div>
      </section>

      <section
        id="shop-gallery"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-[1700px]">
          <div className="flex flex-col justify-between gap-7 border-b border-[#dedbd6] pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#db3627]">
                Product Inspiration
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Explore the collection.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b655f] sm:text-base">
                A visual catalogue using ZEAL original product photography from
                the organised collection folders.
              </p>
            </div>

            <p className="text-sm font-medium text-[#6b655f]">
              Showing {visibleItems.length} images
            </p>
          </div>

          <div className="-mx-1 mt-7 flex gap-2 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 border px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive
                      ? 'border-[#171717] bg-[#171717] text-white'
                      : 'border-[#d8d3cd] bg-white text-[#514c46] hover:border-[#db3627] hover:text-[#db3627]'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <div className="mt-9 columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[1rem] bg-[#eeeae5] sm:mb-4 sm:rounded-[1.25rem]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="block w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                  decoding="async"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:pb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
                    {item.categoryLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium sm:text-base">
                    Look {String(item.lookNumber).padStart(2, '0')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductShopPage
