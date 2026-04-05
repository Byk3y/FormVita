export interface Testimonial {
  name: string;
  review: string;
  rating: number;
}

export interface Doctor {
  name: string;
  credentials: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: number;
  medication: string;
  form: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrustItem {
  icon: string;
  label: string;
}
