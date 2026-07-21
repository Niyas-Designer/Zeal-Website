const partners = [
  'Carrefour',
  'Lotto',
  'Pantaloons',
  'Van Heusen',
  'Blue Age',
  'Rina',
  'Marvel',
  'Egatex',
  'R&B',
  'Louis Philippe',
  'Reebok',
  'Umbro',
  'Al Shika',
]

function BrandPartnersSection() {
  return (
    <section className="-mt-12 bg-white py-2 sm:-mt-16 sm:py-3">
      <div className="mx-auto max-w-full overflow-hidden bg-[#e31e24] text-white">
        <div className="px-4 py-3 sm:px-6 sm:py-3.5">
          <div className="flex w-max items-center whitespace-nowrap animate-[brand-marquee_26s_linear_infinite] hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex items-center gap-5 pr-5 sm:gap-7 sm:pr-7"
                aria-hidden={index >= partners.length}
              >
                <span className="text-[0.92rem] font-medium tracking-[0.04em] text-white transition duration-300 ease-out hover:opacity-70 hover:underline hover:underline-offset-4 sm:text-[0.98rem]">
                  {partner}
                </span>
                <span aria-hidden="true" className="text-[1.05rem] font-semibold leading-none text-white">
                  *
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandPartnersSection
