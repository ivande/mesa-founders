"use client";

import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Vision } from "@/components/sections/Vision";
import { Platform } from "@/components/sections/Platform";
import { Journey } from "@/components/sections/Journey";
import { Rollout } from "@/components/sections/Rollout";
import { Partner } from "@/components/sections/Partner";
import { WorkshopCTA } from "@/components/sections/WorkshopCTA";
import { SectionNav } from "@/components/ui/SectionNav";

export default function Home() {
  return (
    <main>
      <SectionNav />
      <Hero />
      <Problem />
      <Vision />
      <Platform />
      <Journey />
      <Rollout />
      <Partner />
      <WorkshopCTA />
    </main>
  );
}
