import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import FeatureSection from '../components/FeatureSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <ProductGrid />
      <FeatureSection />
    </main>
  );
};

export default Home;
