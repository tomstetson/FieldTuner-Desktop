import type { SettingMetadata } from '../types/settings';
import { HelpCircle, RotateCcw, ChevronRight } from 'lucide-react';

interface SettingCardProps {
  settingKey: string;
  metadata: SettingMetadata;
  value: string;
  originalValue?: string;
  onChange: (key: string, value: string) => void;
}

export function SettingCard({ settingKey, metadata, value, originalValue, onChange }: SettingCardProps) {
  const isModified = originalValue !== undefined && value !== originalValue;

  const handleChange = (newValue: string) => {
    onChange(settingKey, newValue);
  };

  const handleReset = () => {
    if (originalValue !== undefined) {
      onChange(settingKey, originalValue);
    }
  };

  const renderControl = () => {
    /* ═══════════════════════════════════════════════════════════════════════
       BOOLEAN TOGGLE - Tactical Switch
       ═══════════════════════════════════════════════════════════════════════ */
    if (metadata.type === 'bool') {
      const checked = value === '1';
      return (
        <button
          onClick={() => handleChange(checked ? '0' : '1')}
          className={`toggle-switch ${checked ? 'toggle-switch--active' : ''}`}
          aria-label={checked ? 'Enabled' : 'Disabled'}
        >
          <span className="sr-only">{checked ? 'Enabled' : 'Disabled'}</span>
        </button>
      );
    }

    /* ═══════════════════════════════════════════════════════════════════════
       DROPDOWN SELECT - Tactical Selector
       ═══════════════════════════════════════════════════════════════════════ */
    if (metadata.options) {
      const numValue = parseInt(value) || 0;
      return (
        <select
          value={numValue}
          onChange={(e) => handleChange(e.target.value)}
          className="tactical-select min-w-[160px]"
        >
          {Object.entries(metadata.options).map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
      );
    }

    /* ═══════════════════════════════════════════════════════════════════════
       FLOAT SLIDER - Tactical Range Control
       ═══════════════════════════════════════════════════════════════════════ */
    if (metadata.type === 'float') {
      const numValue = parseFloat(value) || 0;
      const [min, max] = metadata.range;
      const step = max <= 1 ? 0.01 : max <= 10 ? 0.1 : 1;
      const percentage = ((numValue - min) / (max - min)) * 100;

      return (
        <div className="flex items-center gap-4">
          {/* Slider Track */}
          <div className="relative w-40">
            <div className="h-1.5 bg-[var(--bg-overlay)] border border-[var(--border-dim)]">
              <div
                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/70"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={numValue}
              onChange={(e) => handleChange(parseFloat(e.target.value).toFixed(6))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {/* Diamond Thumb Indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-primary)] border border-white/50 rotate-45 pointer-events-none shadow-[0_0_10px_var(--color-primary)]"
              style={{ left: `calc(${percentage}% - 6px)` }}
            />
          </div>
          {/* Value Display */}
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={parseFloat(numValue.toFixed(3))}
            onChange={(e) => handleChange(parseFloat(e.target.value).toFixed(6))}
            className="tactical-number w-20"
          />
        </div>
      );
    }

    /* ═══════════════════════════════════════════════════════════════════════
       INTEGER INPUT - Tactical Number Input
       ═══════════════════════════════════════════════════════════════════════ */
    const numValue = parseInt(value) || 0;
    const [min, max] = metadata.range;
    return (
      <input
        type="number"
        min={min}
        max={max}
        value={numValue}
        onChange={(e) => handleChange(e.target.value)}
        className="tactical-number w-24"
      />
    );
  };

  return (
    <div
      className={`group relative flex items-center justify-between p-4 transition-all duration-200 ${
        isModified
          ? 'bg-[var(--color-primary)]/5 border-l-2 border-[var(--color-primary)]'
          : 'bg-[var(--bg-surface)] border-l-2 border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]'
      }`}
    >
      {/* Left Section - Label and Info */}
      <div className="flex-1 min-w-0 pr-6">
        <div className="flex items-center gap-2">
          {/* Modified Indicator */}
          {isModified && (
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-primary)] flex-shrink-0" />
          )}
          {/* Setting Name */}
          <span className={`font-semibold text-sm ${isModified ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'}`}>
            {metadata.name}
          </span>
          {/* Modified Badge */}
          {isModified && (
            <span className="text-[9px] font-display font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--color-primary)]/20 text-[var(--color-primary)] border border-[var(--color-primary)]/30">
              Modified
            </span>
          )}
        </div>

        {/* Subcategory and Help */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">{metadata.subcategory}</span>
          {/* Tooltip */}
          <div className="group/tooltip relative">
            <HelpCircle className="w-3.5 h-3.5 text-[var(--text-muted)] hover:text-[var(--text-secondary)] cursor-help transition-colors" />
            <div className="absolute left-0 bottom-full mb-2 hidden group-hover/tooltip:block w-80 p-4 bg-[var(--bg-base)] border border-[var(--border-subtle)] text-xs z-50 shadow-2xl clip-path-[polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-[var(--color-accent)]" />
                <p className="font-display font-bold text-[var(--text-primary)] uppercase tracking-wide text-xs">{metadata.name}</p>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">{metadata.tooltip}</p>
              <div className="mt-3 pt-2 border-t border-[var(--border-dim)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)]">{settingKey}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Controls */}
      <div className="flex items-center gap-4">
        {/* Reset Button */}
        {isModified && originalValue && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-overlay)] border border-transparent hover:border-[var(--border-subtle)] transition-all opacity-0 group-hover:opacity-100"
            title="Reset to original value"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="font-mono text-[10px]">
              {metadata.options
                ? metadata.options[parseInt(originalValue)] || originalValue
                : metadata.type === 'bool'
                  ? (originalValue === '1' ? 'ON' : 'OFF')
                  : originalValue}
            </span>
          </button>
        )}
        {/* Control */}
        {renderControl()}
      </div>
    </div>
  );
}
