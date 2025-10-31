"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flower2, Heart, Leaf, Moon, Sun, Lock } from "lucide-react";

const phases = [
  {
    id: "menstrual",
    name: "Menstrual Phase",
    days: "Day 1–5",
    icon: Flower2,
    color: "from-rose-100 to-rose-50",
    borderColor: "border-rose-200",
    focus: "Rest, gentle release, pain relief",
    poses: [
      "Supta Baddha Konasana (Reclined Bound Angle Pose)",
      "Balasana (Child's Pose)",
      "Viparita Karani (Legs Up the Wall)",
    ],
    remedies: [
      "Warm water with turmeric",
      "Light meals — soups, fruits",
      "Avoid caffeine & heavy exercise",
    ],
    aiTip:
      "Try deep belly breathing for 5 minutes to relax your lower abdomen.",
  },
  {
    id: "follicular",
    name: "Follicular Phase",
    days: "Day 6–13",
    icon: Sun,
    color: "from-yellow-100 to-yellow-50",
    borderColor: "border-yellow-200",
    focus: "Energy renewal, creativity, movement",
    poses: [
      "Bhujangasana (Cobra Pose)",
      "Utkatasana (Chair Pose)",
      "Surya Namaskar (Sun Salutation – light rounds)",
    ],
    remedies: ["Stay hydrated", "Add protein & greens", "Morning meditation"],
    moodSupport: "Feel optimistic? Channel it into new goals!",
  },
  {
    id: "ovulation",
    name: "Ovulation Phase",
    days: "Day 14–17",
    icon: Leaf,
    color: "from-amber-100 to-amber-50",
    borderColor: "border-amber-200",
    focus: "Strength, glow, connection",
    poses: [
      "Navasana (Boat Pose)",
      "Ardha Matsyendrasana (Twist Pose)",
      "Baddha Konasana",
    ],
    remedies: [
      "Coconut water",
      "Avoid processed sugar",
      "Gentle stretching before bed",
    ],
    moodSupport:
      "Journal or connect with friends — you're at your social peak.",
  },
  {
    id: "luteal",
    name: "Luteal Phase",
    days: "Day 18–28",
    icon: Moon,
    color: "from-purple-100 to-purple-50",
    borderColor: "border-purple-200",
    focus: "Calm, emotional grounding, PMS care",
    poses: [
      "Setu Bandhasana (Bridge Pose)",
      "Marjariasana (Cat-Cow Pose)",
      "Shavasana (Relaxation)",
    ],
    remedies: [
      "Herbal teas (chamomile or fennel)",
      "Magnesium-rich foods (banana, nuts)",
      "Limit salty & oily food",
    ],
    aiTip:
      "A few minutes of mindfulness or journaling can ease anxiety and mood swings.",
  },
];

const pcosPcosYoga = {
  pranayama: [
    "Anulom Vilom (Alternate Nostril Breathing)",
    "Bhramari (Bee Breath) for stress",
    "Kapalbhati (if no period pain)",
  ],
  asanas: [
    "Dhanurasana (Bow Pose)",
    "Malasana (Garland Pose)",
    "Supta Baddha Konasana",
  ],
  tips: [
    "Practice 20–30 minutes daily",
    "Sleep 7–8 hours",
    "Avoid sugar and white flour",
    "Stay consistent, results take time",
  ],
};

const mindfulnessTips = [
  "10 minutes of journaling",
  "Gratitude listing",
  "Breath focus (4-7-8 method)",
  "Listening to soft instrumental music",
];

export default function Yoga() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-border bg-linear-to-b from-primary/5 to-transparent py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Yoga & Wellness for Every Phase
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover cycle-aligned yoga poses, remedies, and mindfulness
              practices tailored to your body's natural rhythms.
            </p>
          </div>
        </div>
      </section>

      {/* Cycle Phases Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">
            Cycle-Phase Based Yoga & Remedies
          </h2>
          <p className="mb-8 text-muted-foreground">
            Each cycle phase affects your body differently. Here are specific
            yoga poses and care tips for each phase.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {phases.map((phase) => {
              const IconComponent = phase.icon;
              return (
                <Card
                  key={phase.id}
                  className={`border-2 ${phase.borderColor} bg-linear-to-br ${phase.color} overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-white/50 p-2">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {phase.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {phase.days}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 rounded-lg bg-white/40 p-3">
                      <p className="text-sm font-semibold text-foreground">
                        Focus: {phase.focus}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-foreground">
                        Yoga Poses:
                      </h4>
                      <ul className="space-y-1">
                        {phase.poses.map((pose, idx) => (
                          <li key={idx} className="text-sm text-foreground">
                            • {pose}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="mb-2 font-semibold text-foreground">
                        Remedies:
                      </h4>
                      <ul className="space-y-1">
                        {phase.remedies.map((remedy, idx) => (
                          <li key={idx} className="text-sm text-foreground">
                            • {remedy}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.aiTip && (
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                        <p className="text-sm italic text-foreground">
                          <span className="font-semibold">Aira's Tip:</span>{" "}
                          {phase.aiTip}
                        </p>
                      </div>
                    )}

                    {phase.moodSupport && (
                      <div className="rounded-lg border border-secondary/20 bg-secondary/5 p-3">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold">Mood Support:</span>{" "}
                          {phase.moodSupport}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PCOD & PCOS Section */}
      <section className="border-t border-border bg-secondary/5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">
            PCOD & PCOS Yogic Care
          </h2>
          <p className="mb-8 text-muted-foreground">
            Natural regulation of hormones and stress relief through targeted
            yoga practices.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-secondary/30 bg-linear-to-br from-secondary/10 to-secondary/5">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  Pranayama (Breathing)
                </h3>
                <ul className="space-y-2">
                  {pcosPcosYoga.pranayama.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="border-secondary/30 bg-linear-to-br from-secondary/10 to-secondary/5">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  Asanas (Poses)
                </h3>
                <ul className="space-y-2">
                  {pcosPcosYoga.asanas.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="border-secondary/30 bg-linear-to-br from-secondary/10 to-secondary/5">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  Daily Tips
                </h3>
                <ul className="space-y-2">
                  {pcosPcosYoga.tips.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mindfulness & Mood Care */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-3xl font-bold text-foreground">
            Mindfulness & Mood Care
          </h2>
          <p className="mb-8 text-muted-foreground">
            Emotions fluctuate throughout your cycle. Flowmate helps you realign
            through mindful habits.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-4">
              {mindfulnessTips.map((tip, idx) => (
                <Card
                  key={idx}
                  className="border-primary/20 bg-linear-to-r from-primary/5 to-transparent p-4"
                >
                  <p className="text-foreground">✨ {tip}</p>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-primary/30 bg-linear-to-br from-primary/10 to-primary/5 p-6">
              <div className="flex gap-4">
                <div className="flex shrink-0">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">
                    Aira's Insight
                  </h3>
                  <p className="text-foreground">
                    "Hey beautiful, how are you feeling today? Try closing your
                    eyes and breathing deeply — you deserve a pause."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Safety */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
            <Lock className="h-6 w-6 flex shrink-0 text-primary" />
            <div>
              <h3 className="mb-2 font-bold text-foreground">
                Your Privacy Matters
              </h3>
              <p className="text-foreground">
                Flowmate respects your privacy — all your wellness logs, moods,
                and notes stay encrypted and never shared with anyone. Your
                healing journey is yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-linear-to-b from-primary/5 to-transparent py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to discover what your body is telling you?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Chat with Aira for personalized guidance based on your cycle and
              wellness goals.
            </p>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              <Heart className="h-5 w-5" />
              Chat with Aira
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
