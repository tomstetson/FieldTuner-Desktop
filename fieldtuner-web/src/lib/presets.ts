import type { Preset } from '../types/settings';

export const PRESETS: Record<string, Preset> = {
  esports: {
    name: 'Esports Pro',
    icon: '🏆',
    color: '#ef4444',
    description: 'Maximum competitive advantage - lowest settings, highest FPS.',
    settings: {
      'GstRender.Dx12Enabled': '1',
      'GstRender.FullscreenMode': '2',
      'GstRender.VSyncMode': '0',
      'GstRender.FutureFrameRendering': '1',
      'GstRender.FrameRateLimit': '0.000000',
      'GstRender.FrameRateLimiterEnable': '0',
      'GstRender.OverallGraphicsQuality': '0',
      'GstRender.TextureQuality': '0',
      'GstRender.TextureFiltering': '0',
      'GstRender.ShadowQuality': '0',
      'GstRender.EffectsQuality': '0',
      'GstRender.LightingQuality': '0',
      'GstRender.PostProcessQuality': '0',
      'GstRender.MeshQuality': '0',
      'GstRender.TerrainQuality': '0',
      'GstRender.VegetationQuality': '0',
      'GstRender.VolumetricQuality': '0',
      'GstRender.AntiAliasingDeferred': '0',
      'GstRender.AmbientOcclusion': '0',
      'GstRender.ScreenSpaceReflections': '0',
      'GstRender.MotionBlurEnable': '0',
      'GstRender.MotionBlurWorld': '0.000000',
      'GstRender.MotionBlurWeapon': '0.000000',
      'GstRender.DepthOfFieldEnable': '0',
      'GstRender.WeaponDOF': '0',
      'GstRender.FilmGrain': '0',
      'GstRender.LensDistortion': '0',
      'GstRender.ChromaticAberration': '0',
      'GstRender.Vignette': '0',
      'GstRender.ResolutionScale': '1.000000',
      'GstRender.NvidiaLowLatency': '2',
      'GstRender.RaytracingAmbientOcclusion': '0',
      'GstRender.RaytracingReflections': '0',
      'GstRender.RaytracingGlobalIllumination': '0',
      'GstInput.MouseRawInput': '1',
      'GstInput.UniformSoldierAiming': '1',
    }
  },
  competitive: {
    name: 'Competitive',
    icon: '🎯',
    color: '#f97316',
    description: 'Balanced for competitive play. Good FPS with acceptable visuals.',
    settings: {
      'GstRender.Dx12Enabled': '1',
      'GstRender.FullscreenMode': '2',
      'GstRender.VSyncMode': '0',
      'GstRender.FutureFrameRendering': '1',
      'GstRender.OverallGraphicsQuality': '1',
      'GstRender.TextureQuality': '2',
      'GstRender.ShadowQuality': '1',
      'GstRender.EffectsQuality': '1',
      'GstRender.PostProcessQuality': '0',
      'GstRender.VegetationQuality': '0',
      'GstRender.VolumetricQuality': '0',
      'GstRender.AntiAliasingDeferred': '2',
      'GstRender.AmbientOcclusion': '0',
      'GstRender.ScreenSpaceReflections': '0',
      'GstRender.MotionBlurEnable': '0',
      'GstRender.DepthOfFieldEnable': '0',
      'GstRender.FilmGrain': '0',
      'GstRender.NvidiaLowLatency': '2',
      'GstInput.MouseRawInput': '1',
    }
  },
  balanced: {
    name: 'Balanced',
    icon: '⚖️',
    color: '#22c55e',
    description: 'Good mix of performance and visuals. Recommended for most players.',
    settings: {
      'GstRender.Dx12Enabled': '1',
      'GstRender.FullscreenMode': '1',
      'GstRender.VSyncMode': '0',
      'GstRender.OverallGraphicsQuality': '2',
      'GstRender.TextureQuality': '2',
      'GstRender.ShadowQuality': '2',
      'GstRender.EffectsQuality': '2',
      'GstRender.AntiAliasingDeferred': '5',
      'GstRender.AmbientOcclusion': '1',
      'GstRender.MotionBlurEnable': '0',
      'GstRender.DepthOfFieldEnable': '0',
      'GstRender.FilmGrain': '0',
      'GstRender.NvidiaLowLatency': '1',
    }
  },
  quality: {
    name: 'Quality',
    icon: '✨',
    color: '#3b82f6',
    description: 'High visual quality for powerful systems.',
    settings: {
      'GstRender.Dx12Enabled': '1',
      'GstRender.FullscreenMode': '1',
      'GstRender.VSyncMode': '1',
      'GstRender.OverallGraphicsQuality': '3',
      'GstRender.TextureQuality': '3',
      'GstRender.ShadowQuality': '3',
      'GstRender.EffectsQuality': '3',
      'GstRender.AntiAliasingDeferred': '7',
      'GstRender.AmbientOcclusion': '1',
      'GstRender.ScreenSpaceReflections': '1',
      'GstRender.MotionBlurEnable': '1',
      'GstRender.DepthOfFieldEnable': '1',
      'GstRender.RaytracingAmbientOcclusion': '1',
      'GstRender.RaytracingReflections': '1',
    }
  },
  ultra: {
    name: 'Ultra Quality',
    icon: '💎',
    color: '#a855f7',
    description: 'Maximum visual quality. Requires high-end hardware.',
    settings: {
      'GstRender.Dx12Enabled': '1',
      'GstRender.FullscreenMode': '2',
      'GstRender.VSyncMode': '1',
      'GstRender.OverallGraphicsQuality': '4',
      'GstRender.TextureQuality': '4',
      'GstRender.ShadowQuality': '3',
      'GstRender.EffectsQuality': '3',
      'GstRender.AntiAliasingDeferred': '8',
      'GstRender.AmbientOcclusion': '1',
      'GstRender.ScreenSpaceReflections': '1',
      'GstRender.MotionBlurEnable': '1',
      'GstRender.DepthOfFieldEnable': '1',
      'GstRender.RaytracingAmbientOcclusion': '1',
      'GstRender.RaytracingReflections': '1',
      'GstRender.RaytracingGlobalIllumination': '1',
      'GstRender.NVIDIAFrameGenerationEnabled': '1',
    }
  },
};

export function getPresetNames(): string[] {
  return Object.keys(PRESETS);
}

export function getPreset(key: string): Preset | undefined {
  return PRESETS[key];
}

export function applyPreset(
  currentConfig: Record<string, string>,
  presetKey: string
): Record<string, string> {
  const preset = PRESETS[presetKey];
  if (!preset) return currentConfig;
  
  return { ...currentConfig, ...preset.settings };
}
