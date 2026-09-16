import React from 'react';
import { Database, Image, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface AssetSource {
  name: string;
  category: 'Header / Banner' | 'Typing Animation' | 'Badges & Buttons' | 'Icons' | 'Analytics & Stats' | 'Actions & Snake';
  provider: string;
  sourceUrl: string;
  parametersUsed: string;
  lightThemeHandling: string;
  status: 'Maintained & Reliable' | 'Official';
}

const ASSET_SOURCES: AssetSource[] = [
  {
    name: 'Dynamic Waving Header',
    category: 'Header / Banner',
    provider: 'Capsule Render (kyechan99)',
    sourceUrl: 'https://capsule-render.vercel.app',
    parametersUsed: 'type=waving&color=gradient&customColorList=2,12,24&height=180&fontColor=1E293B',
    lightThemeHandling: 'Outputs SVG wave with soft blue-to-purple gradient on transparent/white background.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'Typing SVG Effect',
    category: 'Typing Animation',
    provider: 'DenverCoder1 (readme-typing-svg)',
    sourceUrl: 'https://readme-typing-svg.demolab.com',
    parametersUsed: 'font=Plus+Jakarta+Sans&weight=700&size=24&color=2563EB&center=true',
    lightThemeHandling: 'Rendered directly into pure crisp vector text in vibrant Blue (#2563EB), transparent background.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'Social & Quick Badges',
    category: 'Badges & Buttons',
    provider: 'Shields.io',
    sourceUrl: 'https://img.shields.io',
    parametersUsed: 'style=for-the-badge&logo=[brand]&logoColor=white&color=[HEX]',
    lightThemeHandling: 'Curated high-contrast primary blue (#2563EB) and purple (#7C3AED) badges.',
    status: 'Official'
  },
  {
    name: 'Tech Stack Ribbon',
    category: 'Icons',
    provider: 'SkillIcons (tandpfun)',
    sourceUrl: 'https://skillicons.dev',
    parametersUsed: 'theme=light&perline=7&i=js,ts,react,html,css,tailwind,nodejs,express,mongodb,postgres,git,github,vscode,postman',
    lightThemeHandling: 'Native theme=light flag generates high-contrast rounded icon badges.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'Individual Technology SVGs',
    category: 'Icons',
    provider: 'Devicon Official Repository',
    sourceUrl: 'https://raw.githubusercontent.com/devicons/devicon',
    parametersUsed: 'Direct raw SVGs from master branch (JavaScript, TypeScript, React, Tailwind, PostgreSQL, etc.)',
    lightThemeHandling: 'Vector SVGs rendered at 22x22px inside accessible HTML tables with clear tech names.',
    status: 'Official'
  },
  {
    name: 'GitHub Readme Streak Stats',
    category: 'Analytics & Stats',
    provider: 'DenverCoder1 (streak-stats.demolab.com)',
    sourceUrl: 'https://streak-stats.demolab.com',
    parametersUsed: 'theme=light&background=FFFFFF&border=E2E8F0&stroke=2563EB&ring=7C3AED&fire=2563EB',
    lightThemeHandling: 'Customized parameter palette matching pure white container and slate borders.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'GitHub Readme Stats & Languages',
    category: 'Analytics & Stats',
    provider: 'Anurag Hazra (github-readme-stats mirror)',
    sourceUrl: 'https://github-readme-stats-eight-theta.vercel.app',
    parametersUsed: 'show_icons=true&title_color=2563eb&text_color=374151&icon_color=7c3aed&bg_color=ffffff&border_color=e2e8f0',
    lightThemeHandling: 'Custom light palette with slate text and blue/purple accents.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'Contribution Snake Action',
    category: 'Actions & Snake',
    provider: 'Platane / snk (v3)',
    sourceUrl: 'https://github.com/Platane/snk',
    parametersUsed: 'palette=github-light&color_snake=#2563eb&color_dots=#ebedf0,#93c5fd,#60a5fa,#3b82f6,#1d4ed8',
    lightThemeHandling: 'Generates custom light SVG contribution snake with blue/purple colors.',
    status: 'Maintained & Reliable'
  },
  {
    name: 'GitHub Profile Trophies',
    category: 'Analytics & Stats',
    provider: 'RyotaK (github-profile-trophy mirror)',
    sourceUrl: 'https://github-profile-trophy-gamma.vercel.app',
    parametersUsed: 'theme=flat&background=ffffff&border=e2e8f0&title=2563eb',
    lightThemeHandling: 'Flat light theme with border framing matching GitHub web UI.',
    status: 'Maintained & Reliable'
  }
];

export const AssetDirectoryTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-2">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-bold text-slate-900">External Image & Icon Sources</h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
          In strict compliance with GitHub's markdown security sandbox, every external image and icon used in this profile README comes from verified, well-maintained, high-uptime developer services. No random or unverified image-hosting sites are used.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                <th className="py-3 px-4">Component</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Service Provider</th>
                <th className="py-3 px-4">Light-Theme Palette Configuration</th>
                <th className="py-3 px-4">Reliability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {ASSET_SOURCES.map((asset, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    {asset.name}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium">
                      {asset.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={asset.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>{asset.provider}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <p className="font-mono text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-200 truncate mb-1">
                      {asset.parametersUsed}
                    </p>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      {asset.lightThemeHandling}
                    </p>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      {asset.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
