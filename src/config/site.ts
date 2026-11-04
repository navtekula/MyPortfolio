// Centralized configuration for the portfolio.
// Fill in the missing values (marked with TODO) with real information.
// Anything left empty is hidden from the public UI.

export const site = {
  name: "Navdeep Tekula",
  shortName: "Navdeep",
  location: "Hyderabad, Telangana, India",
  role: "Computer Science and Engineering Undergraduate",
  tagline: "AI/ML and open source enthusiast, aspiring software engineer",
  email: "tekulanavdeep@gmail.com",
  phone: "+91 8919900149",
  // TODO: add real profile URLs
  links: {
    github: "", // TODO: https://github.com/<your-handle>
    linkedin: "", // TODO: https://www.linkedin.com/in/<your-handle>
    resume: "/resume.pdf",
  },
  education: {
    institution: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
    degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
    start: "2024",
    graduation: "2028",
    cgpa: "9.69", // NOTE: CV (public/resume.pdf) states 9.78; reconcile before publishing
    secondary: {
      institution: "Sri Chaitanya Junior College, Telangana",
      qualification: "Intermediate (MPC)",
      years: "2022 - 2024",
      score: "978 / 1000",
    },
    ssc: {
      qualification: "Secondary School Certificate",
      year: "2022",
      gpa: "10.0 / 10.0",
    },
  },
  internship: {
    title: "Virtual Internship - MERN Stack with TypeScript",
    org: "Indian Institute of Technology (IIT) Ropar",
    period: "Jan 2026 - Present",
    points: [
      "Developing full-stack applications using the MERN stack and TypeScript.",
      "Designing RESTful APIs with Node.js and Express.",
      "Building responsive frontend interfaces with React.",
      "Integrating MongoDB for efficient data storage.",
      "Applying modular architecture and collaborative Git workflows.",
    ],
  },
  npTel: [
    { course: "The Joy of Computing using Python", score: "95%", cert: "/certs/nptel-python.pdf" },
    { course: "Getting Started with Competitive Programming", score: "82%", cert: "/certs/nptel-cp.pdf" },
  ],
  sih: {
    title: "Smart India Hackathon 2025 - Software Edition",
    problemId: "SIH25101",
    role: "Contributing developer on the winning team",
    team: "Team VignanaSarathi (6 members)",
  },
} as const;

export const skillGroups = [
  {
    title: "Programming languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "AI and machine learning",
    items: ["Generative AI", "Prompt engineering", "Multimodal AI models", "Gemini", "Google AI Studio"],
  },
  {
    title: "Web and software development",
    items: ["Web development", "Open source development", "MERN stack", "RESTful APIs", "Software architecture fundamentals"],
  },
  {
    title: "Developer tools and platforms",
    items: ["Git and GitHub", "Visual Studio Code", "GitHub Copilot", "Google Cloud Run", "Firebase", "Cloudflare Pages"],
  },
  {
    title: "Networking and systems",
    items: ["Computer networking", "Cisco Packet Tracer", "WireShark", "Hadoop architecture concepts", "Distributed systems fundamentals"],
  },
] as const;

export const projects = [
  {
    slug: "vignana-sarathi",
    title: "VignanaSarathi",
    subtitle: "Smart India Hackathon 2025 winning project",
    category: "Smart classroom platform",
    status: "Shipped (team project)",
    summary:
      "A cross-platform smart classroom application for live, interactive teaching over WebRTC, built for low-connectivity regions.",
    image: "/images/vs_logo_dark.png",
    links: {
      github: "", // TODO
      live: "",
    },
  },
  {
    slug: "durga-devi",
    title: "DurgaDevi Student Resources",
    subtitle: "Collaborative web development project",
    category: "Academic resource portal",
    status: "Live",
    summary:
      "A student-facing academic portal centralising course materials, unit notes and conference materials for CBIT students.",
    image: "/images/durgadevi-hero.png",
    links: {
      github: "https://github.com/durgadevi2026/Study-Resource-Website",
      live: "https://durgadevi-resources.pages.dev/",
    },
  },
  {
    slug: "descent",
    title: "Descent",
    subtitle: "Independent game project",
    category: "Third-person action adventure",
    status: "In development",
    summary:
      "An in-development third-person action-adventure game built in Unreal Engine 5, exploring traversal, combat and atmosphere.",
    image: "/images/descent-screenshot.png",
    links: {
      github: "",
      live: "",
    },
  },
] as const;

export const achievements = [
  { title: "Smart India Hackathon 2025 Winner", detail: "Software Edition, Problem Statement SIH25101, as a contributing team member.", cert: "/certs/sih25.pdf" },
  { title: "NPTEL - The Joy of Computing using Python", detail: "Score 95%.", cert: "/certs/nptel-python.pdf" },
  { title: "NPTEL - Getting Started with Competitive Programming", detail: "Score 82%.", cert: "/certs/nptel-cp.pdf" },
] as const;

export const beyondCode = {
  games: ["Alan Wake", "Thief", "Heavy Rain", "The Witcher 3", "Narrative-driven action and thriller games", "Tactical and immersive experiences"],
  cinema: ["Theatrical movie screenings", "Cinematic storytelling and visual direction"],
  reading: ["Physical books", "Continuous learning"],
  technical: ["Software design patterns", "Extreme programming", "Requirements engineering", "Computer networking", "How complex systems work"],
} as const;