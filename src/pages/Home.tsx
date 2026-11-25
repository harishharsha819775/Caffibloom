import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award,
  Compass,
  Droplet,
  ShieldCheck,
  Check,
  Star,
  Quote,
} from 'lucide-react'
import ColorTransform from '../components/ColorTransform'
import BrewingGuide from '../components/BrewingGuide'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const prestigePillars = [
  {
    num: '01',
    title: 'Zero Caffeine Terroir',
    sub: 'Stimulant-Free Equanimity',
    desc: 'Indulge in a full-bodied, deeply aromatic botanical infusion at any hour — from dawn meditation to late-night reading — with absolutely zero stimulant jitter.',
    tag: '100% Herbal Purity',
  },
  {
    num: '02',
    title: 'Natural Anthocyanins',
    sub: 'Cellular Antioxidant Complex',
    desc: 'Dense with polyacylated ternatins — resilient plant flavonoids naturally concentrated in the petals of wild-cultivated Clitoria ternatea.',
    tag: 'Botanical Polyphenols',
  },
  {
    num: '03',
    title: 'No Synthetic Colours',
    sub: 'Pure Molecular Optics',
    desc: 'Experience pure azure-to-violet liquid alchemy. Zero chemical food dyes, zero FD&C colourants. The colour shift is an unadulterated pH chemical reaction.',
    tag: '100% Plant Chemistry',
  },
  {
    num: '04',
    title: 'Sustainable Highland Soil',
    sub: 'Farmer Fair-Trade Terroir',
    desc: 'Direct-trade partnerships with native Aparajitha growers in Wayanad and the Nilgiris, nurturing soil health and supporting rural women harvesters.',
    tag: 'Direct-Trade Sourcing',
  },
]

const sommelierAccolades = [
  {
    quote:
      'Caffibloom is the rare beverage startup that bridges high-end artisanal drinking with legitimate botanical science. The pH transformation is not a gimmick; it is an alchemical masterpiece.',
    author: 'Ananya Deshmukh',
    title: 'Beverage Sommelier & Wellness Curator',
    rating: 5,
  },
  {
    quote:
      'Replacing my afternoon espresso with Caffibloom Original Reserve has eliminated my 4 PM energy crash while keeping the contemplative pleasure of a hot, beautiful cup intact.',
    author: 'Vikramaditya Nair',
    title: 'Startup Founder & Consumer Tech Investor',
    rating: 5,
  },
  {
    quote:
      'The extraction standards and botanical purity are exemplary. A textbook demonstration of how traditional Indian flora can be elevated to a luxury global standard.',
    author: 'Dr. S. K. Bhattacharya',
    title: 'Botanical Sciences Department Faculty',
    rating: 5,
  },
]

