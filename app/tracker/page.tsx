"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, MessageCircle, TrendingUp } from "lucide-react";
import { useState } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";

export default function Tracker() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [periodEndDate, setPeriodEndDate] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodNote, setMoodNote] = useState("");

  // Sample mood data for chart
  const moodData = [
    { day: "Mon", mood: 3 },
    { day: "Tue", mood: 2 },
    { day: "Wed", mood: 2 },
    { day: "Thu", mood: 3 },
    { day: "Fri", mood: 4 },
    { day: "Sat", mood: 5 },
    { day: "Sun", mood: 4 },
  ];

  const moods = [
    { emoji: "😊", label: "Happy", value: "happy" },
    { emoji: "😴", label: "Tired", value: "tired" },
    { emoji: "😟", label: "Anxious", value: "anxious" },
    { emoji: "💪", label: "Energetic", value: "energetic" },
  ];

  const selfCareTips = [
    {
      phase: "Period",
      color: "bg-red-100 dark:bg-red-950",
      tips: ["Warm compress for cramps", "Herbal tea", "Rest & hydration"],
    },
    {
      phase: "Follicular",
      color: "bg-green-100 dark:bg-green-950",
      tips: ["Light workouts", "Balanced diet", "Social activities"],
    },
    {
      phase: "Ovulation",
      color: "bg-yellow-100 dark:bg-yellow-950",
      tips: ["Hydration", "Energy-rich snacks", "High-intensity exercise"],
    },
    {
      phase: "Luteal",
      color: "bg-purple-100 dark:bg-purple-950",
      tips: ["Yoga & stretching", "Mindfulness", "Magnesium-rich foods"],
    },
  ];

  return (
    <>
      {/* Page Heading */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Track Your Cycle & Mood 🩷
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understand your body, predict your flow, and log your emotions — all
            in one safe place.
          </p>
        </div>
      </section>

      {/* Cycle Tracker Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              🩸 Cycle Tracker
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Track your period easily and see your cycle phases at a glance.
              Flowmate helps you stay prepared and informed about your body's
              rhythm.
            </p>
          </div>

          <Card className="p-8 border-border/50">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Last Period Start Date
                </label>

                <Input
                  type="date"
                  value={lastPeriodDate}
                  onChange={(e) => setLastPeriodDate(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Period End Date
                </label>
                <Input
                  type="date"
                  value={periodEndDate}
                  onChange={(e) => setPeriodEndDate(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Cycle Length (days)
                </label>
                <Input
                  type="number"
                  placeholder="28"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  className="bg-input border-border"
                />
              </div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Update My Cycle
            </Button>
          </Card>

          {/* Cycle Calendar Preview */}
          <div className="mt-8 p-6 bg-card rounded-lg border border-border/50">
            <h3 className="font-semibold text-foreground mb-4">
              Your Cycle Phases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-100 dark:bg-red-950 rounded-lg text-center">
                <div className="text-2xl mb-2">🩸</div>
                <p className="font-medium text-sm">Period</p>
                <p className="text-xs text-muted-foreground">Days 1-5</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-950 rounded-lg text-center">
                <div className="text-2xl mb-2">🌱</div>
                <p className="font-medium text-sm">Follicular</p>
                <p className="text-xs text-muted-foreground">Days 6-13</p>
              </div>
              <div className="p-4 bg-yellow-100 dark:bg-yellow-950 rounded-lg text-center">
                <div className="text-2xl mb-2">⭐</div>
                <p className="font-medium text-sm">Ovulation</p>
                <p className="text-xs text-muted-foreground">Days 14-16</p>
              </div>
              <div className="p-4 bg-purple-100 dark:bg-purple-950 rounded-lg text-center">
                <div className="text-2xl mb-2">🌙</div>
                <p className="font-medium text-sm">Luteal</p>
                <p className="text-xs text-muted-foreground">Days 17-28</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Tracker Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              🌿 Mood Tracker
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your emotions are part of your cycle. Track mood swings and energy
              levels to notice patterns and take care of yourself proactively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mood Selection */}
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-4">
                How are you feeling today?
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-4 rounded-lg border-2 transition ${
                      selectedMood === mood.value
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <p className="text-sm font-medium">{mood.label}</p>
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Add a comment or symptom
                </label>
                <textarea
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  placeholder="e.g., Feeling a bit tired, slight headache..."
                  className="w-full p-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground resize-none"
                  rows={4}
                />
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Log Mood
              </Button>
            </Card>

            {/* Mood Chart */}
            <Card className="p-6 border-border/50">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Mood Trends (This Week)
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="day" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mood"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    dot={{ fill: "var(--primary)", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex gap-4">
              <Lock className="w-6 h-6 text-primary flex shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  💖 Your Privacy Matters
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your cycle data belongs only to you. Flowmate securely stores
                  your records on your device or in an encrypted database — no
                  tracking, no ads, no sharing. Your wellness journey is
                  completely private.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20 bg-primary/5">
            <div className="flex gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-primary flex shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-3">
                  Aira says:
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Based on your logged cycle and moods, you might experience PMS
                  symptoms from 24th to 28th. Consider light yoga, hydration,
                  and rest during this period. Your mood tracking shows
                  increased anxiety on luteal days — try mindfulness exercises
                  to help manage this.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Ask Aira More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Self-Care Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              🌼 Self-Care Tips by Phase
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Personalized wellness suggestions based on your current cycle
              phase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfCareTips.map((tip) => (
              <Card
                key={tip.phase}
                className="p-6 border-border/50 hover:shadow-lg transition"
              >
                <div
                  className={`${tip.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-xl font-bold">
                    {tip.phase === "Period" && "🩸"}
                    {tip.phase === "Follicular" && "🌱"}
                    {tip.phase === "Ovulation" && "⭐"}
                    {tip.phase === "Luteal" && "🌙"}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-3">
                  {tip.phase} Phase
                </h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex gap-2"
                    >
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Need more guidance?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chat with Aira to get personalized tips on yoga, remedies, and
              PCOS care tailored to your cycle and mood.
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Chat with Aira Now
          </Button>
        </div>
      </section>
    </>
  );
}
