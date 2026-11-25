import React from 'react'
import { motion } from 'framer-motion'

export const KettlePour3D: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-[4/3] mx-auto overflow-hidden rounded-lg bg-[#070B14] select-none flex items-center justify-center shadow-2xl">
      <svg
        viewBox="0 0 500 375"
        className="w-full h-full object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Studio Vignette Lighting */}
          <radialGradient id="studioLighting" cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#131C31" />
            <stop offset="45%" stopColor="#0B101D" />
            <stop offset="100%" stopColor="#04060B" />
          </radialGradient>

          {/* Wooden Surface Texture Gradients */}
          <linearGradient id="woodSurface" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#140E0A" />
            <stop offset="25%" stopColor="#251B13" />
            <stop offset="50%" stopColor="#2C2017" />
            <stop offset="75%" stopColor="#221710" />
            <stop offset="100%" stopColor="#120D09" />
          </linearGradient>

          <linearGradient id="woodHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A3728" stopOpacity="0.8" />
            <stop offset="15%" stopColor="#2A1E15" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0E0A07" stopOpacity="0.95" />
          </linearGradient>

          {/* Brushed Gold Metallic Accents */}
          <linearGradient id="brushedGold" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#F7E6C8" />
            <stop offset="20%" stopColor="#D4AF37" />
            <stop offset="45%" stopColor="#AA820A" />
            <stop offset="65%" stopColor="#F3E5AB" />
            <stop offset="85%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#876508" />
          </linearGradient>

          <linearGradient id="goldRimGleam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA820A" />
            <stop offset="50%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#876508" />
          </linearGradient>

          {/* Matte Midnight Navy Kettle Body 3D Shading */}
          <linearGradient id="kettleBody3D" x1="20%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#1A253C" />
            <stop offset="30%" stopColor="#101726" />
            <stop offset="65%" stopColor="#0A0E18" />
            <stop offset="100%" stopColor="#05080E" />
          </linearGradient>

          <linearGradient id="kettleSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="55%" stopColor="rgba(255,255,255,0.02)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
          </linearGradient>

          {/* Royal Sapphire Tea Liquid Stream & Cup Filling */}
          <linearGradient id="teaLiquidFlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="30%" stopColor="#1D4ED8" />
            <stop offset="70%" stopColor="#103FA0" />
            <stop offset="100%" stopColor="#0B2766" />
          </linearGradient>

          <linearGradient id="teaLiquidGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.95" />
          </linearGradient>

          {/* Glass Cup Transparency & Specular Reflections */}
          <linearGradient id="glassWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="15%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="85%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="liquidCaustics" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
          </filter>
        </defs>

        {/* 1. Cinematic Studio Background */}
        <rect width="500" height="375" fill="url(#studioLighting)" />

        {/* Ambient Sapphire Glow behind liquid */}
        <circle cx="340" cy="250" r="110" fill="#1E40AF" opacity="0.22" filter="url(#softGlow)" />
        <circle cx="270" cy="190" r="70" fill="#3B82F6" opacity="0.16" filter="url(#softGlow)" />

        {/* 2. Dark Rustic Wooden Serving Surface */}
        <g id="woodenTable">
          {/* Table Base & Wood Planks */}
          <path d="M 0 270 L 500 270 L 500 375 L 0 375 Z" fill="url(#woodSurface)" />
          <path d="M 0 270 L 500 270 L 500 375 L 0 375 Z" fill="url(#woodHighlight)" opacity="0.8" />

          {/* Wooden Grain Lines */}
          <line x1="0" y1="295" x2="500" y2="295" stroke="#1B130D" strokeWidth="1.2" opacity="0.7" />
          <line x1="0" y1="325" x2="500" y2="325" stroke="#120D08" strokeWidth="1.5" opacity="0.8" />
          <line x1="0" y1="355" x2="500" y2="355" stroke="#1A120C" strokeWidth="1" opacity="0.6" />

          {/* Table Top Surface Chamfer Reflection */}
          <line x1="0" y1="270" x2="500" y2="270" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

          {/* Cast Shadows Under Cup and Kettle */}
          <ellipse cx="340" cy="305" rx="55" ry="14" fill="#030407" opacity="0.75" />
          <ellipse cx="140" cy="275" rx="65" ry="18" fill="#030407" opacity="0.65" />
        </g>

        {/* 3. Scattered Dried Butterfly Pea Flowers on Wooden Surface */}
        <g id="tableFlowers">
          {/* Flower 1 - Left foreground */}
          <path d="M 235 315 C 228 310, 224 316, 220 322 C 224 326, 232 328, 238 324 Z" fill="#1E3A8A" opacity="0.95" />
          <path d="M 230 318 C 222 318, 218 325, 222 330 C 228 332, 235 328, 238 322 Z" fill="#2563EB" opacity="0.85" />
          <circle cx="232" cy="322" r="2.2" fill="#CA8A04" />

          {/* Flower 2 - Front right */}
          <path d="M 410 325 C 400 320, 395 328, 392 335 C 398 340, 408 342, 415 336 Z" fill="#1D4ED8" />
          <path d="M 405 328 C 395 330, 392 338, 398 344 C 406 345, 414 340, 416 333 Z" fill="#1E40AF" opacity="0.9" />
          <circle cx="406" cy="334" r="2.5" fill="#EAB308" />

          {/* Loose Petals */}
          <ellipse cx="260" cy="332" rx="7" ry="3.5" fill="#1E3A8A" transform="rotate(-18 260 332)" />
          <ellipse cx="280" cy="326" rx="5" ry="2.8" fill="#2563EB" transform="rotate(25 280 326)" />
          <ellipse cx="380" cy="320" rx="6" ry="3.2" fill="#172554" transform="rotate(12 380 320)" />
          <ellipse cx="435" cy="338" rx="8" ry="3.8" fill="#1E40AF" transform="rotate(-30 435 338)" />
        </g>

        {/* 4. Elegant Transparent Glass Teacup Filling with Blue Botanical Tea */}
        <g id="glassCup">
          {/* Glass Foot Base */}
          <ellipse cx="340" cy="298" rx="42" ry="9" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" />
          <ellipse cx="340" cy="298" rx="38" ry="7" fill="rgba(16,39,102,0.25)" />

          {/* Liquid Inside Glass */}
          <path
            d="M 302 235 C 304 275, 316 295, 340 295 C 364 295, 376 275, 378 235 Q 360 241, 340 241 Q 320 241, 302 235 Z"
            fill="url(#teaLiquidFlow)"
          />

          {/* Liquid Top Surface Meniscus & Ripples */}
          <ellipse cx="340" cy="235" rx="38" ry="8" fill="#2563EB" opacity="0.8" />
          <ellipse cx="340" cy="235" rx="34" ry="6.5" fill="#3B82F6" opacity="0.5" />
          <ellipse cx="340" cy="235" rx="20" ry="4" fill="#60A5FA" opacity="0.65" />
          <ellipse cx="340" cy="235" rx="7" ry="2" fill="#EFF6FF" opacity="0.9" />

          {/* Floating Butterfly Pea Blossom in Cup */}
          <g transform="translate(336, 234) scale(0.75)">
            <path d="M 0 0 C -8 -6, -14 0, -12 7 C -6 10, 2 8, 4 2 Z" fill="#1D4ED8" />
            <path d="M 3 1 C 8 -4, 13 2, 10 8 C 4 10, -2 8, 0 2 Z" fill="#2563EB" />
            <circle cx="0" cy="3" r="2" fill="#FACC15" />
          </g>

          {/* Transparent Glass Body (Dual Curved Wall) */}
          <path
            d="M 296 195 C 298 255, 314 297, 340 297 C 366 297, 382 255, 384 195"
            fill="url(#glassWallGrad)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.8"
          />

          {/* Delicate Glass Cup Handle */}
          <path
            d="M 383 205 C 418 208, 422 258, 376 265"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 383 208 C 414 212, 417 254, 376 261"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />

          {/* Glass Top Rim Opening with Gold-Glint Highlight */}
          <ellipse cx="340" cy="195" rx="44" ry="9" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" />
          <path d="M 300 196 Q 340 203, 380 196" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.4" opacity="0.8" />

          {/* Glass Specular Light Reflections */}
          <path
            d="M 302 205 C 305 250, 314 285, 330 292"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M 374 205 C 372 245, 364 282, 350 291"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* 5. Continuous Stream of Royal-Blue Butterfly Pea Tea */}
        <g id="teaPourStream">
          {/* Soft Fluid Glow Halo */}
          <path
            d="M 235 152 Q 275 160, 305 185 T 340 236"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="12"
            opacity="0.35"
            filter="url(#softGlow)"
          />

          {/* Main Laminar Liquid Arc */}
          <path
            d="M 235 152 Q 275 160, 305 185 T 340 236"
            fill="none"
            stroke="url(#teaLiquidFlow)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Inner Bright Cyan/Sapphire Stream Highlight */}
          <path
            d="M 236 151 Q 276 159, 306 184 T 340 235"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M 237 150 Q 277 158, 307 183 T 339 233"
            fill="none"
            stroke="#EFF6FF"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* Fluid Splashes at Entry Point */}
          <circle cx="340" cy="235" r="3.5" fill="#93C5FD" opacity="0.9" />
          <circle cx="334" cy="232" r="2.2" fill="#60A5FA" opacity="0.8" />
          <circle cx="346" cy="233" r="2" fill="#3B82F6" opacity="0.85" />
          <circle cx="338" cy="227" r="1.4" fill="#DBEAFE" />
        </g>

        {/* 6. Sophisticated Matte Midnight-Blue and Brushed-Gold Luxury Kettle */}
        {/* Tilting Angle: ~28 degrees pouring naturally toward the cup */}
        <g id="luxuryKettle" transform="translate(130, 155) rotate(-26)">
          {/* Kettle Shadow onto Table */}
          <ellipse cx="0" cy="85" rx="55" ry="15" fill="#020408" opacity="0.5" />

          {/* Matte Midnight-Blue Main Kettle Body */}
          <path
            d="M -48 -40 L -62 60 Q -62 78, -45 80 L 45 80 Q 62 78, 62 60 L 48 -40 Z"
            fill="url(#kettleBody3D)"
          />
          <path
            d="M -48 -40 L -62 60 Q -62 78, -45 80 L 45 80 Q 62 78, 62 60 L 48 -40 Z"
            fill="url(#kettleSpecular)"
          />

          {/* Brushed Gold Base Ring */}
          <ellipse cx="0" cy="78" rx="50" ry="8" fill="url(#brushedGold)" stroke="url(#goldRimGleam)" strokeWidth="1" />

          {/* Brushed Gold Body Collar Band */}
          <path d="M -50 -20 L 50 -20 L 51 -14 L -51 -14 Z" fill="url(#brushedGold)" />

          {/* Kettle Top Shoulder & Lid */}
          <ellipse cx="0" cy="-40" rx="48" ry="10" fill="url(#kettleBody3D)" stroke="#1F293D" strokeWidth="1.5" />
          <ellipse cx="0" cy="-40" rx="36" ry="8" fill="url(#brushedGold)" stroke="url(#goldRimGleam)" strokeWidth="1" />

          {/* Brushed Gold Lid Finial Knob */}
          <ellipse cx="0" cy="-48" rx="10" ry="3.5" fill="url(#brushedGold)" />
          <path d="M -4 -48 L -3 -58 L 3 -58 L 4 -48 Z" fill="url(#brushedGold)" />
          <circle cx="0" cy="-60" r="6" fill="url(#brushedGold)" stroke="#FFF2D6" strokeWidth="0.8" />

          {/* Ergonomic Brushed Gold Handle */}
          <path
            d="M -56 -25 C -115 -20, -118 60, -56 68"
            fill="none"
            stroke="url(#brushedGold)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M -56 -25 C -112 -20, -115 60, -56 68"
            fill="none"
            stroke="#4A3705"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Elegant Brushed Gold Gooseneck Spout */}
          <path
            d="M 52 45 C 95 40, 115 -5, 128 -38 C 132 -48, 138 -55, 148 -58"
            fill="none"
            stroke="url(#brushedGold)"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M 52 45 C 95 40, 115 -5, 128 -38 C 132 -48, 138 -55, 148 -58"
            fill="none"
            stroke="#FFF2D6"
            strokeWidth="2"
            opacity="0.75"
          />
          {/* Spout Tip Bevel */}
          <ellipse cx="148" cy="-58" rx="4" ry="5.5" fill="#1D4ED8" stroke="url(#brushedGold)" strokeWidth="1.5" />
        </g>

        {/* 7. Soft Aromatic Steam Wisps Rising from Freshly Brewed Tea */}
        <g id="steamWisps" opacity="0.38">
          <path
            d="M 335 220 Q 330 180, 345 150 T 330 110"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
          <path
            d="M 345 225 Q 360 185, 345 155 T 355 115"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#softGlow)"
          />
        </g>
      </svg>
    </div>
  )
}

export default KettlePour3D
