"use client";

import React from "react";
import { InfiniteCarousalEffect } from "../effects/InfiniteCarousalEffect";

export default function BrandSection() {
  return (
    <div className="py-20 bg-white dark:bg-black dark:bg-grid-white/[0.05]">
      <div className="container mx-auto px-4">
        <h2 className="text-lg md:text-5xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">Our Partners</h2>
        <div className="flex justify-center">
          <InfiniteCarousalEffect items={brandLogos} direction="left" speed="normal" />
        </div>
      </div>
    </div>
  );
}

const brandLogos = [
  {
    name: "Easypaisa",
    logo: "/images/BrandImages/easypaisa.png"
  },
  {
    name: "Honda",
    logo: "/images/BrandImages/honda.png"
  },
  {
    name: "JazzCash",
    logo: "/images/BrandImages/jazzcash.png"
  },
  {
    name: "JPMorgan",
    logo: "/images/BrandImages/jpmorgan.png"
  },
  {
    name: "SadaPay",
    logo: "/images/BrandImages/sadapay.png"
  },
  {
    name: "Standard Chartered",
    logo: "/images/BrandImages/standardchartered.png"
  }
];
