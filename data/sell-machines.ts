export type SellMachine = {
  id: string;
  name: string;
  image: string;
  category: string;
  summary: string;
  features: string[];
  idealFor: string;
};

export const sellMachines: SellMachine[] = [
  {
    id: 'used-juki-single-needle',
    name: 'Used Juki Single Needle Machine',
    image: '/rent/juki-single-needle.png', // using existing images as placeholders
    category: 'Used Sewing',
    summary: 'A well-maintained used industrial lockstitch machine, checked and serviced by our experts.',
    features: ['Fully Serviced', '3 Months Warranty', 'Direct drive motor'],
    idealFor: 'Startups, small factories, and budget-conscious production lines.'
  },
  {
    id: 'used-juki-button-hole',
    name: 'Used Juki Button Hole',
    image: '/rent/juki-button-hole.png',
    category: 'Used Sewing',
    summary: 'A high-speed buttonholing machine in excellent condition.',
    features: ['Reconditioned', 'Test run available', 'Computer-controlled'],
    idealFor: 'Garment factories looking for a reliable buttonholing solution.'
  }
];
