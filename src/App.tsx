import Header from "./components/Header";
import Hero from "./components/Hero";
import MarketTicker from "./components/MarketTicker";
import MarketsSection from "./components/MarketsSection";
import TradersSection from "./components/TradersSection";
import CTASection from "./components/CTASection";
import OurMarketsSection from "./components/OurMarketsSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import TradingBanner from "./components/TradingBanner";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarketTicker />
      <MarketsSection />
      <TradersSection />
      <CTASection />
      <OurMarketsSection />
      {/* <EmpowerSection />
      <WithdrawalsSection />
      <MarketUpdatesSection /> */}
      <Testimonials />
      <TradingBanner />
      <Footer />
    </div>
  );
}

export default App;
