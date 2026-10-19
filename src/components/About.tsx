import React from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { Target, Users, Sparkles, Trophy } from 'lucide-react';
import strengthImg from '../assets/images/regenerated_image_1792397313791.jpg';
import cardioImg from '../assets/images/olympia_cardio_functional_1792230990753.jpg';
import barbellImg from '../assets/images/olympia_barbell_detail_1792230990104.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900/50 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
            About Our Gym
          </p>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Where Discipline Meets Real Physical Transformation
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            At <strong className="text-white font-semibold">{GYM_CONFIG.name}</strong>, we believe fitness is not a seasonal trend—it is a lifelong craft. Built for beginners stepping onto the gym floor for the first time as well as seasoned strength athletes, our facility delivers an unapologetic environment engineered for raw performance, functional fitness, and sustainable health.
          </p>
        </div>

        {/* Asymmetric Bento Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Main Visual: Strength Zone (col-span-7) */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 min-h-[360px] lg:min-h-[440px] flex flex-col justify-end p-6 sm:p-8">
            <img
              src={strengthImg}
              alt="Heavy strength and barbell training zone at Olympia Fitness Centre"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            <div className="relative z-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 mb-1">
                Strength & Powerlifting
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Heavy Iron & Calibrated Barbell Racks
              </h3>
              <p className="text-sm text-neutral-300 max-w-xl">
                Dedicated power cages, Olympic lifting platforms, heavy dumbbell racks, and precision plate loaded machines designed for progressive overload.
              </p>
            </div>
          </div>

          {/* Side Stacked Visuals (col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Functional Turf & Cardio */}
            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 min-h-[220px] flex flex-col justify-end p-6">
              <img
                src={cardioImg}
                alt="Functional turf sprint track and conditioning zone"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 mb-1">
                  Conditioning & Turf
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  Sprint Track & Functional Arena
                </h3>
                <p className="text-xs text-neutral-300">
                  Sprint turf, rowers, assault bikes, and kettlebells for athletic endurance.
                </p>
              </div>
            </div>

            {/* Precision Equipment */}
            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 min-h-[220px] flex flex-col justify-end p-6">
              <img
                src={barbellImg}
                alt="Olympia Fitness Olympic barbells and bumper plates"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 mb-1">
                  Professional Gear
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  Commercial Grade Ergonomics
                </h3>
                <p className="text-xs text-neutral-300">
                  Clean knurling, smooth pulleys, and strict sanitization routines maintained daily.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Olympia Fitness Centre */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-5 text-red-500">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Purpose-Built Strength</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              We focus on biomechanically sound movements, compound lifting, and structured progressions that build real strength, not just cosmetic vanity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-5 text-red-500">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Supportive Community</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Zero intimidation, zero ego. Whether your goal is losing 10kg, building your first pull-up, or benching heavy, you’ll find encouragement here.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-5 text-red-500">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Technique & Form First</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Floor coaches assist with safe barbell execution, posture correction, and injury prevention so you make steady gains with total confidence.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center mb-5 text-red-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pristine & Energized Floor</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Well-ventilated workout floors, premium audio system, sanitized stations, and spotless locker facilities for a first-class workout every time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
