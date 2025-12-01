// Data moved from React into plain JS structures
const skills = {
    languages: [
      "Python",
      "Go",
      "Java",
      "SQL",
      "JavaScript/TypeScript",
      "C/C++",
      "Bash"
    ],
    tools: [
      "Kubernetes",
      "Docker",
      "LangChain",
      "React",
      "Spring Boot",
      "Git & GitHub",
      "Jenkins",
      "Ansible",
      "Pytest"
    ],
    cloud: [
      "AWS Solutions Architect",
      "CloudFront",
      "DynamoDB",
      "S3",
      "RDS",
      "CloudWatch"
    ]
  };
  
  const experience = [
    {
      company: "Aperix",
      role: "Software Engineer",
      period: "Jun 2025 – Current",
      location: "Remote, US",
      highlights: [
        "Developed agent orchestration with LangChain for multi-step tasks (flight/hotel search, itinerary planning)",
        "Hardened reliability with Pydantic JSON schemas, structured outputs, and retry/backoff",
        "Added Pytest suites and GitHub Actions CI to prevent regressions in release pipelines"
      ]
    },
    {
      company: "Zoho Corporation",
      role: "SWE Co-op",
      period: "Jul 2022 – May 2023",
      location: "Chennai, India",
      highlights: [
        "Designed 30+ RESTful Spring Boot APIs, improving performance and testability by 15%",
        "Built bug reporting tool with FFMPEG & MediaRecorder, reducing issue triage time by 25%",
        "Integrated asynchronous NoSQL video storage, improving access latency by 20%"
      ]
    }
  ];
  
  const projects = [
    {
      name: "KubeOps",
      tech: "Kubernetes, Go, Operator SDK, Velero",
      description:
        "Custom Kubernetes Operator automating workload lifecycle with reconcile loops, RBAC, and CRDs",
      highlights: ["Integrated Velero backups", "Automated CI/CD with GitHub workflows"]
    },
    {
      name: "IntelliChat",
      tech: "Python, RAG, LangChain, Vector DB",
      description:
        "Retrieval-Augmented chatbot with vector indexing for context retrieval",
      highlights: [
        "20% improvement in response accuracy",
        "Comprehensive unit/integration testing"
      ]
    },
    {
      name: "Mapease",
      tech: "Java, Spring Boot, Angular, SQL",
      description:
        "Full-stack web application with interactive maps and REST endpoints",
      highlights: ["Leaflet integration", "Automated SQL validation"]
    }
  ];
  
  // Helper to create skill chips
  function renderSkills() {
    const langContainer = document.getElementById("skills-languages");
    const toolsContainer = document.getElementById("skills-tools");
    const cloudContainer = document.getElementById("skills-cloud");
  
    skills.languages.forEach((s) => {
      const span = document.createElement("span");
      span.className = "skill-chip";
      span.textContent = s;
      langContainer.appendChild(span);
    });
  
    skills.tools.forEach((s) => {
      const span = document.createElement("span");
      span.className = "skill-chip";
      span.textContent = s;
      toolsContainer.appendChild(span);
    });
  
    skills.cloud.forEach((s) => {
      const span = document.createElement("span");
      span.className = "skill-chip";
      span.textContent = s;
      cloudContainer.appendChild(span);
    });
  }
  
  // Render experience cards
  function renderExperience() {
    const container = document.getElementById("experience-list");
  
    experience.forEach((exp) => {
      const card = document.createElement("div");
      card.className = "card";
  
      const header = document.createElement("div");
      header.className = "exp-header";
  
      const left = document.createElement("div");
      const role = document.createElement("h3");
      role.className = "exp-role";
      role.textContent = exp.role;
      const company = document.createElement("p");
      company.className = "exp-company";
      company.textContent = exp.company;
      left.appendChild(role);
      left.appendChild(company);
  
      const right = document.createElement("div");
      right.className = "exp-meta";
      const period = document.createElement("p");
      period.className = "exp-period";
      period.textContent = exp.period;
      const location = document.createElement("p");
      location.className = "exp-location";
      location.textContent = exp.location;
      right.appendChild(period);
      right.appendChild(location);
  
      header.appendChild(left);
      header.appendChild(right);
  
      const ul = document.createElement("ul");
      ul.className = "exp-bullets";
  
      exp.highlights.forEach((h) => {
        const li = document.createElement("li");
        const bullet = document.createElement("span");
        bullet.className = "bullet";
        bullet.textContent = "▹";
        const text = document.createElement("span");
        text.textContent = h;
        li.appendChild(bullet);
        li.appendChild(text);
        ul.appendChild(li);
      });
  
      card.appendChild(header);
      card.appendChild(ul);
      container.appendChild(card);
    });
  }
  
  // Render projects
  function renderProjects() {
    const container = document.getElementById("projects-grid");
  
    projects.forEach((proj) => {
      const card = document.createElement("div");
      card.className = "project-card";
  
      const name = document.createElement("h3");
      name.className = "project-name";
      name.textContent = proj.name;
  
      const tech = document.createElement("p");
      tech.className = "project-tech";
      tech.textContent = proj.tech;
  
      const desc = document.createElement("p");
      desc.className = "project-desc";
      desc.textContent = proj.description;
  
      const ul = document.createElement("ul");
      ul.className = "project-bullets";
  
      proj.highlights.forEach((h) => {
        const li = document.createElement("li");
        const dot = document.createElement("span");
        dot.textContent = "•";
        const text = document.createElement("span");
        text.textContent = h;
        li.appendChild(dot);
        li.appendChild(text);
        ul.appendChild(li);
      });
  
      card.appendChild(name);
      card.appendChild(tech);
      card.appendChild(desc);
      card.appendChild(ul);
      container.appendChild(card);
    });
  }
  
  // Smooth scroll and active link handling
  function setupNavigation() {
    const nav = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const scrollButtons = document.querySelectorAll("[data-target]");
  
    function setActiveLink(sectionId) {
      navLinks.forEach((link) => {
        if (link.getAttribute("data-target") === sectionId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    function scrollToSection(id) {
      const element = document.getElementById(id);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth" });
    }
  
    scrollButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        scrollToSection(target);
      });
    });
  
    window.addEventListener("scroll", () => {
      // Nav background on scroll
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
  
      // Active section highlight
      let currentSection = "home";
      sections.forEach((sect) => {
        const rect = sect.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = sect.id;
        }
      });
      setActiveLink(currentSection);
    });
  }
  
  // Initialize when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderExperience();
    renderProjects();
    setupNavigation();
  });
  