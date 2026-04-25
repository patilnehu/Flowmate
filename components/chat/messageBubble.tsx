"use client";

import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
  onFollowUp: (text: string) => void;
}

function formatTime(date: Date): string {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessageBubble({
  message,
  onFollowUp,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 msg-animate ${isUser ? "flex-row-reverse" : ""}`}
    >
      {/* Avatar — only for Aira */}
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-sm"
          style={{
            background:
              "linear-gradient(135deg, #f48fb1 0%, #ce93d8 50%, #80cbc4 100%)",
          }}
        >
          🌸
        </div>
      )}

      <div
        className={`flex flex-col gap-1 max-w-[76%] ${isUser ? "items-end" : "items-start"}`}
      >
        {/* Bubble */}
        <div
          className={`px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? "rounded-2xl rounded-br-sm text-white"
              : "rounded-2xl rounded-bl-sm border"
          }`}
          style={
            isUser
              ? {
                  background:
                    "linear-gradient(135deg, #f48fb1 0%, #c2607a 100%)",
                }
              : {
                  background: "#fff",
                  borderColor: "rgba(194,96,122,0.15)",
                  boxShadow: "0 2px 12px rgba(194,96,122,0.08)",
                  color: "#2e1f28",
                }
          }
        >
          {message.content}
        </div>

        {/* Follow-up chips */}
        {!isUser && message.followUps && message.followUps.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {message.followUps.map((fu, i) => (
              <button
                key={i}
                onClick={() => onFollowUp(fu)}
                className="follow-chip text-xs px-3 py-1.5 rounded-full border cursor-pointer"
                style={{
                  background: "#fce4ec",
                  color: "#c2607a",
                  borderColor: "rgba(194,96,122,0.2)",
                  fontFamily: "inherit",
                }}
              >
                {fu}
              </button>
            ))}
          </div>
        )}

        {/* Timestamp */}
        <span className="text-xs" style={{ color: "#a07a90" }}>
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
