import { memo, SVGProps } from 'react';

const RightArrow1Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.2 22H30.8M30.8 22L23.1 14.3M30.8 22L23.1 29.7'
      stroke='#930BFF'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 44C34.1502 44 44 34.1502 44 22C44 9.84973 34.1502 0 22 0C9.84973 0 0 9.84973 0 22C0 34.1502 9.84973 44 22 44Z'
      stroke='#930BFF'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(RightArrow1Icon4);
export { Memo as RightArrow1Icon4 };
