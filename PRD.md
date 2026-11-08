# Agent Protocol Explorer: Product Requirements

Draft v0.1 · 8 Nov 2026 · Owner: Kaustubh

## 1. The idea in one line

A website where people learn how AI agents talk to tools, and how those conversations get attacked, by watching real messages step by step and then trying the attack themselves.

## 2. The problem

- AI agents are moving into real products fast. The rules they use (tool calling, MCP, agent to agent messages) are new and poorly understood.
- Most content is blog posts. Reading about prompt injection is not the same as seeing it happen.
- Developers and security teams have almost no hands-on place to practice.

## 3. Who it is for

- **Developers** building with agents who want to avoid obvious security mistakes.
- **Security engineers** moving into AI who need to learn the attack surface.
- **Teams** who need to train people on this (later).

## 4. Goals and non-goals

**Goals**

- Make agent protocols and attacks easy to see and understand.
- Let people practice safely in a sandbox.
- Make adding a new lesson fast.
- Keep the site quick and smooth.

**Non-goals (for now)**

- Not a real hacking tool. Every target is fake.
- Not a general AI course.
- Not a place to attack real systems.

## 5. How a lesson works

Every lesson follows the same four steps:

1. **Watch.** An animated trace shows the messages moving between user, agent and tools.
2. **Break.** The user performs the attack in a challenge.
3. **Patch.** The user turns on a defense.
4. **Attack again.** The same attack is replayed to see if the defense holds.

In every step the user can see the decoded message and which parts of it came from untrusted sources.

## 6. Versions

### v1: Learn by watching and trying

**Goal:** one person can finish a lesson and beat a first challenge in one sitting.

**Ships**

- 5 lessons: tool calling, MCP handshake, prompt injection, tool poisoning, data exfiltration.
- Trace player with decoded message panel, log strip and normal / attack / defended modes.
- Inbox Hacker: 5 levels, run by a simple rule based toy agent.
- A few real model transcripts, recorded once and replayed.
- Progress saved in the browser. No login.

**Not in v1:** accounts, live AI, payments.

**Check:** a new visitor finishes one lesson and clears level 1 in about 10 minutes.

### v2: Learn by doing, with accounts

**Goal:** give people a reason to come back and share.

**Ships**

- Sign in and saved progress.
- A challenge for every attack lesson.
- Shareable results and badges.
- Playground with a live model (sign in required, rate limited, spending cap).
- More lessons: confused deputy, least privilege, approval gates, sandboxing.

**Check:** people return for a second session and share results.

### v3: Teams and scale

**Goal:** make it useful for companies.

**Ships**

- Team dashboard and progress tracking.
- Paid plan for team training.
- Custom scenarios for a company.
- Adaptive hints from AI.
- Translations.
- Separate backend service if traffic or features need it.

**Check:** first paying team.

## 7. Features by version

| Feature | v1 | v2 | v3 |
| --- | --- | --- | --- |
| Lessons with trace player | Yes | Yes | Yes |
| Decoded messages and taint tags | Yes | Yes | Yes |
| Inbox Hacker challenge | Yes | Yes | Yes |
| Challenges for every attack | No | Yes | Yes |
| Progress saved | Browser only | Account | Account and team |
| Live model playground | No | Yes | Yes |
| Share and badges | No | Yes | Yes |
| Team dashboard and billing | No | No | Yes |
| AI hints | No | No | Yes |
| Translations | No | No | Yes |

## 8. Design language

**Feel:** a calm terminal. Technical and focused, not loud. Easy on the eyes for long sessions.

**Colors**

| Name | Hex | Use |
| --- | --- | --- |
| Background | #12171C | Page |
| Panel | #171D23 | Cards and panels |
| Line | #313B44 | Borders |
| Text | #CFD8DE | Main text |
| Muted | #93A0A8 | Labels and hints |
| Green | #5FC994 | Safe, trusted, main action |
| Red | #E36F7C | Attack, untrusted, danger |
| Amber | #D5AE55 | Warnings and hints |
| Blue | #6FB0D6 | The agent and info |

**Color rules**

- Green means safe or go. Red means attack or danger. Amber means careful. Blue means the agent.
- Never use color alone. Pair it with a word like TAINTED, BLOCKED or PASSED.

**Type**

- One font: JetBrains Mono, everywhere.
- Sizes from 12 to 28. Nothing smaller than 12.

**Shapes**

- Square corners and thin 1px borders.
- Filled buttons only for the main action. Everything else is outlined or softly tinted.

**Motion**

- Small and slow. Only movement and fade.
- One soft glow is allowed: on the key attack arrow.
- Every animation has a pause button and respects the reduced motion setting.

**Layout**

- Same three zones on every lesson page: left for navigation, center for the stage, right for details.
- Challenge pages keep the same shell. Only the content changes.

**Voice**

- Short, plain and direct. Say what happened and why.

**Do not**

- No scanlines, no neon colors, no big glows, no pure black background.

**Accessibility**

- Text contrast at least 4.5 to 1.
- Buttons at least 44 px tall.
- Every diagram has a text description.

## 9. Tech in brief

- **Next.js** with TypeScript, in a monorepo.
- **Lessons are data.** Each lesson is a folder with an MDX file, a trace file and a challenge file. Adding a lesson means adding files.
- **Simulator first.** Challenges run a simple rule based agent in the browser. It is instant and free.
- **Easy to split later.** Shared contracts, a pure logic package and an API client keep the web app separate from server logic, so a backend can be added later without a rewrite.
- **Fast.** Lesson pages are pre-built. Only the player and editor load JavaScript. A JavaScript budget is checked in CI.

## 10. Risks

| Risk | What we do |
| --- | --- |
| Live model costs and abuse | Sign in, rate limits, spending cap, fall back to the simulator |
| Toy agent feels fake | Add recorded traces from real models |
| Each lesson takes too long to make | Lessons as data, a scaffold script, a small block library |
| Scope grows | Keep v1 to five lessons and one challenge |

## 11. Open questions

- Final product name.
- Free forever, or free with a paid team plan?
- Which five lessons come first?
- How do we get the first 1,000 users?

## 12. Design links

- Lesson and challenge screens: https://claude.ai/artifact/RPBDEY7Dr7rPgiVNkgYweR
- Envelope animation: https://claude.ai/artifact/9LiZ5DNMFzVUGESDtvGDka
