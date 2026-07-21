import { Link } from 'react-router-dom'

function AboutCompanySection() {
  const highlights = [
    '3M+ Garments Produced Annually',
    'Fully In-House Operations',
    'Proprietary E-Commerce Platform',
    'Integrated Supply Chain & Warehousing',
    'Global Presence (India | GCC | UAE Expansion)',
  ]

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-20">
          <div className="max-w-xl lg:pt-3">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#222]">
              Welcome To Zeal Creations
            </p>

            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-16 bg-[#ff0c00]" />
            </div>

            <h2 className="mt-7 text-[clamp(2.45rem,4.6vw,4.2rem)] leading-[0.98] tracking-[-0.045em] text-[#181818]">
              About ZEAL
            </h2>

            <div className="mt-8 space-y-5">
              <p className="max-w-[620px] text-[15px] leading-8 text-[#303030] sm:text-[17px]">
                ZEAL is headquartered in Tiruppur, India, with global operations
                built to serve fast-moving fashion markets with clarity, speed, and
                control. From concept development to final delivery, the business
                is structured as one connected system rather than a fragmented
                vendor network.
              </p>

              <p className="max-w-[620px] text-[15px] leading-8 text-[#303030] sm:text-[17px]">
                Our model integrates design, manufacturing, e-commerce,
                warehousing, and logistics under one roof. That structure gives
                ZEAL tighter quality control, shorter decision cycles, and the
                ability to scale confidently across product categories and regional
                markets.
              </p>

              <p className="max-w-[620px] text-[15px] leading-8 text-[#303030] sm:text-[17px]">
                Products move from creative direction and sampling to production,
                fulfillment, and customer-facing commerce through an in-house
                platform designed for market-ready execution. The result is a
                sharper, more responsive fashion ecosystem built for modern retail.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-5">
              <figure className="overflow-hidden rounded-[2rem] bg-[#f4f1eb] shadow-[0_18px_40px_rgba(20,20,20,0.08)]">
                <div className="aspect-[1.22/1]">
                  <img
                    src="/About%201.jpg"
                    alt="ZEAL design and product presentation studio"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </figure>

              <figure className="overflow-hidden rounded-[2rem] bg-[#f4f1eb] shadow-[0_18px_40px_rgba(20,20,20,0.08)]">
                <div className="aspect-[1.22/0.82]">
                  <img
                    src="/About%203.jpg"
                    alt="ZEAL operations and coordination environment"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>

            <div className="grid gap-5 md:pt-6">
              <figure className="overflow-hidden rounded-[2rem] bg-[#f4f1eb] shadow-[0_18px_40px_rgba(20,20,20,0.08)]">
                <div className="aspect-[0.95/0.84]">
                  <img
                    src="/About%202.jpg"
                    alt="ZEAL workspace supporting product development"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </figure>

              <figure className="overflow-hidden rounded-[2rem] bg-[#f4f1eb] shadow-[0_18px_40px_rgba(20,20,20,0.08)]">
                <div className="aspect-[0.95/0.84]">
                  <img
                    src="/About%204.jpg"
                    alt="ZEAL brand and customer experience environment"
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {highlights.map((item) => (
            <div
              key={item}
              className=" border border-stone-200 bg-[#fbfaf8] px-5 py-4 text-sm font-medium leading-6 text-[#222] shadow-[0_10px_24px_rgba(18,18,18,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ff0c00]/25 hover:bg-white hover:shadow-[0_16px_34px_rgba(18,18,18,0.08)]"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-3  bg-[#1d1d1d] px-6 py-3.5 text-sm font-medium tracking-[0.06em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff0c00] hover:shadow-[0_12px_24px_rgba(255,12,0,0.16)]"
          >
            Explore Our Capabilities
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutCompanySection
