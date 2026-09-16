import React, { useState } from 'react';
import { ProfileConfig, TechItem, ProjectItem } from './types';
import {
  DEFAULT_PROFILE_CONFIG,
  INITIAL_TECH_ITEMS,
  INITIAL_PROJECTS
} from './utils/markdownGenerator';
import { GitHubPreview } from './components/GitHubPreview';
import {
  Github,
  BookOpen,
  FolderGit2,
  Table,
  Package,
  Star,
  Mail,
  Link as LinkIcon,
  Users,
  ExternalLink,
  Search,
  Bell
} from 'lucide-react';

export default function App() {
  const [config] = useState<ProfileConfig>(DEFAULT_PROFILE_CONFIG);
  const [techItems] = useState<TechItem[]>(INITIAL_TECH_ITEMS);
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [activeTab] = useState<'overview'>('overview');

  return (
    <div className="min-h-screen bg-[#F6F8FA] text-[#1F2328] font-sans antialiased">
      {/* 1. Authentic GitHub Top Navigation Bar */}
      <header className="bg-[#24292F] text-white sticky top-0 z-50 px-4 sm:px-6 h-14 flex items-center justify-between border-b border-[#30363D]">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ManiKandan2403"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-slate-300 transition-colors"
            title="GitHub"
          >
            <Github className="w-8 h-8 fill-current" />
          </a>

          <div className="hidden md:flex items-center bg-[#161B22] border border-[#30363D] rounded-md px-2.5 py-1 text-xs text-[#848D97] w-64">
            <Search className="w-3.5 h-3.5 mr-2 text-[#848D97]" />
            <span className="truncate">Type / to search or jump to...</span>
          </div>

          <nav className="hidden lg:flex items-center gap-4 text-xs font-semibold text-slate-200">
            <a href="https://github.com/pulls" target="_blank" rel="noreferrer" className="hover:text-white">Pull requests</a>
            <a href="https://github.com/issues" target="_blank" rel="noreferrer" className="hover:text-white">Issues</a>
            <a href="https://github.com/codespaces" target="_blank" rel="noreferrer" className="hover:text-white">Codespaces</a>
            <a href="https://github.com/explore" target="_blank" rel="noreferrer" className="hover:text-white">Explore</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ManiKandan2403"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white bg-[#30363D] hover:bg-[#3C444D] px-2.5 py-1 rounded-md transition-colors"
          >
            <span>github.com/ManiKandan2403</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>

          <button className="text-slate-300 hover:text-white p-1 rounded-full">
            <Bell className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/ManiKandan2403"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/20 hover:ring-white/50 transition-all flex items-center justify-center bg-gradient-to-tr from-blue-600 to-purple-600"
          >
            <img
              src="https://avatars.githubusercontent.com/u/149132956?v=4"
              alt="ManiKandan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </a>
        </div>
      </header>

      {/* 2. GitHub Profile Tabs Subheader */}
      <div className="bg-white border-b border-[#D0D7DE] sticky top-14 z-40 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto text-xs font-medium text-[#24292F]">
          <button
            className="flex items-center gap-2 py-3 px-3 border-b-2 font-semibold transition-colors whitespace-nowrap border-[#FD8C73] text-[#1F2328]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <a
            href="https://github.com/ManiKandan2403?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-3 border-b-2 border-transparent text-[#656D76] hover:text-[#1F2328] transition-colors whitespace-nowrap"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Repositories</span>
            <span className="bg-[#EFF1F3] text-[#656D76] px-1.5 py-0.2 rounded-full text-[11px] font-semibold">
              3
            </span>
          </a>

          <a
            href="https://github.com/ManiKandan2403?tab=projects"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-3 border-b-2 border-transparent text-[#656D76] hover:text-[#1F2328] transition-colors whitespace-nowrap"
          >
            <Table className="w-4 h-4" />
            <span>Projects</span>
            <span className="bg-[#EFF1F3] text-[#656D76] px-1.5 py-0.2 rounded-full text-[11px] font-semibold">
              0
            </span>
          </a>

          <a
            href="https://github.com/ManiKandan2403?tab=packages"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-3 border-b-2 border-transparent text-[#656D76] hover:text-[#1F2328] transition-colors whitespace-nowrap"
          >
            <Package className="w-4 h-4" />
            <span>Packages</span>
            <span className="bg-[#EFF1F3] text-[#656D76] px-1.5 py-0.2 rounded-full text-[11px] font-semibold">
              0
            </span>
          </a>

          <a
            href="https://github.com/ManiKandan2403?tab=stars"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-3 px-3 border-b-2 border-transparent text-[#656D76] hover:text-[#1F2328] transition-colors whitespace-nowrap"
          >
            <Star className="w-4 h-4" />
            <span>Stars</span>
            <span className="bg-[#EFF1F3] text-[#656D76] px-1.5 py-0.2 rounded-full text-[11px] font-semibold">
              0
            </span>
          </a>
        </div>
      </div>

      {/* 3. Main Profile View Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Authentic GitHub User Profile Sidebar */}
          <aside className="w-full lg:w-72 shrink-0 space-y-5">
            {/* Profile Avatar */}
            <div className="relative group">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-[#D0D7DE] bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold shadow-xs mx-auto lg:mx-0">
                <img
                  src="https://avatars.githubusercontent.com/u/149132956?v=4"
                  alt="ManiKandan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="select-none tracking-tight">M</span>
              </div>
              {/* Status Indicator */}
              <div className="hidden lg:flex items-center gap-1.5 absolute bottom-4 left-4 bg-white border border-[#D0D7DE] rounded-full px-2.5 py-1 text-[11px] text-[#656D76] shadow-xs">
                <span>🚀</span>
                <span>Building web apps</span>
              </div>
            </div>

            {/* User Names */}
            <div className="space-y-0.5 text-center lg:text-left">
              <h1 className="text-2xl font-bold text-[#1F2328] tracking-tight">
                ManiKandan
              </h1>
              <p className="text-xl text-[#656D76] font-light">
                ManiKandan2403
              </p>
            </div>

            {/* User Bio */}
            <p className="text-sm text-[#1F2328] leading-relaxed text-center lg:text-left">
              Full Stack Developer specializing in clean architecture, modern web applications, and responsive digital products.
            </p>

            {/* Edit Profile / Follow Button */}
            <a
              href="https://github.com/ManiKandan2403"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-1.5 text-center text-xs font-semibold text-[#24292F] bg-[#F6F8FA] hover:bg-[#F3F4F6] border border-[#D0D7DE] rounded-md shadow-xs transition-colors"
            >
              Follow
            </a>

            {/* Social Metrics */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-xs text-[#656D76]">
              <div className="flex items-center gap-1 hover:text-[#0969DA] cursor-pointer">
                <Users className="w-3.5 h-3.5" />
                <strong className="text-[#1F2328] font-semibold">0</strong> followers
              </div>
              <span>·</span>
              <div className="hover:text-[#0969DA] cursor-pointer">
                <strong className="text-[#1F2328] font-semibold">0</strong> following
              </div>
            </div>

            <hr className="border-[#D0D7DE]" />

            {/* Contact & Links Info */}
            <div className="space-y-2.5 text-xs text-[#1F2328]">
              <div className="flex items-center gap-2 text-[#1F2328]">
                <Mail className="w-4 h-4 text-[#656D76] shrink-0" />
                <a
                  href="mailto:manikandanmagesh001@gmail.com"
                  className="hover:text-[#0969DA] truncate"
                >
                  manikandanmagesh001@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#1F2328]">
                <LinkIcon className="w-4 h-4 text-[#656D76] shrink-0" />
                <a
                  href="https://github.com/ManiKandan2403/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0969DA] truncate"
                >
                  https://github.com/ManiKandan2403/Portfolio
                </a>
              </div>
            </div>

            <hr className="border-[#D0D7DE]" />

            {/* Achievements */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#1F2328]">Achievements</h3>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-lg" title="Pull Shark">
                  🦈
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-lg" title="Quickdraw">
                  ⚡
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-lg" title="YOLO">
                  🚀
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Direct Special Repository README View */}
          <main className="flex-1 w-full space-y-6 min-w-0">
            {/* Direct GitHub README Component */}
            <GitHubPreview
              config={config}
              techItems={techItems}
              projects={projects}
            />

            {/* Pinned Real Repositories */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#1F2328]">
                  Pinned Repositories
                </h3>
                <a
                  href="https://github.com/ManiKandan2403?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#0969DA] hover:underline"
                >
                  Customize your pins
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Repo 1: ManiKandan2403 Profile Repo */}
                <div className="bg-white border border-[#D0D7DE] rounded-md p-4 flex flex-col justify-between space-y-3 hover:border-slate-400 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://github.com/ManiKandan2403/ManiKandan2403"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#0969DA] hover:underline truncate"
                      >
                        ManiKandan2403
                      </a>
                      <span className="text-[10px] text-[#656D76] font-medium border border-[#D0D7DE] px-1.5 py-0.2 rounded-full shrink-0">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-[#656D76] leading-relaxed">
                      Special GitHub Profile README repository featuring clean architecture, developer workstation artwork, and live metrics.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#656D76]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3178C6]" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <span>0</span>
                    </div>
                  </div>
                </div>

                {/* Repo 2: Portfolio */}
                <div className="bg-white border border-[#D0D7DE] rounded-md p-4 flex flex-col justify-between space-y-3 hover:border-slate-400 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://github.com/ManiKandan2403/Portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#0969DA] hover:underline"
                      >
                        Portfolio
                      </a>
                      <span className="text-[10px] text-[#656D76] font-medium border border-[#D0D7DE] px-1.5 py-0.2 rounded-full shrink-0">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-[#656D76] leading-relaxed">
                      Official personal portfolio website showcasing web applications, skills, and projects in a clean modern interface.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#656D76]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3178C6]" />
                      <span>TypeScript</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <span>0</span>
                    </div>
                  </div>
                </div>

                {/* Repo 3: My-Portofolio */}
                <div className="bg-white border border-[#D0D7DE] rounded-md p-4 flex flex-col justify-between space-y-3 hover:border-slate-400 transition-colors">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <a
                        href="https://github.com/ManiKandan2403/My-Portofolio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#0969DA] hover:underline"
                      >
                        My-Portofolio
                      </a>
                      <span className="text-[10px] text-[#656D76] font-medium border border-[#D0D7DE] px-1.5 py-0.2 rounded-full shrink-0">
                        Public
                      </span>
                    </div>
                    <p className="text-xs text-[#656D76] leading-relaxed">
                      Interactive frontend web portfolio highlighting responsive design systems and clean component structures.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#656D76]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E34C26]" />
                      <span>HTML</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5" />
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* 4. GitHub Standard Footer */}
      <footer className="mt-16 border-t border-[#D0D7DE] py-10 bg-white text-xs text-[#656D76]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 fill-current text-[#656D76]" />
            <span>© 2026 GitHub, Inc.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#0969DA]">
            <a href="https://docs.github.com" target="_blank" rel="noreferrer" className="hover:underline">Docs</a>
            <a href="https://github.com/ManiKandan2403" target="_blank" rel="noreferrer" className="hover:underline">ManiKandan2403</a>
            <a href="https://github.com/ManiKandan2403/Portfolio" target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
            <a href="https://github.com/ManiKandan2403/My-Portofolio" target="_blank" rel="noreferrer" className="hover:underline">My-Portofolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
