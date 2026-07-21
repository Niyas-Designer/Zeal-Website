import { Navigate, Route, Routes } from 'react-router-dom'
import AboutCompanySection from './components/AboutCompanySection'
import AboutZealPage from './components/AboutZealPage'
import BrandPartnersSection from './components/BrandPartnersSection'
import CapabilitiesPage from './components/CapabilitiesPage'
import CategoryPage from './components/CategoryPage'
import CapabilityJourneySection from './components/CapabilityJourneySection'
import EthicalSustainableSourcingSection from './components/EthicalSustainableSourcingSection'
import FloatingContactForm from './components/FloatingContactForm'
import HeroCarousel from './components/HeroCarousel'
import ManagementTeamSection from './components/ManagementTeamSection'
import Navbar from './components/Navbar'
import PromotionVideoPage from './components/PromotionVideoPage'
import ScrollRevealSection from './components/ScrollRevealSection'
import SiteFooter from './components/SiteFooter'
import StatsHighlightSection from './components/StatsHighlightSection'
import WhyZealPage from './components/WhyZealPage'

const pages = [
  {
    path: '/csr',
    eyebrow: 'CSR',
    title: 'Communicate impact through clear sustainability narratives.',
    description:
      'This area can later hold environmental goals, community initiatives, and measurable responsibility programs.',
  },
  {
    path: '/infrastructure',
    eyebrow: 'Infrastructure',
    title: 'Showcase plants, systems, and industrial scale with confidence.',
    description:
      'Use this page for facility highlights, integrated operations, and large-scale production capabilities.',
  },
  {
    path: '/investors',
    eyebrow: 'Investors',
    title: 'Support an investor-facing experience with calm, structured design.',
    description:
      'Perfect for reports, governance, disclosures, financial highlights, and market-facing communication.',
  },
  {
    path: '/careers',
    eyebrow: 'Careers',
    title: 'Recruit with a polished and modern manufacturing brand voice.',
    description:
      'Add culture, recruitment messaging, open roles, and workplace benefits here.',
  },
  {
    path: '/contact-us',
    eyebrow: 'Contact us',
    title: 'Create a direct and reliable path to business enquiries.',
    description:
      'This page is ready for office details, contact forms, department information, and location content.',
  },
  {
    path: '/privacy-policy',
    eyebrow: 'Privacy Policy',
    title: 'A clear privacy policy page can live here when you are ready.',
    description:
      'Use this route for privacy terms, data usage details, consent language, and compliance-related information.',
  },
]

function PageSection({ eyebrow, title, description }) {
  return (
    <main className="min-h-[calc(100vh-76px)] px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/75 p-8 backdrop-blur sm:p-10 lg:p-14">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a6a2a]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#2f2924] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#5c5148] md:text-lg">
          {description}
        </p>
      </div>
    </main>
  )
}

function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ScrollRevealSection>
        <AboutCompanySection />
      </ScrollRevealSection>
      <ScrollRevealSection>
       <WhyZealPage />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <StatsHighlightSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <CapabilityJourneySection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <CategoryPage />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <BrandPartnersSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <EthicalSustainableSourcingSection />
      </ScrollRevealSection>
      {/* <PromotionVideoPage /> */}
      <ScrollRevealSection>
        <ManagementTeamSection />
      </ScrollRevealSection>
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutZealPage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/our-brand" element={<WhyZealPage />} />
        <Route path="/why-zeal" element={<WhyZealPage />} />
        <Route path="/promotion-video" element={<PromotionVideoPage />} />
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <PageSection
                eyebrow={page.eyebrow}
                title={page.title}
                description={page.description}
              />
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingContactForm />
      <SiteFooter />
    </>
  )
}

export default App
