import React from "react";
import Section from "../ui/Section";
import { GlobeDemo } from "../ui/World";

export default function GlobeSection() {
  return (
    <Section className="overflow-hidden py-0 sm:py-10">
      <GlobeDemo />
    </Section>
  );
}