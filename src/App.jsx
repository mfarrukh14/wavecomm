import React from "react";
import Layout from "./components/layout/Layout";
import HeroSection from "./components/home/HeroSection";
import HelloWorldSection from "./components/home/HelloWorldSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <HelloWorldSection />
    </Layout>
  );
}
