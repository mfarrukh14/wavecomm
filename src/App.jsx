import React from "react";
import Layout from "./components/layout/Layout";
import HeroSection from "./components/home/HeroSection";
import GlobeSection from "./components/home/GlobeSection";
import { GeminiSection } from "./components/home/GeminiSection";
import BrandsSection from "./components/home/BrandSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <GlobeSection />
      <BrandsSection />
      <GeminiSection />
    </Layout>
  );
}
