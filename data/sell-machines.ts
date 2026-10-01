export type SellMachine = {
  id: string;
  name: string;
  images: string[];
  category: string;
  brand: string;
  summary: string;
  specs: { label: string; value: string }[];
  features: string[];
  idealFor: string;
};

export const sellMachines: SellMachine[] = [
  {
    id: 'pegasus-ex-overlock',
    name: 'Pegasus EX Series Overlock Machine',
    images: [
      '/sell/pegasus-ex-overview.jpg',
      '/sell/pegasus-ex-fleet.jpg',
      '/sell/pegasus-ex-detail.jpg',
    ],
    category: 'Overlock / Serger',
    brand: 'Pegasus',
    summary:
      'A high-performance industrial overlock machine from the Pegasus EX series. Used condition, fully serviced and tested by our team. Ready for immediate production use.',
    specs: [
      { label: 'Brand', value: 'Pegasus' },
      { label: 'Series', value: 'EX Series' },
      { label: 'Motor', value: '4th Direct Drive Motor' },
      { label: 'Speed', value: '5,000 RPM' },
      { label: 'Stitch Type', value: 'Overlock (3/4 Thread)' },
      { label: 'Condition', value: 'Used – Fully Serviced' },
      { label: 'Lubrication', value: 'Auto-oil system' },
    ],
    features: [
      '4th Direct Drive Motor – No belt, less noise',
      'Pegasus brand – World-class reliability',
      '5,000 RPM high-speed performance',
      'Fully serviced & test-run by our experts',
      'Auto-oil lubrication system',
      'Complete with table & stand',
    ],
    idealFor:
      'Garment factories producing T-shirts, sportswear, knitwear, and any overlocking / serging operations.'
  }
];

