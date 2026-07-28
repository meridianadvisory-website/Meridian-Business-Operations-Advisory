interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <style>{`
        .section-label-dot {
          animation: section-label-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes section-label-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (prefers-reduced-motion: reduce) {
          .section-label-dot { animation: none; }
        }
      `}</style>
      <span
        className="section-label-dot"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--teal)',
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      <span className="text-label">{children}</span>
    </div>
  )
}
