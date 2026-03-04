import type { Project } from "../_types/project";

export const projects: Array<Project> = [
  {
    id: "dubdubsings",
    name: "DubDubSings",
    tagline: "Make Siri sing your favorite song!",
    description:
      "Initially introduced as SiriSings for my WWDC23 Swift Student Challenge Submission, DubDubSings serves as an interactive platform for aspiring songwriters. It utilizes Apple's AVSpeechSynthesizer to convert text into spoken words and bring musical ideas to life with expressive audio controls.",
    startDate: "2023-04-01",
    endDate: null,
    status: "active",
    iconUrl: "/projects/sirisings/icon.png",
    tags: [
      "Swift",
      "SwiftUI",
      "iPadOS",
      "Text-to-Speech",
      "Audio Engineering",
      "AVFoundation",
      "WWDC23",
    ],
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/th/app/dubdubsings/id6451266026",
        icon: "app-store",
      },
      {
        title: "WWDC Scholars",
        url: "https://www.wwdcscholars.com",
        icon: "external",
      },
      {
        title: "GitHub",
        url: "https://github.com/inedible-dev/sirisings",
        icon: "github",
      },
    ],
    highlights: [
      "WWDC23 Swift Student Challenge Submission",
      "Featured on WWDC Scholars",
      "Published on App Store",
    ],
    featured: true,
  },
  {
    id: "musicbar",
    name: "MusicBar",
    tagline: "Easy, Lightweight Status Bar Media Visualizer",
    description:
      "A macOS lightweight status bar media visualizer that integrates directly into the macOS status bar. MusicBar provides instant visual feedback on the current media without disrupting your workflow, featuring real-time audio visualization and seamless integration with Apple Music and Spotify.",
    startDate: "2022-11-01",
    endDate: null,
    status: "archived",
    organization: "inedible.dev",
    organizationUrl: "https://inedible.dev",
    iconUrl: "/projects/musicbar/icon.png",
    tags: [
      "Swift",
      "macOS",
      "SwiftUI",
      "Frontend",
      "Astro",
      "Media Visualization",
      "Status Bar",
    ],
    links: [
      {
        title: "Website",
        url: "https://musicbar.inedible.dev/",
        icon: "website",
      },
      {
        title: "GitHub",
        url: "https://github.com/inedible-dev/MusicBar",
        icon: "github",
      },
    ],
    highlights: [
      "Built with SwiftUI for native macOS integration",
      "Real-time audio visualization",
      "Supports Apple Music and Spotify",
    ],
    featured: true,
  },
  {
    id: "mixr",
    name: "mixr",
    tagline: "Lightweight Virtual Mixer",
    description:
      "My WWDC22 Swift Student Challenge Submission - a lightweight virtual mixer designed for everyone from beginners to mix engineers. It allows for referencing music on specific Apple devices and provides individual control over each track or instrument in a song.",
    startDate: "2022-04-01",
    endDate: null,
    status: "active",
    iconUrl: "/projects/mixr/icon.png",
    tags: [
      "Swift",
      "iPadOS",
      "Xcode",
      "Audio Engineering",
      "Figma",
      "WWDC22",
      "Music Production",
    ],
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/th/app/mixr-virtual-mixer/id6447314232",
        icon: "app-store",
      },
      {
        title: "App Store Story",
        url: "https://apps.apple.com/th/story/id1717569875",
        icon: "external",
      },
      {
        title: "WWDC Scholars",
        url: "https://www.wwdcscholars.com",
        icon: "external",
      },
    ],
    highlights: [
      "WWDC22 Swift Student Challenge Submission",
      "Featured in App Store Story",
      "Individual track/instrument control",
    ],
    featured: true,
  },
  {
    id: "scaling-on-lanta",
    name: "Scaling on LANTA",
    tagline: "Driving Multi-GPU Efficiency for LLMs",
    description:
      "Optimizing Large Language Model training through scaling techniques. This project explores weak and strong scaling in LLM training using DeepSpeed, Flash Attention 2, and LoRA. We assessed multi-node efficiency, memory usage, and runtime optimization using NCCL configurations, developing custom tools for performance monitoring, fine-tuning automation, and visualization.",
    startDate: "2024-07-01",
    endDate: "2024-09-01",
    status: "completed",
    organization: "NSTDA Supercomputer Center (ThaiSC)",
    organizationUrl: "https://www.thaisc.or.th",
    tags: [
      "HPC",
      "LLMs",
      "Scalability",
      "DeepSpeed",
      "NCCL",
      "Deep Learning",
      "PyTorch",
      "Python",
      "GPU Computing",
    ],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/Kentakoong/optimize-finetuning-llm",
        icon: "github",
      },
    ],
    highlights: [
      "Showcased at AI Thailand Forum 2024",
      "Multi-GPU training optimization",
      "Custom performance monitoring tools",
    ],
  },
  {
    id: "mtnlog",
    name: "mtnlog",
    tagline: "Simple Multinode Performance Logger for Python",
    description:
      "A simple multinode performance logger for Python, designed to be used similarly to Python's built-in logging module but with a focus on performance logging. It provides a simple API for logging performance data including start and end times, and allows for easy integration with other logging systems.",
    startDate: "2024-07-01",
    endDate: "2024-09-01",
    status: "completed",
    organization: "NSTDA Supercomputer Center (ThaiSC)",
    organizationUrl: "https://www.thaisc.or.th",
    tags: ["Python", "Slurm", "HPC", "Logging", "Performance Monitoring"],
    links: [
      {
        title: "PyPI",
        url: "https://pypi.org/project/mtnlog/",
        icon: "external",
      },
      {
        title: "GitHub",
        url: "https://github.com/Kentakoong/mtnlog",
        icon: "github",
      },
    ],
    highlights: [
      "Published on PyPI for easy installation",
      "Simple API similar to Python's logging module",
      "Designed for HPC environments with Slurm",
    ],
  },
];

// Get all unique tags from projects
export const projectTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

// Get featured projects
export const featuredProjects = projects.filter((p) => p.featured);

// Get active projects
export const activeProjects = projects.filter(
  (p) => p.status === "active" || p.status === "wip"
);
