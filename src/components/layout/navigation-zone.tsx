"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLesson {
  slug: string;
  order: number;
  title: string;
}

interface NavigationZoneProps {
  lessons: NavLesson[];
}

/**
 * Left sidebar — PRD §8 Layout: "left for navigation".
 * Client Component because it uses usePathname() for active-state highlighting.
 */
export const NavigationZone: React.FC<NavigationZoneProps> = ({ lessons }) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-line bg-panel flex flex-col font-mono">
      {/* Logo / title */}
      <div className="px-4 py-4 border-b border-line">
        <Link href="/" className="block">
          <span className="text-sm font-semibold text-text tracking-tight">
            Agent Protocol
          </span>
          <br />
          <span className="text-xs text-muted">Explorer</span>
        </Link>
      </div>

      {/* Lessons */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="text-[10px] uppercase tracking-widest text-muted font-semibold mb-3 px-1">
          Lessons
        </div>
        <ul className="space-y-0.5">
          {lessons.map((lesson) => {
            const href = `/lessons/${lesson.slug}`;
            const isActive = pathname === href;

            return (
              <li key={lesson.slug}>
                <Link
                  href={href}
                  className={`flex items-start gap-2 px-2 py-2 text-xs transition-colors ${
                    isActive
                      ? "text-blue bg-blue/10 border-l-2 border-blue"
                      : "text-text hover:text-blue hover:bg-blue/5 border-l-2 border-transparent"
                  }`}
                >
                  <span className="text-muted shrink-0 w-4 text-right">
                    {String(lesson.order).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{lesson.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Challenges */}
        <div className="text-[10px] uppercase tracking-widest text-muted font-semibold mt-6 mb-3 px-1">
          Challenges
        </div>
        <ul className="space-y-0.5">
          <li>
            <Link
              href="/challenges/inbox-hacker"
              className={`flex items-center gap-2 px-2 py-2 text-xs transition-colors ${
                pathname === "/challenges/inbox-hacker"
                  ? "text-red bg-red/10 border-l-2 border-red"
                  : "text-text hover:text-red hover:bg-red/5 border-l-2 border-transparent"
              }`}
            >
              <span className="text-muted shrink-0 w-4 text-right">⚡</span>
              <span className="leading-snug">Inbox Hacker</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-line">
        <span className="text-[10px] text-muted">v0.1 · Learn & Break</span>
      </div>
    </aside>
  );
};
