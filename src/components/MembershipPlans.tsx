import React from 'react';
import { GYM_CONFIG, MembershipPlan } from '../data/gymConfig';
import { Check, Zap, Sparkles } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
            Transparent Pricing · No Hidden Surprises
          </p>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Membership Plans & Admissions
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed [text-wrap:balance]">
            Choose the commitment tier that matches your fitness journey. Enjoy zero admission fees on all 3-month, 6-month, and 1-year plans!
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {GYM_CONFIG.plans.map((plan: MembershipPlan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-xl transition-all duration-300 p-6 sm:p-7 ${
                  isFeatured
                    ? 'bg-neutral-900 border-2 border-red-600 shadow-2xl shadow-red-600/15 lg:-translate-y-2'
                    : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Tag */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      Duration: {plan.duration}
                    </p>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="mb-6 pb-6 border-b border-neutral-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold text-neutral-400">₹</span>
                      <span className="font-athletic text-4xl sm:text-5xl font-bold text-white tabular-nums tracking-tight">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Admission Fee Indicator */}
                    <div className="mt-3">
                      {plan.hasAdmissionFee ? (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                          <span>Admission Fee: ₹{plan.admissionFee}</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded">
                          <Check className="w-3.5 h-3.5" />
                          <span>NO Admission Fee (₹0)</span>
                        </div>
                      )}
                    </div>

                    {/* Effective rate */}
                    <p className="text-xs text-neutral-400 mt-2 font-mono tabular-nums">
                      ≈ ₹{plan.monthlyEquivalent}/month
                      {plan.savingsNote && (
                        <span className="block text-red-400 font-medium mt-0.5">
                          {plan.savingsNote}
                        </span>
                      )}
                    </p>
                  </div>

                </div>

                {/* Plan Join CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                    }`}
                  >
                    <span>Join Now</span>
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-center text-neutral-500 mt-2">
                    Instant confirmation via WhatsApp/Email
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
