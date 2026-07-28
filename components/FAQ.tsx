"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqItems } from '@/lib/content'
import { SECTION_IDS } from '@/lib/constants'
import FadeIn from './ui/FadeIn'
import SectionLabel from './ui/SectionLabel'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id={SECTION_IDS.faq}
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <FadeIn>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{ color: 'var(--white)', marginBottom: '2.5rem', marginTop: '0.75rem' }}>
            Common questions
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqItems.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.08}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </FadeIn>
          ))}
        </div>

        {/* Back to top */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="#"
            style={{
              color: 'var(--gray)',
              fontSize: '0.78rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              minHeight: '44px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 12L7 2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to top
          </a>
        </div>
      </div>

      <style>{`
        .faq-details button:focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: -2px;
          border-radius: 12px;
        }
      `}</style>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="faq-details"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          padding: '1.25rem 1.5rem',
          color: 'var(--white)',
          fontWeight: 600,
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {question}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            color: 'var(--teal)',
            fontSize: '1.25rem',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            role="region"
          >
            <div
              style={{
                padding: '0 1.5rem 1.25rem',
                color: 'var(--gray)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
