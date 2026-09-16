import { ProfileConfig, TechItem, ProjectItem } from '../types';

export const DEFAULT_PROFILE_CONFIG: ProfileConfig = {
  name: 'ManiKandan',
  role: 'Full Stack Developer',
  githubUsername: 'ManiKandan2403',
  email: 'manikandanmagesh001@gmail.com',
  portfolioUrl: 'https://github.com/ManiKandan2403/Portfolio',
  linkedinUrl: '',
  typingPhrases: [
    'Full Stack Developer 💻',
    'Building Modern Web Experiences ✨',
    'Passionate Problem Solver 🚀',
    'Continuous Learner & Tech Explorer 📚'
  ],
  primaryAccent: '2563EB',
  secondaryAccent: '7C3AED',
  bio: {
    whatIBuild: 'Modern, responsive web applications utilizing component-based architectures.',
    currentLearning: 'Modern full-stack ecosystems, TypeScript mastery, and cloud architecture.',
    interests: 'Modern JavaScript/TypeScript, UI/UX Design Systems, API Engineering.',
    careerGoal: 'Building high-impact web products that solve real-world problems.',
    askMeAbout: 'JavaScript, Frontend development, CSS/Tailwind, and web performance.',
    funFact: 'When not coding, I enjoy discovering new developer tools and refining UI interactions.'
  },
  visibleSections: {
    hero: true,
    illustration: true,
    about: true,
    techStack: true,
    projects: true,
    stats: true,
    snake: true,
    trophies: true,
    socials: true,
    footer: true
  }
};

export const INITIAL_TECH_ITEMS: TechItem[] = [
  // Languages
  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    purpose: 'Client-side dynamics & full-stack logic',
    badgeCode: 'js',
    enabled: true
  },
  {
    id: 'ts',
    name: 'TypeScript',
    category: 'languages',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    purpose: 'Type-safe scalable codebases',
    badgeCode: 'ts',
    enabled: true
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'languages',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    purpose: 'Accessible semantic structures',
    badgeCode: 'html',
    enabled: true
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'languages',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    purpose: 'Responsive layouts & animations',
    badgeCode: 'css',
    enabled: true
  },

  // Frontend
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    purpose: 'Component-driven declarative interfaces',
    badgeCode: 'react',
    enabled: true
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg',
    purpose: 'Utility-first modern styling',
    badgeCode: 'tailwind',
    enabled: true
  },
  {
    id: 'vite',
    name: 'Vite',
    category: 'frontend',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg',
    purpose: 'Next-generation fast bundler',
    badgeCode: 'vite',
    enabled: true
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    purpose: 'High-performance asynchronous server runtime',
    badgeCode: 'nodejs',
    enabled: true
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    purpose: 'RESTful APIs and routing middleware',
    badgeCode: 'express',
    enabled: true
  },

  // Database
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    purpose: 'NoSQL document data storage',
    badgeCode: 'mongodb',
    enabled: true
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'database',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    purpose: 'ACID-compliant relational database',
    badgeCode: 'postgres',
    enabled: true
  },

  // Tools & Platforms
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    purpose: 'Distributed version control',
    badgeCode: 'git',
    enabled: true
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    purpose: 'Collaboration, issues & CI/CD workflows',
    badgeCode: 'github',
    enabled: true
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg',
    purpose: 'Code editing, extensions & debugging',
    badgeCode: 'vscode',
    enabled: true
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    iconUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
    purpose: 'API inspection, testing & documentation',
    badgeCode: 'postman',
    enabled: true
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Portfolio',
    description: "Official personal portfolio website presenting projects, technology background, skills, and contact links in a clean modern interface.",
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/ManiKandan2403/Portfolio',
    demoUrl: 'https://github.com/ManiKandan2403/Portfolio',
    isRealRepo: true
  },
  {
    id: 'p2',
    title: 'My-Portofolio',
    description: "Interactive web portfolio showcase highlighting development work, responsive layouts, and structured project sections.",
    tags: ['Frontend', 'Responsive Design', 'Web'],
    repoUrl: 'https://github.com/ManiKandan2403/My-Portofolio',
    demoUrl: 'https://github.com/ManiKandan2403/My-Portofolio',
    isRealRepo: true
  }
];

