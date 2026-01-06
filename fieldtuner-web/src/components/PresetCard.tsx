import type { Preset } from '../types/settings';
import { Zap, ChevronRight } from 'lucide-react';

interface PresetCardProps {
  preset: Preset;
  onApply: () => void;
}

export function PresetCard({ preset, onApply }: PresetCardProps) {
  const settingsCount = Object.keys(preset.settings).length;

  return (
    <button
      onClick={onApply}
      className="group relative flex flex-col w-full text-left transition-all duration-300 overflow-hidden"
    >
      {/* Main Card Container */}
      <div
        className="relative p-5 border transition-all duration-300 group-hover:border-opacity-60"
        style={{
          backgroundColor: `${preset.color}08`,
          borderColor: `${preset.color}30`,
          clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
        }}
      >
        {/* Corner Accent */}
        <div
          className="absolute top-0 right-0 w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(135deg, ${preset.color}40 50%, transparent 50%)`
          }}
        />

        {/* Glow Effect on Hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at top, ${preset.color}15, transparent 70%)`
          }}
        />

        {/* Header Row */}
        <div className="relative flex items-start gap-4 mb-4">
          {/* Icon Container */}
          <div
            className="flex items-center justify-center w-14 h-14 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              backgroundColor: `${preset.color}15`,
              border: `1px solid ${preset.color}30`,
              clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
            }}
          >
            {preset.icon}
          </div>

          {/* Title and Meta */}
          <div className="flex-1 min-w-0 pt-1">
            <h3
              className="font-display text-lg font-bold uppercase tracking-wide mb-1 transition-colors"
              style={{ color: preset.color }}
            >
              {preset.name}
            </h3>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border"
                style={{
                  color: preset.color,
                  backgroundColor: `${preset.color}10`,
                  borderColor: `${preset.color}30`
                }}
              >
                {settingsCount} params
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="relative text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-2">
          {preset.description}
        </p>

        {/* Deploy Button */}
        <div
          className="relative flex items-center justify-center gap-2 py-3 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
          style={{
            backgroundColor: `${preset.color}20`,
            color: preset.color,
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
          }}
        >
          <Zap className="w-4 h-4" />
          <span>Deploy Preset</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Scan Line Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(0deg, transparent 0%, ${preset.color}05 50%, transparent 100%)`,
            backgroundSize: '100% 4px',
            animation: 'scan 2s linear infinite'
          }}
        />
      </div>

      {/* Bottom Accent Line */}
      <div
        className="h-0.5 transition-all duration-300 opacity-30 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${preset.color}, transparent)`
        }}
      />

      {/* Keyframe for scan effect */}
      <style>{`
        @keyframes scan {
          0% { background-position: 0 100%; }
          100% { background-position: 0 0%; }
        }
      `}</style>
    </button>
  );
}
