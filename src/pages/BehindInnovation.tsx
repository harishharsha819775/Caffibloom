import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FileText,
  Lightbulb,
  Cpu,
  Atom,
  TrendingUp,
  Target,
  Leaf,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Download,
} from 'lucide-react'

const evaluationDossier = [
  {
    code: 'SECTION 01',
    title: 'Problem Statement: The Stimulation-Fatigue Trap',
    icon: Lightbulb,
    content: [
      'Modern knowledge workers, university students, and urban professionals are entrapped in a compounding cycle of caffeine overconsumption. The global beverage market treats energy as synonymous with nervous-system stimulation via caffeine, guarana, and taurine.',
      'The physiological repercussions are documented: midday cortisol surges, adrenal fatigue, elevated resting heart rates, sleep fragmentation, and digestive acidity.',
      'Despite growing consumer awareness, the non-alcoholic, caffeine-free alternative market remains dominated by uninspired, medicinal-tasting tisanes (e.g., standard chamomile, peppermint) that lack the sensory grandeur, complex visual ritual, and social prestige of specialty espresso or fine wine.',
    ],
  },
  {
    code: 'SECTION 02',
    title: 'Proposed Solution: The Caffibloom Botanical Model',
    icon: Leaf,
    content: [
      'Caffibloom transforms Clitoria ternatea (Butterfly Pea / Aparajitha) from a wild Asian floral vine into a standardized, sommelier-grade lifestyle beverage.',
      'By pairing pure single-origin aparajitha blossoms with curated botanical companions (sun-dried orange peel, Coonoor spearmint, Malabar lemongrass), Caffibloom delivers an elevated, full-bodied sensory cup that satisfies the ritual need for a hot, contemplative beverage without stimulating the nervous system.',
      'The beverage is 100% caffeine-free, zero-sugar, calorie-free, and rich in natural antioxidant ternatins.',
    ],
  },
  {
    code: 'SECTION 03',
    title: 'Innovation & Intellectual Moat',
    icon: Cpu,
    content: [
      'Interactive Natural Chromatic Shift: Exploiting the reversible pH-equilibrium of polyacylated anthocyanins to produce a dynamic blue-to-violet visual transition upon citrus introduction — with zero artificial dyes.',
      'Controlled Solar Dehydration Standardization: Developing an empirical protocol for drying Aparajitha flowers under 42°C–46°C solar convection, preserving 94% of ternatin stability vs. traditional open-sun drying (which causes photo-degradation).',
      'Curated Taste Engineering: Neutralizing the earthy woodruff finish of pure aparajitha through precise botanical ratios of dried citrus rind and essential oil-bearing lemongrass stalks.',
    ],
  },
  {
    code: 'SECTION 04',
    title: 'Biochemical Science: Clitoria Ternatea & Ternatins',
    icon: Atom,
    content: [
      'Taxonomy: Clitoria ternatea L. (Fabaceae), commonly known as Butterfly Pea, Aparajitha, or Asian Pigeonwings.',
      'Active Chromophore Chemistry: Deep blue pigmentation is imparted by ternatins — unique polyacylated delphinidin 3,3\',5\'-triglucosides. The natural presence of p-coumaroyl and malonyl acyl side-chains confers exceptional thermal and photolytic resilience.',
      'pH Optical Kinetics: At pH 7.0–7.5, ternatins exist in their deprotonated blue quinonoidal base form (reflecting λ 610–630 nm). Introducing citric acid (lowering pH to 3.8–4.2) protonates the structure into the red-violet flavylium cation, shifting the absorbance band toward λ 540–560 nm (violet).',
      'Clinical Distinction: Established chemical phenomena are rigorously separated from exploratory wellness attributes to maintain peer-reviewed academic integrity.',
    ],
  },
  {
    code: 'SECTION 05',
    title: 'Business Architecture & Multi-Channel Monetization',
    icon: TrendingUp,
    content: [
      'D2C E-Commerce (caffibloom.in): High-margin direct sales (68% gross margin) offering subscription allocations, discovery tasting kits, and premium cellar canisters.',
      'B2B Specialty Café Partnerships: Supplying branded "Caffibloom Alchemical Flights" as signature theatrical menu items to third-wave coffee houses and luxury hotel lounges.',
      'Corporate Wellness Procurement: Tier-1 tech campuses and law firms seeking non-stimulant afternoon beverage stations to combat employee burnout.',
      'Curated Gifting & Festive Hampers: High-AOV artisanal boxes paired with borosilicate glassware and sommelier droppers for Diwali, corporate rewards, and luxury weddings.',
    ],
  },
  {
    code: 'SECTION 06',
    title: 'Target Customer Demographics & Personas',
    icon: Target,
    content: [
      'Health-Conscious Millennials & Gen Z (18–34): Mindful consumers reducing caffeine to alleviate anxiety while seeking aesthetically elevated lifestyle rituals.',
      'Late-Night High-Performers: Software engineers, graduate researchers, and creatives who require evening focus without compromising restorative sleep.',
      'Pregnant & Caffeine-Sensitive Demographics: Individuals seeking a safe, pure, and celebratory hot drink during pregnancy or medical caffeine restrictions.',
      'Specialty Beverage Connoisseurs: Curious tea and wine drinkers fascinated by terroir, natural pigments, and artisanal brewing ceremony.',
    ],
  },
  {
    code: 'SECTION 07',
    title: 'Sustainability Terroir & Social Impact',
    icon: ShieldCheck,
    content: [
      'Nitrogen-Fixing Agro-Ecology: Cultivating native Clitoria ternatea enriches nitrogen-depleted soils, serving as an ideal regenerative cover crop for South Indian spice estates.',
      'Farmer Fair-Trade Empowerment: Direct purchasing agreements with smallholder women harvesters in Wayanad, ensuring prices 35% higher than volatile commodity spice markets.',
      'Circular Packaging: Zero microplastics. Canisters are 100% aluminum-recyclable, and brewing bags use unbleached natural botanical cotton.',
    ],
  },
  {
    code: 'SECTION 08',
    title: 'Future R&D Roadmap & Scale Trajectory',
    icon: Rocket,
    content: [
      'Phase 1 (Q1-Q2 2025): Cold-Brew Ready Single-Serve Infusion Bags for instant water-bottle alchemy.',
      'Phase 2 (Q3-Q4 2025): Functional Botanical Blends incorporating Ashwagandha (calm), Hibiscus (tart ruby), and Brahmi (cognitive clarity).',
      'Phase 3 (2026): Ready-To-Drink (RTD) Sparkling Botanical Elixirs in glass bottles for quick-commerce delivery via Blinkit and Swiggy Instamart.',
      'Phase 4: Clinical University Trials: Sponsoring randomized, placebo-controlled human trials to empirically evaluate sleep onset and cognitive calm metrics.',
    ],
  },
]

