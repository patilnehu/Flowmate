"use client";

import { useState, useMemo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import CycleCalendar from "@/components/cycleCalendar";

const moods = ["Happy", "Sad", "Irritated", "Tired", "Calm"];
const symptomsList = ["Cramps", "Headache", "Bloating", "Cravings", "Fatigue"];

const moodScoreMap: any = {
  Happy: 5,
  Calm: 4,
  Tired: 3,
  Sad: 2,
  Irritated: 1,
};

export default function CycleTrackerPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const [selectedMood, setSelectedMood] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const [entries, setEntries] = useState<any[]>([]);

  // Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("cycleData");
    if (data) setEntries(JSON.parse(data));
  }, []);

  // Save entry
  const handleSave = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      moodScore: moodScoreMap[selectedMood],
      symptoms: selectedSymptoms,
      notes,
    };

    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem("cycleData", JSON.stringify(updated));

    // reset
    setSelectedMood("");
    setSelectedSymptoms([]);
    setNotes("");
  };

  // Predict next cycle
  const nextCycleDate = useMemo(() => {
    if (!startDate) return null;
    const start = new Date(startDate);
    start.setDate(start.getDate() + cycleLength);
    return start.toDateString();
  }, [startDate, cycleLength]);

  // Toggle symptoms
  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  // Simple phase detection
  const getPhase = () => {
    if (!startDate) return "";
    const today = new Date();
    const start = new Date(startDate);
    const diff = Math.floor(
      (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diff <= 5) return "Menstrual";
    if (diff <= 13) return "Follicular";
    if (diff <= 16) return "Ovulation";
    return "Luteal";
  };

  const phase = getPhase();

  // AI Suggestions
  const getSuggestion = () => {
    switch (phase) {
      case "Menstrual":
        return "Rest well. Iron-rich foods & hydration help.";
      case "Follicular":
        return "Great time to start new tasks. Try light workouts.";
      case "Ovulation":
        return "High energy! Socialize and stay active.";
      case "Luteal":
        return "Slow down. Magnesium foods & yoga recommended.";
      default:
        return "Log your cycle to get insights.";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Cycle Tracker</h1>
        <p className="text-muted-foreground">
          Track your flow, mood, and energy to live in sync.
        </p>
      </div>

      {/* Period Input */}
      <Card className="p-5 space-y-4">
        <h2 className="font-semibold text-lg">📆 Period Details</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
          />
        </div>

        {nextCycleDate && (
          <p className="text-green-600 text-sm">
            🌸 Next cycle: <b>{nextCycleDate}</b>
          </p>
        )}

        {phase && (
          <p className="text-sm">
            🧬 Current Phase: <b>{phase}</b>
          </p>
        )}
      </Card>

      <Card className="p-5">
        <CycleCalendar startDate={startDate} cycleLength={cycleLength} />
      </Card>

      {/* AI Suggestion */}
      <Card className="p-5">
        <h2 className="font-semibold text-lg">🤖 Aira Suggestion</h2>
        <p className="text-sm text-muted-foreground">{getSuggestion()}</p>
      </Card>

      {/* Mood */}
      <Card className="p-5 space-y-4">
        <h2 className="font-semibold text-lg">🧠 Mood</h2>

        <div className="flex flex-wrap gap-2">
          {moods.map((mood) => (
            <Button
              key={mood}
              variant={selectedMood === mood ? "default" : "outline"}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </Button>
          ))}
        </div>
      </Card>

      {/* Symptoms */}
      <Card className="p-5 space-y-4">
        <h2 className="font-semibold text-lg">⚡ Symptoms</h2>

        <div className="flex flex-wrap gap-2">
          {symptomsList.map((symptom) => (
            <Button
              key={symptom}
              variant={
                selectedSymptoms.includes(symptom) ? "default" : "outline"
              }
              onClick={() => toggleSymptom(symptom)}
            >
              {symptom}
            </Button>
          ))}
        </div>
      </Card>

      {/* Notes */}
      <Card className="p-5">
        <h2 className="font-semibold text-lg">📝 Notes</h2>

        <Textarea
          placeholder="Write your thoughts..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </Card>

      {/* Save */}
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Entry</Button>
      </div>

      {/* Mood Chart */}
      <Card className="p-5">
        <h2 className="font-semibold text-lg mb-4">📊 Mood Trend</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={entries}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Line type="monotone" dataKey="moodScore" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
