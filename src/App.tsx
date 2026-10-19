import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MembershipPlans } from './components/MembershipPlans';
import { TimingsCard } from './components/TimingsCard';
import { BmiCalculator } from './components/BmiCalculator';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan_3m');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onJoinClick={() => scrollToSection('register')} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 2. About Our Gym */}
        <About />

        {/* 3. Membership Plans & Pricing */}
        <MembershipPlans onSelectPlan={handleSelectPlan} />

        {/* Operational Schedule & Timings */}
        <TimingsCard />

        {/* Fitness Metrics & Plan Recommender */}
        <BmiCalculator onPlanSuggested={handleSelectPlan} />

        {/* 4. Membership Registration Form */}
        <RegistrationForm
          selectedPlanId={selectedPlanId}
          onPlanChange={(id) => setSelectedPlanId(id)}
        />

        {/* FAQs */}
        <FaqSection />

        {/* 5. Contact Us & Embedded Google Maps */}
        <ContactSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Help Button */}
      <FloatingWhatsApp />
    </div>
  );
}
