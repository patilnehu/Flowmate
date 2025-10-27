import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Flower2, Heart, Leaf, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Flowmate — Your AI-powered Menstrual Wellness Companion 🌷
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Track your cycle, balance your mood, explore yoga & natural
              remedies, and connect with Aira — your personal menstrual health
              guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#A64D4D] hover:bg-[#A64D4DF2] text-white"
              >
                Start Tracking
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A64D4D] text-[#A64D4D] hover:bg-[#A64D4D]/10 bg-transparent"
              >
                Chat with Aira
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic pt-4">
              "Understand your body. Embrace your flow. Feel balanced every
              day."
            </p>
          </div>
          <div className="relative h-96 md:h-full min-h-96 bg-linear-to-br from-accent/20 to-[#A64D4D]/10 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <Flower2 className="w-24 h-24 mx-auto text-[#A64D4D]/40" />
              <p className="text-muted-foreground">Wellness Illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need to understand and nurture your cycle.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <Card className="p-6 hover:shadow-lg transition border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#A64D4D]" />
                <h3 className="font-semibold text-lg">Cycle & Mood Tracker</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Log your period, predict your next cycle, and monitor mood
                changes.
              </p>
              <p className="text-sm text-[#A64D4D] font-medium">
                → Know your body rhythm.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 hover:shadow-lg transition border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-[#A64D4D]" />
                <h3 className="font-semibold text-lg">
                  Aira — Your AI Companion
                </h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Ask anything about your cycle, PCOS, or self-care — Aira listens
                and guides.
              </p>
              <p className="text-sm text-[#A64D4D] font-medium">
                → Your personal wellness friend.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 hover:shadow-lg transition border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-[#A64D4D]" />
                <h3 className="font-semibold text-lg">Self-Care & Remedies</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Get yoga poses, natural remedies, and daily wellness tips.
              </p>
              <p className="text-sm text-[#A64D4D] font-medium">
                → Simple steps for a calmer cycle.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 hover:shadow-lg transition border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#A64D4D]" />
                <h3 className="font-semibold text-lg">Learn & Grow</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Discover facts, PCOS info, and emotional balance through
                knowledge.
              </p>
              <p className="text-sm text-[#A64D4D] font-medium">
                → Empower your health journey.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Cycle Awareness Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Your cycle is not just days — it's a rhythm.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Flowmate helps you recognize each phase — from energy peaks to rest
            days — so you can align your diet, mood, and habits naturally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {["Menstrual", "Follicular", "Ovulation", "Luteal"].map((phase) => (
              <div
                key={phase}
                className="p-4 bg-card rounded-lg border border-border/50 hover:border-[#A64D4D]/50 transition"
              >
                <p className="font-semibold text-foreground">{phase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness & Yoga Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Move with kindness. Heal with balance.
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn yogic methods to reduce cramps, manage hormones, and bring
              peace to your body and mind.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { pose: "Balasana (Child's Pose)", benefit: "For cramps" },
              { pose: "Anulom Vilom", benefit: "For calm mind" },
              { pose: "Surya Namaskar", benefit: "For PCOS balance" },
            ].map((item) => (
              <Card
                key={item.pose}
                className="p-6 border-border/50 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.pose}</h3>
                <p className="text-muted-foreground">{item.benefit}</p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-[#A64D4D] hover:bg-[#A64D4D]/90">
              Explore Yoga & Remedies
            </Button>
          </div>
        </div>
      </section>

      {/* Chat with Aira Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Meet Aira — Your Flowmate Companion 🤖
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ask Aira about your symptoms, emotions, or health concerns. From
            cramps to cravings, Aira offers guidance based on science and
            compassion.
          </p>
          <Button size="lg" className="bg-[#A64D4D] hover:bg-[#A64D4D]/90">
            Chat with Aira Now
          </Button>
          <p className="text-sm text-muted-foreground italic">
            Your data stays private and secure.
          </p>
        </div>
      </section>

      {/* Community Banner */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#A64D4D]/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-3xl font-semibold text-foreground">
            "Every cycle tells a story — Flowmate helps you listen." 🌸
          </blockquote>
          <Button
            size="lg"
            variant="outline"
            className="border-[#A64D4D] text-[#A64D4D] hover:bg-[#A64D4D]/10 bg-transparent"
          >
            Join the Flowmate Community
          </Button>
        </div>
      </section> */}
    </>
  );
}
