import { memo, SVGProps } from 'react';

const ArrowDownIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.877686 0.376953L15.6782 15.377L30.4788 0.376953'
      stroke='white'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ArrowDownIcon2);
export { Memo as ArrowDownIcon2 };
