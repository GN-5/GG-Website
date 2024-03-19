import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LogoIcon } from './LogoIcon.js';
import classes from './NavbarMiddleAlignContent.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 76:72 */
export const NavbarMiddleAlignContent: FC<Props> = memo(function NavbarMiddleAlignContent(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.elements}>
        <div className={classes.logo}>
          <LogoIcon className={classes.icon} />
        </div>
        <div className={classes.main}>
          <div className={classes.services}>Services</div>
          <div className={classes.packages}>Packages</div>
          <div className={classes.solutions}>Solutions</div>
          <div className={classes.aboutUs}>About Us</div>
        </div>
        <div className={classes.quote}>
          <div className={classes.getQuotation}>Get Quotation!</div>
        </div>
      </div>
    </div>
  );
});
