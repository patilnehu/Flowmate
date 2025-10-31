import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Header() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#fff8f8f2] backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#A64D4D]">
            <Link href="/home">Flowmate</Link>
          </div>
          <div className="hidden md:flex gap-8 items-center">
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
          <div className=" flex gap-8 items-center">
            <Link href="/chat">
              <Button className="bg-[#A64D4DE6] hover:bg-[#A64D4D]">
                Chat with Aira
              </Button>
            </Link>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  );
}
