import React from 'react';
import { OlympiaLogo } from './OlympiaLogo';
import { GYM_CONFIG } from '../data/gymConfig';
import { Instagram, Mail, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <OlympiaLogo size="md" variant="white" />
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Build Your Strength. Transform Your Life. Thrissur’s premier fitness facility dedicated to progressive strength training, bodybuilding, conditioning, and healthy living.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/91${GYM_CONFIG.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_CONFIG.email}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:+91${GYM_CONFIG.phone}`}
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:text-red-400 flex items-center justify-center text-neutral-300 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-white transition-colors">
                  Training Shifts & Hours
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">
                  Online Member Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Shifts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Operating Schedule
            </h4>
            <div className="text-sm space-y-2 text-neutral-300">
              <div>
                <p className="font-semibold text-white">Monday – Saturday</p>
                <p className="text-xs text-neutral-400">Morning: 6:00 AM – 10:00 AM</p>
                <p className="text-xs text-neutral-400">Evening: 4:30 PM – 10:00 PM</p>
              </div>
              <div className="pt-1">
                <p className="font-semibold text-white">Sunday</p>
                <p className="text-xs text-red-400">Closed (Sanitization & Recovery)</p>
              </div>
            </div>
          </div>

          {/* Col 4: Location Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              Facility Location
            </h4>
            <div className="flex items-start gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Olympia Fitness Centre, Thrissur, Kerala</span>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded hover:text-white hover:border-neutral-700 transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} OLYMPIA FITNESS CENTRE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#plans" className="hover:text-white transition-colors">Pricing Policy</a>
            <span>·</span>
            <a href="#register" className="hover:text-white transition-colors">Admissions</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
