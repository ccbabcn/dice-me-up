"use client";

import "tailwindcss/tailwind.css";
import { GameBoard } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GameBoard />
    </main>
  );
}
