import { memo, SVGProps } from 'react';

const GlassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 726 726' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'multiply',
      }}
      opacity={0.3}
    >
      <circle cx={363} cy={363} r={363} fill='url(#paint0_linear_499_4796)' />
    </g>
    <defs>
      <linearGradient id='paint0_linear_499_4796' x1={363} y1={0} x2={363} y2={726} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#C058FF' />
        <stop offset={1} stopColor='#930BFF' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(GlassIcon);
export { Memo as GlassIcon };
