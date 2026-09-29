export type Machine = {
  id: string;
  name: string;
  eyebrow: string;
  image: string;
  summary: string;
  highlights: string[];
  specs: { label: string; value: string }[];
};

export const machines: Machine[] = [
  {
    id: 'side-cutter',
    name: 'Side Cutter',
    eyebrow: 'Thread trimming system',
    image: '/machines/side-cutter.png',
    summary:
      'Designed for trimming loose threads, yarn ends, and excess fabric in garment finishing operations with integrated vacuum suction for a cleaner production area.',
    highlights: [
      'Adjustable trimming head for precise thread removal',
      'Quiet, energy-efficient motor for long operating hours',
      'Safety guard, emergency stop, and simple training controls'
    ],
    specs: [
      { label: 'Duty Cycle', value: 'Continuous 24-hour' },
      { label: 'Motor Power', value: '0.5-1.1kW' },
      { label: 'Blade Speed', value: '4,500 rpm' }
    ]
  },
  {
    id: 'single-needle',
    name: 'Single Needle',
    eyebrow: 'Digital lockstitch machine',
    image: '/machines/single-needle.png',
    summary:
      'A high-speed single needle machine using double independent stepper motors for thread trimming and presser foot lifting, with electronic stitch-distance adjustment down to 0.1mm.',
    highlights: [
      'DLC coated needle bar for better wear resistance',
      'Synchronous belt transmission for lower noise',
      'Faster speed and improved daily work efficiency'
    ],
    specs: [
      { label: 'Stitch Control', value: '0.1mm minimum' },
      { label: 'Drive', value: 'Dual stepper motor' },
      { label: 'Transmission', value: 'Synchronous belt' }
    ]
  },
  {
    id: 'feed-of-the-arm',
    name: 'Feed Of The Arm',
    eyebrow: 'Cylinder-bed seam machine',
    image: '/machines/feed-of-the-arm.png',
    summary:
      'The cantilever cylinder structure is especially suited for lap joints on sleeves, trousers, shirts, overalls, casual pants, raincoats, and other shaped garments.',
    highlights: [
      'Low thread tension for smoother seam quality',
      'Improved looper and positioning components',
      'Button-type feed volume conversion for material adaptability'
    ],
    specs: [
      { label: 'Application', value: 'Sleeves and trousers' },
      { label: 'Feed Control', value: 'Button conversion' },
      { label: 'Seam Finish', value: 'Low wrinkle stitch' }
    ]
  },
  {
    id: 'button-hole',
    name: 'Button Hole',
    eyebrow: 'Servo keyhole machine',
    image: '/machines/button-hole.png',
    summary:
      'A servo and stepper motor driven button hole machine built for woven and knitted fabrics, delivering low vibration, low noise, and efficient sewing quality.',
    highlights: [
      'Strong adaptability for elastic fabric',
      'Beautiful stitch output without frequent presser-foot changes',
      'Suitable for shirts, overalls, T-shirts, and knitwear'
    ],
    specs: [
      { label: 'Drive', value: 'Servo + stepper' },
      { label: 'Noise', value: 'Low vibration' },
      { label: 'Fabric', value: 'Woven and knitted' }
    ]
  }
];
