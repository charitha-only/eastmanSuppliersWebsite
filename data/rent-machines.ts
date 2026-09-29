export type RentMachine = {
  id: string;
  name: string;
  image: string;
  category: string;
  summary: string;
  features: string[];
  idealFor: string;
};

export const rentMachines: RentMachine[] = [
  {
    id: 'square-vacuum-table',
    name: 'Square Type Vacuum Iron Table',
    image: '/rent/square-vacuum-table.png',
    category: 'Finishing',
    summary:
      'A square vacuum ironing table designed for efficient finishing of larger flat items with a wide, even working area.',
    features: ['600W vacuum fabric hold', 'Heated pressing surface up to 120 C', 'Foot pedal control'],
    idealFor: 'Tablecloths, chair covers, linen, heavy cotton, and large square-cut items.'
  },
  {
    id: 'narrow-iron-table',
    name: 'Narrow Type Iron Table',
    image: '/rent/narrow-iron-table.png',
    category: 'Finishing',
    summary:
      'A narrow ironing table for garment finishing lines where operators need fast handling, steam removal, and compact floor use.',
    features: ['Vacuum-assisted finish', 'Compact narrow board', 'Operator-friendly controls'],
    idealFor: 'Shirts, trousers, sleeves, panels, and continuous finishing stations.'
  },
  {
    id: 'juki-button-hole',
    name: 'Juki Button Hole Machine',
    image: '/rent/juki-button-hole.png',
    category: 'Sewing',
    summary:
      'The JUKI LBH-1790S is a high-speed computer-controlled buttonholing machine built for consistent seam quality and production speed.',
    features: ['Up to 4,200 stitches per minute', 'Voice guidance support', 'Digital drive and active tension control'],
    idealFor: 'Buttonholing on shirts, uniforms, woven fabric, knit fabric, and production garments.'
  },
  {
    id: 'juki-single-needle',
    name: 'Juki Single Needle Machine',
    image: '/rent/juki-single-needle.png',
    category: 'Sewing',
    summary:
      'A versatile industrial lockstitch machine known for reliable seams, high-speed production, and smooth direct-drive operation.',
    features: ['Up to 5,500 stitches per minute', 'Direct drive motor', 'Automatic needle positioning'],
    idealFor: 'Light and medium-weight fabric work across general garment production.'
  },
  {
    id: 'juki-double-needle',
    name: 'Juki Double Needle Machine',
    image: '/rent/juki-double-needle.png',
    category: 'Heavy Sewing',
    summary:
      'A two-needle lockstitch machine designed for heavy materials with stable feed and clean parallel stitching.',
    features: ['Compound feed mechanism', 'Adjustable presser foot lift', 'Automatic thread trimmer'],
    idealFor: 'Heavy materials, cargo belts, car seats, jeans, and reinforced seams.'
  },
  {
    id: 'juki-bar-tack',
    name: 'Juki Bar Tack Machine',
    image: '/rent/juki-bar-tack.png',
    category: 'Reinforcement',
    summary:
      'The JUKI LK-1900S is a high-speed bartacking machine designed for precise reinforcement and efficient cycle times.',
    features: ['Up to 3,200 stitches per minute', 'Pattern memory support', '30mm x 40mm sewing area'],
    idealFor: 'Pocket corners, belt loops, stress points, uniforms, workwear, and durable garment details.'
  },
  {
    id: '2128-iron',
    name: '2128 Iron',
    image: '/rent/2128-iron.png',
    category: 'Steam Iron',
    summary:
      'The ST-2128 steam iron is a durable professional iron with efficient steam output and a strong cast iron base.',
    features: ['Durable cast iron base', 'Efficient steam output', 'Corrosion-resistant build'],
    idealFor: 'Garment factories, boutiques, sample rooms, and professional finishing teams.'
  }
];
