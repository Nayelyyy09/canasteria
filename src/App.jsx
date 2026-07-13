import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Activaciones from './pages/Blog';
import BlogPost from './pages/BlogPost';
import RegalosNavidenos from './pages/RegalosNavidenos';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';


function App() {

  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canastas-navidenas/:slug" element={<CategoryPage />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
          <Route path="/activaciones" element={<Activaciones />} />
          <Route path="/regalos-navidenos" element={<RegalosNavidenos />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/envios-devoluciones" element={<Shipping />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsConditions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <WhatsAppButton />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
