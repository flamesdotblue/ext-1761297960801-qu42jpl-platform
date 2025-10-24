import HeroSpline from './components/HeroSpline';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <HeroSpline />
      <FeaturesGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
