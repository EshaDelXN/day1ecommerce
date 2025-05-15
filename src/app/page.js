import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryIcons from "./components/CategoryIcons";
import BrandSlider from "./components/Brandslider";
import Essentials from "./components/Essentials";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4">
        <Header />
      <Banner />
      <CategoryIcons />
      <BrandSlider />
      <Essentials />
      <Footer />
     
    </main>
  );
}

