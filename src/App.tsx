import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Story from './pages/Story'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Science from './pages/Science'
import Sustainability from './pages/Sustainability'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import BehindInnovation from './pages/BehindInnovation'

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen w-full overflow-x-clip">
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/behind-innovation" element={<BehindInnovation />} />
      </Routes>
    </main>
    <Footer />
  </div>
)

export default App
