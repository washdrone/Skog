'use client'

import { useState } from 'react'

const LAYERS = [
  {
    id: 'ortofoto',
    label: 'Ortofoto',
    description: 'RGB flygbild, 2–5 cm',
    bg: 'bg-gradient-to-br from-forest-800 via-forest-900 to-night-950',
    overlay: (
      <>
        <div className="absolute inset-0 topo-pattern opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-[60%] h-[60%] rounded-full bg-forest-500/15 blur-[40px]" />
      </>
    ),
  },
  {
    id: 'hojdmodell',
    label: 'Höjdmodell',
    description: 'DSM/DTM',
    bg: 'bg-gradient-to-br from-night-900 via-slate-800 to-forest-950',
    overlay: (
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 120" fill="none">
        <path d="M0 80 Q50 40 100 60 T200 50" stroke="#94a3b8" strokeWidth="1" />
        <path d="M0 90 Q60 50 110 70 T200 60" stroke="#94a3b8" strokeWidth="0.8" opacity="0.7" />
        <path d="M0 100 Q70 65 120 80 T200 70" stroke="#94a3b8" strokeWidth="0.6" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'bestandsgranser',
    label: 'Beståndsgränser',
    description: 'Vektorlager',
    bg: 'bg-night-950/90',
    overlay: (
      <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 200 120" fill="none">
        <polygon points="20,15 90,10 100,55 30,60" stroke="#46c17e" strokeWidth="1.5" fill="#46c17e" fillOpacity="0.1" />
        <polygon points="95,12 180,8 185,65 110,58" stroke="#7cd9a5" strokeWidth="1.5" fill="#7cd9a5" fillOpacity="0.08" />
        <polygon points="25,62 105,57 115,110 35,115" stroke="#24a663" strokeWidth="1.5" fill="#24a663" fillOpacity="0.12" />
      </svg>
    ),
  },
  {
    id: 'ndvi',
    label: 'NDVI-karta',
    description: 'Vegetationsindex',
    bg: '',
    overlay: (
      <div className="absolute inset-0 ndvi-gradient opacity-60 rounded-xl">
        <div className="absolute inset-0 bg-grid opacity-15" />
      </div>
    ),
  },
]

export default function LayerStack() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <div className="relative">
      {/* 3D stack — desktop */}
      <div className="hidden lg:block">
        <div className="layer-stack relative mx-auto" style={{ width: 400, height: 320 }}>
          {LAYERS.map((layer, i) => {
            const isActive = activeLayer === layer.id
            const isOther = activeLayer !== null && !isActive
            return (
              <div
                key={layer.id}
                className={`absolute left-0 right-0 rounded-xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 ${layer.bg}`}
                style={{
                  height: 160,
                  top: i * 40,
                  zIndex: isActive ? 50 : LAYERS.length - i,
                  transform: `rotateX(45deg) rotateZ(-15deg) translateZ(${isActive ? 40 : i * 2}px)`,
                  opacity: isOther ? 0.3 : 1,
                }}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
              >
                {layer.overlay}
                <div className="absolute bottom-2 left-3 z-10">
                  <span className="rounded bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {layer.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Flat list — mobile */}
      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {LAYERS.map((layer) => (
          <div
            key={layer.id}
            className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 ${layer.bg || 'bg-slate-100'}`}
          >
            {layer.overlay}
            <div className="absolute bottom-2 left-3 z-10">
              <span className="rounded bg-black/40 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                {layer.label}
              </span>
            </div>
            <div className="absolute bottom-2 right-3 z-10">
              <span className="text-[10px] text-white/50">{layer.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
