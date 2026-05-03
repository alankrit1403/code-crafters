import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-brand-purple/30 selection:text-brand-purple">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
