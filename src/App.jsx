import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="relative z-10">
<Navbar />
      </div>
    </div>
  );
}
