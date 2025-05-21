import React from "react";
import MainNavigation from "./MainNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <MainNavigation />
      <main className="relative">{children}</main>
    </div>
  );
}