import React, { useEffect, useState } from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { getGymCurrentStatus, GymStatus } from '../utils/timings';
import { ArrowRight, Flame, ShieldCheck, Dumbbell, Clock } from 'lucide-react';
import heroGymImg from '../assets/images/hero_olympia_gym_1792230989223.jpg';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  const [status, setStatus] = useState<GymStatus>(getGymCurrentStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image with Measured Contrast Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGymImg}
          alt="Olympia Fitness Centre heavy strength and conditioning floor"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:12s]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/70 to-neutral-950" />
        <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-neutral-950/40 to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Live Timing / Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md mb-6">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
              {status.statusText}
            </span>
            <span className="text-neutral-500 hidden sm:inline">·</span>
            <span className="text-xs text-neutral-400 hidden sm:inline">
              {status.nextEventText}
            </span>
          </div>

          {/* Brand Name Headline */}
          <div className="mb-4">
            <span className="block text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-red-500 mb-2">
              Thrissur · Elite Training Facility
            </span>
            <h1 className="font-olympia text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-2xl">
              OLYMPIA <span className="text-red-600">FITNESS</span> CENTRE
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-athletic text-2xl sm:text-3xl lg:text-4xl text-neutral-200 tracking-wide uppercase mt-4 mb-6 [text-wrap:balance]">
            &ldquo;{GYM_CONFIG.tagline}&rdquo;
          </p>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-10 [text-wrap:balance]">
            {GYM_CONFIG.subTagline} Join a disciplined brotherhood of lifters, certified trainers, and world-class barbell equipment.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              onClick={onJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wide text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-md transition-all shadow-xl shadow-red-600/30 whitespace-nowrap cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onViewPlansClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-all whitespace-nowrap cursor-pointer"
            >
              <span>View Membership Plans</span>
            </button>
          </div>

          {/* Quick Value Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-neutral-800/80 text-left">
            <div className="flex items-start gap-3 p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/60">
              <Dumbbell className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400 font-medium">Strength Equipment</p>
                <p className="text-sm font-bold text-neutral-100">Heavy Iron & Racks</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/60">
              <ShieldCheck className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400 font-medium">Admission Bonus</p>
                <p className="text-sm font-bold text-neutral-100">₹0 Fee on 3M+ Plans</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/60">
              <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400 font-medium">Daily Shifts</p>
                <p className="text-sm font-bold text-neutral-100">6–10 AM & 4:30–10 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-neutral-900/40 rounded-lg border border-neutral-800/60">
              <Flame className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400 font-medium">Community</p>
                <p className="text-sm font-bold text-neutral-100">Coached & Supportive</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
