import { memo, SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M18.168 30.28H42.392M42.392 30.28L31.794 19.682M42.392 30.28L31.794 40.878'
      stroke='#FFC700'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M30.28 60.56C47.003 60.56 60.56 47.003 60.56 30.28C60.56 13.5568 47.003 0 30.28 0C13.5568 0 0 13.5568 0 30.28C0 47.003 13.5568 60.56 30.28 60.56Z'
      stroke='#FFC700'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(RightArrowIcon);
export { Memo as RightArrowIcon };
