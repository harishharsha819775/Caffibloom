// Product catalogue - Vineyard Estate Edition
export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  ingredients: string[]
  price: number          // INR
  comparePrice?: number  // crossed-out price
  weight: string
  servings: number
  image: string          // botanical visual
  color: string          // brand accent for card
  rating: number
  reviews: number
  badge?: string
  brewingTemp: string
  steepTime: string
  origin: string
  tastingNotes: {
    nose: string
    palate: string
    finish: string
  }
}

export const products: Product[] = [
  {
    id: 'original',
    name: 'Original Caffibloom Reserve',
    tagline: 'Single-Origin Pure Butterfly Pea Botanical Infusion',
    description:
      'The crown jewel of our botanical cellar. 100% hand-harvested Clitoria ternatea blossoms from pristine Wayanad highlands, dried under gentle solar currents to lock in concentrated ternatin anthocyanins. Steep into deep midnight sapphire or drop citrus for imperial violet.',
    ingredients: ['100% Organically Grown Butterfly Pea Blossoms (Clitoria ternatea / Aparajitha)'],
    price: 199,
    comparePrice: 249,
    weight: '25g',
    servings: 15,
    image: '/original-reserve.jpg',
    color: '#1044A5',
    rating: 4.9,
    reviews: 142,
    badge: 'Estate Reserve',
    brewingTemp: '85°C / 185°F',
    steepTime: '5–7 minutes',
    origin: 'Wayanad Highlands, Kerala',
    tastingNotes: {
      nose: 'Earthy woodruff, sun-warmed dried petals, hint of green meadow',
      palate: 'Silky, velvety smooth herbaceous body with mild nutty sweetness',
      finish: 'Clean, soothing, rounded floral lingering with zero astringency',
    },
  },
  {
    id: 'citrus',
    name: 'Citrus Bloom Vintage',
    tagline: 'Butterfly Pea + Sun-Dried Seville Citrus Rind',
    description:
      'An artisanal union of delicate butterfly pea petals and slow-cured citrus zest. The natural fruit acids trigger a gentle blush of violet during the steep itself, delivering an uplifting and sparkling botanical bouquet without a grain of caffeine.',
    ingredients: ['Butterfly Pea Flowers', 'Sun-Dried Nagpur Orange Rind', 'Coorg Lemon Peel'],
    price: 229,
    comparePrice: 279,
    weight: '30g',
    servings: 15,
    image: '/citrus-bloom.jpg',
    color: '#C5A880',
    rating: 4.9,
    reviews: 218,
    badge: 'Tasting Room Pick',
    brewingTemp: '80–85°C',
    steepTime: '4–6 minutes',
    origin: 'Nilgiri Foothills & Coorg Groves',
    tastingNotes: {
      nose: 'Vibrant orange blossom, candied lemon peel, crisp botanical breeze',
      palate: 'Bright, zesty, delicately tart with soft floral undercurrents',
      finish: 'Refreshing, citrus-tinged finish with a pleasant natural lift',
    },
  },
  {
    id: 'mint',
    name: 'Mint Bloom Grand Cru',
    tagline: 'Butterfly Pea + Mountain Spearmint & Peppermint',
    description:
      'Crafted for high-stress minds demanding tranquil clarity. Crisp hand-crushed mountain spearmint and cooling peppermint dance through deep sapphire floral waters. Ideal as an after-dinner palate cleanser or an iced midday digestif.',
    ingredients: ['Butterfly Pea Flowers', 'Himalayan Peppermint Leaves', 'Coonoor Spearmint Leaves'],
    price: 229,
    comparePrice: 279,
    weight: '30g',
    servings: 15,
    image: '/mint-bloom.jpg',
    color: '#1F5E3B',
    rating: 4.8,
    reviews: 112,
    badge: 'Sommelier Choice',
    brewingTemp: '80–85°C',
    steepTime: '4–5 minutes',
    origin: 'Coonoor Valley, Tamil Nadu',
    tastingNotes: {
      nose: 'Crisp glacial menthol, freshly torn mint leaves, subtle sweet grass',
      palate: 'Cooling, revitalizing botanical sweep with smooth floral body',
      finish: 'Long, crisp, restorative chill on the palate',
    },
  },
  {
    id: 'lemongrass',
    name: 'Lemongrass Bloom Cuvée',
    tagline: 'Butterfly Pea + Malabar Lemongrass Stalks',
    description:
      'An exotic botanical harmony inspired by Southeast Asian royal infusions. Fragrant, tender lemongrass stalks impart essential citral oils that marry seamlessly with deep aparajitha petals for a calming, spa-like ritual in a porcelain cup.',
    ingredients: ['Butterfly Pea Flowers', 'Sun-Dried Malabar Lemongrass Stalks', 'Crisp Lemon Myrtle'],
    price: 239,
    comparePrice: 299,
    weight: '30g',
    servings: 15,
    image: '/lemongrass-bloom.jpg',
    color: '#7C3AED',
    rating: 4.7,
    reviews: 86,
    badge: 'Artisanal Blend',
    brewingTemp: '85–90°C',
    steepTime: '5–7 minutes',
    origin: 'Malabar Coastal Belt, Kerala',
    tastingNotes: {
      nose: 'Warm Meyer lemon, tropical lemongrass steam, faint honeysuckle',
      palate: 'Medium-bodied, aromatic, rounded herbaceous zest',
      finish: 'Warm, soothing citrus-floral echo that relaxes the senses',
    },
  },
]

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id)
