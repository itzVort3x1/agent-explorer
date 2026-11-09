import React from "react";

interface HomeHeroProps {
  title?: string;
  description?: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  title = "Agent Protocol Explorer",
  description = "A hands-on playground where you learn how AI agents talk to tools — and how those conversations get attacked. Watch real message traces, break simulated agents, and verify your defenses.",
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-text tracking-tight">{title}</h1>
      <p className="text-sm text-muted leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
};
