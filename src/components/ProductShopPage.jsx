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
    cover: '0W2A9686.webp',
    images: [
      '0A0A0743.webp',
      '0A0A0756.webp',
      '0A0A9626.webp',
      '0A0A9635.webp',
      '0W2A0022.webp',
      '0W2A0032.webp',
      '0W2A0052.webp',
      '0W2A0066.webp',
      '0W2A9656.webp',
      '0W2A9668.webp',
      '0W2A9677.webp',
      '0W2A9686.webp',
      '0W2A9697.webp',
      '0W2A9707.webp',
      '0W2A9720.webp',
      '0W2A9730.webp',
      '0W2A9746.webp',
      '0W2A9755.webp',
      '0W2A9767.webp',
      '0W2A9773.webp',
      '0W2A9789.webp',
      '0W2A9798.webp',
      '0W2A9812.webp',
      '0W2A9823.webp',
      '0W2A9837.webp',
      '0W2A9838.webp',
      '0W2A9859.webp',
      '0W2A9868.webp',
      '0W2A9881.webp',
      '0W2A9890.webp',
      '0W2A9899.webp',
      '0W2A9910.webp',
      '0W2A9922.webp',
      '0W2A9932.webp',
      '0W2A9945.webp',
      '0W2A9968.webp',
      '0W2A9983.webp',
      '0W2A9987.webp',
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
    cover: '48.webp',
    images: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
      '14.webp',
      '15.webp',
      '16.webp',
      '17.webp',
      '18.webp',
      '19.webp',
      '20.webp',
      '21.webp',
      '22.webp',
      '23.webp',
      '24.webp',
      '25.webp',
      '26.webp',
      '27.webp',
      '28.webp',
      '29.webp',
      '30.webp',
      '31.webp',
      '32.webp',
      '33.webp',
      '34.webp',
      '35.webp',
      '36.webp',
      '37.webp',
      '38.webp',
      '39.webp',
      '40.webp',
      '41.webp',
      '42.webp',
      '43.webp',
      '44.webp',
      '45.webp',
      '46.webp',
      '47.webp',
      '48.webp',
      '49.webp',
      '50.webp',
      '51.webp',
      '52.webp',
      '53.webp',
      '54.webp',
      '55.webp',
      '56.webp',
      '57.webp',
      '58.webp',
      '59.webp',
      '60.webp',
      '61.webp',
      '62.webp',
      '63.webp',
      '64.webp',
      '65.webp',
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
    cover: '8.webp',
    images: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
      '14.webp',
      '15.webp',
      '16.webp',
      '17.webp',
      '18.webp',
      '19.webp',
      '20.webp',
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
    cover: '4.webp',
    images: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
      '11.webp',
      '12.webp',
      '13.webp',
      '14.webp',
      '15.webp',
      '16.webp',
      '17.webp',
      '18.webp',
      '19.webp',
      '20.webp',
      '21.webp',
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
    cover: '1.webp',
    images: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
      '11.webp',
      '12.webp',
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
    cover: '1.webp',
    images: [
      '1.webp',
      '2.webp',
      '3.webp',
      '4.webp',
      '5.webp',
      '6.webp',
      '7.webp',
      '8.webp',
      '9.webp',
      '10.webp',
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
    cover: '3.webp',
    images: ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'],
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

const toWebp = (file) => file.replace(/\.[^.]+$/, '.webp')

const toOptimizedJpg = (file) => file.replace(/\.[^.]+$/, '.jpg')

const productImagePath = (folder, file) =>
  `/Product%20images/${encodeURIComponent(folder)}/${encodeURIComponent(
    toWebp(file),
  )}`

const bannerImagePath = (file) =>
  `/optimized/Product%20banners/${encodeURIComponent(toOptimizedJpg(file))}`

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
      if (!document.hidden) {
        changeBanner(1)
      }
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
                  decoding={index === 0 ? 'sync' : 'async'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
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
                className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[1rem] bg-[#eeeae5] [content-visibility:auto] [contain-intrinsic-size:320px] sm:mb-4 sm:rounded-[1.25rem]"
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
