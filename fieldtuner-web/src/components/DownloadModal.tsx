import { X, Download, FolderOpen, Copy, Check, AlertTriangle, Shield, Crosshair } from 'lucide-react';
import { useState } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => string;
  changeCount: number;
}

const CONFIG_PATHS = {
  steam: {
    label: 'Steam',
    path: 'Documents\\Battlefield 6\\settings\\PROFSAVE_profile',
    color: 'var(--color-accent)',
  },
  ea: {
    label: 'EA App',
    path: 'Documents\\Battlefield 6\\settings\\PROFSAVE_profile',
    color: 'var(--color-primary)',
  },
};

export function DownloadModal({ isOpen, onClose, onDownload, changeCount }: DownloadModalProps) {
  const [downloadedFileName, setDownloadedFileName] = useState<string | null>(null);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    const fileName = onDownload();
    setDownloadedFileName(fileName);
  };

  const copyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg bg-[var(--bg-base)] border border-[var(--border-dim)] shadow-2xl overflow-hidden animate-slide-up"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))'
        }}
      >
        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[var(--color-primary)]/30" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[var(--color-primary)]/30" />

        {/* Header */}
        <div className="relative flex items-center justify-between p-5 border-b border-[var(--border-dim)] bg-[var(--bg-surface)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[var(--text-primary)] uppercase tracking-wide">
                Deploy Configuration
              </h2>
              <p className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                Mission Control
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Changes Warning */}
          <div className="flex items-center gap-3 p-4 bg-[var(--color-warning)]/5 border border-[var(--color-warning)]/20">
            <AlertTriangle className="w-5 h-5 text-[var(--color-warning)] flex-shrink-0" />
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="font-mono font-bold text-[var(--color-warning)]">{changeCount}</span> parameter{changeCount !== 1 ? 's' : ''} will be modified
            </p>
          </div>

          {/* Download Button / Success State */}
          {!downloadedFileName ? (
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[#ff8855] text-black font-display font-bold text-sm uppercase tracking-wider transition-all hover:brightness-110 hover:shadow-[0_0_30px_var(--color-primary-dim)]"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
            >
              <Download className="w-5 h-5" />
              <span>Download Config File</span>
            </button>
          ) : (
            <div className="p-4 bg-[var(--color-success)]/5 border border-[var(--color-success)]/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 flex items-center justify-center bg-[var(--color-success)]/20 border border-[var(--color-success)]/30">
                  <Check className="w-4 h-4 text-[var(--color-success)]" />
                </div>
                <span className="font-display font-bold text-[var(--color-success)] uppercase tracking-wide">
                  Download Complete
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] ml-11">
                Saved as: <span className="font-mono text-[var(--color-success)]">{downloadedFileName}</span>
              </p>
            </div>
          )}

          {/* Installation Steps */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-display uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              <Crosshair className="w-3.5 h-3.5" />
              <span>Installation Protocol</span>
            </div>

            <ol className="space-y-3">
              {[
                'Navigate to your Battlefield 6 settings folder',
                <>
                  <span className="text-[var(--color-warning)]">Backup:</span> Rename existing{' '}
                  <span className="font-mono text-[var(--color-accent)]">PROFSAVE_profile</span> to{' '}
                  <span className="font-mono text-[var(--text-tertiary)]">PROFSAVE_profile_backup</span>
                </>,
                <>
                  Copy downloaded file and rename to{' '}
                  <span className="font-mono text-[var(--color-accent)]">PROFSAVE_profile</span>
                </>,
                'Launch Battlefield 6 with optimized settings',
              ].map((step, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-display font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30"
                    style={{
                      clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)'
                    }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[var(--text-secondary)] pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Config Paths */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-display uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Config Location</span>
            </div>

            <div className="space-y-2">
              {Object.entries(CONFIG_PATHS).map(([key, { label, path, color }]) => (
                <div
                  key={key}
                  className="flex items-center gap-3 p-3 bg-[var(--bg-surface)] border border-[var(--border-dim)] group"
                >
                  <span
                    className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 border"
                    style={{
                      color: color,
                      backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
                      borderColor: `color-mix(in srgb, ${color} 30%, transparent)`
                    }}
                  >
                    {label}
                  </span>
                  <code className="flex-1 text-xs text-[var(--text-secondary)] font-mono truncate">
                    {path}
                  </code>
                  <button
                    onClick={() => copyPath(path)}
                    className="w-8 h-8 flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
                    title="Copy path"
                  >
                    {copiedPath === path ? (
                      <Check className="w-4 h-4 text-[var(--color-success)]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[var(--bg-surface)] border-t border-[var(--border-dim)]">
          <p className="text-[11px] text-[var(--text-tertiary)] text-center">
            <span className="text-[var(--color-warning)]">NOTICE:</span> Ensure Battlefield 6 is closed before replacing config files
          </p>
        </div>
      </div>
    </div>
  );
}
