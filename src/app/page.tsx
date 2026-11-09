import React from "react";
import { Shell } from "@/components/layout/shell";
import { HomeHero } from "@/components/home";
import { LessonCard, FourStepLoop, QuickStartPanel } from "@/components/lesson";
import { ChallengeCard } from "@/components/challenge";
import { getAllLessons } from "@/lib/lessons";

export default function Home() {
  const lessons = getAllLessons();

  return (
    <Shell
      lessons={lessons}
      stageContent={
        <div className="flex flex-col gap-8 max-w-3xl">
          {/* Hero */}
          <HomeHero />

          {/* Lesson cards */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
              Lessons
            </h2>
            <div className="grid gap-3">
              {lessons.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </div>
          </div>

          {/* Challenge card */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
              Challenges
            </h2>
            <ChallengeCard
              href="/challenges/inbox-hacker"
              title="Inbox Hacker"
              description="5 progressive levels attacking a rule-based toy agent via email injections."
              levelCount="5 levels"
              icon="⚡"
            />
          </div>
        </div>
      }
      detailsContent={
        <div className="flex flex-col gap-4">
          <FourStepLoop />
          <QuickStartPanel />
        </div>
      }
    />
  );
}
