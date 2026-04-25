"use client";

import { useRef, useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="glass shrink-0 px-4 pb-5 pt-3"
      style={{ borderTop: "1px solid rgba(194,96,122,0.15)" }}
    >
      <div
        className="flex items-end gap-2 px-4 py-2 rounded-3xl border"
        style={{
          background: "#fff",
          borderColor: "rgba(194,96,122,0.2)",
          boxShadow: "0 2px 16px rgba(194,96,122,0.07)",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "#f48fb1";
        }}
        onBlur={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(194,96,122,0.2)";
        }}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            autoResize();
          }}
          onKeyDown={handleKey}
          placeholder="Ask Aira anything…"
          rows={1}
          disabled={disabled}
          className="flex-1 border-0 outline-none resize-none text-sm bg-transparent py-1.5"
          style={{
            color: "#2e1f28",
            fontFamily: "inherit",
            minHeight: "22px",
            maxHeight: "120px",
          }}
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={disabled || !text.trim()}
          className="send-btn w-9 h-9 rounded-full shrink-0 flex items-center justify-center border-0 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #f48fb1 0%, #c2607a 100%)",
            color: "#fff",
          }}
          aria-label="Send message"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <p className="text-center text-xs mt-2" style={{ color: "#a07a90" }}>
        Aira offers wellness guidance, not medical advice. Consult a doctor for
        clinical concerns.
      </p>
    </div>
  );
}
