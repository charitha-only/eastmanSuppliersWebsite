export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  category: string;
  description: string;
  specs: string[];
};

export const products: Product[] = [
  {
    id: 'eastman-629-blue-streak',
    name: 'Eastman Blue Streak II',
    subtitle: 'Model 629 – Straight Knife Cutting Machine',
    price: 0,
    image: '/products/cutting-machine.png',
    category: 'Cutting Machines',
    description:
      'The Eastman Blue Streak II (Model 629) is an industry-standard straight knife cutting machine built for versatile, general-purpose fabric cutting. Features a high power-to-weight ratio, low centre of gravity, and precision-machined components for smooth daily production output.',
    specs: [
      'Model: Blue Streak II (629)',
      'Blade Sizes: 5" – 13" available',
      'Motor: 110V/220V (1-phase) | 220V/380V (3-phase)',
      'Power: 0.65 hp (1-phase)',
      'Stroke Lengths: 1.125" – 1.75"',
      '"One Shot" single-reservoir oiling system',
      'Built-in blade sharpening (abrasive belt)',
      'Uni-Safe® safety terminal block',
      'Machined to 0.0005" tolerance',
      'Works on denim, silk, cotton, synthetics & technical textiles'
    ]
  },
  {
    id: 'eastman-627-brute',
    name: 'Eastman Brute',
    subtitle: 'Model 627 – Heavy-Duty Straight Knife Cutter',
    price: 0,
    image: '/products/ec6-cutter.png',
    category: 'Cutting Machines',
    description:
      'The Eastman Brute (Model 627) is a high-powered heavy-duty straight knife cutting machine, designed for demanding production floors cutting thick lays, denim, technical fabrics, and multi-ply stacks with ease.',
    specs: [
      'Model: Brute (627)',
      'Blade Sizes: 5" – 13" available',
      'Motor: 110V/220V (1-phase) | 220V/380V (3-phase)',
      'Power: Up to 2.2 hp (high-power)',
      'Stroke Lengths: 1.125" – 1.75"',
      '"One Shot" single-reservoir oiling system',
      'Built-in blade sharpening (abrasive belt)',
      'Uni-Safe® safety terminal block',
      'Machined to 0.0005" tolerance',
      'Ideal for heavy-duty, multi-ply & technical fabric cutting'
    ]
  },
  {
    id: 'eastman-ec6n',
    name: 'Eastman EC-6N End Cutter',
    subtitle: 'Semi-Automatic Track-Mounted End Cutter',
    price: 0,
    image: '/products/cutting-machine.png',
    category: 'End Cutters',
    description:
      'The Eastman EC-6N is a semi-automatic, track-mounted fabric end-cutting machine designed for precision and efficiency in garment cutting rooms. Features a stepping-motor driven cutting head for consistent, preset-length cuts across the full width of fabric lays.',
    specs: [
      'Model: EC-6N (Semi-Automatic)',
      'Operation: Stepping-motor driven',
      'Cutting Width: 48" – 144" (1.22m – 3.66m)',
      'Track Length: 2.8m – 3.5m (optional sizes available)',
      'Preset cutting length control',
      'Emergency stop safety feature',
      'Fabric holder & cord hanger included',
      'Built-in layer counter',
      'Manual track lifter',
      'Reduces selvage waste & cutting errors'
    ]
  },
  {
    id: 'eastman-ec9n',
    name: 'Eastman EC-9N End Cutter',
    subtitle: 'Fully-Automatic Track-Mounted End Cutter',
    price: 0,
    image: '/products/ec6-cutter.png',
    category: 'End Cutters',
    description:
      'The Eastman EC-9N is a fully-automatic, track-mounted end-cutting machine – the most advanced model in the EC series. Features automatic track lifting, stepping-motor driven precision cutting, and preset length control for maximum throughput with minimal operator effort.',
    specs: [
      'Model: EC-9N (Fully-Automatic)',
      'Operation: Fully-Automatic stepping-motor driven',
      'Cutting Width: 48" – 144" (1.22m – 3.66m)',
      'Track Length: 2.8m – 3.5m (optional sizes available)',
      'Preset cutting length control',
      'Automatic track lifter (upgrade from EC-6N)',
      'Emergency stop safety feature',
      'Fabric holder & cord hanger included',
      'Built-in layer counter',
      'Maximum productivity with minimal operator effort'
    ]
  },
  {
    id: 'needle-pack',
    name: 'Groz-Beckert Needle Set',
    subtitle: 'Premium sewing needles',
    price: 0,
    image: '/products/needle.png',
    category: 'Needles',
    description:
      'High-consistency needle packs for clean stitch formation, reduced skipped stitches, and dependable performance across production runs.',
    specs: ['Precision tip geometry', 'Factory sealed', 'Barcode traceable']
  },
  {
    id: 'straight-knives',
    name: 'Golden Eagle Straight Knives',
    subtitle: 'Alloy steel knife range',
    price: 0,
    image: '/products/straight-knives.jpg',
    category: 'Knives',
    description:
      'A full range of straight knives in multiple sizes, made for consistent edge retention and quick replacement on cutting floors.',
    specs: ['Alloy steel', 'Multiple lengths', 'Sharp packed edges']
  },
  {
    id: 'band-knife',
    name: 'Band Knife Blade',
    subtitle: 'Fine edge cutting blade',
    price: 0,
    image: '/products/band-knife.png',
    category: 'Blades',
    description:
      'A clean-finish band knife option for curved cutting, tight profiles, and repeated trimming work.',
    specs: ['Smooth edge finish', 'Flexible profile', 'Durable temper']
  }
];

export const heroProducts = products.filter((product) =>
  ['eastman-629-blue-streak', 'eastman-627-brute', 'eastman-ec6n', 'eastman-ec9n'].includes(product.id)
);
