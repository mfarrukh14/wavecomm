"use client";

import React from "react";
import { InfiniteCarousalEffect } from "../effects/InfiniteCarousalEffect";

export default function BrandSection() {
  return (
    <div className="py-20 bg-white dark:bg-black dark:bg-grid-white/[0.05]">
      <InfiniteCarousalEffect items={bankLogos} direction="left" speed="normal" />
    </div>
  );
}

const bankLogos = [
  {
    name: "Chase Bank",
    logo: "/logos/chase.svg"
  },
  {
    name: "Bank of America",
    logo: "/logos/bofa.svg"
  },
  {
    name: "Wells Fargo",
    logo: "/logos/wells-fargo.svg"
  },
  {
    name: "Emirates NBD",
    logo: "/logos/emirates-nbd.svg"
  },
  {
    name: "Dubai Islamic Bank",
    logo: "/logos/dib.svg"
  },
  {
    name: "Abu Dhabi Commercial Bank",
    logo: "/logos/adcb.svg"
  },
  {
    name: "Citibank",
    logo: "/logos/citi.svg"
  },
  {
    name: "First Abu Dhabi Bank",
    logo: "/logos/fab.svg"
  },
  {
    name: "Goldman Sachs",
    logo: "/logos/goldman-sachs.svg"
  },
  {
    name: "Morgan Stanley",
    logo: "/logos/morgan-stanley.svg"
  }
];
