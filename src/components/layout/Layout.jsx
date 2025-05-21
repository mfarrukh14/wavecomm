import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <MainNavigation />
      <main className="relative flex-grow">{children}</main>
      <Footer />
    </div>
  );
}