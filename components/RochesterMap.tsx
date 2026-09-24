// Stylized street map of Rochester, MN. Not to scale; landmarks are placed by
// feel, not survey. Shares its 1600x1000 coordinate space with the pins in Hero.

const MINOR_LABEL = "fill-ink-2 text-[13px] font-semibold tracking-[0.02em] [paint-order:stroke] stroke-land [stroke-width:4px]";
const WATER_LABEL = "fill-water-ink text-[14px] italic [paint-order:stroke] stroke-water [stroke-width:3px]";
const HIGHWAY_LABEL = "fill-ink text-[13px] font-semibold tracking-[0.02em]";
const PARK_LABEL = "fill-park-ink text-[13px] font-semibold [paint-order:stroke] stroke-park [stroke-width:3px]";

const roads = [
  { d: "M1000 0V1000", w: 9 }, // Broadway
  { d: "M640 500H1480", w: 7 }, // Center St
  { d: "M560 548H1000", w: 7 }, // 2nd St SW
  { d: "M1000 596H1480", w: 7 }, // 4th St SE
  { d: "M600 250H1000", w: 6 }, // 19th St NW
  { d: "M480 110H1420", w: 7 }, // 37th St NW
  { d: "M1000 470L850 380L660 330", w: 7 }, // Civic Center Dr
  { d: "M1480 0C1500 200 1490 400 1490 500C1490 650 1500 800 1520 1000", w: 7 }, // E Circle Dr
  { d: "M420 0C432 150 440 300 430 420C420 520 400 600 380 700", w: 6 }, // W Circle Dr
];

const highways = [
  { d: "M600 0C615 150 640 300 640 450C640 600 650 700 720 780C790 860 880 900 960 950C985 965 995 985 1000 1000", w: 14 }, // US 52
  { d: "M0 560C200 560 450 560 642 560", w: 12 }, // US 14 west
  { d: "M770 822C830 856 880 860 940 860H1600", w: 12 }, // US 14 / 12th St
];

const parcels = [
  "M18 30h130v96H18z",
  "M160 30h120v60H160z",
  "M160 100h110v120H160z",
  "M18 140h128v150H18z",
  "M22 610h160v120H22z",
  "M196 612h150v70H196z",
  "M22 744h120v140H22z",
  "M156 700h190v110H156z",
  "M156 824h210v160H156z",
  "M22 898h120v90H22z",
];

function Shield({ x, y, n }: { x: number; y: number; n: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M-16 -15H16C16 -4 13 8 0 17C-13 8 -16 -4 -16 -15Z"
        className="fill-paper stroke-ink"
        strokeWidth="1.5"
      />
      <text y="4" textAnchor="middle" className="fill-ink text-[13px] font-bold tabular">
        {n}
      </text>
    </g>
  );
}

