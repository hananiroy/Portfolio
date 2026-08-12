// All portfolio content — enhanced professionally from resume context.

export const PROFILE = {
  name: "Nurizzah Hanani Roslan",
  firstName: "Nurizzah",
  lastName: "Hanani",
  roles: ["Computer Science Graduate", "Software Developer", "IT & Cybersecurity Enthusiast"],
  tagline:
    "Exploring technology. Building solutions. Solving problems.",
  location: "Kuala Lumpur, Malaysia",
  email: "hananiroy@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/nurizzah-hanani/",
  resume: "/resume.pdf",
  availability: "Open to roles in IT applications, software development, AI & cybersecurity",
};

export const ABOUT = {
  intro:
    "I am a Computer Science graduate from Universiti Teknologi MARA (UiTM) with a background in software development, networking, and cybersecurity. I enjoy building practical web and mobile applications and picking up new technologies through hands-on projects and learning.",
  chapters: [
    {
      no: "01",
      title: "The Foundation",
      body: "Bachelor of Computer Science (Hons.) in Netcentric Computing at UiTM. Coursework spanned computer networks, network security, distributed systems, web & mobile development, cybersecurity, IoT and software engineering. It is a broad base that lets me move comfortably between the front-end, the back-end and the network layer.",
    },
    {
      no: "02",
      title: "The Craft",
      body: "I build web and mobile applications using modern technologies, with experience in Laravel, Vue.js, Flutter, Firebase, SQL, and programming languages including C++, Java, and JavaScript. I care about software that is usable, reliable and genuinely helpful.",
    },
    {
      no: "03",
      title: "The Direction",
      body: "I am currently deepening my knowledge in AI and cybersecurity — holding Google AI and Google Cybersecurity certificates and Cisco's CCNAv7. I am looking to grow my career in IT applications, software development, AI or cybersecurity within a team that values curiosity and quality.",
    },
  ],
};

