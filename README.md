# Agent Protocol Explorer

> A hands-on interactive playground where developers and security engineers learn how AI agents communicate with tools, and how those protocols get exploited and defended.

---

## 💡 Overview

AI agents are rapidly being integrated into production systems. The protocols and mechanics they rely on—such as tool calling, Model Context Protocol (MCP), and agent-to-agent messaging—introduce entirely new attack surfaces like prompt injection, tool poisoning, and data exfiltration.

Most educational resources are static blog posts. **Agent Protocol Explorer** bridges the gap with an interactive, simulator-first environment where users can watch real message traces, break simulated agents through hands-on challenges, and verify defensive patches.

---

## 🎯 Target Audience

- **Developers**: Building agentic workflows who need to prevent security flaws before deploying to production.
- **Security Engineers**: Transitioning into AI security who want hands-on familiarity with agent attack surfaces.
- **Teams**: Looking for interactive, scenario-based security training.

---

## 🔄 The 4-Step Lesson Loop

Every lesson follows a structured, repeatable cycle:

```
[ 1. Watch ] ───▶ [ 2. Break ] ───▶ [ 3. Patch ] ───▶ [ 4. Attack Again ]
Animated Trace     Interactive        Enable Security     Verify Defense
 & Decoded Log      Challenge             Defense             Holds
```

1. **Watch**: Inspect step-by-step animated message traces between the user, agent, and tools with decoded payloads and taint tags.
2. **Break**: Exploit an insecure agent configuration in a sandboxed, browser-based challenge.
3. **Patch**: Apply security mitigations (e.g., input sanitization, least privilege, human approval gates).
4. **Attack Again**: Replay the exploit to verify that the defense successfully neutralizes the vulnerability.

---

## 🗺️ Product Roadmap

### v1: Learn by Watching & Trying (MVP)
- **5 Core Lessons**:
  - Tool Calling Fundamentals
  - MCP Handshake & Protocol
  - Indirect Prompt Injection
  - Tool Poisoning
  - Data Exfiltration
- **Trace Player**: Step-by-step message replay, decoded payload inspector, taint tag indicators, and state toggles (*Normal* / *Attack* / *Defended*).
- **Inbox Hacker Challenge**: 5 progressive levels against a rule-based toy agent.
- **Client-Side Simulator**: In-browser execution with local progress persistence (no accounts required).

### v2: Learn by Doing (Accounts & Live Playground)
- User accounts and cross-device saved progress.
- Dedicated challenges for all attack lessons.
- Shareable proof-of-completion badges.
- Live model playground with rate limiting and spending caps.
- Advanced lessons: Confused Deputy, Least Privilege, Approval Gates, Sandboxing.

### v3: Enterprise & Teams
- Organization dashboards and team progress analytics.
- Custom enterprise attack scenarios.
- AI-driven adaptive hints.
- Multi-language localization.

---

## 🎨 Design Language

- **Aesthetic**: Calm terminal — technical, focused, and minimal visual noise for extended sessions.
- **Palette**:
  - Background: `#12171C`
  - Panel / Cards: `#171D23`
  - Border Lines: `#313B44`
  - Text: `#CFD8DE`
  - Accent Colors: Green (`#5FC994`), Red (`#E36F7C`), Amber (`#D5AE55`), Blue (`#6FB0D6`)
- **Typography**: Single font family: `JetBrains Mono`.
- **Layout**: Predictable 3-zone stage (Navigation | Interactive Stage | Inspection Details).

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Lessons as Data**: MDX-driven content coupled with structured trace definitions and challenge schemas.
- **Simulator-First**: Fast, rule-based simulated agent execution entirely within the client runtime.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or v22.x recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd agent-explorer
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## 🔒 Security & Sandbox Disclaimer

All targets, models, and systems demonstrated or simulated within Agent Protocol Explorer are safe, contained mock environments. The platform is strictly an educational resource and is not intended or equipped for targeting real-world systems.
