# Wongkraiwich Chuenchomphu

> Personal portfolio — Software Engineer · Music Integrations · Innovator

A modern, interactive portfolio built with Next.js featuring a Three.js particle wave background, Apple Music integration, and responsive design with dark mode support.

**Live:** [wongkraiwich.dev](https://wongkraiwich.dev)

---

## Tech Stack

| Category      | Technologies                        |
| ------------- | ----------------------------------- |
| **Framework** | Next.js 16 (App Router) · React 19  |
| **Styling**   | Tailwind CSS 4 · tw-animate-css     |
| **3D**        | Three.js · React Three Fiber · Drei |
| **Animation** | Motion · React Fast Marquee         |
| **State**     | Zustand · TanStack Query            |
| **UI**        | Base UI · shadcn · Lucide icons     |
| **Quality**   | Biome · TypeScript · Knip           |

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (or Node.js 18+)

### Development

```bash
# Install dependencies
bun install

# Start dev server (with Turbopack)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & Run

```bash
bun run build
bun run start
```

---

## Project Structure

```bash
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # Home page
│   ├── experiences/       # Work experience & timeline
│   ├── projects/          # Project showcase
│   └── tools/             # Tools & utilities
├── components/            # Reusable components
│   ├── action/            # Theme switcher, etc.
│   ├── background/        # Three.js particle background
│   ├── ui/                # Base UI components
│   └── icons/             # Social & mode icons
├── layouts/               # Navbar, Footer
└── providers/             # React Query, Apple Music
```

---

## Scripts

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `bun run dev`         | Start dev server with Turbopack |
| `bun run build`       | Production build                |
| `bun run start`       | Run production server           |
| `bun run lint`        | Run Biome checks                |
| `bun run lint:fix`    | Fix lint issues                 |
| `bun run lint:strict` | TypeScript strict check         |
| `bun run knip`        | Find unused code                |
