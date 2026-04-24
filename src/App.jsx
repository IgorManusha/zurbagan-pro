import "./styles/premium.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import MapBlock from "./components/MapBlock";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Pricing />
      <Gallery />
      <MapBlock />
      <ContactForm />
      <Footer />
    </>
  );
}
