import React, { useState } from 'react';
import { OlympiaLogo } from './OlympiaLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single element brand wordmark / logo */}
          <a
            href="#"
            className="flex items-center whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            aria-label="Olympia Fitness Centre Home"
          >
            <OlympiaLogo size="md" variant="white" />
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#about"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
            >
              About Gym
            </a>
            <a
              href="#plans"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Membership Plans
            </a>
            <a
              href="#timings"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Timings
            </a>
            <a
              href="#register"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Registration
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-200 whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-red-600"
            >
              Contact & Map
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onJoinClick}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold tracking-wide text-white bg-red-600 hover:bg-red-700 active:scale-[0.98] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 shadow-lg shadow-red-600/20"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 rounded-md"
          >
            About Gym
          </a>
          <a
            href="#plans"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 rounded-md"
          >
            Membership Plans
          </a>
          <a
            href="#timings"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 rounded-md"
          >
            Timings & Schedule
          </a>
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 rounded-md"
          >
            Online Registration
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 rounded-md"
          >
            Contact & Directions
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md"
            >
              <span>Join Olympia Fitness Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
