<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Agent Protocol Explorer — Project Context & PRD

All agents and contributors working in this repository must align with the **Product Requirements Document (PRD)** located at [`PRD.md`](./PRD.md).

## Core Principles & Specifications from PRD.md

1. **One-Line Concept**: A hands-on website where people learn how AI agents talk to tools and how those conversations get attacked, by watching real messages step by step and trying attacks themselves.
2. **The 4-Step Lesson Loop**:
   - `1. Watch`: Animated trace showing messages between user, agent, and tools with decoded payloads and taint tags.
   - `2. Break`: Interactive challenge where the user executes the exploit in a safe simulator.
   - `3. Patch`: User enables a security defense/mitigation.
   - `4. Attack again`: Replays the attack to verify the defense holds.
3. **5 Core v1 Lessons** (`content/lessons/`):
   - `01-tool-calling`: Tool Calling Fundamentals
   - `02-mcp-handshake`: Model Context Protocol (MCP) Handshake
   - `03-prompt-injection`: Indirect Prompt Injection
   - `04-tool-poisoning`: Tool Definition & Return Poisoning
   - `05-data-exfiltration`: Secret Token Leakage & Egress
4. **Inbox Hacker Challenge** (`content/challenges/inbox-hacker/`):
   - 5 progressive levels attacking a rule-based toy agent via email inputs.
5. **Architecture Boundaries**:
   - `src/contracts/`: Shared schemas, message definitions, and taint tags (`UNTRUSTED`, `TAINTED`, `BLOCKED`, `PASSED`, `SAFE`). Never use color alone.
   - `src/simulator/`: Pure rule-based toy agent, taint tracker, and defense pipeline running in the browser for instant, free simulation.
   - `src/api-client/`: API client abstraction allowing future backend decoupling without UI rewrites.
   - `src/components/layout/`: 3-zone shell (Left: Navigation, Center: Stage, Right: Details).
6. **Design Language**:
   - Calm terminal theme: Background `#12171C`, Panel `#171D23`, Line `#313B44`, Text `#CFD8DE`, Muted `#93A0A8`.
   - Accents: Green `#5FC994` (safe/go), Red `#E36F7C` (danger/attack), Amber `#D5AE55` (warnings), Blue `#6FB0D6` (agent).
   - JetBrains Mono everywhere; square corners and thin 1px borders.