export const PROJECTS = [
  {
    id: "4uspace",
    name: "4USpace",
    kind: "Final Year Project · Mobile Application",
    year: "2025",
    image:
      "/4us.jpg",
    problem:
      "Finding and booking short-term spaces in Malaysia can be challenging, with users often relying on fragmented platforms to discover and compare available spaces.",
    solution:
      "A geolocation-powered mobile app that lets users discover, filter and book available spaces on an interactive map, with customizable filters tailored to what they need.",
    tech: ["Flutter", "Firebase", "Dart", "Google Maps API"],
    contribution:
      "Designed and developed the mobile application end-to-end with map-based search, filtering logic, authentication, booking flow and Firebase data integration.",
    features: ["Map-based space search", "Customizable filters", "Booking flow", "Firebase auth & storage"],
  },
  {
    id: "hsse-pipp",
    name: "HSSE PIPP Centralized System",
    kind: "Internship · Growth RTS Sdn Bhd",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGUlMjBzY3JlZW4lMjBkYXJrJTIwbW9vZHl8ZW58MHx8fHwxNzg2MzU0NDQ3fDA&ixlib=rb-4.1.0&q=85",
    problem:
      "The organisation needed a single, reliable internal system to centralise Health, Safety, Security & Environment (HSSE) processes previously scattered across manual workflows.",
    solution:
      "An internal web-based platform to centralise HSSE data, tested and documented for long-term maintainability and adoption across teams.",
    tech: ["HTML", "CSS", "JavaScript", "Web"],
    contribution:
      "Handled front-end implementation, carried out system testing and bug fixing, wrote documentation, and provided ongoing support & maintenance.",
    features: ["Responsive front-end", "System testing & QA", "Technical documentation", "Support & maintenance"],
  },
  {
    id: "hotel-booking",
    name: "Hotel Booking Management System",
    kind: "Web Application · Laravel",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvciUyMHdhcm18ZW58MHx8fHwxNzg2MzU0NDY5fDA&ixlib=rb-4.1.0&q=85",
    problem:
      "Manual hotel operations make it hard to track room availability, manage bookings and keep customer records consistent.",
    solution:
      "A comprehensive Laravel web system that manages room availability, bookings and customer information efficiently through a clean admin workflow.",
    tech: ["Laravel", "PHP", "MySQL", "Blade"],
    contribution:
      "Built the full CRUD system — room & booking management, customer records, and availability logic with an admin dashboard.",
    features: ["Room availability engine", "Booking management", "Customer records (CRUD)", "Admin dashboard"],
  },
  {
    id: "golf-counter",
    name: "Smart Training Golf Counter",
    kind: "IoT · Embedded Systems",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1592659762303-90081d34b277?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwyfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljcyUyMG1pY3JvY29udHJvbGxlciUyMG1hY3JvfGVufDB8fHx8MTc4NjM1NDQ2OXww&ixlib=rb-4.1.0&q=85",
    problem:
      "Golfers practising alone have no simple way to track how many balls they've hit and monitor their progress during a session.",
    solution:
      "An IoT golf training counter running on an ESP32-WROOM-32 that detects and counts shots, displaying the live ball count on an LCD screen.",
    tech: ["ESP32-WROOM-32", "C++", "Arduino", "LCD Display"],
    contribution:
      "Developed the embedded firmware and sensor logic, wired the hardware, and implemented the real-time LCD counter.",
    features: ["Real-time shot counting", "ESP32 firmware", "LCD live display", "Progress monitoring"],
  },
  {
    id: "kppim-network",
    name: "KPPIM Network Infrastructure",
    kind: "Networking · Infrastructure Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VydmVyJTIwcm9vbSUyMGV0aGVybmV0JTIwY2FibGVzfGVufDB8fHx8MTc4NjM1NDQ2OXww&ixlib=rb-4.1.0&q=85",
    problem:
      "The existing network struggled with speed and latency, hurting the online experience for users across the site.",
    solution:
      "Designed and implemented a new network architecture that improves internet speed, reduces latency and delivers a more responsive online experience.",
    tech: ["Cisco", "Network Design", "Wireshark", "Routing & Switching"],
    contribution:
      "Planned the network topology, configured routing & switching, and validated performance improvements against the requirements.",
    features: ["New network topology", "Latency reduction", "Speed optimisation", "Performance validation"],
  },
  {
    id: "zakat",
    name: "Zakat Accessibility Website",
    kind: "Web Development · Inclusive Design",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGUlMjBzY3JlZW4lMjBkYXJrJTIwbW9vZHl8ZW58MHx8fHwxNzg2MzU0NDQ3fDA&ixlib=rb-4.1.0&q=85",
    problem:
      "A zakat organisation's website needed to be usable by everyone — including colour-blind users often overlooked in standard design.",
    solution:
      "An accessible website built with inclusive design considerations, ensuring usability for both typical and colour-blind users.",
    tech: ["HTML", "CSS", "Accessibility (a11y)", "Inclusive Design"],
    contribution:
      "Implemented accessible layouts, colour-safe palettes and clear contrast, testing against colour-blindness use cases.",
    features: ["Colour-blind safe palette", "Accessible layouts", "High contrast", "Inclusive UX"],
  },
];

export const EXPERIENCE = [
  {
  role: "IT & Cybersecurity Engineer Trainee",
  company: "Mtechnix Sdn Bhd — K-Youth Programme",
  location: "Kuala Lumpur, Malaysia",
  period: "Jun 2026 — Oct 2026",
  points: [
    "Monitored and maintained the organisation's security posture aligned with ISO 27001 & ISO 27002 frameworks.",
  ],
},
  {
    role: "Software Application Developer Intern",
    company: "Growth RTS Sdn Bhd",
    location: "Petaling Jaya, Selangor",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Translated design mockups into responsive interfaces to improve UI/UX.",
      "Collaborated with the team to support system deployment and maintenance.",
    ],
  },
];

export const SKILLS = {
  Languages: ["C++", "JavaScript", "HTML", "CSS", "PHP", "Dart", "Python"],
  Frameworks: ["Laravel", "Flutter", "Vue.js"],
  Databases: ["MS SQL Server", "MySQL", "Firebase"],
  Tools: ["Git", "VS Code", "Wireshark", "Android Studio"],
};

export const CERTS = [
  { name: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy" },
  { name: "Google AI Professional Certificate", issuer: "Coursera" },
  { name: "Google Cybersecurity Professional Certificate", issuer: "Coursera" },
];

export const AWARDS = [
  { title: "HatchQuest @ UiTM", result: "1st Place Winner", year: "2024" },
  { title: "HatchQuest @ UTM", result: "Top 10 Finalist", year: "2024" },
  { title: "Varsity Hackathon", result: "Top 15 Finalist", year: "2024" },
  { title: "PPKOMP (Sulung Division)", result: "Silver Medal", year: "2025" },
  { title: "PPKOMP (Sulung Division)", result: "Bronze Medal", year: "2024" },
];
