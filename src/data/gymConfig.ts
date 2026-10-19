export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  price: number;
  admissionFee: number;
  hasAdmissionFee: boolean;
  isPopular?: boolean;
  savingsNote?: string;
  monthlyEquivalent: number;
  features: string[];
}

export const GYM_CONFIG = {
  name: 'OLYMPIA FITNESS CENTRE',
  shortName: 'OLYMPIA',
  tagline: 'Build Your Strength. Transform Your Life.',
  subTagline: 'Premier strength training, bodybuilding, and athletic conditioning facility equipped with Olympic-grade machinery and dedicated personal guidance.',
  phone: '8111961120',
  formattedPhone: '+91 81119 61120',
  email: 'abinmathew1120@gmail.com',
  instagram: 'https://www.instagram.com/olymp_iafc?obrf=MWhzMHQ0dXM0dHFoeA==',
  instagramHandle: '@olymp_iafc',
  whatsappUrl: 'https://wa.me/918111961120',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.9171179147515!2d76.20639849999999!3d10.516547800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef1241c5818b%3A0x38a07bceecebff7b!2sOlympia%20fitness%20centre!5e1!3m2!1sen!2sin!4v1792215612194!5m2!1sen!2sin',
  mapsDirectUrl: 'https://maps.google.com/?cid=4080397525301821307',
  address: 'Olympia Fitness Centre, Thrissur, Kerala, India',
  
  schedule: {
    weekdays: 'Monday to Saturday',
    morningSlot: '6:00 AM – 10:00 AM',
    eveningSlot: '4:30 PM – 10:00 PM',
    sunday: 'Closed',
    notes: 'Two dedicated training shifts daily designed to fit busy work & student schedules.'
  },

  plans: [
    {
      id: 'plan_1m',
      name: '1 Month Kickstart',
      duration: '1 Month',
      durationMonths: 1,
      price: 700,
      admissionFee: 200,
      hasAdmissionFee: true,
      monthlyEquivalent: 700,
      features: [
        'Full access to all strength & cardio equipment',
        'Locker room & hydration station access',
        'Initial fitness assessment & equipment orientation',
        'Standard floor trainer assistance',
        '₹200 one-time admission fee included'
      ]
    },
    {
      id: 'plan_3m',
      name: '3 Months Builder',
      duration: '3 Months',
      durationMonths: 3,
      price: 1800,
      admissionFee: 0,
      hasAdmissionFee: false,
      isPopular: true,
      savingsNote: 'Save ₹500 + Zero Admission Fee',
      monthlyEquivalent: 600,
      features: [
        'NO Admission Fee (₹0)',
        'Full facility & heavy iron access',
        'Customized beginner/intermediate workout chart',
        'Form check & bench/squat technique review',
        'Flexible batch timing (Morning & Evening)'
      ]
    },
    {
      id: 'plan_6m',
      name: '6 Months Committed',
      duration: '6 Months',
      durationMonths: 6,
      price: 3300,
      admissionFee: 0,
      hasAdmissionFee: false,
      savingsNote: 'Only ₹550/mo · Free Admission',
      monthlyEquivalent: 550,
      features: [
        'NO Admission Fee (₹0)',
        'Comprehensive body composition tracking',
        'Quarterly workout progression refresh',
        'Dedicated guidance on nutrition fundamentals',
        'Priority locker allocation'
      ]
    },
    {
      id: 'plan_1y',
      name: '1 Year Transformation',
      duration: '1 Year',
      durationMonths: 12,
      price: 6000,
      admissionFee: 0,
      hasAdmissionFee: false,
      savingsNote: 'Best Value · Just ₹500/mo',
      monthlyEquivalent: 500,
      features: [
        'NO Admission Fee (₹0)',
        '365 days of elite gym access',
        'Complete personalized transformation roadmap',
        'Advanced progressive overload tracking',
        'Complimentary 1-on-1 goal setting session'
      ]
    }
  ] as MembershipPlan[],

  features: [
    {
      title: 'Heavy Strength & Powerlifting',
      description: 'Olympic barbells, power racks, dumbbell sets up to 50kg+, and calibrated bumper plates for serious strength gains.'
    },
    {
      title: 'Functional & HIIT Arena',
      description: 'Dedicated sled turf, kettlebells, battle ropes, and assault equipment for athletic conditioning and metabolic burn.'
    },
    {
      title: 'Expert Coaching & Guidance',
      description: 'Passionate trainers committed to your form, injury prevention, progressive overload, and lasting physique transformation.'
    },
    {
      title: 'Hygienic & High-Vibe Space',
      description: 'Sanitized daily equipment, high-volume air circulation, modern sound system, and a positive, zero-ego community.'
    }
  ],

  faqs: [
    {
      question: 'What are the admission fees for new members?',
      answer: 'The ₹200 one-time admission fee is only required for the 1-Month plan. All our 3-Month, 6-Month, and 1-Year plans have ZERO admission fee!'
    },
    {
      question: 'Can I train in both the morning and evening shifts?',
      answer: 'Yes! Members can attend their preferred workout window during any operational hours: Monday through Saturday 6:00 AM – 10:00 AM and 4:30 PM – 10:00 PM.'
    },
    {
      question: 'Are personal workout plans provided for beginners?',
      answer: 'Absolutely. Every new member receives equipment guidance, basic form instruction, and a customized routine based on your experience level and goals.'
    },
    {
      question: 'How do I complete my registration?',
      answer: 'You can submit the online registration form on this website to lock in your spot, and immediately message us on WhatsApp (+91 81119 61120) or visit the centre in person.'
    }
  ]
};
