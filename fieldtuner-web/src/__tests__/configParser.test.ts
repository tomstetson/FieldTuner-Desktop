import { describe, it, expect } from 'vitest';
import { parseConfig, serializeConfig, getChanges, isValidConfig } from '../lib/configParser';

// Sample of real BF6 config content for testing (key entries from actual file)
const realConfigContent = `GstAudio.3dEnabled 1
GstAudio.Announcer_Voice 0
GstAudio.AudioLanguage 0
GstAudio.HitIndicatorSound 0
GstAudio.Volume 1.000000
GstAudio.Volume_Music 0.000000
GstAudio.VoipInputDevice 
GstAudio.VoipOutputDevice 
GstRender.Dx12Enabled 0
GstRender.FrameRateLimit 240.000000
GstRender.FullscreenRefreshRate 165.057999
GstRender.VSyncMode 0
GstRender.HUD-Accent -493867777
GstRender.HUD-Enemy -165407745
GstRender.SharpnessSlider 1.060000
GstRender.OverallGraphicsQuality 0
GstInput.MouseSensitivity 0.021000
GstInput.MouseRawInput 1
GstInput.UniformSoldierAimingCoefficient 1.780000
GstKeyBinding.infantry.ConceptFire.0.button 15
GstKeyBinding.infantry.ConceptJump.0.button 57
GstKeyBinding.version 2000007
`;

describe('Config Parser - Real BF6 File', () => {
  describe('parseConfig', () => {
    it('should parse all settings from sample config', () => {
      const config = parseConfig(realConfigContent);
      // Sample has 20 parseable settings (2 lines have only key+space with no value)
      expect(Object.keys(config).length).toBe(20);
    });

    it('should correctly parse GstAudio settings', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstAudio.Volume']).toBe('1.000000');
      expect(config['GstAudio.Volume_Music']).toBe('0.000000');
      expect(config['GstAudio.HitIndicatorSound']).toBe('0');
    });

    it('should correctly parse GstRender settings', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstRender.Dx12Enabled']).toBe('0');
      expect(config['GstRender.FrameRateLimit']).toBe('240.000000');
      expect(config['GstRender.FullscreenRefreshRate']).toBe('165.057999');
      expect(config['GstRender.VSyncMode']).toBe('0');
    });

    it('should correctly parse GstInput settings', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstInput.MouseSensitivity']).toBe('0.021000');
      expect(config['GstInput.MouseRawInput']).toBe('1');
      expect(config['GstInput.UniformSoldierAimingCoefficient']).toBe('1.780000');
    });

    it('should handle negative integer values (HUD colors)', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstRender.HUD-Accent']).toBe('-493867777');
      expect(config['GstRender.HUD-Enemy']).toBe('-165407745');
    });

    it('should handle empty values', () => {
      // Lines with just "Key " (no value after space) are skipped by parser
      // This is expected behavior - game creates these but they have no meaningful value
      const content = 'GstAudio.VoipInputDevice \nGstAudio.Volume 1.0\n';
      const config = parseConfig(content);
      // VoipInputDevice is skipped because it has no value
      expect(config['GstAudio.VoipInputDevice']).toBeUndefined();
      expect(config['GstAudio.Volume']).toBe('1.0');
    });

    it('should handle high-resolution floats', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstRender.FullscreenRefreshRate']).toBe('165.057999');
      expect(config['GstRender.SharpnessSlider']).toBe('1.060000');
    });

    it('should parse key binding settings', () => {
      const config = parseConfig(realConfigContent);
      expect(config['GstKeyBinding.infantry.ConceptFire.0.button']).toBe('15');
      expect(config['GstKeyBinding.infantry.ConceptJump.0.button']).toBe('57');
    });
  });

  describe('isValidConfig', () => {
    it('should validate real BF6 config', () => {
      expect(isValidConfig(realConfigContent)).toBe(true);
    });

    it('should reject invalid content', () => {
      expect(isValidConfig('random text without settings')).toBe(false);
      expect(isValidConfig('')).toBe(false);
      expect(isValidConfig('key=value\nother=thing')).toBe(false);
    });

    it('should accept minimal valid config', () => {
      expect(isValidConfig('GstRender.Dx12Enabled 1')).toBe(true);
      expect(isValidConfig('GstAudio.Volume 1.0')).toBe(true);
      expect(isValidConfig('GstInput.MouseSensitivity 0.5')).toBe(true);
    });
  });

  describe('serializeConfig', () => {
    it('should serialize back to valid format', () => {
      const config = parseConfig(realConfigContent);
      const serialized = serializeConfig(config);
      
      // Should end with newline
      expect(serialized.endsWith('\n')).toBe(true);
      
      // Should be parseable again
      const reparsed = parseConfig(serialized);
      expect(Object.keys(reparsed).length).toBe(Object.keys(config).length);
    });

    it('should preserve values exactly', () => {
      const config = parseConfig(realConfigContent);
      const serialized = serializeConfig(config);
      const reparsed = parseConfig(serialized);
      
      // Check specific values are preserved
      expect(reparsed['GstRender.FrameRateLimit']).toBe('240.000000');
      expect(reparsed['GstRender.HUD-Accent']).toBe('-493867777');
      expect(reparsed['GstInput.MouseSensitivity']).toBe('0.021000');
    });

    it('should use LF line endings (not CRLF)', () => {
      const config = { 'GstRender.Test': '1', 'GstAudio.Test': '2' };
      const serialized = serializeConfig(config);
      
      expect(serialized).not.toContain('\r\n');
      expect(serialized).toContain('\n');
    });
  });

  describe('getChanges', () => {
    it('should detect changes between configs', () => {
      const original = parseConfig(realConfigContent);
      const modified = { ...original };
      modified['GstRender.VSyncMode'] = '1';
      modified['GstRender.FrameRateLimit'] = '144.000000';
      
      const changes = getChanges(original, modified);
      
      expect(Object.keys(changes)).toContain('GstRender.VSyncMode');
      expect(Object.keys(changes)).toContain('GstRender.FrameRateLimit');
      expect(changes['GstRender.VSyncMode'].oldValue).toBe('0');
      expect(changes['GstRender.VSyncMode'].newValue).toBe('1');
    });

    it('should return empty object when no changes', () => {
      const original = parseConfig(realConfigContent);
      const changes = getChanges(original, original);
      expect(Object.keys(changes).length).toBe(0);
    });

    it('should detect new keys added', () => {
      const original = { 'GstRender.Test': '1' };
      const modified = { 'GstRender.Test': '1', 'GstRender.New': '2' };
      
      const changes = getChanges(original, modified);
      expect(changes['GstRender.New'].oldValue).toBe('(new)');
      expect(changes['GstRender.New'].newValue).toBe('2');
    });
  });
});

