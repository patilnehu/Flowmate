"use client";

import { QUICK_STARTERS } from "@/lib/constants";

interface WelcomeCardProps {
  onQuickStart: (prompt: string) => void;
}

export default function WelcomeCard({ onQuickStart }: WelcomeCardProps) {
  return (
    <div
      className="rounded-2xl border p-6 mb-5 text-center"
      style={{
        background: "#fff",
        borderColor: "rgba(194,96,122,0.15)",
        boxShadow: "0 2px 20px rgba(194,96,122,0.08)",
      }}
    >
      {/* Logo glow */}
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
          style={{
            background:
              "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 50%, #e8f5e9 100%)",
          }}
        >
          🌸
        </div>
      </div>

      <h2
        className="font-display text-2xl mb-2"
        style={{
          color: "#2e1f28",
          fontFamily: '"DM Serif Display", Georgia, serif',
        }}
      >
        Hello, I&apos;m Aira
      </h2>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b4a5a" }}>
        A calm, judgment-free space to explore your cycle, hormones, mood, and
        wellness.
        <br />
        Ask me anything — I&apos;m here with care. 🌿
      </p>

      {/* Quick start grid */}
      <div className="grid grid-cols-2 gap-2">
        {QUICK_STARTERS.map((s) => (
          <button
            key={s.label}
            onClick={() => onQuickStart(s.prompt)}
            className="quick-btn text-left text-sm px-3 py-2.5 rounded-xl border cursor-pointer"
            style={{
              background: "#fce4ec",
              color: "#c2607a",
              borderColor: "rgba(194,96,122,0.2)",
              fontFamily: "inherit",
            }}
          >
            <span className="mr-1.5">{s.emoji}</span>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
