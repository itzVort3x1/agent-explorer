import React, { Suspense } from "react";
import { Shell } from "@/components/layout/shell";
import { Panel } from "@/components/ui/panel";
import { Badge } from "@/components/ui/badge";
import { getAllLessons, getLessonBySlug } from "@/lib/lessons";
import type { LessonStep } from "@/contracts/lesson";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const STEPS: { key: LessonStep; label: string; color: string }[] = [
  { key: "watch", label: "Watch", color: "text-green" },
  { key: "break", label: "Break", color: "text-red" },
  { key: "patch", label: "Patch", color: "text-amber" },
  { key: "attack_again", label: "Attack Again", color: "text-blue" },
];

export function generateStaticParams() {
  return [
    { slug: "01-tool-calling" },
    { slug: "02-mcp-handshake" },
    { slug: "03-prompt-injection" },
    { slug: "04-tool-poisoning" },
    { slug: "05-data-exfiltration" },
  ];
}

async function LessonStageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  const title = lesson?.title ?? slug;
  const summary = lesson?.summary ?? "";

  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted">
            Lesson {lesson?.order ?? "?"}
          </span>
          <Badge status="SAFE" label={`~${lesson?.durationMinutes ?? 10} min`} />
        </div>
        <h1 className="text-xl font-bold text-text tracking-tight">
          {title}
        </h1>
        <p className="text-sm text-muted leading-relaxed">{summary}</p>
      </div>

      <div className="flex items-center gap-1">
        {STEPS.map((step, i) => (
          <React.Fragment key={step.key}>
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 border border-line text-xs ${
                i === 0
                  ? "bg-green/10 text-green border-green/30"
                  : "text-muted"
              }`}
            >
              <span className="font-semibold">{i + 1}.</span>
              <span>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-line text-xs">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <Panel title="Trace Player">
        <div className="flex items-center justify-center h-48 text-muted text-xs">
          Trace player will render here — step-by-step message replay with
          decoded payloads and taint tags.
        </div>
      </Panel>
    </div>
  );
}

function LessonStageFallback() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl animate-pulse">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-4 w-16 bg-line/60" />
          <div className="h-5 w-20 bg-line/60" />
        </div>
        <div className="h-7 w-64 bg-line/60" />
        <div className="h-4 w-96 bg-line/40" />
      </div>

      <div className="flex items-center gap-1">
        {STEPS.map((step, i) => (
          <React.Fragment key={step.key}>
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 border border-line text-xs ${
                i === 0
                  ? "bg-green/10 text-green border-green/30"
                  : "text-muted"
              }`}
            >
              <span className="font-semibold">{i + 1}.</span>
              <span>{step.label}</span>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-line text-xs">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <Panel title="Trace Player">
        <div className="flex items-center justify-center h-48 text-muted text-xs">
          Loading trace player...
        </div>
      </Panel>
    </div>
  );
}

export default function LessonPage({ params }: LessonPageProps) {
  const lessons = getAllLessons();

  return (
    <Shell
      lessons={lessons}
      stageContent={
        <Suspense fallback={<LessonStageFallback />}>
          <LessonStageContent params={params} />
        </Suspense>
      }
      detailsContent={
        <div className="flex flex-col gap-4">
          <Panel title="Decoded Message">
            <div className="text-xs text-muted leading-relaxed">
              Select a step in the trace player to inspect the decoded payload,
              raw message, and taint tags.
            </div>
          </Panel>

          <Panel title="Taint Tags">
            <div className="flex flex-wrap gap-2">
              <Badge status="SAFE" />
              <Badge status="UNTRUSTED" />
              <Badge status="TAINTED" />
              <Badge status="BLOCKED" />
              <Badge status="PASSED" />
            </div>
            <p className="text-xs text-muted mt-3 leading-relaxed">
              Tags indicate data provenance. Color is always paired with a
              label.
            </p>
          </Panel>
        </div>
      }
    />
  );
}