export function generateMarkdown(
  config: ProfileConfig,
  techItems: TechItem[],
  projects: ProjectItem[]
): string {
  const primaryHex = config.primaryAccent.replace('#', '');
  const secondaryHex = config.secondaryAccent.replace('#', '');
  const typingLines = config.typingPhrases.map(p => encodeURIComponent(p)).join(';');
  const enabledTech = techItems.filter(t => t.enabled);
  const skillIconsCodes = enabledTech.map(t => t.badgeCode).join(',');

  const sections: string[] = [];

  // Header comment
  sections.push(`<!-- ============================================================== -->
<!--                  ${config.githubUsername} GITHUB PROFILE                  -->
<!--            Theme: Modern Light • Blue & Purple Accents           -->
<!-- ============================================================== -->`);

  // Hero Section
  if (config.visibleSections.hero) {
    sections.push(`<div align="center">

  <!-- Dynamic Waving Header Banner -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=180&section=header&text=Hi%20%F0%9F%91%8B%2C%20I'm%20${encodeURIComponent(config.name)}&fontSize=42&fontAlignY=36&desc=Crafting%20Modern%20Web%20Experiences%20with%20Code%20%26%20Creativity&descAlignY=58&descSize=18&fontColor=1E293B" width="100%" alt="Hi, I'm ${config.name}" />

  <!-- Animated Typing SVG -->
  <a href="https://github.com/${config.githubUsername}">
    <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=24&pause=1200&color=${primaryHex}&center=true&vCenter=true&random=false&width=560&lines=${typingLines}" alt="Typing SVG Animation" />
  </a>

  <p align="center">
    <strong>${config.role}</strong> specializing in clean architecture, interactive frontends, and responsive digital products.
  </p>

  <!-- Quick Action & Social Badges -->
  <p align="center">
    <a href="${config.portfolioUrl}">
      <img src="https://img.shields.io/badge/Live_Portfolio-${primaryHex}?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio" />
    </a>
    <a href="https://github.com/${config.githubUsername}">
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="mailto:${config.email}">
      <img src="https://img.shields.io/badge/Email_Me-${secondaryHex}?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>${config.linkedinUrl && !config.linkedinUrl.includes('[Add-') ? `
    <a href="${config.linkedinUrl}">
      <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>` : ''}
  </p>`);

    if (config.visibleSections.illustration) {
      sections.push(`  <!-- Developer Workstation Illustration -->
  <p align="center">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" width="680" alt="Developer at clean modern coding workstation" style="border-radius: 12px;" />
  </p>`);
    }

    sections.push(`</div>

---`);
  }

  // About Me Section
  if (config.visibleSections.about) {
    sections.push(`<!-- ============================================================== -->
<!--                           ABOUT ME                             -->
<!-- ============================================================== -->

### 👨‍💻 About Me

<p align="left">
  Hello! I'm <strong>${config.name}</strong>, a passionate <strong>${config.role}</strong> focused on building elegant, responsive, and performant web applications. I love transforming challenging concepts into seamless digital products with clean code and modern design systems.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Role-Full_Stack_Developer-${primaryHex}?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="Role" />
  <img src="https://img.shields.io/badge/Focus-Web_Apps_%26_Modern_UI-${secondaryHex}?style=for-the-badge" alt="Focus" />
  <img src="https://img.shields.io/badge/Location-India-475569?style=for-the-badge&logo=googlemaps&logoColor=white" alt="Location" />
  <img src="https://img.shields.io/badge/Status-Open_to_Opportunities-10B981?style=for-the-badge" alt="Status" />
</p>

\`\`\`yaml
developer:
  name: ${config.name}
  title: ${config.role}
  github: "@${config.githubUsername}"
  location: "India"
  expertise:
    - Frontend Architecture & Modern UI/UX
    - Full-Stack Web Development
    - RESTful API Integration & Backend Services
  current_focus:
    building: "${config.bio.whatIBuild}"
    learning: "${config.bio.currentLearning}"
    interests: "${config.bio.interests}"
  core_values:
    - "Clean, maintainable, and type-safe codebases"
    - "High aesthetic standards with accessible light themes"
    - "User-centered experiences that solve practical problems"
\`\`\`

#### 📌 Snapshot & Highlights

| Area | Detail |
| :--- | :--- |
| 🔭 **What I Build** | ${config.bio.whatIBuild} |
| 🌱 **Active Learning** | ${config.bio.currentLearning} |
| 💬 **Ask Me About** | ${config.bio.askMeAbout} |
| 🎯 **Career Goals** | ${config.bio.careerGoal} |
| ⚡ **Fun Fact** | ${config.bio.funFact} |

---`);
  }

  // Tech Stack Section
  if (config.visibleSections.techStack) {
    const renderCategoryTable = (title: string, category: TechItem['category']) => {
      const items = enabledTech.filter(t => t.category === category);
      if (items.length === 0) return '';
      let out = `\n#### ${title}\n| Technology | Category | Purpose |\n| :--- | :--- | :--- |\n`;
      items.forEach(t => {
        out += `| <img src="${t.iconUrl}" width="22" height="22" alt="${t.name}" /> **${t.name}** | ${category.charAt(0).toUpperCase() + category.slice(1)} | ${t.purpose} |\n`;
      });
      return out;
    };

    sections.push(`<!-- ============================================================== -->
<!--                          TECH STACK                            -->
<!-- ============================================================== -->

### 🛠️ Tech Stack & Skills

<div align="center">

  <!-- Overview Icon Ribbon -->
  <a href="#tech-stack--skills">
    <img src="https://skillicons.dev/icons?i=${skillIconsCodes}&theme=light&perline=7" alt="Tech Stack Icons" />
  </a>

</div>
${renderCategoryTable('🌐 Languages & Core', 'languages')}${renderCategoryTable('💻 Frontend Development', 'frontend')}${renderCategoryTable('⚙️ Backend & Systems', 'backend')}${renderCategoryTable('🗄️ Databases & Storage', 'database')}${renderCategoryTable('🧰 Tools & Platforms', 'tools')}
---`);
  }

  // Featured Projects Section
  if (config.visibleSections.projects) {
    let tableHtml = `<!-- ============================================================== -->
<!--                        FEATURED PROJECTS                       -->
<!-- ============================================================== -->

### 🚀 Featured Projects

<table>\n`;

    for (let i = 0; i < projects.length; i += 2) {
      tableHtml += `  <tr>\n`;
      const p1 = projects[i];
      const p2 = projects[i + 1];

      const renderCell = (proj?: ProjectItem) => {
        if (!proj) return `    <td width="50%" valign="top"></td>\n`;
        const tagsBadges = proj.tags
          .map(tag => `<img src="https://img.shields.io/badge/${encodeURIComponent(tag)}-${primaryHex}?style=flat-square" alt="${tag}" />`)
          .join('\n        ');

        return `    <td width="50%" valign="top">
      <h3 align="left">${proj.isRealRepo ? '🌐' : '✨'} ${proj.title}</h3>
      <p>${proj.description}</p>
      <p>
        ${tagsBadges}
      </p>
      <p>
        <a href="${proj.repoUrl}">
          <img src="https://img.shields.io/badge/GitHub_Repo-${primaryHex}?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
        </a>${proj.demoUrl ? `\n        <a href="${proj.demoUrl}">\n          <img src="https://img.shields.io/badge/Live_Demo-${secondaryHex}?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />\n        </a>` : ''}
      </p>
    </td>\n`;
      };

      tableHtml += renderCell(p1);
      if (p2) {
        tableHtml += renderCell(p2);
      } else {
        tableHtml += `    <td width="50%" valign="top"></td>\n`;
      }
      tableHtml += `  </tr>\n`;
    }

    tableHtml += `</table>\n\n---`;
    sections.push(tableHtml);
  }

  // Stats Section
  if (config.visibleSections.stats) {
    sections.push(`<!-- ============================================================== -->
<!--                        GITHUB STATISTICS                       -->
<!-- ============================================================== -->

### 📊 GitHub Analytics & Streak

<div align="center">

  <!-- GitHub Streak Stats (Light Blue & Purple Palette) -->
  <a href="https://github.com/${config.githubUsername}">
    <img src="https://streak-stats.demolab.com?user=${config.githubUsername}&theme=light&background=FFFFFF&border=E2E8F0&stroke=${primaryHex}&ring=${secondaryHex}&fire=${primaryHex}&currStreakNum=1E293B&sideNums=1E293B&currStreakLabel=${primaryHex}&sideLabels=64748B&dates=64748B" alt="${config.name} GitHub Streak" width="90%" />
  </a>

  <br /><br />

  <!-- GitHub Overall Stats & Most Used Languages -->
  <table border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td valign="top" align="center">
        <a href="https://github.com/${config.githubUsername}">
          <img src="https://github-readme-stats-eight-theta.vercel.app/api?username=${config.githubUsername}&show_icons=true&title_color=${primaryHex.toLowerCase()}&text_color=374151&icon_color=${secondaryHex.toLowerCase()}&bg_color=ffffff&border_color=e2e8f0&hide_border=false&locale=en" alt="${config.name} GitHub Stats" width="410" />
        </a>
      </td>
      <td valign="top" align="center">
        <a href="https://github.com/${config.githubUsername}">
          <img src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${config.githubUsername}&layout=compact&title_color=${primaryHex.toLowerCase()}&text_color=374151&icon_color=${secondaryHex.toLowerCase()}&bg_color=ffffff&border_color=e2e8f0&hide_border=false" alt="Top Languages" width="370" />
        </a>
      </td>
    </tr>
  </table>

</div>

---`);
  }

  // Snake Section
  if (config.visibleSections.snake) {
    sections.push(`<!-- ============================================================== -->
<!--                   CONTRIBUTION GRAPH ANIMATION                 -->
<!-- ============================================================== -->

### 🐍 Contribution Activity Graph

<div align="center">

  <!-- Snake Eating Contributions Animation -->
  <img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg" alt="GitHub Contribution Snake Animation" width="100%" />

  <p align="center">
    <sub>⚡ <em>Updated automatically every 12 hours via GitHub Actions</em></sub>
  </p>

</div>

---`);
  }

  // Trophies Section
  if (config.visibleSections.trophies) {
    sections.push(`<!-- ============================================================== -->
<!--                      GITHUB TROPHIES                           -->
<!-- ============================================================== -->

### 🏆 GitHub Achievements

<div align="center">

  <a href="https://github.com/${config.githubUsername}">
    <img src="https://github-profile-trophy-gamma.vercel.app/?username=${config.githubUsername}&theme=flat&column=7&margin_w=15&margin_h=15&background=ffffff&border=e2e8f0&title=${primaryHex.toLowerCase()}" alt="GitHub Profile Trophies" width="100%" />
  </a>

</div>

---`);
  }

  // Connect With Me Section
  if (config.visibleSections.socials) {
    sections.push(`<!-- ============================================================== -->
<!--                     CONNECT WITH ME                            -->
<!-- ============================================================== -->

### 📬 Connect With Me

<div align="center">

  <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

  <p align="center">
    <a href="mailto:${config.email}" target="_blank">
      <img src="https://img.shields.io/badge/Email-${encodeURIComponent(config.email)}-${secondaryHex}?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
    </a>
    <a href="https://github.com/${config.githubUsername}" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-${config.githubUsername}-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="${config.portfolioUrl}" target="_blank">
      <img src="https://img.shields.io/badge/Portfolio-Live_Website-${primaryHex}?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio" />
    </a>${config.linkedinUrl && !config.linkedinUrl.includes('[Add-') ? `
    <a href="${config.linkedinUrl}" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
    </a>` : ''}
  </p>

</div>

---`);
  }

  // Footer Section
  if (config.visibleSections.footer) {
    sections.push(`<!-- ============================================================== -->
<!--                         FOOTER                                 -->
<!-- ============================================================== -->

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=100&section=footer" width="100%" alt="Footer Wave Separator" />

  <p>
    <strong>Thanks for visiting my profile!</strong> ⭐<br />
    <em>Let's connect and build something impactful together.</em>
  </p>

  <p>
    <a href="#${config.githubUsername.toLowerCase()}-github-profile">
      <img src="https://img.shields.io/badge/%E2%AC%86%EF%B8%8F_Back_to_Top-${primaryHex}?style=for-the-badge" alt="Back to Top" />
    </a>
  </p>

</div>`);
  }

  return sections.join('\n\n');
}

export const WORKFLOW_YAML = `name: Generate Contribution Snake

on:
  # Run automatically every 12 hours
  schedule:
    - cron: "0 */12 * * *"
  
  # Allows manual execution from the Actions tab
  workflow_dispatch:
  
  # Run on every push to the main branch
  push:
    branches:
      - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      # Step 1: Generates the snake animation SVGs from the GitHub user's contributions
      - name: Generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ManiKandan2403
          outputs: |
            dist/github-contribution-grid-snake.svg?palette=github-light&color_snake=#2563eb&color_dots=#ebedf0,#93c5fd,#60a5fa,#3b82f6,#1d4ed8
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark&color_snake=#7c3aed
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      # Step 2: Push the generated SVG files to the output branch
      - name: Deploy snake SVG to output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`;
