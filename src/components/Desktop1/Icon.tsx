import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.256 17.984C0.170667 17.3867 0.106667 16.768 0.0639999 16.128C0.0213333 15.488 0 15.0187 0 14.72C0 11.8613 0.512 9.152 1.536 6.592C2.56 3.98933 3.81867 1.792 5.312 0L11.776 1.472C10.9653 3.30667 10.304 5.39733 9.792 7.744C9.32267 10.048 9.088 12.2453 9.088 14.336C9.088 14.4213 9.088 14.6133 9.088 14.912C9.088 15.168 9.088 15.488 9.088 15.872C9.13067 16.2133 9.152 16.576 9.152 16.96C9.19467 17.344 9.23733 17.6853 9.28 17.984H0.256ZM14.016 17.984C13.9307 17.3867 13.8667 16.768 13.824 16.128C13.7813 15.488 13.76 15.0187 13.76 14.72C13.76 11.8613 14.272 9.152 15.296 6.592C16.32 3.98933 17.5787 1.792 19.072 0L25.536 1.472C24.7253 3.30667 24.064 5.39733 23.552 7.744C23.0827 10.048 22.848 12.2453 22.848 14.336C22.848 14.4213 22.848 14.6133 22.848 14.912C22.848 15.168 22.848 15.488 22.848 15.872C22.8907 16.2133 22.912 16.576 22.912 16.96C22.9547 17.344 22.9973 17.6853 23.04 17.984H14.016Z'
      fill='#930BFF'
    />
  </svg>
);
const Memo = memo(Icon);
export { Memo as Icon };
