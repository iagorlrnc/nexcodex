export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'website' | 'system' | 'saas' | 'automation' | 'ai' | 'landing-pages';
  imageUrl: string;
  challenge: string;
  solution: string;
  technologies: string[];
  projectUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
