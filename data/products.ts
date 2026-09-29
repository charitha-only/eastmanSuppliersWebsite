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
    id: 'ec6-cutter',
    name: 'EC6 Precision Cutter',
    subtitle: 'Straight knife cutting system',
    price: 420,
    image: '/products/ec6-cutter.png',
    category: 'Cutting Machines',
    description:
      'A stable industrial cutting unit designed for fabric rooms that demand clean lines, smooth travel, and reliable daily output.',
    specs: ['Balanced motor head', 'Low-vibration housing', 'Service-ready controls']
  },
  {
    id: 'cutting-machine',
    name: 'Eastman Rail Cutting Table',
    subtitle: 'Motorized rail cutter',
    price: 1250,
    image: '/products/cutting-machine.png',
    category: 'Machine Systems',
    description:
      'A production-grade rail cutting setup with guided movement, responsive control box, and a wide table profile for layered fabric work.',
    specs: ['Guided rail assembly', 'Responsive panel', 'Industrial duty frame']
  },
  {
    id: 'needle-pack',
    name: 'Groz-Beckert Needle Set',
    subtitle: 'Premium sewing needles',
    price: 38,
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
    price: 74,
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
    price: 52,
    image: '/products/band-knife.png',
    category: 'Blades',
    description:
      'A clean-finish band knife option for curved cutting, tight profiles, and repeated trimming work.',
    specs: ['Smooth edge finish', 'Flexible profile', 'Durable temper']
  }
];

export const heroProducts = products.filter((product) =>
  ['ec6-cutter', 'cutting-machine', 'needle-pack', 'band-knife'].includes(product.id)
);
