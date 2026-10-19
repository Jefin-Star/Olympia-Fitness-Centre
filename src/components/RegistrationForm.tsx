import React, { useState, useEffect } from 'react';
import { GYM_CONFIG } from '../data/gymConfig';
import { Send, CheckCircle2, MessageSquare, Copy, Check, Calendar, Phone, Mail, User, Dumbbell } from 'lucide-react';

interface RegistrationFormProps {
  selectedPlanId: string;
  onPlanChange: (id: string) => void;
}

export interface RegistrationRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  planId: string;
  planName: string;
  planPrice: number;
  startDate: string;
  goals: string;
  submittedAt: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlanId,
  onPlanChange,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [goals, setGoals] = useState('');
  
  // Validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationRecord | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);

  // Set default start date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!selectedPlanId) {
      newErrors.plan = 'Please select a membership plan.';
    }

    if (!startDate) {
      newErrors.startDate = 'Please choose your preferred starting date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const planObj = GYM_CONFIG.plans.find((p) => p.id === selectedPlanId) || GYM_CONFIG.plans[1];
    const refId = `OLY-${Math.floor(1000 + Math.random() * 9000)}`;

    const record: RegistrationRecord = {
      id: refId,
      name: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      planId: planObj.id,
      planName: `${planObj.name} (${planObj.duration})`,
      planPrice: planObj.price,
      startDate: startDate,
      goals: goals.trim() || 'General strength, conditioning, and healthy lifestyle',
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('olympia_registrations') || '[]');
      existing.unshift(record);
      localStorage.setItem('olympia_registrations', JSON.stringify(existing));
    } catch {
      // Ignore local storage error
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(record);
    }, 400);
  };

  const getWhatsAppMessage = (rec: RegistrationRecord) => {
    const text = `*NEW MEMBERSHIP REGISTRATION*\n*Gym:* Olympia Fitness Centre\n*Ref ID:* ${rec.id}\n*Name:* ${rec.name}\n*Plan:* ${rec.planName} (₹${rec.planPrice})\n*Phone:* ${rec.phone}\n*Email:* ${rec.email}\n*Start Date:* ${rec.startDate}\n*Fitness Goals:* ${rec.goals}`;
    return `https://wa.me/91${GYM_CONFIG.phone}?text=${encodeURIComponent(text)}`;
  };

  const getEmailLink = (rec: RegistrationRecord) => {
    const subject = `Membership Registration: ${rec.name} (${rec.id})`;
    const body = `Hello Olympia Fitness Team,\n\nI have submitted my membership registration on your website:\n\nReference ID: ${rec.id}\nName: ${rec.name}\nPlan: ${rec.planName} - ₹${rec.planPrice}\nPhone: ${rec.phone}\nEmail: ${rec.email}\nPreferred Start Date: ${rec.startDate}\nGoals: ${rec.goals}\n\nPlease confirm my slot.\n\nThank you!`;
    return `mailto:${GYM_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyDetails = (rec: RegistrationRecord) => {
    const text = `Olympia Fitness Registration: ${rec.id} | ${rec.name} | ${rec.planName} (₹${rec.planPrice}) | Starts: ${rec.startDate}`;
    navigator.clipboard.writeText(text);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2500);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setGoals('');
    setErrors({});
  };

  const selectedPlan = GYM_CONFIG.plans.find((p) => p.id === selectedPlanId);

  return (
    <section id="register" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-red-500 mb-2">
            Begin Your Transformation
          </p>
          <h2 className="font-athletic text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Membership Registration Form
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed [text-wrap:balance]">
            Fill out the form below to register your membership at Olympia Fitness Centre. We will review your fitness goals and have your access locker ready on day one.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {submittedData ? (
            /* Submission Success View */
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 border-2 border-emerald-500/50 shadow-2xl animate-in zoom-in-95 duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-athletic text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                  Registration Successfully Submitted!
                </h3>
                <p className="text-sm text-neutral-300 max-w-lg mx-auto">
                  Welcome to the Olympia Fitness Centre family, <strong className="text-white">{submittedData.name}</strong>. Your membership pre-booking has been logged.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 text-sm mb-8">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <span className="text-neutral-400">Booking Reference:</span>
                  <span className="font-mono font-bold text-red-500 text-base">{submittedData.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Selected Plan:</span>
                  <span className="font-bold text-white">{submittedData.planName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Total Plan Fee:</span>
                  <span className="font-bold text-white">₹{submittedData.planPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Phone Number:</span>
                  <span className="text-neutral-200">{submittedData.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Email Address:</span>
                  <span className="text-neutral-200">{submittedData.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Start Date:</span>
                  <span className="text-neutral-200">{submittedData.startDate}</span>
                </div>
                {submittedData.goals && (
                  <div className="pt-2 border-t border-neutral-800">
                    <span className="text-xs text-neutral-400 block mb-1">Your Goals:</span>
                    <p className="text-xs text-neutral-300 italic bg-neutral-900 p-2.5 rounded">
                      &ldquo;{submittedData.goals}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Instant WhatsApp & Email Action Buttons */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppMessage(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Confirmation to Gym via WhatsApp</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getEmailLink(submittedData)}
                    className="py-3 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-neutral-700"
                  >
                    <Mail className="w-4 h-4 text-red-500" />
                    <span>Email Gym Desk</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => copyDetails(submittedData)}
                    className="py-3 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-neutral-700 cursor-pointer"
                  >
                    {copiedToken ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                    <span>{copiedToken ? 'Details Copied!' : 'Copy Reference Details'}</span>
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Register another member or edit details
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Form View */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl space-y-6"
            >
              {/* Selected Plan Summary Banner */}
              {selectedPlan && (
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 shrink-0">
                      <Dumbbell className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">Selected Membership Tier</p>
                      <p className="text-sm font-bold text-white">{selectedPlan.name} ({selectedPlan.duration})</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-athletic text-xl font-bold text-white tabular-nums">
                      ₹{selectedPlan.price.toLocaleString('en-IN')}
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      {selectedPlan.hasAdmissionFee ? `+ ₹${selectedPlan.admissionFee} admission` : 'Zero admission fee'}
                    </p>
                  </div>
                </div>
              )}

              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-5 h-5 text-neutral-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-11 pr-4 py-3 bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-red-500'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>}
              </div>

              {/* Contact Row: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-neutral-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-11 pr-4 py-3 bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-red-500'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-neutral-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full pl-11 pr-4 py-3 bg-neutral-950 border rounded-lg text-white placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-red-500'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                </div>

              </div>

              {/* Plan Dropdown & Preferred Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Membership Plan (Dropdown) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Membership Plan <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedPlanId}
                    onChange={(e) => onPlanChange(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                  >
                    {GYM_CONFIG.plans.map((p) => (
                      <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                        {p.name} ({p.duration}) — ₹{p.price} {p.hasAdmissionFee ? `(+₹${p.admissionFee} admission)` : '(No admission fee)'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-neutral-500 pointer-events-none" />
                    <input
                      type="date"
                      value={startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                        if (errors.startDate) setErrors({ ...errors, startDate: '' });
                      }}
                      className={`w-full pl-11 pr-4 py-3 bg-neutral-950 border rounded-lg text-white focus:outline-none transition-colors ${
                        errors.startDate ? 'border-red-500 focus:border-red-500' : 'border-neutral-700 focus:border-red-500'
                      }`}
                    />
                  </div>
                  {errors.startDate && <p className="text-xs text-red-400 mt-1.5">{errors.startDate}</p>}
                </div>

              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Fitness Goals <span className="text-neutral-500 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Tell us what you want to achieve (e.g., muscle hypertrophy, 5kg fat loss, strength powerlifting, general fitness, rehabilitating posture)..."
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Processing Registration...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Registration</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
                <span>Direct WhatsApp & Desk notification triggered upon submission.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
