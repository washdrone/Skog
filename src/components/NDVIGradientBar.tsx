interface NDVIGradientBarProps {
  showLabels?: boolean
  showValues?: boolean
  className?: string
}

const NDVI_CLASSES = [
  { label: 'Bar mark', range: '< 0.2', color: 'bg-spectrum-red' },
  { label: 'Stressad', range: '0.2–0.4', color: 'bg-spectrum-orange' },
  { label: 'Måttlig', range: '0.4–0.6', color: 'bg-spectrum-yellow' },
  { label: 'Frisk', range: '0.6–0.8', color: 'bg-spectrum-green' },
  { label: 'Tät, vital', range: '0.8–1.0', color: 'bg-spectrum-deep' },
]

export default function NDVIGradientBar({
  showLabels = true,
  showValues = true,
  className = '',
}: NDVIGradientBarProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Gradient bar */}
      <div className="ndvi-gradient h-4 w-full rounded-full shadow-inner" />

      {/* Scale markers */}
      {showValues && (
        <div className="mt-2 flex justify-between text-[10px] font-mono text-slate-400">
          <span>−1.0</span>
          <span>0.0</span>
          <span>0.2</span>
          <span>0.4</span>
          <span>0.6</span>
          <span>0.8</span>
          <span>1.0</span>
        </div>
      )}

      {/* Labels */}
      <div className="mt-1.5 flex justify-between">
        <span className="text-xs text-slate-500">Låg vitalitet</span>
        <span className="text-xs text-slate-500">Hög vitalitet</span>
      </div>

      {/* Class legend */}
      {showLabels && (
        <div className="mt-4 flex flex-wrap gap-3">
          {NDVI_CLASSES.map((cls) => (
            <div key={cls.label} className="flex items-center gap-1.5">
              <div className={`h-3 w-3 rounded-sm ${cls.color}`} />
              <span className="text-xs text-slate-600">
                {cls.label} <span className="font-mono text-slate-400">{cls.range}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
