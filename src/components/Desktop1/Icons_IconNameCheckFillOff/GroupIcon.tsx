import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.5 4.79484L4.72144 9.01635C4.86993 9.1666 5.04677 9.286 5.24172 9.36736C5.43668 9.44883 5.64586 9.4908 5.85715 9.4908C6.06846 9.4908 6.27764 9.44883 6.47256 9.36736C6.66748 9.286 6.84433 9.1666 6.99291 9.01635L15.5 0.509155'
      stroke='black'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
