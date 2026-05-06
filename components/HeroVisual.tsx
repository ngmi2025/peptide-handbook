export function HeroVisualAmbient() {
  const nodes: Array<[number, number, boolean]> = [
    [30, 380, false],
    [90, 320, true],
    [160, 350, false],
    [230, 270, true],
    [310, 295, false],
    [370, 220, true],
    [430, 250, false],
    [250, 180, false],
    [200, 110, true],
    [360, 360, false],
    [440, 380, true],
  ];

  return (
    <svg viewBox="0 0 480 480" aria-hidden="true">
      <g opacity="0.85">
        <path
          d="M 30 380 L 90 320 L 160 350 L 230 270 L 310 295 L 370 220 L 430 250"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 230 270 L 250 180 L 200 110"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 310 295 L 360 360 L 440 380"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {nodes.map(([x, y, fill], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 8 ? 14 : 10}
            fill={fill ? '#4F7C6A' : '#fff'}
            stroke="#0A0A0A"
            strokeWidth={fill ? 0 : 1.8}
          />
        ))}
      </g>
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.08">
          <path
            d="M -50 480 L 120 380 L 240 420 L 380 320 L 520 360 L 660 240 L 820 280 L 960 180 L 1120 220 L 1280 100 L 1490 140"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="1"
          />
          {[
            [120, 380],
            [380, 320],
            [660, 240],
            [960, 180],
            [1280, 100],
          ].map(([x, y], i) => (
            <circle key={'a' + i} cx={x} cy={y} r="6" fill="#4F7C6A" />
          ))}
          {[
            [-50, 480],
            [240, 420],
            [520, 360],
            [820, 280],
            [1120, 220],
            [1490, 140],
          ].map(([x, y], i) => (
            <circle key={'b' + i} cx={x} cy={y} r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
          ))}
        </g>
      </svg>
    </div>
  );
}
