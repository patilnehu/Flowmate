"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  startDate: string;
  cycleLength: number;
};

export default function CycleCalendar({ startDate, cycleLength }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const today = new Date();

  const getCycleDay = (date: Date) => {
    if (!startDate) return null;

    const start = new Date(startDate);
    const diff = Math.floor(
      (date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );

    return ((diff % cycleLength) + cycleLength) % cycleLength;
  };

  const getPhase = (cycleDay: number | null) => {
    if (cycleDay === null) return "";

    if (cycleDay <= 4) return "period";
    if (cycleDay >= 12 && cycleDay <= 16) return "ovulation";
    if (cycleDay >= 10 && cycleDay <= 17) return "fertile";
    if (cycleDay > 16) return "luteal";
    return "follicular";
  };

  const getColor = (phase: string, isToday: boolean) => {
    if (isToday) return "bg-blue-500 text-white";

    switch (phase) {
      case "period":
        return "bg-red-300";
      case "ovulation":
        return "bg-green-400 text-white";
      case "fertile":
        return "bg-green-200";
      case "luteal":
        return "bg-yellow-200";
      default:
        return "bg-gray-100";
    }
  };

  const changeMonth = (dir: number) => {
    setCurrentDate(new Date(year, month + dir, 1));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" onClick={() => changeMonth(-1)}>
          ←
        </Button>

        <h2 className="font-semibold">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <Button variant="outline" onClick={() => changeMonth(1)}>
          →
        </Button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium">
            {d}
          </div>
        ))}

        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i}></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const date = new Date(year, month, day);

          const cycleDay = getCycleDay(date);
          const phase = getPhase(cycleDay);

          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={day}
              className={`p-2 rounded-lg text-xs ${getColor(phase, isToday)}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 text-xs">
        <Legend color="bg-red-300" label="Period" />
        <Legend color="bg-green-400" label="Ovulation" />
        <Legend color="bg-green-200" label="Fertile" />
        <Legend color="bg-yellow-200" label="Luteal" />
      </div>
    </div>
  );
}

function Legend({ color, label }: any) {
  return (
    <span className="flex items-center gap-1">
      <div className={`w-3 h-3 rounded ${color}`} />
      {label}
    </span>
  );
}
