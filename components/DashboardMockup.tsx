"use client"

import { motion, useReducedMotion } from "framer-motion"

const bars = [
  { height: "60%", color: "var(--teal-dim)" },
  { height: "85%", color: "var(--teal)" },
  { height: "45%", color: "var(--teal-dim)" },
  { height: "70%", color: "var(--teal)" },
  { height: "90%", color: "var(--teal)" },
  { height: "55%", color: "var(--teal-dim)" },
  { height: "75%", color: "var(--teal)" },
]

const metrics = [
  { label: "Lead Response", value: "3 min", delta: "+94%" },
  { label: "Capacity / Wk", value: "$1,600", delta: "+38%" },
  { label: "ROI Timeline", value: "30 days", delta: "↑" },
]

export default function DashboardMockup() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.5rem",
        width: "100%",
        maxWidth: "520px",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "0.2rem",
            }}
          >
            NEXUS
          </div>
          <div
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              color: "var(--white)",
              letterSpacing: "-0.01em",
            }}
          >
            Operations Dashboard
          </div>
        </div>

        {/* Status indicators */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              background: "rgba(0,212,180,0.08)",
              border: "1px solid var(--teal-border)",
              borderRadius: "20px",
              padding: "0.2rem 0.6rem",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--teal)",
                boxShadow: "0 0 6px var(--teal)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.6rem",
                color: "var(--teal)",
                letterSpacing: "0.06em",
              }}
            >
              LIVE
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.6rem",
              color: "var(--gray)",
            }}
          >
            v2.4.1
          </div>
        </div>
      </div>

      {/* Chart section */}
      <div
        style={{
          background: "var(--navy-3)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            color: "var(--gray)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Revenue Recovery — Last 7 Days
        </div>

        {/* Bar chart */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "6px",
            height: "80px",
          }}
        >
          {bars.map((bar, index) => {
            if (prefersReducedMotion) {
              return (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    height: bar.height,
                    background: bar.color,
                    borderRadius: "3px 3px 0 0",
                    opacity: 0.85,
                  }}
                />
              )
            }

            return (
              <motion.div
                key={index}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  flex: 1,
                  height: bar.height,
                  background: bar.color,
                  borderRadius: "3px 3px 0 0",
                  transformOrigin: "bottom",
                  opacity: 0.85,
                }}
              />
            )
          })}
        </div>

        {/* X-axis labels */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginTop: "0.4rem",
          }}
        >
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.55rem",
                color: "var(--gray-2)",
              }}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.5rem",
        }}
      >
        {metrics.map((metric, index) => (
          <div
            key={index}
            style={{
              background: "var(--navy-3)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "0.6rem 0.75rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "var(--white)",
                lineHeight: 1.2,
              }}
            >
              {metric.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "0.58rem",
                color: "var(--gray)",
                marginTop: "0.2rem",
                marginBottom: "0.3rem",
              }}
            >
              {metric.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.6rem",
                color: "var(--teal)",
              }}
            >
              {metric.delta}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
