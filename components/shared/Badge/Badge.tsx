'use client';

import CountUp from 'react-countup';
import { BadgeProps } from './Badge.props';

export const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: BadgeProps) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-[15px] font-medium leading-none text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};
