import fs from "fs";
import path from "path";
import type { LessonMetadata } from "@/contracts/lesson";

const LESSONS_DIR = path.join(process.cwd(), "content", "lessons");

/**
 * Lesson title and summary derived from the content folder structure.
 * The MDX files don't have YAML front-matter, so we hard-code the
 * metadata here — aligned with PRD §6 v1 lessons.
 */
const LESSON_CATALOG: Record<
  string,
  { title: string; summary: string; durationMinutes: number }
> = {
  "01-tool-calling": {
    title: "Tool Calling Fundamentals",
    summary:
      "Learn how AI models formulate tool calls, parse parameters, and process tool responses.",
    durationMinutes: 8,
  },
  "02-mcp-handshake": {
    title: "MCP Handshake & Protocol",
    summary:
      "Learn how MCP discovers client capabilities, negotiates transports, and registers servers.",
    durationMinutes: 10,
  },
  "03-prompt-injection": {
    title: "Indirect Prompt Injection",
    summary:
      "Learn how untrusted external data can hijack agent control flow.",
    durationMinutes: 10,
  },
  "04-tool-poisoning": {
    title: "Tool Definition & Return Poisoning",
    summary:
      "Understand what happens when tool definitions or returns are poisoned to manipulate agent decisions.",
    durationMinutes: 10,
  },
  "05-data-exfiltration": {
    title: "Secret Token Leakage & Egress",
    summary:
      "Learn how covert channels and external tool calls leak private context data.",
    durationMinutes: 10,
  },
};

/**
 * Returns metadata for all lessons, sorted by order.
 * Reads the content/lessons/ directory to discover available slugs.
 */
export function getAllLessons(): LessonMetadata[] {
  const slugs = fs
    .readdirSync(LESSONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  return slugs.map((slug, i) => {
    const catalog = LESSON_CATALOG[slug];
    return {
      id: slug,
      slug,
      order: i + 1,
      title: catalog?.title ?? slug,
      summary: catalog?.summary ?? "",
      durationMinutes: catalog?.durationMinutes ?? 10,
    };
  });
}

/**
 * Returns metadata for a single lesson by slug, or null if not found.
 */
export function getLessonBySlug(slug: string): LessonMetadata | null {
  const all = getAllLessons();
  return all.find((l) => l.slug === slug) ?? null;
}
