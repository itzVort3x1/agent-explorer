import React from "react";

interface ChallengeHeaderProps {
  title: string;
  description: string;
  category?: string;
}

export const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  title,
  description,
  category = "Challenge",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-muted">{category}</span>
      <h1 className="text-xl font-bold text-text tracking-tight">{title}</h1>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
};