describe('Config Parser - Edge Cases', () => {
  it('should handle Windows CRLF line endings', () => {
    const windowsContent = 'GstRender.Test 1\r\nGstAudio.Vol 0.5\r\n';
    const config = parseConfig(windowsContent);
    expect(config['GstRender.Test']).toBe('1');
    expect(config['GstAudio.Vol']).toBe('0.5');
  });

  it('should handle mixed line endings', () => {
    const mixedContent = 'GstRender.A 1\nGstRender.B 2\r\nGstRender.C 3\n';
    const config = parseConfig(mixedContent);
    expect(Object.keys(config).length).toBe(3);
  });

  it('should handle trailing whitespace in values', () => {
    const content = 'GstRender.Test 1   \nGstAudio.Vol 0.5  \n';
    const config = parseConfig(content);
    // Trailing whitespace is trimmed for clean values
    expect(config['GstRender.Test']).toBe('1');
    expect(config['GstAudio.Vol']).toBe('0.5');
  });

  it('should skip lines without space separator', () => {
    const content = 'GstRender.Test 1\nInvalidLine\nGstAudio.Vol 0.5\n';
    const config = parseConfig(content);
    expect(Object.keys(config).length).toBe(2);
    expect(config['InvalidLine']).toBeUndefined();
  });

  it('should handle values with multiple spaces', () => {
    const content = 'GstRender.Test some value with spaces\n';
    const config = parseConfig(content);
    expect(config['GstRender.Test']).toBe('some value with spaces');
  });
});

describe('Config Parser - Performance', () => {
  // Generate a large config for performance testing
  const largeConfig = Array.from({ length: 1000 }, (_, i) => 
    `GstRender.Setting${i} ${i}.000000`
  ).join('\n');

  it('should parse large config quickly', () => {
    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      parseConfig(largeConfig);
    }
    const duration = performance.now() - start;
    
    // 100 parses of 1000-line config should complete in under 500ms
    expect(duration).toBeLessThan(500);
  });

  it('should serialize large config quickly', () => {
    const config = parseConfig(largeConfig);
    
    const start = performance.now();
    for (let i = 0; i < 100; i++) {
      serializeConfig(config);
    }
    const duration = performance.now() - start;
    
    // 100 serializations should complete in under 500ms
    expect(duration).toBeLessThan(500);
  });
});
