import React from "react";
import { TypewriterEffectSmooth } from "../effects/TypewriterEffect";
import Button from "../ui/Button";
import Section from "../ui/Section";
import BackgroundParticles from "../effects/BackgroundParticles";

export default function HeroSection() {
  const words = [
    {
      text: "Experience ",
    },
    {
      text: "Lightning-Fast ",
    },
    {
      text: "Fiber ",
    },
    {
      text: "Internet",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
      </div>
      <Section className="relative z-10">
        <div className="flex flex-col items-center">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
            Connecting homes at the speed of light
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Button variant="primary">Check Coverage</Button>
            <Button variant="secondary">View Plans</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}