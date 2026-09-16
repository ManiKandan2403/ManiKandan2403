import React, { useState } from 'react';
import { ProfileConfig, TechItem, ProjectItem } from '../types';
import {
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Star,
  BookOpen,
  Edit3,
  Copy,
  Check,
  Code2,
  Sparkles,
  Terminal,
  Layers,
  Flame,
  Trophy,
  Workflow
} from 'lucide-react';

interface GitHubPreviewProps {
  config: ProfileConfig;
  techItems: TechItem[];
  projects: ProjectItem[];
}

export const GitHubPreview: React.FC<GitHubPreviewProps> = ({
  config,
  techItems,
  projects
}) => {
  const [snakeSimulated, setSnakeSimulated] = useState(false);
  const [illustrationStyle, setIllustrationStyle] = useState<'svg' | 'art'>('svg');
  const enabledTech = techItems.filter(t => t.enabled);
  const primaryHex = config.primaryAccent.replace('#', '');
  const secondaryHex = config.secondaryAccent.replace('#', '');
  const typingLines = config.typingPhrases.map(p => encodeURIComponent(p)).join(';');
  const skillIconsCodes = enabledTech.map(t => t.badgeCode).join(',');

  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-[#D0D7DE] shadow-sm overflow-hidden text-[#1F2328]">
      {/* GitHub Repository Header Bar */}
      <div className="bg-[#F6F8FA] border-b border-[#D0D7DE] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#656D76]" />
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sm text-[#0969DA] hover:underline"
          >
            {config.githubUsername}
          </a>
          <span className="text-[#656D76]">/</span>
          <span className="font-semibold text-sm text-[#1F2328]">README.md</span>
          <span className="text-xs bg-[#EFF1F3] text-[#59636E] border border-[#D0D7DE] rounded-full px-2 py-0.5 font-medium ml-1">
            Public Profile Repository
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#0969DA] bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors shadow-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{config.githubUsername}</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Profile README Content Body */}
      <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-10">

        {/* 1. HERO SECTION */}
        {config.visibleSections.hero && (
          <section id="hero" className="space-y-6 text-center">
            {/* Waving Capsule Header */}
            <div className="w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-1 border border-slate-200">
              <img
                src={`https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=180&section=header&text=Hi%20%F0%9F%91%8B%2C%20I'm%20${encodeURIComponent(config.name)}&fontSize=42&fontAlignY=36&desc=Crafting%20Modern%20Web%20Experiences%20with%20Code%20and%20Creativity&descAlignY=58&descSize=18&fontColor=1E293B`}
                alt={`Hi, I'm ${config.name}`}
                className="w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>

            {/* DenverCoder1 Animated Typing SVG */}
            <div className="flex justify-center py-2">
              <img
                src={`https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=24&pause=1200&color=${primaryHex}&center=true&vCenter=true&random=false&width=560&lines=${typingLines}`}
                alt="Typing SVG Animation"
                className="max-w-full"
              />
            </div>

            <p className="text-base text-slate-700 max-w-2xl mx-auto font-normal leading-relaxed">
              <strong className="text-slate-900 font-semibold">{config.role}</strong> specializing in clean architecture, interactive frontends, and responsive digital products.
            </p>

            {/* Social / Action Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <a
                href={config.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/Live_Portfolio-${primaryHex}?style=for-the-badge&logo=google-chrome&logoColor=white`}
                  alt="Portfolio"
                />
              </a>
              <a
                href={`https://github.com/${config.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                  alt="GitHub"
                />
              </a>
              <a
                href={`mailto:${config.email}`}
                className="inline-block transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/Email_Me-${secondaryHex}?style=for-the-badge&logo=gmail&logoColor=white`}
                  alt="Email"
                />
              </a>
              {config.linkedinUrl && !config.linkedinUrl.includes('[Add-') && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block transform hover:-translate-y-0.5 transition-transform"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn"
                  />
                </a>
              )}
            </div>

            {/* Illustrated Developer Workstation Artwork */}
            {config.visibleSections.illustration && (
              <div className="pt-4 flex flex-col items-center">
                <div className="w-full max-w-2xl flex items-center justify-end mb-2 gap-1 text-[11px] text-[#656D76]">
                  <span className="mr-1">Illustration Style:</span>
                  <button
                    onClick={() => setIllustrationStyle('svg')}
                    className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${
                      illustrationStyle === 'svg'
                        ? 'bg-blue-100 text-blue-800 font-semibold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    Custom SVG
                  </button>
                  <button
                    onClick={() => setIllustrationStyle('art')}
                    className={`px-2.5 py-0.5 rounded-md font-medium transition-colors ${
                      illustrationStyle === 'art'
                        ? 'bg-purple-100 text-purple-800 font-semibold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    Digital Art
                  </button>
                </div>

                <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
                  <img
                    src={illustrationStyle === 'svg' ? '/developer-light.svg' : '/developer-illustration.jpg'}
                    alt="Developer at clean modern coding workstation illustration"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
              </div>
            )}
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 2. ABOUT ME SECTION */}
        {config.visibleSections.about && (
          <section id="about" className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">👨‍💻</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">About Me</h2>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              Hello! I'm <strong className="text-slate-900 font-semibold">{config.name}</strong>, a passionate <strong className="text-blue-600 font-semibold">{config.role}</strong> focused on building elegant, responsive, and performant web applications. I love transforming challenging concepts into seamless digital products with clean code and modern design systems.
            </p>

            {/* Status Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <img
                src={`https://img.shields.io/badge/Role-Full_Stack_Developer-${primaryHex}?style=for-the-badge&logo=visualstudiocode&logoColor=white`}
                alt="Role"
              />
              <img
                src={`https://img.shields.io/badge/Focus-Web_Apps_%26_Modern_UI-${secondaryHex}?style=for-the-badge`}
                alt="Focus"
              />
              <img
                src="https://img.shields.io/badge/Location-India-475569?style=for-the-badge&logo=googlemaps&logoColor=white"
                alt="Location"
              />
              <img
                src="https://img.shields.io/badge/Status-Open_to_Opportunities-10B981?style=for-the-badge"
                alt="Status"
              />
            </div>

            {/* YAML Code Block Representation */}
            <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto border border-slate-800 shadow-inner">
              <div className="text-purple-400">developer:</div>
              <div className="pl-4 text-slate-300">
                name: <span className="text-emerald-400">{config.name}</span>
              </div>
              <div className="pl-4 text-slate-300">
                title: <span className="text-emerald-400">{config.role}</span>
              </div>
              <div className="pl-4 text-slate-300">
                github: <span className="text-sky-400">"@{config.githubUsername}"</span>
              </div>
              <div className="pl-4 text-slate-300">
                location: <span className="text-slate-300">"India"</span>
              </div>
              <div className="pl-4 text-slate-300">
                status: <span className="text-emerald-400">"🟢 Open to Opportunities"</span>
              </div>
              
              <div className="text-purple-400 mt-2">expertise:</div>
              <div className="pl-4 text-slate-300">- Frontend Architecture & Modern UI/UX</div>
              <div className="pl-4 text-slate-300">- Full-Stack Web Development</div>
              <div className="pl-4 text-slate-300">- RESTful API Integration & Backend Services</div>

              <div className="text-purple-400 mt-2">current_focus:</div>
              <div className="pl-4 text-slate-300">
                building: <span className="text-sky-300">"{config.bio.whatIBuild}"</span>
              </div>
              <div className="pl-4 text-slate-300">
                learning: <span className="text-emerald-300">"{config.bio.currentLearning}"</span>
              </div>
              <div className="pl-4 text-slate-300">
                interests: <span className="text-pink-300">"{config.bio.interests}"</span>
              </div>

              <div className="text-purple-400 mt-2">core_values:</div>
              <div className="pl-4 text-slate-300">- "Clean, maintainable, and type-safe codebases"</div>
              <div className="pl-4 text-slate-300">- "High aesthetic standards with accessible light themes"</div>
              <div className="pl-4 text-slate-300">- "User-centered experiences that solve practical problems"</div>
            </div>

            {/* Quick Bullet Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Snapshot & Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="text-base">🔭</span>
                  <div>
                    <strong className="text-slate-900">What I build:</strong> {config.bio.whatIBuild}
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="text-base">🌱</span>
                  <div>
                    <strong className="text-slate-900">Current Learning:</strong> {config.bio.currentLearning}
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="text-base">💬</span>
                  <div>
                    <strong className="text-slate-900">Ask me about:</strong> {config.bio.askMeAbout}
                  </div>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <span className="text-base">🎯</span>
                  <div>
                    <strong className="text-slate-900">Career Goals:</strong> {config.bio.careerGoal}
                  </div>
                </li>
              </ul>
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 3. TECH STACK & SKILLS */}
        {config.visibleSections.techStack && (
          <section id="tech-stack" className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🛠️</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Tech Stack & Skills</h2>
            </div>

            {/* SkillIcons Interactive Ribbon */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wider">
                Overview Technology Icons
              </p>
              <div className="flex justify-center overflow-x-auto py-1">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIconsCodes}&theme=light&perline=7`}
                  alt="Tech Stack Icons"
                  className="max-w-full drop-shadow-xs"
                />
              </div>
            </div>

            {/* Categorized Detailed Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(['languages', 'frontend', 'backend', 'database', 'tools'] as const).map(cat => {
                const items = enabledTech.filter(t => t.category === cat);
                if (items.length === 0) return null;

                const catTitles: Record<string, { title: string; icon: string }> = {
                  languages: { title: 'Languages & Core', icon: '🌐' },
                  frontend: { title: 'Frontend Development', icon: '💻' },
                  backend: { title: 'Backend & Systems', icon: '⚙️' },
                  database: { title: 'Databases & Storage', icon: '🗄️' },
                  tools: { title: 'Tools & Platforms', icon: '🧰' }
                };

                return (
                  <div
                    key={cat}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-blue-200 transition-colors"
                  >
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
                      <span className="text-base">{catTitles[cat].icon}</span>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        {catTitles[cat].title}
                      </h4>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {items.map(tech => (
                        <div
                          key={tech.id}
                          className="px-4 py-2.5 flex items-center justify-between gap-3 text-sm hover:bg-slate-50/70 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <img
                              src={tech.iconUrl}
                              alt={tech.name}
                              className="w-5 h-5 object-contain"
                              loading="lazy"
                            />
                            <span className="font-medium text-slate-900">{tech.name}</span>
                          </div>
                          <span className="text-xs text-slate-500 text-right truncate max-w-[180px]">
                            {tech.purpose}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 4. FEATURED PROJECTS */}
        {config.visibleSections.projects && (
          <section id="projects" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🚀</span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Real Repositories & Demos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map(proj => (
                <div
                  key={proj.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{proj.isRealRepo ? '🌐' : '✨'}</span>
                        <h3 className="font-bold text-slate-900 text-base">{proj.title}</h3>
                      </div>
                      {proj.isRealRepo ? (
                        <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          Active Repo
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                          Upcoming
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 mt-4">
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{proj.isRealRepo ? 'GitHub Repo' : 'View GitHub'}</span>
                    </a>
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 text-xs font-semibold text-white bg-[#7C3AED] hover:bg-[#6D28D9] rounded-md transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 5. GITHUB STATS SECTION */}
        {config.visibleSections.stats && (
          <section id="stats" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📊</span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">GitHub Analytics & Streak</h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live API Synced (@{config.githubUsername})
              </span>
            </div>

            <div className="space-y-4">
              {/* GitHub Streak Stats Card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs p-2 flex justify-center">
                <img
                  src={`https://streak-stats.demolab.com?user=${config.githubUsername}&theme=light&background=FFFFFF&border=E2E8F0&stroke=${primaryHex}&ring=${secondaryHex}&fire=${primaryHex}&currStreakNum=1E293B&sideNums=1E293B&currStreakLabel=${primaryHex}&sideLabels=64748B&dates=64748B`}
                  alt={`${config.name} GitHub Streak`}
                  className="max-w-full rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Readme Stats & Top Languages Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center shadow-xs">
                  <img
                    src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${config.githubUsername}&show_icons=true&include_all_commits=true&count_private=true&title_color=${primaryHex.toLowerCase()}&text_color=374151&icon_color=${secondaryHex.toLowerCase()}&bg_color=ffffff&border_color=e2e8f0&hide_border=false&locale=en`}
                    alt={`${config.name} GitHub Stats`}
                    className="max-w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center shadow-xs">
                  <img
                    src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${config.githubUsername}&layout=compact&langs_count=8&hide_title=false&include_all_commits=true&count_private=true&title_color=${primaryHex.toLowerCase()}&text_color=374151&icon_color=${secondaryHex.toLowerCase()}&bg_color=ffffff&border_color=e2e8f0&hide_border=false`}
                    alt="Top Languages"
                    className="max-w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Verified Real Language Composition Banner */}
              <div className="border border-slate-200 rounded-xl bg-slate-50 p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <span>⚡</span> Public Repository Language Breakdown
                  </span>
                  <span className="text-slate-500 font-normal">Primary: <strong className="text-blue-600">TypeScript (93.97%)</strong></span>
                </div>
                {/* Language proportion bar */}
                <div className="h-3.5 w-full rounded-full overflow-hidden flex bg-slate-200 border border-slate-300">
                  <div className="bg-[#3178c6] h-full" style={{ width: '93.97%' }} title="TypeScript 93.97%" />
                  <div className="bg-[#e34c26] h-full" style={{ width: '6.01%' }} title="HTML 6.01%" />
                  <div className="bg-[#563d7c] h-full" style={{ width: '0.02%' }} title="CSS 0.02%" />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]" />
                    <span>TypeScript</span>
                    <span className="text-slate-500 font-normal">93.97% (121.8 KB)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e34c26]" />
                    <span>HTML</span>
                    <span className="text-slate-500 font-normal">6.01% (7.8 KB)</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#563d7c]" />
                    <span>CSS</span>
                    <span className="text-slate-500 font-normal">0.02% (23 B)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 6. CONTRIBUTION SNAKE SECTION */}
        {config.visibleSections.snake && (
          <section id="snake" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">🐍</span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Contribution Activity Graph</h2>
              </div>
              <button
                onClick={() => setSnakeSimulated(!snakeSimulated)}
                className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                {snakeSimulated ? 'Show Live SVG' : 'Preview Live Interactive Grid'}
              </button>
            </div>

            <div className="border border-slate-200 rounded-xl bg-white p-6 shadow-xs text-center space-y-3">
              {snakeSimulated ? (
                /* Interactive Simulated Canvas preview for the snake */
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg overflow-x-auto">
                  <div className="inline-flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, r) => (
                      <div key={r} className="flex gap-1">
                        {Array.from({ length: 48 }).map((_, c) => {
                          const isSnakeHead = r === 3 && c === 24;
                          const isSnakeBody = r === 3 && c >= 18 && c < 24;
                          const hasCommit = (r * 11 + c * 7) % 5 === 0;
                          const isHigh = (r * 13 + c * 3) % 7 === 0;

                          let color = '#EBEDF0';
                          if (isSnakeHead) color = '#2563EB';
                          else if (isSnakeBody) color = '#7C3AED';
                          else if (isHigh) color = '#1D4ED8';
                          else if (hasCommit) color = '#93C5FD';

                          return (
                            <div
                              key={c}
                              className={`w-2.5 h-2.5 rounded-xs transition-all duration-300 ${
                                isSnakeHead ? 'ring-2 ring-blue-500 scale-125' : ''
                              }`}
                              style={{ backgroundColor: color }}
                              title={`Day ${(c + 1) * 7 + r}: Contribution block`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3 font-medium">
                    ⚡ Snake Animation actively roaming through contributions with blue & purple palette!
                  </p>
                </div>
              ) : (
                /* Production output image URL */
                <div className="space-y-2">
                  <img
                    src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg"
                    alt="GitHub Contribution Snake Animation"
                    className="w-full h-auto rounded-lg mx-auto min-h-[90px] bg-slate-50 border border-slate-100"
                  />
                </div>
              )}

              <p className="text-xs text-slate-500">
                ⚡ <em>Updated automatically every 12 hours via GitHub Actions workflow</em>
              </p>
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 7. GITHUB TROPHIES */}
        {config.visibleSections.trophies && (
          <section id="trophies" className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🏆</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">GitHub Achievements</h2>
            </div>

            <div className="border border-slate-200 rounded-xl bg-white p-4 shadow-xs overflow-x-auto text-center">
              <img
                src={`https://github-profile-trophy-gamma.vercel.app/?username=${config.githubUsername}&theme=flat&column=7&margin_w=15&margin_h=15&background=ffffff&border=e2e8f0&title=${primaryHex.toLowerCase()}`}
                alt="GitHub Profile Trophies"
                className="max-w-full rounded-lg mx-auto"
                loading="lazy"
              />
            </div>
          </section>
        )}

        <hr className="border-slate-200 my-8" />

        {/* 8. CONNECT WITH ME */}
        {config.visibleSections.socials && (
          <section id="socials" className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-2xl">📬</span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Connect With Me</h2>
            </div>

            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
              <a
                href={`mailto:${config.email}`}
                className="transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/Email-${encodeURIComponent(config.email)}-${secondaryHex}?style=for-the-badge&logo=gmail&logoColor=white`}
                  alt="Email"
                />
              </a>
              <a
                href={`https://github.com/${config.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/GitHub-${config.githubUsername}-181717?style=for-the-badge&logo=github&logoColor=white`}
                  alt="GitHub"
                />
              </a>
              <a
                href={config.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/Portfolio-Live_Website-${primaryHex}?style=for-the-badge&logo=google-chrome&logoColor=white`}
                  alt="Portfolio"
                />
              </a>
              {config.linkedinUrl && !config.linkedinUrl.includes('[Add-') && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:-translate-y-0.5 transition-transform"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="LinkedIn"
                  />
                </a>
              )}
            </div>
          </section>
        )}

        {/* 9. FOOTER */}
        {config.visibleSections.footer && (
          <footer className="pt-8 text-center space-y-4">
            <img
              src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=100&section=footer"
              alt="Footer Wave"
              className="w-full object-cover rounded-lg"
              loading="lazy"
            />

            <div className="space-y-1">
              <p className="text-base font-semibold text-slate-800">
                Thanks for visiting my profile! ⭐
              </p>
              <p className="text-xs text-slate-500">
                <em>Let's connect and build something impactful together.</em>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#hero"
                className="inline-block transform hover:-translate-y-0.5 transition-transform"
              >
                <img
                  src={`https://img.shields.io/badge/%E2%AC%86%EF%B8%8F_Back_to_Top-${primaryHex}?style=for-the-badge`}
                  alt="Back to Top"
                />
              </a>
            </div>
          </footer>
        )}

      </div>
    </div>
  );
};
