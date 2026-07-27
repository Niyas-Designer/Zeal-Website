import { useCallback, useEffect, useMemo, useState } from 'react'

const collectionBanners = [
  {
    id: 'new-arrivals',
    eyebrow: 'Fresh From The Studio',
    title: 'New Arrivals',
    subtitle: 'New Collection',
    description:
      'Discover newly developed silhouettes, updated colours, refined details and fresh seasonal directions.',
    image:
      'https://loremflickr.com/1920/1080/fashion,new-collection,models?lock=501',
    fallback:
      'https://picsum.photos/seed/zeal-new-arrivals/1920/1080',
    position: 'object-center',
  },
  {
    id: 'men-boys',
    eyebrow: 'Modern Everyday Dressing',
    title: 'Men & Boys',
    subtitle: 'Collection',
    description:
      'Smart casuals, elevated essentials, coordinated sets and versatile styles developed for modern wardrobes.',
    image:
      'https://loremflickr.com/1920/1080/mens-fashion,boys-fashion,apparel?lock=502',
    fallback:
      'https://picsum.photos/seed/zeal-men-boys/1920/1080',
    position: 'object-center',
  },
  {
    id: 'women-girls',
    eyebrow: 'Contemporary Style Stories',
    title: 'Women & Girls',
    subtitle: 'Collection',
    description:
      'Comfort-led silhouettes, expressive colour stories and versatile fashion designed for everyday movement.',
    image:
      'https://loremflickr.com/1920/1080/womens-fashion,girls-fashion,clothing?lock=503',
    fallback:
      'https://picsum.photos/seed/zeal-women-girls/1920/1080',
    position: 'object-center',
  },
  {
    id: 'infants',
    eyebrow: 'Little Moments',
    title: 'Infant Boys & Girls',
    subtitle: 'Collection',
    description:
      'Soft constructions, gentle fabrics, playful details and easy silhouettes created for early adventures.',
    image:
      'https://loremflickr.com/1920/1080/baby-fashion,infant-clothing,kids?lock=504',
    fallback:
      'https://picsum.photos/seed/zeal-infants/1920/1080',
    position: 'object-center',
  },
  {
    id: 'travel-wear',
    eyebrow: 'Designed To Move',
    title: 'Travel Wear',
    subtitle: 'Collection',
    description:
      'Lightweight layers, relaxed coordinates and practical comfort designed for journeys, leisure and movement.',
    image:
      'https://loremflickr.com/1920/1080/travel-fashion,leisurewear,airport-style?lock=505',
    fallback:
      'https://picsum.photos/seed/zeal-travel-wear/1920/1080',
    position: 'object-center',
  },
]

const filters = [
  { id: 'all', label: 'All Collections', query: 'fashion' },
  { id: 'new-arrivals', label: 'New Arrivals', query: 'new-fashion' },
  { id: 'men-boys', label: 'Men & Boys', query: 'menswear' },
  { id: 'women-girls', label: 'Women & Girls', query: 'womenswear' },
  { id: 'infants', label: 'Infants', query: 'baby-clothing' },
  { id: 'travel-wear', label: 'Travel Wear', query: 'travel-wear' },
]

const galleryHeights = [1180, 860, 1020, 1320, 760, 1100, 940, 1240, 820, 1060]
const galleryRatios = [
  '4 / 5',
  '3 / 4',
  '1 / 1',
  '4 / 6',
  '5 / 7',
  '4 / 3',
  '7 / 9',
  '3 / 5',
]

const galleryItems = Array.from({ length: 100 }, (_, index) => {
  const category = filters[(index % (filters.length - 1)) + 1]
  const itemNumber = index + 1
  const height = galleryHeights[index % galleryHeights.length]

  return {
    id: itemNumber,
    category: category.id,
    categoryLabel: category.label,
    ratio: galleryRatios[index % galleryRatios.length],
    image: `https://loremflickr.com/900/${height}/fashion,clothing,model,${category.query}?lock=${
      itemNumber + 700
    }`,
    fallback: `https://picsum.photos/seed/zeal-look-${itemNumber}/900/${height}`,
    alt: `${category.label} fashion reference ${String(itemNumber).padStart(
      3,
      '0',
    )}`,
  }
})

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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
        return collectionBanners.length - 1
      }

      return nextBanner % collectionBanners.length
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

  const currentBanner = collectionBanners[activeBanner]

  const exploreBanner = () => {
    setActiveFilter(currentBanner.id)

    window.requestAnimationFrame(() => {
      document
        .getElementById('shop-gallery')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <section
        className="relative isolate min-h-[620px] overflow-hidden bg-[#171717] sm:min-h-[700px] lg:min-h-[calc(100vh-80px)]"
        aria-label="ZEAL product collections"
      >
        {collectionBanners.map((banner, index) => {
          const isActive = index === activeBanner

          return (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive
                  ? 'visible scale-100 opacity-100'
                  : 'invisible scale-[1.03] opacity-0'
              }`}
            >
              <img
                src={banner.image}
                alt={`${banner.title} ${banner.subtitle}`}
                className={`h-full w-full object-cover ${banner.position}`}
                loading={index === 0 ? 'eager' : 'lazy'}
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = banner.fallback
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/30 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-black/12" />
            </div>
          )
        })}

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1580px] items-end px-6 pb-24 pt-20 sm:min-h-[700px] sm:px-8 sm:pb-28 lg:min-h-[calc(100vh-80px)] lg:px-10 lg:pb-24">
          <div
            key={currentBanner.id}
            className="max-w-4xl text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-sm">
              {currentBanner.eyebrow}
            </p>

            <h1 className="mt-5 text-[clamp(3rem,8vw,7.6rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
              {currentBanner.title}
              <span className="mt-2 block font-normal italic text-white/88">
                {currentBanner.subtitle}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8">
              {currentBanner.description}
            </p>

            <button
              type="button"
              onClick={exploreBanner}
              className="mt-8 inline-flex h-12 items-center justify-center gap-3 bg-white px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#171717] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#db3627] hover:text-white"
            >
              Explore Collection
              <ArrowIcon />
            </button>
          </div>
        </div>

        <div className="absolute bottom-7 right-6 z-20 flex items-center gap-3 sm:right-8 lg:right-10">
          <button
            type="button"
            aria-label="Previous collection banner"
            onClick={() => changeBanner(-1)}
            className="flex h-12 w-12 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#171717]"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            aria-label="Next collection banner"
            onClick={() => changeBanner(1)}
            className="flex h-12 w-12 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#171717]"
          >
            <ArrowIcon />
          </button>
        </div>

        <div className="absolute bottom-9 left-6 z-20 hidden items-center gap-3 sm:left-8 sm:flex lg:left-10">
          {collectionBanners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              aria-label={`Show ${banner.title} banner`}
              onClick={() => setActiveBanner(index)}
              className={`h-[3px] transition-all duration-300 ${
                activeBanner === index
                  ? 'w-14 bg-white'
                  : 'w-7 bg-white/40 hover:bg-white/75'
              }`}
            />
          ))}
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
                A flexible visual catalogue for ZEAL product categories. The
                temporary images can later be replaced with your original
                product photography without changing this layout.
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
                  style={{ aspectRatio: item.ratio }}
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = item.fallback
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:pb-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-xs">
                    {item.categoryLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium sm:text-base">
                    Look {String(item.id).padStart(3, '0')}
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
