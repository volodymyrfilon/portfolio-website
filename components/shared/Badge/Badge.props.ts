import { ReactNode } from 'react';

export interface BadgeProps {
  containerStyles: string;
  icon: ReactNode;
  endCountNum: number;
  endCountText?: number;
  badgeText: string;
}
