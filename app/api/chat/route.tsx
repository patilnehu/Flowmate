import { AIRA_SYSTEM_PROMPT } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

// Using Groq API — free tier, very fast, runs Llama 3
// Sign up at: https://console.groq.com (no credit card needed)
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

function parseFollowUps(text: string): { main: string; followUps: string[] } {
  const marker = "FOLLOW_UPS:";
  const idx = text.indexOf(marker);

  if (idx === -1) return { main: text.trim(), followUps: [] };

  const main = text.slice(0, idx).trim();
  const rest = text.slice(idx + marker.length).trim();
  const followUps = rest
    .split("\n")
    .map((l) => l.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean)
    .slice(0, 3);

  return { main, followUps };
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY not configured. Please add it to your .env.local file.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // Free, fast Llama 3 on Groq
        messages: [
          { role: "system", content: AIRA_SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 800,
        stream: false,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    const data = await response.json();
    const rawText: string = data.choices?.[0]?.message?.content ?? "";
    const { main, followUps } = parseFollowUps(rawText);

    return NextResponse.json({ reply: main, followUps });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
