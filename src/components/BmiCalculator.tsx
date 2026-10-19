import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

interface BmiCalculatorProps {
  onPlanSuggested: (planId: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onPlanSuggested }) => {
  const [weight, setWeight] = useState<string>('72');
  const [height, setHeight] = useState<string>('175');
  const [fitnessGoal, setFitnessGoal] = useState<'muscle' | 'fatloss' | 'endurance'>('muscle');
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    advice: string;
    suggestedPlanId: string;
    suggestedPlanName: string;
  } | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;

    if (!w || !h || w <= 0 || h <= 0) return;

    const bmiVal = parseFloat((w / (h * h)).toFixed(1));
    let cat = 'Normal Weight';
    let adv = 'Focus on progressive overload and body recomposition.';
    let planId = 'plan_3m';
    let planName = '3 Months Builder';

    if (bmiVal < 18.5) {
      cat = 'Underweight';
      adv = 'High-calorie nutritional surplus paired with heavy compound barbell lifting will build dense lean muscle.';
      planId = 'plan_6m';
      planName = '6 Months Committed';
    } else if (bmiVal < 25) {
      cat = 'Healthy / Normal';
      adv = 'Optimal metabolic baseline. Target hypertrophy, explosive strength, and athletic conditioning.';
      planId = 'plan_3m';
      planName = '3 Months Builder';
    } else if (bmiVal < 30) {
      cat = 'Overweight';
      adv = 'Combination of calorie-burning turf conditioning and heavy strength training to accelerate fat shredding while preserving muscle.';
      planId = 'plan_6m';
      planName = '6 Months Committed';
    } else {
      cat = 'Obese';
      adv = 'A structured 1-year progressive fitness transformation with low-impact cardio and foundational strength training is ideal.';
      planId = 'plan_1y';
      planName = '1 Year Transformation';
    }

    setResult({
      bmi: bmiVal,
      category: cat,
      advice: adv,
      suggestedPlanId: planId,
      suggestedPlanName: planName,
    });
  };

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900/70 border border-neutral-800 shadow-2xl relative overflow-hidden">
          {/* Subtle accent backdrop */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 border border-red-600/20">
                <Calculator className="w-3.5 h-3.5" />
                <span>Fitness Assessment Tool</span>
              </div>
              <h2 className="font-athletic text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
                Calculate Your Fitness Metrics
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Not sure where to begin? Input your basic metrics to estimate your BMI baseline and get an Olympia coach recommendation tailored to your physical target.
              </p>

              {result && (
                <div className="p-5 rounded-xl bg-neutral-950 border border-red-600/40 animate-in fade-in duration-300">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs uppercase font-bold text-neutral-400">Calculated BMI</span>
                    <span className="text-2xl font-bold font-athletic text-white tabular-nums">
                      {result.bmi} <span className="text-xs font-normal text-red-500 font-sans">({result.category})</span>
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 mb-4">{result.advice}</p>
                  
                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-neutral-400 block">Recommended Program</span>
                      <span className="text-sm font-bold text-white">{result.suggestedPlanName}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onPlanSuggested(result.suggestedPlanId)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded transition-colors cursor-pointer"
                    >
                      <span>Select Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-neutral-950 p-6 sm:p-8 rounded-xl border border-neutral-800">
              <form onSubmit={calculate} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Weight (in kg)
                    </label>
                    <input
                      type="number"
                      min="30"
                      max="250"
                      step="0.5"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      placeholder="e.g. 72"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      Height (in cm)
                    </label>
                    <input
                      type="number"
                      min="100"
                      max="240"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      placeholder="e.g. 175"
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Primary Fitness Target
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setFitnessGoal('muscle')}
                      className={`py-2.5 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                        fitnessGoal === 'muscle'
                          ? 'border-red-600 bg-red-600/15 text-white font-bold'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      Muscle & Bulk
                    </button>
                    <button
                      type="button"
                      onClick={() => setFitnessGoal('fatloss')}
                      className={`py-2.5 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                        fitnessGoal === 'fatloss'
                          ? 'border-red-600 bg-red-600/15 text-white font-bold'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      Fat Loss & Shred
                    </button>
                    <button
                      type="button"
                      onClick={() => setFitnessGoal('endurance')}
                      className={`py-2.5 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                        fitnessGoal === 'endurance'
                          ? 'border-red-600 bg-red-600/15 text-white font-bold'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      Tone & Endurance
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Compute Recommendation</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