const Home: React.FC = () => {
  return (
    <div className="bg-parchment-light text-estate-950 overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Vineyard Luxury Cellar Atmosphere)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[96vh] flex items-center justify-center bg-estate-950 text-parchment-light overflow-hidden pt-16 pb-24 border-b border-gold/25">
        {/* Full-Bleed Photograph Background with Luxury Cinematic Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.03] filter brightness-[0.38] contrast-[1.12]"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-estate-950 via-estate-950/70 to-estate-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#060911_90%)]" />
        {/* Subtle Gold Dust & Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: i % 2 === 0 ? '#C5A880' : '#E6E6FA',
                opacity: 0.25,
                top: `${Math.random() * 95}%`,
                left: `${Math.random() * 95}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 5 + i * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Ambient Radial Color Bloom Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sapphire-dark/40 rounded-full blur-[130px] -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-violet-dark/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Vintage Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 border border-gold/40 bg-estate-900/80 text-gold-shimmer text-[11px] tracking-[0.28em] uppercase font-medium mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Grand Reserve Botanical Infusion &bull; 100% Caffeine-Free</span>
          </motion.div>

          {/* Main Monumental Serif Title */}
          <motion.h1
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight max-w-5xl mx-auto mb-6 text-parchment-light"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Not Just Tea.{' '}
            <span className="italic font-serif text-gold-shimmer">
              An Alchemical Wonder
            </span>{' '}
            in Every Pour.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-stone-300 font-sans max-w-2xl mx-auto leading-relaxed mb-10 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the sensory beauty of pure, caffeine-free butterfly pea tea. Naturally deep sapphire, magically electric violet, and thoughtfully cellared for your everyday wellness ritual.
          </motion.p>

          {/* Vineyard Dual Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/products" className="btn-luxury-gold flex items-center gap-2 text-xs">
              <span>Explore The Cellar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById('colour-magic-section')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-luxury-outline flex items-center gap-2 text-xs"
            >
              <span>Witness The Alchemy</span>
              <ChevronDown className="w-4 h-4 text-gold" />
            </button>
          </motion.div>

          {/* Hero Visual Glass Feature & Floating Terroir Elements */}
          <motion.div
            className="relative mx-auto max-w-md pt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="card-vineyard-dark p-6 border-gold/30 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-gold/20 pb-3 text-[11px] uppercase tracking-[0.2em] text-gold">
                <span>Wayanad Highland Terroir</span>
                <span>Clitoria Ternatea</span>
              </div>
              <div className="py-4 flex items-center justify-center">
                <div className="relative w-full overflow-hidden border border-gold/30 shadow-2xl bg-estate-950">
                  <img
                    src="/hero-bg.jpg"
                    alt="Caffibloom Reserve Original Botanical Infusion with Steaming Sapphire Tea Cup"
                    className="w-full h-64 sm:h-72 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-estate-950/80 via-transparent to-estate-950/20 pointer-events-none" />
                  
                  {/* Subtle Live Badge Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-parchment-light pointer-events-none">
                    <span className="font-serif italic text-gold-shimmer flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sapphire-light animate-pulse" />
                      Freshly Infused &bull; 85°C Draw
                    </span>
                    <span className="bg-estate-950/85 px-2 py-0.5 border border-gold/30 text-[9px] uppercase tracking-widest text-stone-300">
                      Real Harvest
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gold/15 text-[10px] tracking-wider text-stone-400">
                <span className="flex items-center gap-1">
                  <Droplet className="w-3 h-3 text-sapphire-light" />
                  Natural Ternatin
                </span>
                <span className="text-gold-light italic font-serif text-xs">
                  Zero Synthetic Dyes
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/60 cursor-pointer"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            document
              .getElementById('heritage-section')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PRESTIGE CERTIFICATIONS & CREDIBILITY STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-estate-950 py-7 border-b border-gold/20 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: '0.00%', label: 'Caffeine Content', sub: 'Non-Stimulant Equanimity' },
              { val: '100%', label: 'Natural Anthocyanins', sub: 'Ternatins (Polyacylated)' },
              { val: 'Zero', label: 'Synthetic Additives', sub: 'No Artificial Dyes or Sugars' },
              { val: 'Direct', label: 'Estate Sourcing', sub: 'Single-Origin Aparajitha' },
            ].map((stat, i) => (
              <div key={i} className="border-r border-gold/15 last:border-r-0 px-3">
                <span className="font-serif text-3xl sm:text-4xl text-gold-shimmer font-medium block">
                  {stat.val}
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-parchment-light font-semibold block mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-stone-400 hidden sm:block mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HERITAGE & TERROIR (Artisanal Winery Story Layout)
      ───────────────────────────────────────────────────────────── */}
      <section id="heritage-section" className="py-24 bg-parchment-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Vineyard Story Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="section-tag">Terroir &amp; Philosophy</span>
              <h2 className="section-heading-light text-3xl sm:text-4xl lg:text-5xl">
                The Forgotten Blossom of Indian Royalty
              </h2>
              <div className="gold-divider-left" />

              <p className="text-stone-700 leading-relaxed font-sans text-sm sm:text-base">
                For generations, the delicate wild vine of <em>Clitoria ternatea</em> — revered in Sanskrit as <strong>Aparajitha</strong> ("The Invincible One") — adorned secluded temple gardens and Kerala courtyards. Celebrated in ancient Ayurvedic treatises for its cooling, tranquil essence, its extraordinary anthocyanin richness was hidden in plain sight.
              </p>

              <p className="text-stone-700 leading-relaxed font-sans text-sm sm:text-base">
                Modern life has trapped millions in an exhausting cycle of stimulant spikes and adrenal crashes. Conventional coffee and energy beverages offer short-term stimulation at the cost of chronic anxiety and restless sleep. Caffibloom was founded on a singular conviction: <strong>a premium ritual drink can be deeply satisfying, visually breathtaking, and 100% caffeine-free.</strong>
              </p>

              {/* Founder's Sommelier Quote */}
              <div className="p-6 bg-white border-l-2 border-gold shadow-sm space-y-2">
                <Quote className="w-5 h-5 text-gold mb-1" />
                <p className="font-serif italic text-base text-estate-900 leading-relaxed">
                  "We did not want to create another dusty herbal tea. We wanted to cellar a magical, sommelier-grade beverage that makes everyday contemplation feel like a private celebration."
                </p>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-gold-dark block pt-1">
                  &mdash; The Caffibloom Botanical Cellar Founders
                </span>
              </div>

              <div className="pt-2">
                <Link to="/our-story" className="btn-luxury-dark text-xs inline-flex items-center gap-2">
                  <span>Discover Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Vineyard Editorial Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative p-8 bg-estate-950 text-parchment-light border border-gold/30 shadow-2xl">
                <div className="border border-gold/20 p-6 space-y-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full border border-gold/60 flex items-center justify-center bg-estate-850">
                    <span className="text-3xl">🌸</span>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold block mb-1">
                      Botanical Monograph
                    </span>
                    <h3 className="font-serif text-2xl text-gold-shimmer">
                      Clitoria ternatea
                    </h3>
                    <p className="text-xs text-stone-400 italic font-serif mt-0.5">
                      Family: Fabaceae &bull; Single Estate Aparajitha
                    </p>
                  </div>

                  <div className="space-y-3 text-left border-t border-b border-gold/15 py-4 text-xs text-stone-300">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Harvest Season:</span>
                      <span className="text-parchment-light font-medium">Post-Monsoon Dawn</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Drying Method:</span>
                      <span className="text-parchment-light font-medium">Controlled Solar Air</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Key Pigment:</span>
                      <span className="text-parchment-light font-medium">Polyacylated Ternatins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Caffeine Level:</span>
                      <span className="text-emerald-400 font-medium">0.00% Naturally</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
                    Hand-harvested at peak morning bloom when anthocyanin concentration reaches its zenith in the high-altitude soil of Wayanad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE CORE FEATURE: INTERACTIVE COLOUR TRANSFORMATION
      ───────────────────────────────────────────────────────────── */}
      <section
        id="colour-magic-section"
        className="py-24 bg-estate-950 border-t border-b border-gold/25 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag text-gold">The Alchemical Cellar</span>
            <h2 className="section-heading-dark text-3xl sm:text-5xl mt-2 mb-4">
              Witness Nature's Colour Magic
            </h2>
            <div className="gold-divider" />
            <p className="text-stone-400 text-sm sm:text-base font-sans font-light">
              Experience the natural pH reaction that has enchanted scholars and sommeliers alike. 
              Touch the citrus slice to trigger the molecular transformation before your eyes.
            </p>
          </div>

          <ColorTransform />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. THE FOUR PRESTIGE PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-parchment relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">Uncompromising Purity</span>
            <h2 className="section-heading-light text-3xl sm:text-4xl">
              Why Discerning Drinkers Cellar Caffibloom
            </h2>
            <div className="gold-divider" />
            <p className="text-stone-600 text-sm">
              Artisanal botanical sourcing meeting strict biochemical verification standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prestigePillars.map((p) => (
              <div
                key={p.num}
                className="card-vineyard-light p-8 border-stone-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-widest font-bold text-gold-dark">
                      {p.num}
                    </span>
                    <span className="text-[10px] tracking-wider uppercase bg-stone-100 text-stone-600 px-2 py-0.5 border border-stone-200">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-estate-950 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs font-serif italic text-gold-dark mb-4">
                    {p.sub}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/80 flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-botanical" />
                  <span>Lab-Verified Pure</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE RESERVE COLLECTION (Product Showcase Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-parchment-light border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-tag">Cellar Catalog &bull; 2024 Vintages</span>
              <h2 className="section-heading-light text-3xl sm:text-5xl mt-1">
                The Botanical Reserve Collection
              </h2>
              <div className="gold-divider-left" />
              <p className="text-stone-600 text-sm max-w-xl font-sans">
                Each blend is micro-batched with single-origin Aparajitha flowers and sun-cured regional herbs. 100% caffeine-free botanical wellness.
              </p>
            </div>
            <Link to="/products" className="btn-luxury-dark text-xs self-start md:self-end">
              View All 4 Cellar Blends
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SOMMELIER BREWING RITUAL (Step-by-Step with Timer)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-estate-950 border-t border-gold/25 text-parchment-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag text-gold">The Infusion Method</span>
            <h2 className="section-heading-dark text-3xl sm:text-5xl mt-2 mb-3">
              Your Perfect Cup in Four Steps
            </h2>
            <div className="gold-divider" />
            <p className="text-stone-400 text-sm font-sans font-light">
              Treat your preparation as a mindful sensory pause. Use our precision extraction timer for the ideal anthocyanin bloom.
            </p>
          </div>

          <BrewingGuide />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. TESTIMONIALS & SOMMELIER REVIEWS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-parchment relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">Critical Acclaim</span>
            <h2 className="section-heading-light text-3xl sm:text-4xl">
              Praised by Sommeliers &amp; Curators
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sommelierAccolades.map((item, idx) => (
              <div
                key={idx}
                className="card-vineyard-light p-8 border-stone-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-gold mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                  <p className="font-serif italic text-stone-800 text-sm leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="border-t border-stone-200/80 pt-4">
                  <h4 className="font-serif text-base font-semibold text-estate-950">
                    {item.author}
                  </h4>
                  <p className="text-xs text-stone-500 font-sans mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. ACADEMIC & INVESTOR SPOTLIGHT ("Behind the Innovation")
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-estate-900 border-t border-b border-gold/25 text-parchment-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-vineyard-dark p-8 md:p-12 border-gold/30 bg-estate-950/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="section-tag text-gold">Faculty &amp; Investor Dossier</span>
                <h3 className="section-heading-dark text-3xl sm:text-4xl">
                  Behind The Innovation
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed font-sans font-light">
                  Explore our comprehensive 8-pillar business and scientific pitch deck — covering the stimulant-fatigue problem statement, pH molecular chemistry, direct-to-consumer unit economics, B2B café partnerships, and local farmer social impact.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to="/behind-innovation"
                    className="btn-luxury-gold text-xs inline-flex items-center gap-2"
                  >
                    <span>Read The Innovation Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/science"
                    className="btn-luxury-outline text-xs inline-flex items-center gap-2"
                  >
                    <span>Inspect Botanical Science</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 bg-estate-900/90 border border-gold/20 text-center space-y-3">
                <div className="text-3xl font-serif text-gold-shimmer font-bold">
                  8-Section
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-stone-400">
                  Startup &amp; Evaluation Blueprint
                </div>
                <div className="text-[11px] text-stone-400 border-t border-gold/15 pt-3 leading-relaxed">
                  Engineered specifically for academic evaluation, beverage incubators, and seed venture assessment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FINAL INVITATION CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-parchment text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Begin The Ritual</span>
          <h2 className="section-heading-light text-4xl sm:text-5xl lg:text-6xl mt-2 mb-4">
            Cellar Your First Botanical Cup
          </h2>
          <div className="gold-divider" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto font-sans">
            Complimentary nationwide express delivery on orders above ₹499. Experience the alchemical shift in your own porcelain cup.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-luxury-dark text-xs px-8 py-4">
              Explore The Cellar Collection
            </Link>
            <Link to="/contact" className="btn-luxury-outline text-xs px-8 py-4 !text-estate-900 !border-estate-900 hover:!bg-estate-900 hover:!text-parchment-light">
              Contact Sommelier Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
