import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import HunterModal from "@/components/HunterModal";

const Index = () => {
  const [showHunterForm, setShowHunterForm] = useState(false);

  // 🔒 Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = showHunterForm ? "hidden" : "auto";
  }, [showHunterForm]);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <Header onOpenForm={() => setShowHunterForm(true)} />

      <main>
        <Hero onOpenForm={() => setShowHunterForm(true)} />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <FAQ />

        {/* CTA FINAL */}
        <FinalCTA onOpenForm={() => setShowHunterForm(true)} />
      </main>

      <Footer />

      {/* MODAL ÚNICO */}
      <HunterModal
        isOpen={showHunterForm}
        onClose={() => setShowHunterForm(false)}
      />
    </div>
  );
};

export default Index;
