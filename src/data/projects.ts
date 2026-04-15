import type { Project } from "@/types/project";
import AICodingCLI from "@/assets/AICodingCLI.png"
import WhatsappChatbot from "@/assets/WhatsappChatbot.png"

export const projects: Project[] = [
    {
      id: 1,
      title: "AI Vibe Coding CLI Tools",
      description: "A next-gen command line interface that lets developers build faster — just by talking to their terminal. Code, create, and explore new ideas through intelligent prompts.",
      image: AICodingCLI,
      link: "/projects/project-1"
    },
    {
      id: 2,
      title: "Smart WhatsApp AI CS",
      description: "A WhatsApp AI Assistant that never sleeps. It handles routine inquiries instantly, learns from your knowledge base, and connects to your team when human judgment matters most.",
      image: WhatsappChatbot,
      link: "/projects/project-2"
    },
    {
      id: 3,
      title: "AI Vibe Coding CLI Tools",
      description: "A next-gen command line interface that lets developers build faster — just by talking to their terminal. Code, create, and explore new ideas through intelligent prompts.",
      image: AICodingCLI,
      link: "/projects/project-3"
    }
  ]