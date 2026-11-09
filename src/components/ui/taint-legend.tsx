import React from "react";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";

export const TaintLegend: React.FC = () => {
  return (
    <Panel title="Taint Tags">
      <div className="flex flex-wrap gap-2">
        <Badge status="SAFE" />
        <Badge status="UNTRUSTED" />
        <Badge status="TAINTED" />
        <Badge status="BLOCKED" />
        <Badge status="PASSED" />
      </div>
      <p className="text-xs text-muted mt-3 leading-relaxed">
        Tags indicate data provenance. Color is always paired with a label.
      </p>
    </Panel>
  );
};
