"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Message, ChatResponse } from "@/types/chat";
import ChatHeader from "@/components/chat/chatHeader";
import ChatInput from "@/components/chat/chatInput";
import TypingIndicator from "@/components/chat/typingIndicator";
import WelcomeCard from "@/components/chat/welcomeCard";
import MessageBubble from "@/components/chat/messageBubble";

function genId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (isLoading) return;
      setError(null);

      const userMsg: Message = {
        id: genId(),
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      // Build history for API (exclude follow-ups, just role + content)
      const history = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Something went wrong");
        }

        const data: ChatResponse = await res.json();

        const airaMsg: Message = {
          id: genId(),
          role: "assistant",
          content: data.reply,
          followUps: data.followUps,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, airaMsg]);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Something went wrong";
        setError(msg);

        // Append a friendly error message in chat
        const errMsg: Message = {
          id: genId(),
          role: "assistant",
          content:
            "I'm having a little moment — please try again. I'm right here with you. 🌸",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading],
  );

  return (
    <div
      className="flex flex-col h-screen relative overflow-hidden"
      style={{ background: "#fdf7f2" }}
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="blob-1 absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            background: "#fce4ec",
            filter: "blur(80px)",
            opacity: 0.38,
            top: -80,
            left: -100,
          }}
        />
        <div
          className="blob-2 absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            background: "#e8f5e9",
            filter: "blur(70px)",
            opacity: 0.32,
            bottom: 60,
            right: -60,
          }}
        />
        <div
          className="blob-3 absolute rounded-full"
          style={{
            width: 200,
            height: 200,
            background: "#f3e5f5",
            filter: "blur(60px)",
            opacity: 0.3,
            top: "40%",
            left: "58%",
          }}
        />
      </div>

      {/* Content shell — centered, max width */}
      <div className="relative z-10 flex flex-col h-full max-w-2xl mx-auto w-full">
        {/* Header */}
        <ChatHeader onTopicClick={sendMessage} />

        {/* Error banner */}
        {error && (
          <div
            className="mx-4 mt-2 px-3 py-2 rounded-lg text-xs text-center"
            style={{
              background: "#fce4ec",
              color: "#c2607a",
              border: "1px solid rgba(194,96,122,0.3)",
            }}
          >
            {error}
          </div>
        )}

        {/* Chat area */}
        <div
          ref={chatAreaRef}
          className="flex-1 overflow-y-auto custom-scroll px-4 py-5 flex flex-col gap-4"
        >
          {/* Welcome card — only when no messages */}
          {messages.length === 0 && <WelcomeCard onQuickStart={sendMessage} />}

          {/* Messages */}
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              onFollowUp={sendMessage}
            />
          ))}

          {/* Typing indicator */}
          {isLoading && <TypingIndicator />}

          {/* Scroll anchor */}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}
