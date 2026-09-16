import React, { useState } from 'react';
import { Copy, Check, Workflow, ShieldCheck, Clock, GitBranch, Terminal } from 'lucide-react';
import { WORKFLOW_YAML } from '../utils/markdownGenerator';

export const SnakeWorkflowTab: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WORKFLOW_YAML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Workflow Explanation Banner */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-900">
                GitHub Contribution Snake Workflow
              </h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-300">
                Maintained & Safe
              </span>
            </div>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Automates generation of the animated contribution snake SVG for user <code className="bg-white px-1.5 py-0.5 rounded text-blue-700 font-mono font-semibold">ManiKandan2403</code>.
              Runs on a 12-hour schedule using official GitHub Actions runners, commits the output to an isolated <code className="bg-white px-1.5 py-0.5 rounded text-purple-700 font-mono font-semibold">output</code> branch, and requires zero third-party secret tokens!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied YAML!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy YAML</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3 Architecture Key Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Automated Schedule</span>
          </div>
          <p className="text-xs text-slate-600">
            Configured with cron <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">0 */12 * * *</code> (runs every 12 hours) + manual triggering (<code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">workflow_dispatch</code>).
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Custom Secrets</span>
          </div>
          <p className="text-xs text-slate-600">
            Uses native built-in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">GITHUB_TOKEN</code> with explicit <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">permissions: contents: write</code>. No personal access tokens (PAT) exposed.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
            <GitBranch className="w-4 h-4" />
            <span>Isolated Output Branch</span>
          </div>
          <p className="text-xs text-slate-600">
            The SVGs are saved to a separate <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">output</code> branch, keeping your <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">main</code> git log neat and uncluttered.
          </p>
        </div>
      </div>

      {/* File placement instructions */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
        <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
          <Terminal className="w-4 h-4 text-slate-600" />
          <span>File Destination in your GitHub Repository:</span>
        </h4>
        <div className="font-mono bg-white p-2.5 rounded border border-slate-200 text-slate-800">
          ManiKandan2403 / ManiKandan2403 / <strong>.github/workflows/snake.yml</strong>
        </div>
      </div>

      {/* YAML Code Viewer */}
      <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden shadow-xs border border-slate-800">
        <div className="bg-slate-800/80 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-300">.github/workflows/snake.yml</span>
          <span className="text-slate-400">YAML Workflow</span>
        </div>
        <pre className="p-4 text-xs font-mono overflow-x-auto text-slate-200 leading-relaxed">
          {WORKFLOW_YAML}
        </pre>
      </div>
    </div>
  );
};
