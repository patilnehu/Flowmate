import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#f3dedef2] backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#A64D4D]">Flowmate</div>
          <div className="flex gap-8 items-center">
            <Link
              href="/tracker"
              className="text-foreground hover:text-[#A64D4D] transition"
            >
              Tracker
            </Link>
            <Link
              href="/yoga"
              className="text-foreground hover:text-[#A64D4D] transition"
            >
              Yoga
            </Link>
            <Link
              href="/learn"
              className="text-foreground hover:text-[#A64D4D] transition"
            >
              Learn
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-[#A64D4D] transition"
            >
              About
            </Link>
          </div>
          <Link href="/chat">
            <Button className="bg-[#A64D4DE6] hover:bg-[#A64D4D]">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
