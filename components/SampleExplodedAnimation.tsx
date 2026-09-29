'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { RotateCcw } from 'lucide-react';

const partAnimations = [
  { selector: '.part-head', x: -70, y: 18, rotate: -4 },
  { selector: '.part-front', x: -25, y: -26, rotate: 4 },
  { selector: '.part-motor', x: 82, y: -34, rotate: 5 },
  { selector: '.part-blade', x: -18, y: 86, rotate: -2 },
  { selector: '.part-column', x: 28, y: 92, rotate: 3 },
  { selector: '.part-base', x: 72, y: 120, rotate: -5 },
  { selector: '.part-fasteners', x: 0, y: -42, rotate: 0 }
];

export function SampleExplodedAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);

  const play = () => {
    if (!rootRef.current) return;
    const root = rootRef.current;
    const parts = root.querySelectorAll('.sample-part');
    const lines = root.querySelectorAll('.sample-line');
    const labels = root.querySelectorAll('.sample-label');

    for (const config of partAnimations) {
      const target = root.querySelector(config.selector);
      if (target) {
        animate(target, {
          opacity: [0, 1],
          translateX: [config.x, 0],
          translateY: [config.y, 0],
          rotate: [config.rotate, 0],
          scale: [0.92, 1],
          duration: 980,
          delay: partAnimations.indexOf(config) * 210,
          ease: 'outExpo'
        });
      }
    }

    animate(lines, {
      opacity: [0, 1],
      strokeDashoffset: [72, 0],
      duration: 720,
      delay: stagger(120, { start: 980 }),
      ease: 'inOutSine'
    });

    animate(labels, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 620,
      delay: stagger(110, { start: 1320 }),
      ease: 'outQuad'
    });

    animate(parts, {
      translateY: [0, -8, 0],
      duration: 3400,
      delay: stagger(90, { start: 2350 }),
      loop: true,
      alternate: true,
      ease: 'inOutSine'
    });
  };

  useEffect(() => {
    play();
  }, []);

  return (
    <div ref={rootRef} className="rounded-lg border border-line bg-white p-4 shadow-soft sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Anime.js sample</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Exploded Machine Parts Animation</h2>
        </div>
        <button onClick={play} className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-cream px-4 text-sm font-bold text-ink transition hover:border-accent hover:text-accent">
          <RotateCcw size={17} />
          Replay
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-cream">
        <svg className="h-auto w-full" viewBox="0 0 980 720" role="img" aria-label="Animated exploded sewing machine parts diagram">
          <rect width="980" height="720" fill="#fbf6ef" />
          <path d="M70 54H910" stroke="#171717" strokeWidth="4" strokeLinecap="round" />

          <g className="sample-part part-motor opacity-0" style={{ transformOrigin: '680px 210px' }}>
            <ellipse cx="675" cy="220" rx="92" ry="84" fill="#fff" stroke="#171717" strokeWidth="3" />
            <ellipse cx="675" cy="220" rx="60" ry="56" fill="none" stroke="#171717" strokeWidth="2" />
            <circle cx="675" cy="220" r="24" fill="none" stroke="#171717" strokeWidth="3" />
            {Array.from({ length: 14 }).map((_, i) => (
              <path key={i} d={`M675 220 L${675 + Math.cos((i / 14) * Math.PI * 2) * 78} ${220 + Math.sin((i / 14) * Math.PI * 2) * 70}`} stroke="#171717" strokeWidth="1.5" />
            ))}
            <path d="M760 152h92l38 28v92l-38 25h-92z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M788 129h82l18 23H770z" fill="#fff" stroke="#171717" strokeWidth="2" />
            <circle cx="804" cy="145" r="5" fill="none" stroke="#171717" strokeWidth="2" />
            <circle cx="850" cy="145" r="5" fill="none" stroke="#171717" strokeWidth="2" />
            <path d="M852 212h76" stroke="#171717" strokeWidth="3" />
            <path d="M928 212l52-18" stroke="#171717" strokeWidth="2" />
          </g>

          <g className="sample-part part-front opacity-0" style={{ transformOrigin: '500px 280px' }}>
            <path d="M394 216c80-50 172 18 168 100-2 54-28 88-70 98l-112-16c17-64 13-126 14-182z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M424 246c42-24 98 4 110 48" fill="none" stroke="#171717" strokeWidth="2" />
            <path d="M444 398V255" stroke="#171717" strokeWidth="3" />
            <path d="M487 405V270" stroke="#171717" strokeWidth="3" />
            <circle cx="454" cy="286" r="11" fill="#fff" stroke="#171717" strokeWidth="2" />
            <circle cx="485" cy="303" r="9" fill="#fff" stroke="#171717" strokeWidth="2" />
            <path d="M520 360h72l42 36" stroke="#171717" strokeWidth="2" fill="none" />
            <path d="M570 392h118" stroke="#171717" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g className="sample-part part-head opacity-0" style={{ transformOrigin: '250px 360px' }}>
            <path d="M166 230c92 22 147 96 134 206-7 64-42 112-104 128l-56-18 12-306z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M142 220h48v72h-48z" fill="#fff" stroke="#171717" strokeWidth="2" />
            <path d="M169 292v242" stroke="#171717" strokeWidth="3" />
            <path d="M210 318c35 12 50 45 50 85" fill="none" stroke="#171717" strokeWidth="2" />
            <path d="M126 545c60 24 129 22 190-4" fill="none" stroke="#171717" strokeWidth="3" />
            <circle cx="154" cy="362" r="16" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M170 580v58" stroke="#171717" strokeWidth="3" />
            <path d="M206 580v58" stroke="#171717" strokeWidth="3" />
          </g>

          <g className="sample-part part-blade opacity-0" style={{ transformOrigin: '390px 500px' }}>
            <path d="M374 402h34v196h-34z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M398 408c18 42 18 120 0 184" fill="none" stroke="#171717" strokeWidth="1.8" />
            <path d="M332 496h34" stroke="#171717" strokeWidth="3" />
            <path d="M310 496l20-12v24z" fill="#171717" />
          </g>

          <g className="sample-part part-column opacity-0" style={{ transformOrigin: '520px 560px' }}>
            <path d="M496 444h70v176h-70z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M486 426h92v34h-92z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <ellipse cx="532" cy="626" rx="52" ry="16" fill="#fff" stroke="#171717" strokeWidth="3" />
            <path d="M530 462v142" stroke="#171717" strokeWidth="2" />
          </g>

          <g className="sample-part part-base opacity-0" style={{ transformOrigin: '630px 640px' }}>
            <path d="M478 622c118-28 238-17 332 26l-22 48H436z" fill="#fff" stroke="#171717" strokeWidth="3" />
            <ellipse cx="604" cy="662" rx="40" ry="18" fill="none" stroke="#171717" strokeWidth="2" />
            {[528, 692, 772].map((x) => <circle key={x} cx={x} cy="642" r="8" fill="none" stroke="#171717" strokeWidth="2" />)}
            {[472, 568, 732].map((x) => <circle key={x} cx={x} cy="690" r="8" fill="none" stroke="#171717" strokeWidth="2" />)}
          </g>

          <g className="sample-part part-fasteners opacity-0">
            <g stroke="#171717" strokeWidth="2" fill="#fff">
              <circle cx="328" cy="292" r="9" />
              <circle cx="296" cy="368" r="8" />
              <circle cx="132" cy="470" r="7" />
              <path d="M612 460h20v44h-20z" />
              <path d="M648 504h20v38h-20z" />
              <path d="M884 178l68-22 8 8-68 24z" />
            </g>
          </g>

          <g className="sample-line" opacity="0" stroke="#171717" strokeWidth="2" strokeDasharray="72" fill="none">
            <path d="M280 218L382 266" />
            <path d="M565 270L632 234" />
            <path d="M542 430L542 620" />
            <path d="M382 492L315 492" />
            <path d="M760 260L830 318" />
            <path d="M626 650L626 704" />
          </g>

          <g className="sample-label opacity-0">
            <rect x="250" y="76" width="188" height="116" fill="#fff" stroke="#171717" strokeWidth="2" />
            <text x="264" y="101" fontSize="15" fontWeight="800">SHARPENER</text>
            <text x="264" y="121" fontSize="15" fontWeight="800">HOUSING ASSEMBLY</text>
            <text x="264" y="144" fontSize="13">Front and rear view</text>
            <path d="M250 192L212 270" stroke="#171717" strokeWidth="2" />
          </g>

          <g className="sample-label opacity-0">
            <rect x="724" y="326" width="174" height="76" fill="#fff" stroke="#171717" strokeWidth="2" />
            <text x="738" y="352" fontSize="15" fontWeight="800">MOTOR ASSEMBLIES</text>
            <text x="738" y="376" fontSize="13">Fan, rotor and drive</text>
            <path d="M724 350L754 300" stroke="#171717" strokeWidth="2" />
          </g>

          <g className="sample-label opacity-0">
            <rect x="646" y="456" width="190" height="92" fill="#fff" stroke="#171717" strokeWidth="2" />
            <text x="660" y="482" fontSize="15" fontWeight="800">FRONT BEARING</text>
            <text x="660" y="502" fontSize="15" fontWeight="800">HOUSING ASSEMBLY</text>
            <text x="660" y="526" fontSize="13">Guided support parts</text>
            <path d="M646 500L568 390" stroke="#171717" strokeWidth="2" />
          </g>

          <g className="sample-label opacity-0">
            <rect x="112" y="620" width="214" height="70" fill="#fff" stroke="#171717" strokeWidth="2" />
            <text x="126" y="646" fontSize="15" fontWeight="800">REPLACEMENT BELTS</text>
            <text x="126" y="670" fontSize="13">Knife and pulley drive</text>
            <path d="M240 620L196 570" stroke="#171717" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