export default function RochesterMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="map-blocks" width="60" height="48" patternUnits="userSpaceOnUse">
          <path d="M0 1.5H60M1.5 0V48" stroke="var(--street)" strokeWidth="3" fill="none" />
        </pattern>
        <clipPath id="map-city">
          <path d="M330 0H1600V1000H540C430 900 370 760 385 620C400 480 300 300 330 0Z" />
        </clipPath>
        <path id="lbl-civic" d="M660 330L850 380L1000 470" />
        <path id="lbl-zumbro-s" d="M858 996C872 952 898 912 930 878" />
        <path id="lbl-zumbro-n" d="M1188 262C1194 200 1202 140 1224 76" />
        <path id="lbl-cascade" d="M420 352C520 378 610 390 720 400" />
        <path id="lbl-bear" d="M1250 678C1330 697 1420 718 1520 736" />
      </defs>

      <rect width="1600" height="1000" fill="var(--land)" />
      <g fill="var(--land-deep)">
        {parcels.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <rect width="1600" height="1000" fill="url(#map-blocks)" clipPath="url(#map-city)" />

      {/* Parks */}
      <g fill="var(--park)">
        <rect x="828" y="436" width="56" height="42" rx="3" />
        <path d="M880 760C920 740 990 748 1020 770L1030 850C990 868 920 870 890 850Z" />
        <path d="M1090 250C1150 230 1240 250 1260 300C1275 350 1240 400 1180 405C1120 410 1080 370 1078 320Z" />
        <path d="M1310 300C1380 280 1470 300 1500 350C1520 410 1480 470 1410 475C1350 480 1300 440 1295 390Z" />
        <path d="M470 600C520 580 600 590 610 630C615 680 570 700 520 700C480 698 460 660 470 600Z" />
      </g>

      {/* Water */}
      <g fill="none" stroke="var(--water)" strokeLinecap="round" strokeLinejoin="round">
        <path
          strokeWidth="14"
          d="M860 1000C880 930 930 880 960 820C990 760 1000 700 1030 660C1060 620 1070 560 1068 500C1066 450 1090 410 1120 370C1140 345 1150 330 1160 320C1172 300 1180 270 1185 240C1192 180 1200 120 1225 60C1235 35 1245 15 1250 0"
        />
        <path strokeWidth="5" d="M300 330C420 350 520 380 620 390C720 400 820 420 900 430C980 440 1030 460 1066 470" />
        <path strokeWidth="5" d="M1600 740C1500 735 1420 720 1340 700C1260 680 1180 660 1120 650C1080 645 1050 650 1030 660" />
      </g>
      <g fill="var(--water)">
        <path d="M1020 448C1024 424 1052 412 1080 416C1104 420 1106 446 1096 462C1084 480 1050 482 1032 474C1022 468 1018 458 1020 448Z" />
        <path d="M500 625C510 610 555 605 575 620C590 640 575 665 545 668C515 670 495 650 500 625Z" />
      </g>

      {/* Streets: casing, then fill */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {roads.map((r) => (
          <path key={`c${r.d}`} d={r.d} stroke="var(--casing)" strokeWidth={r.w + 3} />
        ))}
        {roads.map((r) => (
          <path key={r.d} d={r.d} stroke="var(--street)" strokeWidth={r.w} />
        ))}
        {highways.map((r) => (
          <path key={`c${r.d}`} d={r.d} stroke="var(--highway-casing)" strokeWidth={r.w + 3} />
        ))}
        {highways.map((r) => (
          <path key={r.d} d={r.d} stroke="var(--highway)" strokeWidth={r.w} />
        ))}
      </g>

      {/* Labels */}
      <g className="font-sans">
        <text x="935" y="205" textAnchor="middle" className="fill-ink-3 font-display text-[44px] font-extrabold tracking-[0.32em] [paint-order:stroke] stroke-land [stroke-width:6px]">
          ROCHESTER
        </text>
        <text transform="translate(1004 330) rotate(-90)" textAnchor="middle" className={MINOR_LABEL}>
          Broadway Ave N
        </text>
        <text x="1300" y="504" textAnchor="middle" className={MINOR_LABEL}>
          Center St E
        </text>
        <text x="780" y="552" textAnchor="middle" className={MINOR_LABEL}>
          2nd St SW
        </text>
        <text x="800" y="114" textAnchor="middle" className={MINOR_LABEL}>
          37th St NW
        </text>
        <text x="780" y="254" textAnchor="middle" className={MINOR_LABEL}>
          19th St NW
        </text>
        <text x="1250" y="864.5" textAnchor="middle" className={HIGHWAY_LABEL}>
          12th St SE
        </text>
        <text transform="translate(1495 780) rotate(-88)" textAnchor="middle" className={MINOR_LABEL}>
          E Circle Dr
        </text>
        <text dy="4" className={MINOR_LABEL}>
          <textPath href="#lbl-civic" startOffset="40%">
            Civic Center Dr
          </textPath>
        </text>

        <text className={WATER_LABEL} dy="-10">
          <textPath href="#lbl-zumbro-s">Zumbro River</textPath>
        </text>
        <text className={WATER_LABEL} dy="-10">
          <textPath href="#lbl-zumbro-n">Zumbro River</textPath>
        </text>
        <text x="1061" y="452" textAnchor="middle" className={WATER_LABEL}>
          Silver Lake
        </text>
        <text className={WATER_LABEL} dy="-8">
          <textPath href="#lbl-cascade">Cascade Creek</textPath>
        </text>
        <text className={WATER_LABEL} dy="-8">
          <textPath href="#lbl-bear" startOffset="20%">
            Bear Creek
          </textPath>
        </text>

        <text x="955" y="812" textAnchor="middle" className={PARK_LABEL}>
          Soldiers Field
        </text>
        <text x="1400" y="392" textAnchor="middle" className={PARK_LABEL}>
          Quarry Hill Park
        </text>
        <text x="540" y="690" textAnchor="middle" className={PARK_LABEL}>
          Cascade Lake
        </text>
      </g>

      <Shield x={756} y={818} n="52" />
      <Shield x={240} y={560} n="14" />
      <Shield x={1560} y={860} n="14" />
      <Shield x={1000} y={905} n="63" />
    </svg>
  );
}
