import { Download, ArrowRight, FileDown, RotateCcw, GitCompare, AlertTriangle, ChevronRight } from 'lucide-react';
import { SETTINGS_DATABASE } from '../lib/settingsDatabase';

interface ChangesSummaryProps {
  changes: Record<string, { oldValue: string; newValue: string }>;
  onDownload: () => void;
  onResetAll?: () => void;
}

export function ChangesSummary({ changes, onDownload, onResetAll }: ChangesSummaryProps) {
  const changedKeys = Object.keys(changes);

  /* ═══════════════════════════════════════════════════════════════════════════
     EMPTY STATE - No Changes
     ═══════════════════════════════════════════════════════════════════════════ */
  if (changedKeys.length === 0) {
    return (
      <div className="tactical-card p-12 text-center">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[var(--bg-elevated)] border border-[var(--border-dim)] rotate-45">
          <FileDown className="w-10 h-10 text-[var(--text-tertiary)] -rotate-45" />
        </div>
        <p className="font-display text-xl font-bold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
          No Modifications Detected
        </p>
        <p className="text-sm text-[var(--text-tertiary)]">
          Adjust parameters to see changes appear here
        </p>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     CHANGES VIEW - Operation Log Style
     ═══════════════════════════════════════════════════════════════════════════ */
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-warning)]/10 border border-[var(--color-warning)]/30">
            <GitCompare className="w-6 h-6 text-[var(--color-warning)]" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-[var(--text-primary)] uppercase tracking-wide">
              Operation Log
            </h2>
            <p className="text-sm text-[var(--text-tertiary)]">
              <span className="text-[var(--color-warning)] font-mono font-bold">{changedKeys.length}</span> parameter{changedKeys.length !== 1 ? 's' : ''} queued for deployment
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {onResetAll && (
            <button
              onClick={onResetAll}
              className="btn-tactical btn-tactical--secondary"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Abort All</span>
            </button>
          )}
          <button
            onClick={onDownload}
            className="btn-tactical btn-tactical--primary"
          >
            <Download className="w-4 h-4" />
            <span>Deploy Config</span>
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="flex items-center gap-3 p-4 bg-[var(--color-warning)]/5 border border-[var(--color-warning)]/20">
        <AlertTriangle className="w-5 h-5 text-[var(--color-warning)] flex-shrink-0" />
        <p className="text-sm text-[var(--text-secondary)]">
          Review all modifications before deploying. Changes will overwrite your existing config file.
        </p>
      </div>

      {/* Changes List */}
      <div className="space-y-1">
        {/* List Header */}
        <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-display uppercase tracking-[0.15em] text-[var(--text-tertiary)] border-b border-[var(--border-dim)]">
          <span className="flex-1">Parameter</span>
          <span className="w-32 text-center">Previous</span>
          <span className="w-8" />
          <span className="w-32 text-center">Modified</span>
        </div>

        {/* Change Items */}
        {changedKeys.map((key, index) => {
          const metadata = SETTINGS_DATABASE[key];
          const { oldValue, newValue } = changes[key];

          const formatValue = (val: string) => {
            if (metadata?.options) {
              return metadata.options[parseInt(val)] || val;
            }
            if (metadata?.type === 'bool') {
              return val === '1' ? 'ON' : 'OFF';
            }
            if (metadata?.type === 'float') {
              return parseFloat(val).toFixed(2);
            }
            return val;
          };

          return (
            <div
              key={key}
              className="group flex items-center gap-4 p-4 bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border-l-2 border-transparent hover:border-[var(--color-primary)] transition-all"
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              {/* Parameter Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-[var(--color-primary)]" />
                  <span className="font-semibold text-sm text-[var(--text-primary)] truncate">
                    {metadata?.name || key}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] ml-5">{key}</span>
              </div>

              {/* Old Value */}
              <div className="w-32 flex justify-center">
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono bg-[var(--color-danger)]/10 text-[var(--color-danger)] border border-[var(--color-danger)]/20">
                  {formatValue(oldValue)}
                </span>
              </div>

              {/* Arrow */}
              <div className="w-8 flex justify-center">
                <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
              </div>

              {/* New Value */}
              <div className="w-32 flex justify-center">
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-mono bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20">
                  {formatValue(newValue)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="flex items-center justify-between p-4 bg-[var(--bg-elevated)] border border-[var(--border-dim)]">
        <div className="flex items-center gap-4">
          <div className="status-dot status-dot--warning" />
          <span className="text-sm text-[var(--text-secondary)]">
            <span className="font-mono font-bold text-[var(--color-warning)]">{changedKeys.length}</span> modifications pending deployment
          </span>
        </div>
        <button
          onClick={onDownload}
          className="btn-tactical btn-tactical--accent"
        >
          <Download className="w-4 h-4" />
          <span>Deploy Now</span>
        </button>
      </div>
    </div>
  );
}
