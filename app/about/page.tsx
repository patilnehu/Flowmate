import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Lock } from "lucide-react";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-accent/20 to-secondary/10 py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Flowmate — Because Your Flow Matters
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
            A safe, loving, and private space for every woman to understand her
            body, track her moods, and embrace her natural rhythm — without
            judgment, ads, or fear.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Flowmate was born from a simple thought —{" "}
                <span className="text-foreground font-medium">
                  What if tracking your cycle felt empowering, not stressful?
                </span>
              </p>
              <p>
                We believe women deserve a tool that listens with empathy,
                respects privacy, and educates with care.
              </p>
              <p>
                With Aira, your AI wellness companion, Flowmate combines
                science, yoga, and technology to help you connect with your body
                naturally.
              </p>
              <div className="mt-8 p-6 bg-accent/30 rounded-lg border-l-4 border-primary">
                <p className="text-foreground italic text-xl">
                  "Flowmate isn't just an app — it's your friend in every phase
                  of womanhood."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">
                To make menstrual health conversations open, normal, and
                empowering.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground leading-relaxed">
                To bring awareness to PCOD, PCOS, and hormonal well-being
                through holistic care.
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/40 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-foreground leading-relaxed">
                To ensure every woman, everywhere, can track her cycle safely —
                with data privacy at the heart of everything.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-linear-to-br from-primary/5 to-secondary/5 border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Promise: Privacy First
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-foreground">
                <span className="font-semibold">
                  Your data is yours — always.
                </span>
              </p>
              <p className="text-muted-foreground">
                Flowmate never sells, shares, or tracks your personal details.
                All your cycle logs, moods, and health inputs remain encrypted
                and private.
              </p>
              <p className="text-primary font-medium text-xl mt-6">
                You are safe here.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
