'use client'

import { useReveal } from '@/lib/useReveal'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
}

export default function RevealSection({ children, className = '' }: RevealSectionProps) {
  const ref = useReveal()
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
