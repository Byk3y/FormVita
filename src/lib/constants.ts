import { Testimonial, Doctor, PricingTier, FAQItem, TrustItem } from "@/types";

export const SITE_NAME = "FormVita";
export const SITE_TAGLINE = "FDA-Approved Oral GLP-1 Weight Loss Pills";

export const TRUST_ITEMS: TrustItem[] = [
  { icon: "truck", label: "Shipped to Your Door" },
  { icon: "stethoscope", label: "Licensed Medical Providers" },
  { icon: "cursor", label: "100% Online" },
  { icon: "dollar", label: "Clear Pricing" },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 199,
    medication: "Oral Semaglutide",
    form: "Daily sublingual tablet",
    features: [
      "FDA-approved oral GLP-1",
      "Licensed physician consultation",
      "Personalized weight loss plan",
      "24/7 AI support",
      "Monthly check-ins",
      "Free shipping",
    ],
    ctaText: "Get Started",
  },
  {
    name: "Standard",
    price: 299,
    medication: "Foundayo (orforglipron)",
    form: "Daily pill, no food restrictions",
    popular: true,
    features: [
      "Everything in Starter",
      "Latest FDA-approved GLP-1",
      "No food timing restrictions",
      "Priority physician access",
      "Dose adjustment support",
      "Anti-nausea support included",
    ],
    ctaText: "Get Started",
  },
  {
    name: "Premium",
    price: 399,
    medication: "Oral Wegovy",
    form: "Daily branded semaglutide pill",
    features: [
      "Everything in Standard",
      "Premium branded medication",
      "Dedicated care coordinator",
      "Advanced progress tracking",
      "Nutritional guidance",
      "Priority shipping",
    ],
    ctaText: "Get Started",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    review:
      "I was skeptical about weight loss pills, but FormVita made it so easy. The doctor consultation was thorough, and I started seeing results in the first month. Down 18 lbs and counting!",
    rating: 5,
  },
  {
    name: "James R.",
    review:
      "No needles, no clinic visits. Just a daily pill and real results. The support team answers my questions within minutes. Best decision I've made for my health.",
    rating: 5,
  },
  {
    name: "Maria L.",
    review:
      "I tried everything — diets, gym memberships, supplements. Nothing worked until FormVita. The medication actually reduces my cravings. I've lost 24 lbs in 3 months.",
    rating: 5,
  },
  {
    name: "David K.",
    review:
      "The transparent pricing sold me. No hidden fees, no surprises. My doctor adjusted my dose after the first month and the side effects went away completely.",
    rating: 5,
  },
  {
    name: "Linda T.",
    review:
      "As someone terrified of needles, oral GLP-1 was a game changer. FormVita made the whole process simple — quiz, doctor review, pills at my door in 3 days.",
    rating: 5,
  },
  {
    name: "Michael B.",
    review:
      "The monthly check-ins keep me accountable. My doctor actually follows up and adjusts my plan. I've lost 30 lbs and my blood pressure is back to normal.",
    rating: 5,
  },
  {
    name: "Jennifer W.",
    review:
      "I love that everything is FDA-approved. No sketchy compounded stuff. Real medication, real doctors, real results. Worth every penny.",
    rating: 5,
  },
  {
    name: "Robert C.",
    review:
      "The AI chatbot answered my questions about side effects at 2 AM when I was worried. Then my actual doctor followed up the next morning. Incredible service.",
    rating: 5,
  },
  {
    name: "Patricia H.",
    review:
      "Started at $199/mo on the Starter plan. Upgraded to Standard after seeing how well it worked. Down 22 lbs in 2 months. My energy levels are through the roof.",
    rating: 5,
  },
  {
    name: "Thomas G.",
    review:
      "Finally, a weight loss program that doesn't feel like a scam. Clear pricing, real doctors, FDA-approved pills. I wish I found FormVita sooner.",
    rating: 5,
  },
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Sarah Mitchell",
    credentials: "Board Certified Internal Medicine",
    image: "/images/placeholder-doctor-1.jpg",
  },
  {
    name: "Dr. James Okonkwo",
    credentials: "Board Certified Family Medicine",
    image: "/images/placeholder-doctor-2.jpg",
  },
  {
    name: "Dr. Emily Chen",
    credentials: "Board Certified Endocrinology",
    image: "/images/placeholder-doctor-3.jpg",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What are GLP-1 medications?",
    answer:
      "GLP-1 (glucagon-like peptide-1) receptor agonists are FDA-approved medications that help with weight loss by reducing appetite, slowing digestion, and helping you feel full longer. Originally developed for type 2 diabetes, they have proven highly effective for weight management.",
  },
  {
    question: "Are these medications FDA-approved?",
    answer:
      "Yes. FormVita exclusively offers FDA-approved oral GLP-1 medications. We do not sell compounded or generic alternatives. Every medication we prescribe has been evaluated by the FDA for safety, efficacy, and quality.",
  },
  {
    question: "How does the consultation work?",
    answer:
      "After completing a 5-minute health questionnaire, a licensed physician reviews your medical history, current medications, and health goals. If you qualify, they prescribe the appropriate GLP-1 medication. The entire process is online — no office visits required.",
  },
  {
    question: "What are the common side effects?",
    answer:
      "The most common side effects include mild nausea, which typically decreases over time as your body adjusts. Your doctor will start you on a low dose and gradually increase it. We also offer anti-nausea support if needed.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. FormVita subscriptions can be paused or cancelled at any time with no cancellation fees. Simply manage your subscription through your patient dashboard or contact our support team.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most patients begin noticing reduced appetite within the first 1-2 weeks. Measurable weight loss typically begins within the first month. Average patients lose 1-2 lbs per week with consistent use alongside healthy lifestyle habits.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "FormVita does not currently accept insurance. However, our transparent pricing starts at $199/month with everything included — medication, doctor consultation, ongoing support, and shipping. No hidden fees.",
  },
  {
    question: "How fast is shipping?",
    answer:
      "Most orders are shipped within 24-48 hours of prescription approval and arrive within 3-5 business days. All packages are shipped in discreet, unbranded packaging to protect your privacy.",
  },
];

export const GUARANTEE_ITEMS = [
  { icon: "guarantee", label: "Satisfaction Guarantee" },
  { icon: "shipping", label: "Free, Fast Shipping" },
  { icon: "doctor", label: "Doctor-Led Plans" },
  { icon: "no-fees", label: "No Hidden Fees" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Take the Quiz",
    description:
      "Complete a quick 5-minute health assessment. We'll ask about your goals, medical history, and current medications.",
  },
  {
    step: 2,
    title: "Doctor Review",
    description:
      "A licensed physician reviews your information within 24 hours and prescribes the right FDA-approved GLP-1 medication for you.",
  },
  {
    step: 3,
    title: "Medication Delivered",
    description:
      "Your prescription is filled and shipped directly to your door in discreet packaging. Refills arrive monthly, automatically.",
  },
];
