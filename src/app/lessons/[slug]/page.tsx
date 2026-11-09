import React, { Suspense } from "react";
import { Shell } from "@/components/layout/shell";
import { Panel } from "@/components/ui/panel";
import { TaintLegend } from "@/components/ui/taint-legend";
import { LessonHeader, LessonStepper } from "@/components/lesson";
import { getAllLessons, getLessonBySlug } from "@/lib/lessons";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
      <LessonHeader
        order={lesson?.order}
        durationMinutes={lesson?.durationMinutes}
        title={title}
        summary={summary}
      />

      <LessonStepper activeIndex={0} />

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

      <LessonStepper activeIndex={0} />

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

          <TaintLegend />
        </div>
      }
    />
  );
}
