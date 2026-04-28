import type { Project } from "@/types/project";
import Project1Image from "@/assets/projects/project1.png";
import Project2Image from "@/assets/projects/project2.png";
import Project3Image from "@/assets/projects/project3.png";
import Project4Image from "@/assets/projects/project4.png";
import Project5Image from "@/assets/projects/project5.png";
import Project6Image from "@/assets/projects/project6.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Ink Inventory",
    description:
      "Sistem manajemen inventaris real-time dengan fitur pelacakan berbasis kode QR otomatis untuk akurasi stok masuk/keluar dan pemantauan operasional.",
    techStack: ["Go (Fiber)", "Vue.js", "PostgreSQL", "QR Code"],
    image: Project1Image,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Glory Metal",
    description:
      "Aplikasi desktop untuk manajemen kemasan koin yang terintegrasi dengan timbangan Mettler Toledo dan printer Zebra untuk pencatatan otomatis.",
    techStack: ["Electron", "Vue.js", "Express", "Hardware Integration"],
    image: Project2Image,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Yani Pastary",
    description:
      "Platform e-commerce premium dengan katalog interaktif dan WhatsApp Direct Checkout untuk memperluas jangkauan pasar digital toko pastry.",
    techStack: ["Vue 3", "Tailwind CSS", "Shadcn Vue"],
    image: Project3Image,
    demoUrl: "https://yani-pastry.vercel.app/",
    repoUrl: "https://github.com/raihannh-dev/yani-pastry",
  },
  {
    id: 4,
    title: "CRM ISP",
    description:
      "Sistem CRM terpadu untuk ISP dengan 4 peran pengguna, mengelola tiket layanan, pembayaran, dan otomatisasi alur kerja pelanggan.",
    techStack: ["Next.js", "FastAPI", "MySQL", "Full Stack"],
    image: Project4Image,
    demoUrl: "",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "PusGo (Pusat Gempa Online)",
    description:
      "Sistem informasi gempa bumi real-time yang mengintegrasikan API BMKG dengan peta interaktif Leaflet untuk visualisasi lokasi dinamis.",
    techStack: ["React.js", "Express", "Prisma", "MySQL", "Leaflet"],
    image: Project5Image,
    demoUrl: "https://pusgo.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Fajar Indo Rubber",
    description:
      "Website company profile manufaktur karet dengan CMS mandiri untuk pengelolaan produk seal dan gasket custom secara responsif.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "CMS"],
    image: Project6Image,
    demoUrl: "https://spesialiscetakkaret.com/",
    repoUrl: "#",
  },
];
