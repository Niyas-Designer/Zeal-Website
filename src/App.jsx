import { Navigate, Route, Routes } from "react-router-dom";

import AboutCompanySection from "./components/AboutCompanySection";
import AboutZealPage from "./components/AboutZealPage";
import DesignStudioPage from "./components/DesignStudioPage";
import ProductShopPage from "./components/ProductShopPage";
import BrandPartnersSection from "./components/BrandPartnersSection";
import CategoryPage from "./components/CategoryPage";
import EthicalSustainableSourcingSection from "./components/EthicalSustainableSourcingSection";
import FloatingContactForm from "./components/FloatingContactForm";
import HeroCarousel from "./components/HeroCarousel";
import ManagementTeamSection from "./components/ManagementTeamSection";
import Navbar from "./components/Navbar";
import PromotionVideoPage from "./components/PromotionVideoPage";
import ScrollRevealSection from "./components/ScrollRevealSection";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import StatsHighlightSection from "./components/StatsHighlightSection";
import WhyZealPage from "./components/WhyZealPage";
import ServicesPage from "./components/ServicesPage";
import WorkWithUsPage from "./components/WorkWithUsPage";

const informationPages = [
  {
    path: "/csr",
    eyebrow: "CSR",
    title: "Communicate impact through clear sustainability narratives.",
    description:
      "This area can later hold environmental goals, community initiatives, and measurable responsibility programmes.",
  },
  {
    path: "/infrastructure",
    eyebrow: "Infrastructure",
    title: "Showcase plants, systems, and industrial scale with confidence.",
    description:
      "Use this page for facility highlights, integrated operations, and large-scale production capabilities.",
  },
  {
    path: "/investors",
    eyebrow: "Investors",
    title:
      "Support an investor-facing experience with calm, structured design.",
    description:
      "This page can later include reports, governance details, disclosures, financial highlights, and market-facing communication.",
  },
  {
    path: "/careers",
    eyebrow: "Careers",
    title: "Recruit with a polished and modern manufacturing brand voice.",
    description:
      "Add workplace culture, recruitment information, open roles, and employee benefits here.",
  },
  {
    path: "/privacy-policy",
    eyebrow: "Privacy Policy",
    title: "Privacy and data usage information.",
    description:
      "This page can include data usage details, consent language, contact-form policies, and compliance-related information.",
  },
];

function InformationPage({ eyebrow, title, description }) {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f7f7f3] px-6 py-16 text-slate-900 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_20px_48px_rgba(17,17,17,0.05)] backdrop-blur sm:p-10 lg:p-14">
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
  );
}

function HomePage() {
  return (
    <>
      <HeroCarousel />

      <ScrollRevealSection>
        <AboutCompanySection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <StatsHighlightSection />
      </ScrollRevealSection>

      <WhyZealPage />

      <ScrollRevealSection>
        <CategoryPage />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <BrandPartnersSection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <EthicalSustainableSourcingSection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <ManagementTeamSection />
      </ScrollRevealSection>
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about-us" element={<AboutZealPage />} />

        <Route path="/design-studio" element={<DesignStudioPage />} />

        <Route path="/products" element={<ProductShopPage />} />

        <Route
          path="/our-brand"
          element={<BrandPartnersSection variant="page" />}
        />

        <Route path="/why-zeal" element={<WhyZealPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/promotion-video" element={<PromotionVideoPage />} />

        <Route path="/contact-us" element={<WorkWithUsPage />} />

        {informationPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <InformationPage
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
  );
}

export default App;
