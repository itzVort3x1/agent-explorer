import * as fs from 'fs';
import * as path from 'path';

/**
 * CLI utility to scaffold a new lesson folder structure.
 * Usage: npx ts-node scripts/scaffold-lesson.ts <lesson-slug>
 */
const lessonSlug = process.argv[2];

if (!lessonSlug) {
  console.error('Usage: npx ts-node scripts/scaffold-lesson.ts <lesson-slug>');
  process.exit(1);
}

const targetDir = path.join(process.cwd(), 'content', 'lessons', lessonSlug);

if (fs.existsSync(targetDir)) {
  console.error(`Error: Lesson directory already exists: ${targetDir}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const mdxTemplate = `# ${lessonSlug}\n\nLesson overview and walkthrough.\n\n## Watch\nTrace description here.\n`;
const traceTemplate = JSON.stringify(
  {
    id: `trace-${lessonSlug}`,
    mode: 'normal',
    steps: [],
  },
  null,
  2
);
const challengeTemplate = JSON.stringify(
  {
    id: `challenge-${lessonSlug}`,
    lessonId: lessonSlug,
    title: `Challenge: ${lessonSlug}`,
    mission: 'Challenge mission statement',
    targetGoal: 'Target outcome',
    initialInput: '',
    defenses: [],
  },
  null,
  2
);

fs.writeFileSync(path.join(targetDir, 'lesson.mdx'), mdxTemplate);
fs.writeFileSync(path.join(targetDir, 'trace.json'), traceTemplate);
fs.writeFileSync(path.join(targetDir, 'challenge.json'), challengeTemplate);

console.log(`✓ Successfully scaffolded new lesson at: ${targetDir}`);
