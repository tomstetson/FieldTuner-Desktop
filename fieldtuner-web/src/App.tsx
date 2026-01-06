import { useState, useMemo } from 'react';
import { Search, Monitor, Volume2, MousePointer, Zap, Download, RotateCcw, Sparkles, GitCompare, Crosshair, Gamepad2, Shield, Target, Activity } from 'lucide-react';
import { FileUpload } from './components/FileUpload';
import { SettingCard } from './components/SettingCard';
import { PresetCard } from './components/PresetCard';
import { ChangesSummary } from './components/ChangesSummary';
import { DownloadModal } from './components/DownloadModal';
import { parseConfig, isValidConfig, getChanges, downloadConfig } from './lib/configParser';
import { getSettingsByCategory, searchSettings } from './lib/settingsDatabase';
import { PRESETS, applyPreset } from './lib/presets';
import type { Category } from './types/settings';

type Tab = Category | 'Presets' | 'Changes';

const CATEGORY_ICONS: Record<Tab, React.ReactNode> = {
  Graphics: <Monitor className="w-5 h-5" />,
  Performance: <Zap className="w-5 h-5" />,
  Audio: <Volume2 className="w-5 h-5" />,
  Gameplay: <Gamepad2 className="w-5 h-5" />,
  Input: <MousePointer className="w-5 h-5" />,
  Presets: <Sparkles className="w-5 h-5" />,
  Changes: <GitCompare className="w-5 h-5" />,
};

