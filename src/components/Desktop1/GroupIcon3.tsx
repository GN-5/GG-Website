import { memo, SVGProps } from 'react';

const GroupIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.1875 6.2179L5.99198 12.0225C6.19615 12.2291 6.43931 12.3933 6.70737 12.5051C6.97543 12.6171 7.26306 12.6749 7.55358 12.6749C7.84414 12.6749 8.13175 12.6171 8.39977 12.5051C8.66779 12.3933 8.91096 12.2291 9.11525 12.0225L20.8125 0.325089'
      stroke='#930BFF'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon3);
export { Memo as GroupIcon3 };
