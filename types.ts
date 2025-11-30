export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  details?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export enum PageId {
  HOME = '/',
  ABOUT = '/about',
  TRANSPORT = '/transport',
  FORWARDING = '/forwarding',
  USEFUL_INFO = '/useful-info',
  CONTACT = '/contact'
}

export enum SectionId {
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
  TESTIMONIALS = 'testimonials'
}