const BehindInnovation: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light">
      {/* Dark Cellar Academic Header */}
      <section className="bg-estate-950 text-parchment-light py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/25 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="section-tag text-gold">Faculty &amp; Investor Blueprint</span>
          <h1 className="font-serif text-4xl sm:text-6xl mt-2 mb-3 text-parchment-light">
            Behind The Innovation
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-300 text-sm sm:text-base font-sans font-light max-w-2xl mx-auto leading-relaxed">
            The comprehensive 8-pillar academic, scientific, and business dossier behind Caffibloom — presented for project evaluation, university faculty review, and seed investor diligence.
          </p>
        </div>
      </section>

      {/* Main Dossier Blueprint */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        {/* Executive Summary Card */}
        <div className="card-vineyard-dark p-8 md:p-12 border-gold/30 bg-estate-900 text-parchment-light">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold/20 pb-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                Executive Abstract
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-gold-shimmer">
                Project Evaluation Summary
              </h2>
            </div>
            <span className="bg-estate-950 text-gold px-3 py-1 border border-gold/30 text-[10px] uppercase tracking-widest font-mono">
              Academic Dossier &bull; 2024
            </span>
          </div>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans font-light mb-6">
            Caffibloom is not merely a tea brand; it is a bio-botanical beverage architecture that solves the consumer caffeine-dependency trap. Rooted in the chemistry of reversible anthocyanin protonation and supported by a sustainable direct-trade supply chain in South India, the startup presents a commercially viable, socially restorative, and academically rigorous consumer venture.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gold/15 text-xs text-stone-300">
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Category:</span>
              <strong className="text-parchment-light">Premium Functional Beverage</strong>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Core Bio-Molecule:</span>
              <strong className="text-parchment-light">Polyacylated Ternatins</strong>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Gross Unit Margin:</span>
              <strong className="text-gold-light">68% D2C Normalized</strong>
            </div>
            <div>
              <span className="text-stone-400 block text-[10px] uppercase">Caffeine Index:</span>
              <strong className="text-emerald-400">0.00% Verified Pure</strong>
            </div>
          </div>
        </div>

        {/* 8 Sections List */}
        <div className="space-y-8">
          {evaluationDossier.map((sec, idx) => (
            <div
              key={sec.code}
              className="card-vineyard-light p-8 border-stone-300 relative hover:border-gold/60 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-none border border-gold/40 flex items-center justify-center bg-estate-950 text-gold flex-shrink-0 mt-1">
                  <sec.icon className="w-5 h-5" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest font-bold text-gold-dark">
                      {sec.code}
                    </span>
                    <span className="text-[10px] tracking-wider text-stone-400 uppercase font-mono">
                      Evaluation Pillar {idx + 1} of 8
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-estate-950">
                    {sec.title}
                  </h3>

                  <div className="space-y-2.5 text-stone-700 text-xs sm:text-sm leading-relaxed font-sans pt-2">
                    {sec.content.map((para, pIdx) => (
                      <p key={pIdx}>&bull; {para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Faculty & Investor Actions */}
        <div className="card-vineyard-dark p-8 md:p-10 border-gold/30 text-center text-parchment-light space-y-4">
          <h3 className="font-serif text-2xl text-gold-shimmer">
            Evaluator Inquiries &amp; Academic Collaboration
          </h3>
          <p className="text-xs text-stone-300 max-w-xl mx-auto font-sans leading-relaxed">
            We welcome academic evaluators, university project supervisors, and venture incubators to review our full botanical standardization protocols and sample tasting flights.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-luxury-gold text-xs">
              Contact Founder &amp; Academic Liaison
            </Link>
            <Link to="/science" className="btn-luxury-outline text-xs">
              Review pH Laboratory Chemistry
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BehindInnovation
