import ScrollRevealSection from './ScrollRevealSection'

const divisions = [
  {
    title: 'Design Office',
    label:
      'Trend-driven design, product development, and creative direction led by an in-house team focused on innovation and market relevance.',
  },
  {
    title: 'Production Unit',
    label:
      'Advanced manufacturing with scalable capacity, strict quality control, and efficient turnaround aligned with global standards.',
  },
  {
    title: 'E-Commerce',
    label:
      'Proprietary digital platform enabling direct-to-consumer sales, real-time insights, and complete brand control.',
  },
  {
    title: 'Multi Showrooms',
    label:
      'Physical retail spaces designed to enhance customer experience and strengthen brand presence across key markets.',
  },
]

function WhyZealPage() {
  return (
    <main className="bg-[#f7f7f3] text-[#161616]">
      <ScrollRevealSection>
        <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1240px] border-b border-[#e4e4de] pb-14">
            <div className="grid items-stretch gap-8 overflow-hidden border border-[#e8e8e2] bg-white shadow-[0_18px_44px_rgba(17,17,17,0.05)] md:grid-cols-2 md:gap-0">
              <div className="flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#8a8a84]">
                  WHY ZEAL
                </p>
                <h1 className="mt-4 max-w-[9ch] text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#111111]">
                  Built on Integration. Driven by Design.
                </h1>
                <p className="mt-7 max-w-xl text-[1.02rem] leading-8 text-[#5f5f59]">
                  ZEAL operates as one connected fashion ecosystem where design,
                  production, commerce, and retail move together with speed and
                  precision. That integrated structure creates tighter control,
                  stronger quality, and faster response from concept planning to
                  final delivery.
                </p>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-8 text-[#5f5f59]">
                  Instead of managing separate vendors and disconnected teams,
                  ZEAL brings critical functions under one system. Products move
                  from creative direction to production, market launch, and customer
                  experience through an in-house model built for consistency,
                  scalability, and market-ready execution.
                </p>
                <p className="mt-8 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#8a8a84]">
                  Design • Production • Commerce • Showrooms
                </p>
              </div>

              <div className="relative min-h-[20rem] bg-[#ecece7]">
                <img
                  src="/About 1.jpg"
                  alt="ZEAL brand environment"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.08))]" />
                <div className="absolute bottom-6 left-6 rounded-full bg-white/88 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#151515] shadow-[0_12px_24px_rgba(17,17,17,0.12)]">
                  Concept to Customer
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection>
        <section className="px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1240px]">
            {divisions.map((division) => (
              <article
                key={division.title}
                className="grid gap-4 border-b border-[#e4e4de] py-8 transition duration-300 ease-out hover:bg-black/[0.015] sm:py-10 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start"
              >
                <h2 className="text-[clamp(2.2rem,4.4vw,4rem)] font-medium leading-[1] tracking-[-0.06em] text-[#111111]">
                  {division.title}
                </h2>
                <p className="pt-1 text-sm leading-7 text-[#3f3f3b] xl:text-right">
                  {division.label}
                </p>
              </article>
            ))}

            <div className="pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#111111] sm:text-[0.95rem]">
                From Concept → Creation → Commerce → Customer
              </p>
            </div>
          </div>
        </section>
      </ScrollRevealSection>
    </main>
  )
}

export default WhyZealPage
