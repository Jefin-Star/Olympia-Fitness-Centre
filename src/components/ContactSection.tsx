import React from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { Phone, Mail, Instagram, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900/60 border-t border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
            Visit & Connect
          </p>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Contact Olympia Fitness Centre
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Have questions about equipment, trial sessions, personal training, or membership plans? Reach out directly via WhatsApp, call, or drop by our facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/91${GYM_CONFIG.phone}?text=${encodeURIComponent('Hello Olympia Fitness Centre! I would like to inquire about membership and training.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">WhatsApp Direct Chat</h3>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400" />
                </div>
                <p className="text-lg font-bold font-athletic text-neutral-100 tracking-wide mt-0.5">
                  +91 {GYM_CONFIG.phone}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Fastest response for admissions, fee payment, and general queries.
                </p>
              </div>
            </a>

            {/* Phone Call Card */}
            <a
              href={`tel:+91${GYM_CONFIG.phone}`}
              className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-red-600/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white group-hover:text-red-500 transition-colors">Phone Call Desk</h3>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-red-500" />
                </div>
                <p className="text-lg font-bold font-athletic text-neutral-100 tracking-wide mt-0.5">
                  +91 {GYM_CONFIG.phone}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Available Mon – Sat during gym morning and evening hours.
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_CONFIG.email}?subject=${encodeURIComponent('Inquiry: Olympia Fitness Centre Membership')}`}
              className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Email Address</h3>
                  <ExternalLink className="w-4 h-4 text-neutral-500" />
                </div>
                <p className="text-sm font-semibold text-neutral-100 truncate mt-0.5">
                  {GYM_CONFIG.email}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Official correspondence and corporate corporate inquiries.
                </p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-pink-500/50 transition-all flex items-start gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">Instagram Community</h3>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-pink-400" />
                </div>
                <p className="text-sm font-bold text-neutral-100 mt-0.5">
                  {GYM_CONFIG.instagramHandle}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Follow workout reels, member PRs, and facility announcements.
                </p>
              </div>
            </a>

            {/* Address Banner */}
            <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300">
                <p className="font-bold text-white text-sm mb-0.5">Olympia Fitness Centre</p>
                <p>Thrissur, Kerala 680001, India</p>
                <a
                  href={GYM_CONFIG.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-400 hover:underline mt-2 font-medium"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative">
              <div className="p-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-bold text-white">Live Gym Location Map</span>
                </div>
                <span className="text-[11px] text-neutral-400">Pristine gym floor in Thrissur</span>
              </div>
              
              <div className="relative w-full aspect-4/3 sm:aspect-16/10 min-h-[380px] bg-neutral-900">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.9171179147515!2d76.20639849999999!3d10.516547800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef1241c5818b%3A0x38a07bceecebff7b!2sOlympia%20fitness%20centre!5e1!3m2!1sen!2sin!4v1792215612194!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Olympia Fitness Centre Location"
                  className="absolute inset-0 w-full h-full filter contrast-105"
                />
              </div>

              <div className="p-4 bg-neutral-950 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-neutral-400">
                  Easy parking for two-wheelers and four-wheelers available.
                </span>
                <a
                  href="https://maps.google.com/?cid=4080397525301821307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
