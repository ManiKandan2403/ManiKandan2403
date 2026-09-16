import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  FolderGit2,
  FileCode2,
  Settings,
  Play,
  CheckCheck,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  category: 'repo' | 'workflow' | 'customization' | 'verification';
  description: string;
  actionText?: string;
  actionUrl?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'c1',
    title: 'Create the Special Repository: ManiKandan2403/ManiKandan2403',
    category: 'repo',
    description: 'Go to GitHub and create a new repository whose name matches your exact GitHub username (ManiKandan2403). Make sure it is marked as PUBLIC and check "Add a README file".',
    actionText: 'Create New Repository on GitHub',
    actionUrl: 'https://github.com/new'
  },
  {
    id: 'c2',
    title: 'Replace the README.md content',
    category: 'repo',
    description: 'Paste the generated README.md content into the root of your special repository and commit changes to the main branch.',
    actionText: 'View Your Profile Repository',
    actionUrl: 'https://github.com/ManiKandan2403/ManiKandan2403'
  },
  {
    id: 'c3',
    title: 'Enable GitHub Actions Read and Write Permissions',
    category: 'workflow',
    description: 'Go to your repository Settings -> Actions -> General. Scroll to "Workflow permissions" and select "Read and write permissions". Click Save. (Crucial: This enables the snake workflow to push the generated SVG to the output branch).',
    actionText: 'Actions Permission Settings',
    actionUrl: 'https://github.com/ManiKandan2403/ManiKandan2403/settings/actions'
  },
  {
    id: 'c4',
    title: 'Create .github/workflows/snake.yml',
    category: 'workflow',
    description: 'In your repository, create the directory structure .github/workflows/ and add snake.yml with the provided GitHub Actions workflow code.',
  },
  {
    id: 'c5',
    title: 'Trigger Initial Workflow Run Manually',
    category: 'workflow',
    description: 'Go to the "Actions" tab in your repository, click "Generate Contribution Snake", and click "Run workflow" -> "Run workflow". Wait ~30 seconds for it to turn green.',
    actionText: 'Actions Tab',
    actionUrl: 'https://github.com/ManiKandan2403/ManiKandan2403/actions'
  },
  {
    id: 'c6',
    title: 'Verify the Output Branch Exists',
    category: 'verification',
    description: 'After the action finishes, check your repository branch dropdown to confirm an "output" branch exists with "github-contribution-grid-snake.svg".',
  },
  {
    id: 'c7',
    title: 'Update Personal LinkedIn URL Placeholder',
    category: 'customization',
    description: 'Replace [Add-Your-LinkedIn] and [Add-Your-LinkedIn-Slug] in the README with your actual LinkedIn username slug.',
  },
  {
    id: 'c8',
    title: 'Check / Customize Upcoming Project Descriptions',
    category: 'customization',
    description: 'Your real repositories (Portfolio and My-Portofolio) are linked automatically! For the 2 upcoming project placeholders, replace the descriptions or titles as you build new apps.',
  },
  {
    id: 'c9',
    title: 'Final Quality Verification (Light Mode & Mobile)',
    category: 'verification',
    description: 'Open your GitHub profile page https://github.com/ManiKandan2403 on desktop and mobile. Confirm all badges, typing SVG, streak stats, and the contribution snake render cleanly.',
    actionText: 'Open Public Profile',
    actionUrl: 'https://github.com/ManiKandan2403'
  }
];

export const SetupGuideTab: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('manikandan_readme_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('manikandan_readme_checklist', JSON.stringify(checkedIds));
    } catch {
      // ignore
    }
  }, [checkedIds]);

  const toggleCheck = (id: string) => {
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const progressPercent = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Setup & Deployment Checklist</h2>
            <p className="text-xs text-slate-500">
              Follow these steps to deploy your profile README and contribution snake on GitHub.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">
              {checkedIds.length} of {CHECKLIST_ITEMS.length} Completed
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item, index) => {
          const isDone = checkedIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                isDone
                  ? 'bg-slate-50/80 border-slate-200 opacity-90'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-slate-400 hover:text-blue-600 transition-colors"
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </button>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-sm font-semibold ${
                      isDone ? 'line-through text-slate-500' : 'text-slate-900'
                    }`}
                  >
                    {index + 1}. {item.title}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.actionText && item.actionUrl && (
                  <div className="pt-2">
                    <a
                      href={item.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      <span>{item.actionText}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Critical note on GitHub Actions permissions */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h5 className="font-bold">Important note on GitHub Actions:</h5>
          <p>
            By default, new GitHub repositories restrict Actions to <em>read-only</em> permissions.
            Step 3 (enabling <strong>"Read and write permissions"</strong> in Repository Settings) is required so the snake action can commit the generated SVG to the <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">output</code> branch.
          </p>
        </div>
      </div>
    </div>
  );
};
