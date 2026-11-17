import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClientInstance } from "@/lib/query-client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageNotFound from "./lib/PageNotFound"
import ScrollToTop from "./components/ScrollToTop"
import { LanguageProvider } from "@/lib/i18n/LanguageContext"
import SiteLayout from "@/components/site/SiteLayout"
import Home from "@/pages/Home"
import HowItWorks from "@/pages/HowItWorks"
import Pricing from "@/pages/Pricing"
import ForCreators from "@/pages/ForCreators"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"

// Kynningarvefurinn: engin innskráning hér — „Sækja appið" fer á app.wayoratour.com
function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/for-creators" element={<ForCreators />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </LanguageProvider>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
