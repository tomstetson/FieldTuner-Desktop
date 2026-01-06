import { useCallback, useState } from 'react';
import { Upload, FileCheck, FolderOpen, Crosshair, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFileLoaded: (content: string, fileName: string) => void;
  fileName: string | null;
  compact?: boolean;
}

export function FileUpload({ onFileLoaded, fileName, compact = false }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) readFile(file);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  }, []);

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      onFileLoaded(content, file.name);
    };
    reader.readAsText(file);
  };

  /* ═══════════════════════════════════════════════════════════════════════════
     COMPACT VIEW - Sidebar File Status
     ═══════════════════════════════════════════════════════════════════════════ */
  if (fileName && compact) {
    return (
      <div className="tactical-card tactical-card-sm p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 flex items-center justify-center bg-[var(--color-success)]/20 border border-[var(--color-success)]/30">
            <FileCheck className="w-4 h-4 text-[var(--color-success)]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-display uppercase tracking-[0.15em] text-[var(--color-success)]">Config Loaded</p>
            <p className="text-sm font-mono text-[var(--text-primary)] truncate">{fileName}</p>
          </div>
        </div>
        <label className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--bg-elevated)] hover:bg-[var(--bg-overlay)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] cursor-pointer transition-all text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] clip-path-[polygon(0_0,calc(100%-4px)_0,100%_4px,100%_100%,4px_100%,0_calc(100%-4px))]">
          <FolderOpen className="w-4 h-4" />
          <span>Change File</span>
          <input type="file" className="hidden" onChange={handleChange} accept="*" />
        </label>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     LOADED VIEW - File Loaded State
     ═══════════════════════════════════════════════════════════════════════════ */
  if (fileName) {
    return (
      <div className="tactical-card p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-success)]/20 border border-[var(--color-success)]/30">
            <FileCheck className="w-6 h-6 text-[var(--color-success)]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-display uppercase tracking-[0.15em] text-[var(--color-success)] mb-0.5">Mission File Loaded</p>
            <p className="text-lg font-semibold text-[var(--text-primary)] truncate">{fileName}</p>
          </div>
        </div>
        <label className="flex items-center justify-center gap-2 px-4 py-3 bg-[var(--bg-elevated)] hover:bg-[var(--bg-overlay)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] cursor-pointer transition-all font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] clip-path-[polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))]">
          <FolderOpen className="w-4 h-4" />
          <span>Load Different File</span>
          <input type="file" className="hidden" onChange={handleChange} accept="*" />
        </label>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════════════════
     UPLOAD VIEW - Tactical Drop Zone
     ═══════════════════════════════════════════════════════════════════════════ */
  return (
    <label
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`relative flex flex-col items-center justify-center p-10 cursor-pointer transition-all duration-300 ${
        isDragging
          ? 'bg-[var(--color-primary-glow)] border-[var(--color-primary)]'
          : 'bg-[var(--bg-surface)] border-[var(--border-dim)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--bg-elevated)]'
      } border-2 border-dashed`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
      }}
    >
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-primary)]/50" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-primary)]/50" />

      {/* Crosshair Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Crosshair className="w-48 h-48 text-[var(--color-primary)]" />
      </div>

      {/* Upload Icon */}
      <div className={`relative w-20 h-20 flex items-center justify-center mb-6 transition-all duration-300 ${
        isDragging ? 'scale-110' : 'group-hover:scale-105'
      }`}>
        <div className="absolute inset-0 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rotate-45" />
        <Upload className={`w-10 h-10 transition-colors ${isDragging ? 'text-[var(--color-primary)]' : 'text-[var(--text-tertiary)]'}`} />
      </div>

      {/* Text Content */}
      <div className="text-center relative z-10">
        <p className={`font-display text-xl font-bold tracking-wide mb-2 transition-colors ${
          isDragging ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'
        }`}>
          {isDragging ? 'RELEASE TO UPLOAD' : 'DROP CONFIG FILE HERE'}
        </p>
        <p className="text-sm text-[var(--text-tertiary)] mb-6">
          or click to browse your files
        </p>
      </div>

      {/* Config Location Paths */}
      <div className="w-full max-w-md space-y-3 relative z-10">
        <div className="flex items-center gap-2 px-4 py-2.5 text-[10px] font-display uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Config File Location</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-dim)]">
            <span className="text-[10px] font-display font-bold text-[var(--color-accent)] uppercase tracking-wider px-2 py-0.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20">Steam</span>
            <code className="text-xs text-[var(--text-secondary)] font-mono truncate">
              Documents\Battlefield 6\settings\PROFSAVE_profile
            </code>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-dim)]">
            <span className="text-[10px] font-display font-bold text-[var(--color-primary)] uppercase tracking-wider px-2 py-0.5 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">EA App</span>
            <code className="text-xs text-[var(--text-secondary)] font-mono truncate">
              Documents\Battlefield 6\settings\PROFSAVE_profile
            </code>
          </div>
        </div>

        <p className="text-center text-[10px] text-[var(--text-muted)] font-mono">
          File has no extension — named <span className="text-[var(--text-tertiary)]">PROFSAVE_profile</span>
        </p>
      </div>

      <input type="file" className="hidden" onChange={handleChange} accept="*" />
    </label>
  );
}
