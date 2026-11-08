import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { Panel } from "@/components/ui/panel";
import { getAllLessons } from "@/lib/lessons";

export default function Home() {
  const lessons = getAllLessons();

  return (
    <Shell
      lessons={lessons}
      stageContent={
        <div className="flex flex-col gap-8 max-w-3xl">
          {/* Hero */}
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-text tracking-tight">
              Agent Protocol Explorer
            </h1>
            <p className="text-sm text-muted leading-relaxed max-w-xl">
              A hands-on playground where you learn how AI agents talk to tools
              — and how those conversations get attacked. Watch real message
              traces, break simulated agents, and verify your defenses.
            </p>
          </div>

          {/* Lesson cards */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
              Lessons
            </h2>
            <div className="grid gap-3">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className="group block"
                >
                  <Panel>
                    <div className="flex items-start gap-4">
                      <span className="text-lg font-bold text-muted/40 shrink-0 w-8 text-right">
                        {String(lesson.order).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-text group-hover:text-blue transition-colors">
                          {lesson.title}
                        </div>
                        <div className="text-xs text-muted mt-1 leading-relaxed">
                          {lesson.summary}
                        </div>
                      </div>
                      <span className="text-xs text-muted shrink-0">
                        ~{lesson.durationMinutes} min
                      </span>
                    </div>
                  </Panel>
                </Link>
              ))}
            </div>
          </div>

          {/* Challenge card */}
          <div>
            <h2 className="text-xs uppercase tracking-widest text-muted font-semibold mb-4">
              Challenges
            </h2>
            <Link href="/challenges/inbox-hacker" className="group block">
              <Panel>
                <div className="flex items-start gap-4">
                  <span className="text-lg shrink-0 w-8 text-center">⚡</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-text group-hover:text-red transition-colors">
                      Inbox Hacker
                    </div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">
                      5 progressive levels attacking a rule-based toy agent via
                      email injections.
                    </div>
                  </div>
                  <span className="text-xs text-muted shrink-0">5 levels</span>
                </div>
              </Panel>
            </Link>
          </div>
        </div>
      }
      detailsContent={
        <div className="flex flex-col gap-4">
          <Panel title="The 4-Step Loop">
            <ol className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-green font-semibold shrink-0">1.</span>
                <div>
                  <span className="font-semibold text-text">Watch</span>
                  <span className="text-muted">
                    {" "}
                    — Animated trace of messages between user, agent, and tools.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red font-semibold shrink-0">2.</span>
                <div>
                  <span className="font-semibold text-text">Break</span>
                  <span className="text-muted">
                    {" "}
                    — Execute the exploit in a safe simulator.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber font-semibold shrink-0">3.</span>
                <div>
                  <span className="font-semibold text-text">Patch</span>
                  <span className="text-muted">
                    {" "}
                    — Enable a security defense.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue font-semibold shrink-0">4.</span>
                <div>
                  <span className="font-semibold text-text">Attack Again</span>
                  <span className="text-muted">
                    {" "}
                    — Verify the defense holds.
                  </span>
                </div>
              </li>
            </ol>
          </Panel>

          <Panel title="Quick Start">
            <p className="text-xs text-muted leading-relaxed">
              Pick a lesson from the left sidebar or the cards on this page. Each
              lesson takes about 10 minutes. No account needed — progress is
              saved in your browser.
            </p>
          </Panel>
        </div>
      }
    />
  );
}
