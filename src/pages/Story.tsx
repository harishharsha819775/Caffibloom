import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Quote, Compass } from 'lucide-react'

const storyMilestones = [
  {
    year: '2023',
    title: 'The Adrenal Stimulant Epidemic',
    text: 'Caught in high-pressure technology and academic careers, our founders relied on 4–5 cups of coffee daily. The result was familiar: palpitations, evening insomnia, stomach acidity, and constant anxiety. When searching for an evening alternative, the market offered only medicinal-tasting, bland herbal bags.',
    tag: 'The Problem Statement',
  },
  {
    year: '2023',
    title: 'The Wayanad Discovery',
    text: 'During a trek through organic spice plantations in Wayanad, Kerala, we were handed an azure infusion brewed from freshly picked Clitoria ternatea petals. Watching the host squeeze in fresh lime — witnessing the blue turn instantly to royal violet — was an unforgettable alchemical shock.',
    tag: 'Botanical Revelation',
  },
  {
    year: '2024',
    title: 'Standardizing The Terroir Extraction',
    text: 'Butterfly pea flowers lose pigment if dried incorrectly or boiled at extreme temperatures. We collaborated with local agricultural cooperatives and botanical chemists to develop a solar-temperature drying protocol that retains 94% of active polyacylated ternatin anthocyanins.',
    tag: 'Artisanal Chemistry',
  },
  {
    year: '2024',
    title: 'Caffibloom Estate Cellar Launch',
    text: 'Caffibloom debuts with four signature botanical cuvées. A celebration of single-origin Indian botanicals, crafted for modern professionals, students, and wellness aficionados who demand uncompromising aesthetics and zero caffeine.',
    tag: 'The Grand Reserve',
  },
]

const Story: React.FC = () => {
  return (
    <div className="min-h-screen bg-parchment-light">
      {/* Editorial Dark Hero */}
      <section className="bg-estate-950 text-parchment-light py-24 px-4 sm:px-6 lg:px-8 border-b border-gold/25 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="section-tag text-gold">Artisanal Heritage &bull; Terroir Lore</span>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl mt-2 mb-4 text-parchment-light">
            Born From a Burnout.<br />
            <span className="italic text-gold-shimmer font-serif">
              Cellared With Reverence.
            </span>
          </h1>
          <div className="gold-divider" />
          <p className="text-stone-300 text-sm sm:text-base font-sans max-w-2xl mx-auto font-light leading-relaxed">
            The journey of transforming an ancient Ayurvedic sacred blossom into India's premier caffeine-free luxury botanical tea.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 text-stone-700 leading-relaxed font-sans text-base sm:text-lg">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-estate-950 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            Modern society runs on a stimulant dependency that is increasingly unsustainable. From late-night academic deadlines to marathon boardroom meetings, caffeine is consumed not for pleasure, but out of perceived necessity. Yet the physiological toll — cortisol spikes, disrupted REM sleep, and adrenal exhaustion — leaves millions searching for an exit.
          </p>

          <p>
            When searching for an alternative, consumers are confronted with a false choice: either endure the side-effects of caffeine, or settle for tasteless, medicinal chamomile infusions that lack the ritual grandeur of high-end coffee or fine wine.
          </p>

          {/* Quote Card */}
          <div className="my-10 p-8 bg-white border-l-4 border-gold shadow-sm">
            <Quote className="w-8 h-8 text-gold mb-2" />
            <p className="font-serif italic text-xl sm:text-2xl text-estate-950 leading-relaxed">
              "We asked ourselves: why shouldn't an evening caffeine-free drink be as visually stunning, ceremonious, and conversation-sparking as a vintage Pinot Noir?"
            </p>
          </div>

          <p>
            The answer was <strong>Aparajitha</strong> (<em>Clitoria ternatea</em>). Native to tropical South Asia, this sacred vine contains one of nature's most resilient and visually captivating anthocyanin complexes: <strong>ternatins</strong>. When steeped, it produces a deep midnight sapphire pool. Add citrus, and the pH drop triggers an instantaneous chromatic shift into electric violet.
          </p>

          <p>
            Today, Caffibloom works directly with smallholder farmers across Wayanad, Coorg, and the Nilgiris. We treat our botanicals with the exact reverence winemakers accord to their grapes: hand-harvesting at dawn, gentle solar curing, and meticulous blending with regional herbs.
          </p>
        </div>

        {/* Milestone Chronology */}
        <div className="mt-24 pt-16 border-t border-stone-200">
          <div className="text-center mb-16">
            <span className="section-tag">Chronology</span>
            <h2 className="section-heading-light text-3xl sm:text-4xl mt-1">
              The Path to Caffibloom
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-8">
            {storyMilestones.map((m, i) => (
              <div
                key={i}
                className="card-vineyard-light p-8 border-stone-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs tracking-widest text-gold-dark uppercase block">
                    {m.tag}
                  </span>
                  <span className="font-serif text-3xl font-bold text-estate-950">
                    {m.year}
                  </span>
                </div>
                <div className="md:col-span-9 space-y-2">
                  <h3 className="font-serif text-2xl text-estate-950">
                    {m.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/products" className="btn-luxury-dark text-xs inline-flex items-center gap-2">
              <span>Experience The Cellar Blends</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story
