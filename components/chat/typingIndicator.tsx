"use client";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 msg-animate">
      {/* Aira avatar */}
      <div
        className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-sm"
        style={{
          background:
            "linear-gradient(135deg, #f48fb1 0%, #ce93d8 50%, #80cbc4 100%)",
        }}
      >
        🌸
      </div>
      {/* Bubble */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-bl-sm border"
        style={{
          background: "#fff",
          borderColor: "rgba(194,96,122,0.15)",
          boxShadow: "0 2px 12px rgba(194,96,122,0.08)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full typing-dot"
          style={{ background: "#f48fb1" }}
        />
        <div
          className="w-2 h-2 rounded-full typing-dot"
          style={{ background: "#f48fb1" }}
        />
        <div
          className="w-2 h-2 rounded-full typing-dot"
          style={{ background: "#f48fb1" }}
        />
      </div>
    </div>
  );
}
