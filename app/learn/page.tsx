import {
  Heart,
  Leaf,
  Flower2,
  Brain,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Learn() {
  const categories = [
    {
      icon: Heart,
      title: "Menstrual Health Basics",
      description: "What really happens in your cycle",
      details: [
        "Phases: Menstrual, Follicular, Ovulation, Luteal",
        "Common symptoms & how to handle them",
        "Understanding PMS and cravings",
      ],
      quote: '"Knowing your cycle is knowing yourself."',
      color: "from-red-50 to-pink-50",
      accentColor: "text-red-600",
    },
    {
      icon: Leaf,
      title: "PCOD & PCOS Awareness",
      description: "Difference between PCOD and PCOS",
      details: [
        "Causes & early symptoms",
        "Diet & lifestyle for balance",
        "How yoga and pranayama help",
        "Managing irregular cycles gently",
      ],
      quote: '"Small consistent habits can heal big imbalances."',
      color: "from-green-50 to-emerald-50",
      accentColor: "text-green-600",
    },
    {
      icon: Flower2,
      title: "Yoga & Holistic Wellness",
      description: "Best yoga poses for each phase",
      details: [
        "Breathing practices for stress",
        "Ayurvedic & herbal remedies",
        "Morning & night rituals",
      ],
      quote: '"Your body deserves softness — not punishment."',
      color: "from-yellow-50 to-amber-50",
      accentColor: "text-amber-600",
    },
    {
      icon: Brain,
      title: "Emotions, Mind & Hormones",
      description: "Why moods shift during your cycle",
      details: [
        "Self-compassion during PMS",
        "Journaling and self-talk techniques",
        "How hormones affect focus, energy, and sleep",
      ],
      quote: '"Flowmate reminds you that emotions are part of healing."',
      color: "from-purple-50 to-pink-50",
      accentColor: "text-purple-600",
    },
  ];

  const qaItems = [
    {
      question: "Why do I feel bloated before my period?",
      answer:
        "Your body retains water due to progesterone. Hydrate and stretch — it helps.",
    },
    {
      question: "Can I do yoga during my period?",
      answer:
        "Yes, gentle poses like Child's Pose or Legs Up the Wall are perfect.",
    },
    {
      question: "How to calm PMS mood swings?",
      answer: "Practice 4-7-8 breathing or short walks outdoors.",
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="border-b border-border bg-linear-to-b from-primary/5 to-transparent py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Learn About Your Body, Mind & Cycle 🩷
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Clear, science-backed, and heart-centered guides to help you
              understand every phase of womanhood.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="bg-card rounded-lg p-8 md:p-12 border border-border">
          <p className="text-lg text-foreground mb-6 leading-relaxed">
            Welcome to Flowmate Learn — your go-to space for understanding your
            menstrual health, hormones, emotions, and wellness. We simplify
            complex health topics so you can make confident choices about your
            body.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Whether it's PCOS, cycle tracking, or mental health, Flowmate has
            you covered — with love, clarity, and privacy.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-linear-to-br ${category.color} rounded-lg p-8 border border-border hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Icon
                    className={`w-8 h-8 ${category.accentColor} flex shrink-0 mt-1`}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {category.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span className={`${category.accentColor} mt-1`}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={`text-sm italic ${category.accentColor} font-medium`}
                >
                  {category.quote}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="bg-linear-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                Understanding Your Hormones – The Four Phases of You
              </h2>
              <p className="text-foreground mb-6 leading-relaxed">
                Learn how your body's natural rhythm influences energy, focus,
                mood, and creativity — and how to align your habits with your
                hormonal flow.
              </p>
              <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reads / Q&A Section */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Quick Reads - Ask Aira
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qaItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 mb-4">
                <span className="text-2xl">❓</span>
                <h3 className="font-semibold text-foreground text-sm leading-snug">
                  {item.question}
                </h3>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl flex shrink-0">💬</span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/chat">
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="w-5 h-5" />
              Ask Aira More
            </button>
          </Link>
        </div>
      </section>

      {/* Privacy Reminder */}
      <section className="px-4 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="bg-accent/20 rounded-lg p-8 border border-accent/30">
          <p className="text-foreground mb-4">
            <span className="font-semibold">🔒 Privacy & Safety:</span> All
            educational and wellness insights are shared for awareness — not
            diagnosis. Flowmate keeps your data private and confidential. Always
            consult a doctor for medical advice when needed.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Feeling curious about your unique cycle?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Let Aira guide you with personal insights tailored to your mood, flow,
          and health.
        </p>
        <Link href="/chat">
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
            Chat with Aira 🕊️
          </button>
        </Link>
      </section>
    </main>
  );
}
