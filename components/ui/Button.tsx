"use client"

import { motion } from 'framer-motion'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  'data-cta-source'?: string
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm cursor-pointer min-h-[44px] min-w-[44px]'

const primaryStyles: React.CSSProperties = {
  background: 'var(--teal)',
  color: 'var(--navy)',
  fontWeight: 700,
  transition: 'box-shadow 0.2s ease',
}

const primaryHoverStyle = {
  boxShadow: '0 8px 24px rgba(0,212,180,0.35)',
} as const

const ghostStyles: React.CSSProperties = {
  background: 'transparent',
  border: '1px solid var(--teal-border)',
  color: 'var(--teal)',
}

export default function Button({
  variant,
  href,
  onClick,
  children,
  className = '',
  'data-cta-source': ctaSource,
}: ButtonProps) {
  const combinedClassName = `${baseStyles} ${className}`.trim()

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        style={variant === 'primary' ? primaryStyles : ghostStyles}
        whileHover={
          variant === 'primary'
            ? { y: -2, ...primaryHoverStyle }
            : { backgroundColor: 'var(--teal-glow)' }
        }
        onClick={onClick}
        data-cta-source={ctaSource}
      >
        {children}
      </motion.a>
    )
  }

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className={combinedClassName}
        style={variant === 'primary' ? primaryStyles : ghostStyles}
        whileHover={
          variant === 'primary'
            ? { y: -2, ...primaryHoverStyle }
            : { backgroundColor: 'var(--teal-glow)' }
        }
        data-cta-source={ctaSource}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      type="button"
      className={combinedClassName}
      style={variant === 'primary' ? primaryStyles : ghostStyles}
      whileHover={
        variant === 'primary'
          ? { y: -2, ...primaryHoverStyle }
          : { backgroundColor: 'var(--teal-glow)' }
      }
      data-cta-source={ctaSource}
    >
      {children}
    </motion.button>
  )
}
