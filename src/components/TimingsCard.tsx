import React, { useEffect, useState } from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { getGymCurrentStatus, GymStatus } from '../utils/timings';
import { Clock, Sun, Moon, CalendarX, CheckCircle } from 'lucide-react';

export const TimingsCard: React.FC = () => {
  const [status, setStatus] = useState<GymStatus>(getGymCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="timings" className="py-20 bg-neutral-900/40 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Schedule details */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
              Facility Hours
            </p>
            <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Training Schedule & Timings
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed mb-8">
              We operate two dedicated daily workout sessions crafted to accommodate your lifestyle before morning commitments and after evening responsibilities.
            </p>

            {/* Live Indicator */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span
                  className={`w-3.5 h-3.5 rounded-full shrink-0 ${
                    status.isOpen ? 'bg-emerald-500 ring-4 ring-emerald-500/20 animate-pulse' : 'bg-amber-500'
                  }`}
                />
                <div>
                  <p className="text-sm font-bold text-white">{status.statusText}</p>
                  <p className="text-xs text-neutral-400">{status.nextEventText}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-neutral-400 border border-neutral-800 px-2.5 py-1 rounded bg-neutral-900">
                IST Timezone
              </span>
            </div>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Zero crowding during peak hours with split sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Certified floor trainer available during all operational hours</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Flexible attendance: drop in whenever matches your schedule</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Time Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Morning Shift */}
            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Morning Training Shift</h3>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Mon – Sat</span>
                </div>
                <p className="font-athletic text-2xl sm:text-3xl font-bold text-red-500 mt-1">
                  6:00 AM – 10:00 AM
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  Prime morning focus for fasting cardio, heavy compound movements, and starting the day with momentum.
                </p>
              </div>
            </div>

            {/* Evening Shift */}
            <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Moon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Evening Power Shift</h3>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Mon – Sat</span>
                </div>
                <p className="font-athletic text-2xl sm:text-3xl font-bold text-red-500 mt-1">
                  4:30 PM – 10:00 PM
                </p>
                <p className="text-xs text-neutral-400 mt-2">
                  High-energy atmosphere, pumping playlist, and post-work lifting sessions to de-stress and hit personal records.
                </p>
              </div>
            </div>

            {/* Sunday Notice */}
            <div className="p-5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
                <CalendarX className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-neutral-300">Sunday: Closed for Facility Sanitization</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                    Rest & Recovery
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Dedicated deep sanitization of equipment, barbell maintenance, and muscle recovery day.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
