import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.js';
import classes from './Icons_IconNameCheckFillOff.module.css';

interface Props {
  className?: string;
  classes?: {
    group?: string;
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 93:1099 */
export const Icons_IconNameCheckFillOff: FC<Props> = memo(function Icons_IconNameCheckFillOff(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group || ''} ${classes.group}`}>
        {props.swap?.group || <GroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
