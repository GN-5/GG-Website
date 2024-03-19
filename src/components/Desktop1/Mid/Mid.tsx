import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Mid.module.css';

interface Props {
  className?: string;
  classes?: {
    pR?: string;
    pR2?: string;
    pR3?: string;
    mR?: string;
    lr?: string;
    lR?: string;
    root?: string;
  };
}
/* @figmaId 281:350 */
export const Mid: FC<Props> = memo(function Mid(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.portfolio}>
        <div className={`${props.classes?.pR2 || ''} ${classes.pR2}`}>
          <div className={`${props.classes?.pR || ''} ${classes.pR}`}></div>
          <div className={classes.pR4}></div>
          <div className={classes.uX}>UX</div>
        </div>
        <div className={`${props.classes?.mR || ''} ${classes.mR}`}>
          <div className={`${props.classes?.pR3 || ''} ${classes.pR3}`}></div>
          <div className={classes.pR5}></div>
          <div className={classes.graphics}>Graphics</div>
        </div>
        <div className={`${props.classes?.lR || ''} ${classes.lR}`}>
          <div className={`${props.classes?.lr || ''} ${classes.lr}`}></div>
          <div className={classes.lr2}></div>
          <div className={classes.webDesign}>
            <div className={classes.textBlock}>Web</div>
            <div className={classes.textBlock2}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>Design</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.text}>
        <div className={classes.someOfTheProjectsWeHaveExcelle}>
          <div className={classes.textBlock3}>Some Of The</div>
          <div className={classes.textBlock4}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label2}>Projects</span>
            </p>
          </div>
          <div className={classes.textBlock5}>
            <p className={classes.labelWrapper3}>
              <span className={classes.label3}>We Have Excelled!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