function App() {
  const [originalConfig, setOriginalConfig] = useState<Record<string, string>>({});
  const [currentConfig, setCurrentConfig] = useState<Record<string, string>>({});
  const [fileName, setFileName] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('Graphics');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const isLoaded = fileName !== null;

  const handleFileLoaded = (content: string, name: string) => {
    if (!isValidConfig(content)) {
      alert('This does not appear to be a valid BF6 config file. Please upload a PROFSAVE_profile file.');
      return;
    }
    const config = parseConfig(content);
    setOriginalConfig(config);
    setCurrentConfig(config);
    setFileName(name);
  };

  const handleSettingChange = (key: string, value: string) => {
    setCurrentConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleApplyPreset = (presetKey: string) => {
    const newConfig = applyPreset(currentConfig, presetKey);
    setCurrentConfig(newConfig);
  };

  const handleDownload = () => {
    return downloadConfig(currentConfig);
  };

  const openDownloadModal = () => {
    setShowDownloadModal(true);
  };

  const handleReset = () => {
    setCurrentConfig(originalConfig);
  };

  const changes = useMemo(() => getChanges(originalConfig, currentConfig), [originalConfig, currentConfig]);
  const changeCount = Object.keys(changes).length;

  const filteredSettings = useMemo(() => {
    if (searchQuery) {
      return searchSettings(searchQuery);
    }
    if (activeTab === 'Presets' || activeTab === 'Changes') {
      return {};
    }
    return getSettingsByCategory(activeTab);
  }, [activeTab, searchQuery]);

  const tabs: Tab[] = ['Graphics', 'Performance', 'Audio', 'Input', 'Presets', 'Changes'];

  return (
    <div className="min-h-screen bg-base tactical-grid noise-texture scan-lines">
      {/* Header - Command Bar */}
      <header className="sticky top-0 z-50 border-b border-[var(--border-dim)] bg-[var(--bg-base)]/95 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Top Bar with Logo and Status */}
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="relative flex items-center gap-3">
                {/* Logo Mark */}
                <div className="relative">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-primary)] clip-path-[polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,6px_100%,0_calc(100%-6px))]">
                    <Crosshair className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[var(--color-success)] rounded-full border-2 border-[var(--bg-base)] animate-pulse" />
                </div>
                {/* Logo Text */}
                <div>
                  <h1 className="font-display text-lg font-bold tracking-wider text-[var(--text-primary)]">
                    FIELD<span className="text-[var(--color-primary)]">TUNER</span>
                  </h1>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                    BF6 Config Editor
                  </p>
                </div>
              </div>
            </div>

            {/* Center - Status */}
            {isLoaded && (
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--color-success)]" />
                  <span className="font-mono text-[var(--text-secondary)]">
                    {Object.keys(currentConfig).length} <span className="text-[var(--text-tertiary)]">PARAMS</span>
                  </span>
                </div>
                <div className="w-px h-5 bg-[var(--border-dim)]" />
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="font-mono text-[var(--text-secondary)]">
                    {changeCount} <span className="text-[var(--text-tertiary)]">MODS</span>
                  </span>
                </div>
              </div>
            )}

            {/* Right - Actions */}
            {isLoaded && changeCount > 0 && (
              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="btn-tactical btn-tactical--secondary"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
                <button
                  onClick={openDownloadModal}
                  className="btn-tactical btn-tactical--primary"
                >
                  <Download className="w-4 h-4" />
                  <span>Deploy</span>
                  <span className="ml-1 px-2 py-0.5 bg-black/20 rounded text-xs font-mono">{changeCount}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {!isLoaded ? (
          /* ═══════════════════════════════════════════════════════════════════
             UPLOAD / ONBOARDING SCREEN
             ═══════════════════════════════════════════════════════════════════ */
          <div className="max-w-3xl mx-auto mt-12">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-slide-up">
              {/* Mission Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[var(--color-primary-glow)] border border-[var(--color-primary)]/30 text-[var(--color-primary)] font-display text-xs font-semibold tracking-[0.15em] uppercase clip-path-[polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]">
                <Target className="w-4 h-4" />
                Mission Ready
              </div>

              {/* Main Title */}
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] mb-4">
                <span className="text-gradient">TACTICAL</span> CONFIG
                <br />
                <span className="text-[var(--text-secondary)]">COMMAND CENTER</span>
              </h2>

              <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto font-body">
                Fine-tune every parameter or deploy pro presets with surgical precision
              </p>
            </div>

            {/* File Upload Zone */}
            <div className="animate-slide-up stagger-1 opacity-0">
              <FileUpload onFileLoaded={handleFileLoaded} fileName={fileName} />
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-4 animate-slide-up stagger-2 opacity-0">
              {[
                { value: '150+', label: 'Parameters', icon: <Activity className="w-5 h-5" />, color: 'var(--color-primary)' },
                { value: '5', label: 'Pro Presets', icon: <Sparkles className="w-5 h-5" />, color: 'var(--color-accent)' },
                { value: 'Instant', label: 'Deploy', icon: <Download className="w-5 h-5" />, color: 'var(--color-success)' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="tactical-card tactical-card-sm p-5 text-center group hover:border-[var(--border-active)] transition-all duration-300"
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <p className="font-display text-2xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                  <p className="text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ═══════════════════════════════════════════════════════════════════
             EDITOR SCREEN - COMMAND INTERFACE
             ═══════════════════════════════════════════════════════════════════ */
          <div className="flex gap-6">
            {/* ─────────────────────────────────────────────────────────────────
               Left Sidebar - Navigation Console
               ───────────────────────────────────────────────────────────────── */}
            <aside className="w-60 flex-shrink-0">
              <div className="sticky top-24 space-y-5">
                {/* File Status Panel */}
                <FileUpload onFileLoaded={handleFileLoaded} fileName={fileName} compact />

                {/* Navigation Tabs */}
                <nav className="space-y-1">
                  <div className="px-3 py-2 text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                    Control Modules
                  </div>
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 group ${
                        activeTab === tab
                          ? 'bg-[var(--color-primary-glow)] border-l-2 border-[var(--color-primary)] text-[var(--color-primary)]'
                          : 'border-l-2 border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-subtle)]'
                      }`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className={`transition-colors ${activeTab === tab ? 'text-[var(--color-primary)]' : 'text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]'}`}>
                        {CATEGORY_ICONS[tab]}
                      </span>
                      <span className="font-semibold text-sm">{tab}</span>
                      {tab === 'Changes' && changeCount > 0 && (
                        <span className="ml-auto text-[10px] font-mono font-bold bg-[var(--color-warning)]/20 text-[var(--color-warning)] px-2 py-0.5 rounded">
                          {changeCount}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>

                {/* System Stats */}
                <div className="tactical-card tactical-card-sm p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-display uppercase tracking-[0.15em] text-[var(--text-tertiary)]">System Stats</span>
                    <div className="status-dot status-dot--active" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-[var(--text-secondary)]">Loaded</span>
                      <span className="font-mono text-xs text-[var(--color-accent)]">{Object.keys(currentConfig).length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-[var(--text-secondary)]">Modified</span>
                      <span className="font-mono text-xs text-[var(--color-primary)]">{changeCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ─────────────────────────────────────────────────────────────────
               Main Content Area
               ───────────────────────────────────────────────────────────────── */}
            <div className="flex-1 min-w-0">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
                <input
                  type="text"
                  placeholder="Search parameters... (e.g., 'vsync', 'sensitivity', 'fps')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="tactical-input w-full pl-12 pr-12 py-4"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-overlay)] rounded transition-colors"
                  >
                    <span className="text-sm">×</span>
                  </button>
                )}
              </div>

              {/* Content Sections */}
              {activeTab === 'Presets' && !searchQuery ? (
                /* Presets Grid */
                <div className="animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h2 className="font-display text-xl font-bold text-[var(--text-primary)] uppercase tracking-wide">
                        Quick Deploy Presets
                      </h2>
                      <p className="text-sm text-[var(--text-tertiary)]">Apply optimized configurations with one click</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(PRESETS).map(([key, preset], index) => (
                      <div key={key} className="animate-slide-up opacity-0" style={{ animationDelay: `${index * 0.05}s` }}>
                        <PresetCard
                          preset={preset}
                          onApply={() => handleApplyPreset(key)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : activeTab === 'Changes' && !searchQuery ? (
                /* Changes Summary */
                <div className="animate-fade-in">
                  <ChangesSummary changes={changes} onDownload={openDownloadModal} onResetAll={handleReset} />
                </div>
              ) : (
                /* Settings List */
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--color-primary)]">{CATEGORY_ICONS[activeTab as Tab] || <Search className="w-6 h-6" />}</span>
                      <div>
                        <h2 className="font-display text-xl font-bold text-[var(--text-primary)] uppercase tracking-wide">
                          {searchQuery ? 'Search Results' : activeTab}
                        </h2>
                        {searchQuery && (
                          <p className="text-sm text-[var(--text-tertiary)]">
                            {Object.keys(filteredSettings).length} matches for "{searchQuery}"
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(filteredSettings).map(([key, metadata], index) => {
                      const value = currentConfig[key];
                      if (value === undefined) return null;
                      return (
                        <div key={key} className="animate-slide-up opacity-0" style={{ animationDelay: `${Math.min(index * 0.02, 0.3)}s` }}>
                          <SettingCard
                            settingKey={key}
                            metadata={metadata}
                            value={value}
                            originalValue={originalConfig[key]}
                            onChange={handleSettingChange}
                          />
                        </div>
                      );
                    })}
                    {Object.keys(filteredSettings).length === 0 && (
                      <div className="tactical-card p-12 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--bg-elevated)] rounded-lg">
                          <Search className="w-8 h-8 text-[var(--text-tertiary)]" />
                        </div>
                        <p className="font-display text-lg font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
                          {searchQuery ? 'No Parameters Found' : 'No Settings Available'}
                        </p>
                        <p className="text-sm text-[var(--text-tertiary)] mt-1">
                          {searchQuery ? 'Try different search terms' : ''}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Download Modal */}
      <DownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onDownload={handleDownload}
        changeCount={changeCount}
      />
    </div>
  );
}

export default App;
