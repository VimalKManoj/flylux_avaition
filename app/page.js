import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import MobileFeature from "./components/Features/MobileFeature";

export default function Home() {
  return (<>
  
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      id="hero"
    >
      <Hero />
      <About />
      <Features />
      <MobileFeature/>
      <Footer />
    </main>
  </>
    
  );
}
