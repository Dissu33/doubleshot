import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Gallery />

        {/* About Section */}
        <section id="about" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading mb-6 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-coffee-500"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-12 max-w-5xl mx-auto text-left">
              <div className="aspect-[4/3] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1511537632536-b71c27434bbc?q=80&w=2070&auto=format&fit=crop" alt="Coffee Brewing" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  At <span className="text-coffee-400 font-semibold">DoubleShot Coffee Roasters</span>, we are more than just a cafe. We are a sanctuary for coffee lovers. Located in the vibrant heart of Mohali, we bring you the finest beans from around the world, roasted in small batches to preserve their unique profiles.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  Whether you crave the kick of a Nitro Cold Brew or the comfort of a warm Jaggery Latte, every cup is a testament to our dedication to quality and craft. Come for the coffee, stay for the vibe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-heading mb-12">Find Us</h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg max-w-md mx-auto hover:border-coffee-500 transition-colors group">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-coffee-400 transition-colors">Mohali</h3>
              <p className="text-zinc-400 mb-4">Sector 82, JLPL Industrial Area</p>
              <div className="w-full h-48 bg-zinc-800 rounded mb-4 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 z-10">
                  <div className="bg-black/70 px-4 py-2 rounded">
                    <p className="text-sm">📍 Hunter Street, Mohali</p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-50" alt="Location" />
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-coffee-400 text-sm uppercase tracking-wider hover:text-white transition-colors">Get Directions →</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
