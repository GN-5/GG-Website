import { memo, SVGProps } from 'react';

const ArrowDownIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.877686 0L15.6782 15L30.4788 0'
      stroke='white'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ArrowDownIcon3);
export { Memo as ArrowDownIcon3 };
