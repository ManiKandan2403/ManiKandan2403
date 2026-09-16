import React, { useState } from 'react';
import { ProfileConfig, TechItem, ProjectItem } from '../types';
import {
  Sliders,
  Sparkles,
  User,
  Cpu,
  FolderGit2,
  Share2,
  Eye,
  Plus,
  Trash2,
  RotateCcw,
  Palette
} from 'lucide-react';

interface CustomizerPanelProps {
  config: ProfileConfig;
  onChangeConfig: (updater: (prev: ProfileConfig) => ProfileConfig) => void;
  techItems: TechItem[];
  onToggleTech: (id: string) => void;
  projects: ProjectItem[];
  onUpdateProject: (id: string, field: keyof ProjectItem, value: any) => void;
  onResetDefaults: () => void;
}

export const CustomizerPanel: React.FC<CustomizerPanelProps> = ({
  config,
  onChangeConfig,
  techItems,
  onToggleTech,
  projects,
  onUpdateProject,
  onResetDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'tech' | 'projects' | 'sections' | 'theme'>('profile');
  const [newPhrase, setNewPhrase] = useState('');

  const handleAddPhrase = () => {
    if (!newPhrase.trim()) return;
    onChangeConfig(prev => ({
      ...prev,
      typingPhrases: [...prev.typingPhrases, newPhrase.trim()]
    }));
    setNewPhrase('');
  };

  const handleRemovePhrase = (idx: number) => {
    onChangeConfig(prev => ({
      ...prev,
      typingPhrases: prev.typingPhrases.filter((_, i) => i !== idx)
    }));
  };

  const themePresets = [
    { name: 'Royal Blue & Purple (Requested)', primary: '2563EB', secondary: '7C3AED' },
    { name: 'Sky Blue & Violet', primary: '0284C7', secondary: '8B5CF6' },
    { name: 'Deep Indigo & Blue', primary: '4F46E5', secondary: '2563EB' },
    { name: 'Cyan & Purple Electric', primary: '0891B2', secondary: '9333EA' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Panel Header */}
      <div className="bg-slate-50 border-b border-slate-200 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-800 text-sm">Live Profile Customizer</h3>
          <span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
            Real-time
          </span>
        </div>
        <button
          onClick={onResetDefaults}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors"
          title="Reset to initial values"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white overflow-x-auto text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'profile'
              ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/40'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Profile & Bio</span>
        </button>

        <button
          onClick={() => setActiveTab('tech')}
          className={`px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'tech'
              ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/40'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Tech Stack ({techItems.filter(t => t.enabled).length})</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'projects'
              ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/40'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Projects ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('sections')}
          className={`px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'sections'
              ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/40'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Sections Toggle</span>
        </button>

        <button
          onClick={() => setActiveTab('theme')}
          className={`px-4 py-2.5 flex items-center gap-1.5 whitespace-nowrap border-b-2 transition-colors ${
            activeTab === 'theme'
              ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/40'
              : 'border-transparent hover:text-slate-900'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Color Theme</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-5 max-h-[440px] overflow-y-auto space-y-4">
        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Display Name</label>
                <input
                  type="text"
                  value={config.name}
                  onChange={e => onChangeConfig(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Primary Role / Title</label>
                <input
                  type="text"
                  value={config.role}
                  onChange={e => onChangeConfig(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">GitHub Username</label>
                <input
                  type="text"
                  value={config.githubUsername}
                  onChange={e => onChangeConfig(prev => ({ ...prev, githubUsername: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Contact Email</label>
                <input
                  type="email"
                  value={config.email}
                  onChange={e => onChangeConfig(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Portfolio URL</label>
                <input
                  type="text"
                  value={config.portfolioUrl}
                  onChange={e => onChangeConfig(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">LinkedIn Profile URL</label>
                <input
                  type="text"
                  value={config.linkedinUrl}
                  onChange={e => onChangeConfig(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://linkedin.com/in/your-profile"
                />
              </div>
            </div>

            {/* Animated Typing Phrases */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-slate-700 font-semibold mb-1.5">
                Animated Typing Header Phrases
              </label>
              <div className="space-y-1.5 mb-2">
                {config.typingPhrases.map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                    <span className="text-slate-400 font-mono text-[10px] w-4">{idx + 1}.</span>
                    <span className="flex-1 text-slate-700">{phrase}</span>
                    <button
                      onClick={() => handleRemovePhrase(idx)}
                      className="text-slate-400 hover:text-red-500 transition-colors"
                      title="Remove phrase"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add custom typing line (e.g. Next.js Enthusiast ⚡)"
                  value={newPhrase}
                  onChange={e => setNewPhrase(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddPhrase()}
                  className="flex-1 px-3 py-1.5 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={handleAddPhrase}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-1 font-semibold"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>

            {/* Bio Details */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <label className="block text-slate-700 font-semibold">About Me Details</label>
              
              <div>
                <span className="text-slate-500 block mb-0.5">What I Build:</span>
                <input
                  type="text"
                  value={config.bio.whatIBuild}
                  onChange={e => onChangeConfig(prev => ({ ...prev, bio: { ...prev.bio, whatIBuild: e.target.value } }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Current Learning:</span>
                <input
                  type="text"
                  value={config.bio.currentLearning}
                  onChange={e => onChangeConfig(prev => ({ ...prev, bio: { ...prev.bio, currentLearning: e.target.value } }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Career Goal:</span>
                <input
                  type="text"
                  value={config.bio.careerGoal}
                  onChange={e => onChangeConfig(prev => ({ ...prev, bio: { ...prev.bio, careerGoal: e.target.value } }))}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* TECH STACK TAB */}
        {activeTab === 'tech' && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-500">
              Select or deselect technologies you actively use. Selected items dynamically update the top ribbon and the structured markdown tables.
            </p>

            {(['languages', 'frontend', 'backend', 'database', 'tools'] as const).map(category => {
              const items = techItems.filter(t => t.category === category);
              const catNames: Record<string, string> = {
                languages: 'Languages & Core',
                frontend: 'Frontend Development',
                backend: 'Backend & Systems',
                database: 'Databases & Storage',
                tools: 'Tools & Platforms'
              };

              return (
                <div key={category} className="space-y-1.5">
                  <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center justify-between">
                    <span>{catNames[category]}</span>
                    <span className="text-slate-400 font-normal">
                      {items.filter(i => i.enabled).length}/{items.length} enabled
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {items.map(tech => (
                      <button
                        key={tech.id}
                        onClick={() => onToggleTech(tech.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                          tech.enabled
                            ? 'bg-blue-50/70 border-blue-300 text-blue-900 shadow-xs'
                            : 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
                        <span className="font-semibold truncate">{tech.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-500">
              Customize the featured repositories displayed in your profile README cards.
            </p>

            <div className="space-y-3">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span>{proj.isRealRepo ? '🌐' : '✨'}</span>
                      <span>Project {idx + 1}: {proj.title}</span>
                    </span>
                    {proj.isRealRepo && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">
                        Real GitHub Repo
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-500 block mb-0.5">Project Title:</span>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={e => onUpdateProject(proj.id, 'title', e.target.value)}
                        className="w-full px-2.5 py-1 border border-slate-300 rounded bg-white"
                      />
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-0.5">Repo URL:</span>
                      <input
                        type="text"
                        value={proj.repoUrl}
                        onChange={e => onUpdateProject(proj.id, 'repoUrl', e.target.value)}
                        className="w-full px-2.5 py-1 border border-slate-300 rounded bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block mb-0.5">Description:</span>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={e => onUpdateProject(proj.id, 'description', e.target.value)}
                      className="w-full px-2.5 py-1 border border-slate-300 rounded bg-white resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTIONS TAB */}
        {activeTab === 'sections' && (
          <div className="space-y-3 text-xs">
            <p className="text-slate-500 mb-2">
              Toggle which sections appear in your generated GitHub Profile README.
            </p>

            {Object.entries(config.visibleSections).map(([key, isVisible]) => {
              const labels: Record<string, string> = {
                hero: '1. Animated Hero Greeting & Typing SVG',
                illustration: '2. Vector Developer Workstation Illustration',
                about: '3. About Me (YAML Card & Highlights)',
                techStack: '4. Tech Stack & Skills Category Tables',
                projects: '5. Featured Projects Cards',
                stats: '6. GitHub Analytics & Streak Counter',
                snake: '7. Contribution Snake Activity Animation',
                trophies: '8. GitHub Achievements & Trophies',
                socials: '9. Connect With Me & Social Badges',
                footer: '10. Animated Footer Wave & Star CTA'
              };

              return (
                <label
                  key={key}
                  className="flex items-center justify-between p-2.5 bg-slate-50 hover:bg-slate-100/80 rounded-lg border border-slate-200 cursor-pointer transition-colors"
                >
                  <span className="font-semibold text-slate-800">{labels[key] || key}</span>
                  <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={e => {
                      onChangeConfig(prev => ({
                        ...prev,
                        visibleSections: {
                          ...prev.visibleSections,
                          [key]: e.target.checked
                        }
                      }));
                    }}
                    className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        )}

        {/* THEME TAB */}
        {activeTab === 'theme' && (
          <div className="space-y-4 text-xs">
            <p className="text-slate-500">
              Customize the light theme accents. All presets use crisp high-contrast white backgrounds with blue/purple brand identity.
            </p>

            <div className="space-y-2">
              <span className="font-semibold text-slate-800 block">Theme Color Presets:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {themePresets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      onChangeConfig(prev => ({
                        ...prev,
                        primaryAccent: preset.primary,
                        secondaryAccent: preset.secondary
                      }));
                    }}
                    className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                      config.primaryAccent === preset.primary && config.secondaryAccent === preset.secondary
                        ? 'border-blue-500 bg-blue-50/50 ring-1 ring-blue-500'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-slate-800 block">{preset.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        #{preset.primary} • #{preset.secondary}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: `#${preset.primary}` }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-xs"
                        style={{ backgroundColor: `#${preset.secondary}` }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Primary Hex Code</label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400">#</span>
                  <input
                    type="text"
                    value={config.primaryAccent}
                    onChange={e => onChangeConfig(prev => ({ ...prev, primaryAccent: e.target.value.replace('#', '') }))}
                    className="w-full px-2.5 py-1 border border-slate-300 rounded font-mono uppercase"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Secondary Hex Code</label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400">#</span>
                  <input
                    type="text"
                    value={config.secondaryAccent}
                    onChange={e => onChangeConfig(prev => ({ ...prev, secondaryAccent: e.target.value.replace('#', '') }))}
                    className="w-full px-2.5 py-1 border border-slate-300 rounded font-mono uppercase"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
