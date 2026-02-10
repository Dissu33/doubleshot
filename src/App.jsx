import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Gallery />

        {/* About Section - Enhanced */}
        <section id="about" className="py-32 bg-zinc-900 section-divider">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-coffee-400"></div>
                <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">About Us</span>
                <div className="h-[1px] w-8 bg-coffee-400"></div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading text-white"
              >
                Our Story
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 image-overlay"
              >
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                  alt="Coffee Brewing Process"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    At <span className="text-coffee-400 font-semibold">DoubleShot Coffee Roasters</span>, we believe coffee is more than a beverage—it's an experience, a ritual, and a moment of pure joy.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Founded in the heart of Mohali, we source the finest beans from renowned estates across the globe. Each batch is roasted with precision to unlock unique flavor profiles that tell a story in every sip.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Whether you're savoring our signature Nitro Cold Brew or indulging in a warm Jaggery Latte, every cup reflects our unwavering commitment to quality, sustainability, and the art of coffee making.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
                  <div className="text-center">
                    <div className="text-3xl font-heading text-coffee-400 mb-1">5+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading text-coffee-400 mb-1">50+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Varieties</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-heading text-coffee-400 mb-1">10k+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Happy Customers</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Locations Section - Enhanced */}
        <section id="locations" className="py-32 bg-black section-divider">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <div className="h-[1px] w-8 bg-coffee-400"></div>
                <span className="text-coffee-400 uppercase tracking-[0.3em] text-xs font-semibold">Visit Us</span>
                <div className="h-[1px] w-8 bg-coffee-400"></div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-heading text-white"
              >
                Find Us
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border-2 border-zinc-800 p-10 rounded-2xl max-w-2xl mx-auto hover:border-coffee-500 transition-all duration-300 card-hover"
            >
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">DoubleShot Mohali</h3>
              <p className="text-zinc-400 mb-6 text-lg">Sector 82, JLPL Industrial Area, Mohali, Punjab</p>

              <div className="w-full h-64 bg-zinc-800 rounded-xl mb-6 overflow-hidden relative shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 z-10">
                  <div className="bg-black/80 px-6 py-3 rounded-lg backdrop-blur-sm border border-zinc-700">
                    <p className="text-sm text-coffee-400 font-medium">📍 Hunter Street, Mohali</p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-40 hover:opacity-60 transition-opacity"
                  alt="Location Map"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                  <div className="text-coffee-400 text-sm font-semibold mb-1">Opening Hours</div>
                  <div className="text-zinc-300 text-sm">Mon - Sun: 8 AM - 11 PM</div>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-zinc-800">
                  <div className="text-coffee-400 text-sm font-semibold mb-1">Contact</div>
                  <div className="text-zinc-300 text-sm">+91 98765 43210</div>
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Get Directions
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
