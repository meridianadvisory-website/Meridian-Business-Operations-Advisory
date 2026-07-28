"use client"

import { useState } from 'react'

const opportunities = [
  // High-value, low-effort (teal)
  { cx: 100, cy: 80, r: 10, fill: 'rgba(0,212,180,0.9)', label: 'Customer intake automation — ~$90K/yr, 3-wk build' },
  { cx: 130, cy: 105, r: 8, fill: 'rgba(0,212,180,0.75)', label: 'Invoice reconciliation — ~$40K/yr, 2-wk build' },
  { cx: 85, cy: 120, r: 7, fill: 'rgba(0,212,180,0.65)', label: 'Appointment scheduling AI — ~$35K/yr saved' },
  // Medium-value
  { cx: 200, cy: 130, r: 6, fill: 'rgba(176,186,202,0.3)', label: 'Report generation — moderate ROI, moderate effort' },
  { cx: 250, cy: 100, r: 7, fill: 'rgba(176,186,202,0.25)', label: 'Predictive inventory — high value, high effort' },
  { cx: 170, cy: 180, r: 5, fill: 'rgba(176,186,202,0.2)', label: 'Email triage assistant — low ROI' },
  // Low-value / high-effort
  { cx: 310, cy: 200, r: 6, fill: 'rgba(176,186,202,0.15)', label: 'Custom LLM chatbot — low ROI, high effort' },
  { cx: 340, cy: 170, r: 5, fill: 'rgba(176,186,202,0.12)', label: 'Full ERP rebuild — very high effort' },
  { cx: 280, cy: 230, r: 5, fill: 'rgba(176,186,202,0.12)', label: 'Social media AI — low business impact' },
  { cx: 350, cy: 240, r: 4, fill: 'rgba(176,186,202,0.1)', label: 'Autonomous coding agent — speculative' },
]

export default function ValueMapGraphic() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
      <svg
        viewBox="0 0 400 320"
        width="100%"
        height="auto"
        role="img"
        aria-label="Illustrative AI Value Map quadrant chart showing opportunities plotted by ROI vs Effort. Interact with dots for details."
        style={{ display: 'block' }}
      >
        {/* Background */}
        <rect width="400" height="320" fill="var(--navy-2, #0A1628)" rx="12" />

        {/* Grid lines */}
        <line x1="60" y1="40" x2="60" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="60" y1="260" x2="380" y2="260" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="60" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="60" y1="95" x2="380" y2="95" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="60" y1="205" x2="380" y2="205" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="140" y1="40" x2="140" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="220" y1="40" x2="220" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="300" y1="40" x2="300" y2="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Axis labels */}
        <text x="220" y="285" textAnchor="middle" fill="rgba(176,186,202,0.7)" fontSize="11" fontFamily="var(--font-sora, sans-serif)">
          Effort / Cost →
        </text>
        <text x="20" y="150" textAnchor="middle" fill="rgba(176,186,202,0.7)" fontSize="11" fontFamily="var(--font-sora, sans-serif)" transform="rotate(-90 20 150)">
          ROI / Value →
        </text>

        {/* Quadrant label */}
        <text x="110" y="65" textAnchor="middle" fill="rgba(0,212,180,0.3)" fontSize="9" fontFamily="var(--font-dm-mono, monospace)">
          HIGH VALUE
        </text>
        <text x="110" y="77" textAnchor="middle" fill="rgba(0,212,180,0.3)" fontSize="9" fontFamily="var(--font-dm-mono, monospace)">
          LOW EFFORT
        </text>

        {/* Interactive dots */}
        {opportunities.map((dot, i) => (
          <g key={i}>
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r + 4}
              fill="transparent"
              style={{ cursor: 'pointer' }}
              tabIndex={0}
              role="button"
              aria-label={dot.label}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
              onTouchStart={() => setActiveIndex(activeIndex === i ? null : i)}
            />
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r={activeIndex === i ? dot.r + 2 : dot.r}
              fill={dot.fill}
              style={{ transition: 'r 0.15s ease', pointerEvents: 'none' }}
            />
          </g>
        ))}

        {/* "Start here" annotation */}
        <line x1="115" y1="88" x2="145" y2="88" stroke="rgba(0,212,180,0.5)" strokeWidth="1" strokeDasharray="2 2" />
        <text x="150" y="92" fill="rgba(0,212,180,0.7)" fontSize="10" fontFamily="var(--font-dm-mono, monospace)">
          Start here
        </text>

        {/* Border */}
        <rect width="400" height="320" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" rx="12" />
      </svg>

      {/* Tooltip */}
      {activeIndex !== null && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '2.5rem',
            transform: 'translateX(-50%)',
            background: 'var(--navy-3, #0F1E38)',
            border: '1px solid var(--teal-border)',
            borderRadius: '8px',
            padding: '0.5rem 0.75rem',
            fontSize: '0.75rem',
            color: 'var(--white)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
          role="tooltip"
        >
          {opportunities[activeIndex].label}
        </div>
      )}

      <p
        style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          color: 'var(--gray-2)',
          marginTop: '0.75rem',
          fontStyle: 'italic',
        }}
      >
        Illustrative — every map is built from your operations.
      </p>
    </div>
  )
}
