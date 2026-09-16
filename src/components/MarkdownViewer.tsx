import React from 'react';
import { Copy, Check, Download, FileText } from 'lucide-react';

interface MarkdownViewerProps {
  markdown: string;
  onCopy: () => void;
  copied: boolean;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({
  markdown,
  onCopy,
  copied
}) => {
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'README.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const lines = markdown.split('\n');

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Header bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-slate-600" />
          <span className="text-xs font-bold text-slate-800 font-mono">README.md</span>
          <span className="text-[11px] text-slate-500">({lines.length} lines)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-all shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Raw Markdown</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download README.md</span>
          </button>
        </div>
      </div>

      {/* Code Viewer with Line Numbers */}
      <div className="bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-[600px]">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-800/50">
                <td className="select-none text-slate-600 text-right pr-4 align-top w-10 font-mono text-[11px]">
                  {idx + 1}
                </td>
                <td className="whitespace-pre text-slate-200 font-mono">
                  {line || ' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
