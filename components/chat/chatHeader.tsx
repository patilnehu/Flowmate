"use client";

import { TOPIC_PILLS } from "@/lib/constants";

interface ChatHeaderProps {
  onTopicClick: (prompt: string) => void;
}

export default function ChatHeader({ onTopicClick }: ChatHeaderProps) {
  return (
    <header
      className="glass flex items-center gap-3 px-2 py-3.5 shrink-0"
      style={{ borderBottom: "1px solid rgba(194,96,122,0.15)" }}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
          style={{
            background:
              "linear-gradient(135deg, #f48fb1 0%, #ce93d8 50%, #80cbc4 100%)",
          }}
        >
          🌸
        </div>
        {/* Online dot */}
        <div
          className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full border-2"
          style={{ background: "#4caf50", borderColor: "#fdf7f2" }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h1
          className="text-lg leading-tight"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            color: "#2e1f28",
          }}
        >
          Aira
        </h1>
        <p className="text-xs mt-0.5" style={{ color: "#a07a90" }}>
          Menstrual health &amp; wellness companion
        </p>
        {/* Topic pills */}
        <div className="flex gap-1.5 mt-2 flex-wrap">
          {TOPIC_PILLS.map((pill) => (
            <button
              key={pill.label}
              onClick={() => onTopicClick(pill.prompt)}
              className="topic-pill text-xs px-2.5 py-0.5 rounded-full border cursor-pointer"
              style={{
                background: "#fce4ec",
                color: "#c2607a",
                borderColor: "rgba(194,96,122,0.2)",
                fontFamily: "inherit",
              }}
            >
              {pill.emoji} {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flowmate brand
      <div className="shrink-0 text-right hidden sm:block">
        <p
          className="text-xs font-medium"
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            color: "#c2607a",
          }}
        >
          Flowmate
        </p>
        <p className="text-xs" style={{ color: "#a07a90" }}>
          by Aira
        </p>
      </div> */}
    </header>
  );
}
