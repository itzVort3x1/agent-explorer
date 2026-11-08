import React from 'react';
import { NavigationZone } from './navigation-zone';
import { StageZone } from './stage-zone';
import { DetailsZone } from './details-zone';

interface ShellProps {
  navContent?: React.ReactNode;
  stageContent?: React.ReactNode;
  detailsContent?: React.ReactNode;
}

/**
 * 3-Zone layout shell specified in PRD Section 8:
 * - Left: Navigation
 * - Center: Stage (Interactive player or challenge)
 * - Right: Details (Decoded payload inspector & logs)
 */
export const Shell: React.FC<ShellProps> = ({
  navContent,
  stageContent,
  detailsContent,
}) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#12171C] text-[#CFD8DE] font-mono select-none">
      <NavigationZone>{navContent}</NavigationZone>
      <StageZone>{stageContent}</StageZone>
      <DetailsZone>{detailsContent}</DetailsZone>
    </div>
  );
};
