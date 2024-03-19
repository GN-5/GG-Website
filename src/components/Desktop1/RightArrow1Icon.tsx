import { memo, SVGProps } from 'react';

const RightArrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 91 91' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.2529 45.4215H63.5901M63.5901 45.4215L47.6926 29.5239M63.5901 45.4215L47.6926 61.319'
      stroke='white'
      strokeWidth={5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M45.4215 90.843C70.5069 90.843 90.843 70.5069 90.843 45.4215C90.843 20.3359 70.5069 0 45.4215 0C20.3359 0 0 20.3359 0 45.4215C0 70.5069 20.3359 90.843 45.4215 90.843Z'
      stroke='white'
      strokeWidth={5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(RightArrow1Icon);
export { Memo as RightArrow1Icon };
