/**
 * Parse BF6 PROFSAVE_profile text format into key-value pairs
 * Format: "SettingKey Value" per line
 * Handles: empty values, CRLF/LF line endings, trailing whitespace
 */
export function parseConfig(content: string): Record<string, string> {
  const config: Record<string, string> = {};
  
  // Normalize line endings to LF
  const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalizedContent.split('\n');
  
  for (const line of lines) {
    // Don't fully trim - preserve structure but remove line-ending artifacts
    const trimmedLine = line.trimEnd();
    if (!trimmedLine) continue;
    
    const spaceIndex = trimmedLine.indexOf(' ');
    if (spaceIndex === -1) continue;
    
    const key = trimmedLine.substring(0, spaceIndex);
    // Value can be empty (space at end of line) - trim to clean up
    const value = trimmedLine.substring(spaceIndex + 1).trim();
    config[key] = value;
  }
  
  return config;
}

/**
 * Serialize config back to PROFSAVE_profile text format
 */
export function serializeConfig(config: Record<string, string>): string {
  const lines: string[] = [];
  
  // Sort keys for consistent output
  const sortedKeys = Object.keys(config).sort();
  
  for (const key of sortedKeys) {
    lines.push(`${key} ${config[key]}`);
  }
  
  return lines.join('\n') + '\n';
}

/**
 * Get changes between original and current config
 */
export function getChanges(
  original: Record<string, string>,
  current: Record<string, string>
): Record<string, { oldValue: string; newValue: string }> {
  const changes: Record<string, { oldValue: string; newValue: string }> = {};
  
  for (const key of Object.keys(current)) {
    if (original[key] !== current[key]) {
      changes[key] = {
        oldValue: original[key] ?? '(new)',
        newValue: current[key],
      };
    }
  }
  
  return changes;
}

/**
 * Validate that file content looks like a BF6 config
 */
export function isValidConfig(content: string): boolean {
  // Check for common BF6 setting prefixes
  const validPrefixes = ['GstRender.', 'GstAudio.', 'GstInput.'];
  return validPrefixes.some(prefix => content.includes(prefix));
}

/**
 * Generate timestamp for filename
 */
function getTimestamp(): string {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
}

/**
 * Download config as file with timestamp
 */
export function downloadConfig(config: Record<string, string>): string {
  const content = serializeConfig(config);
  // Use application/octet-stream to prevent browser from adding .txt
  const blob = new Blob([content], { type: 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  
  // Create filename with timestamp
  const timestamp = getTimestamp();
  const downloadName = `PROFSAVE_profile_${timestamp}`;
  
  const a = document.createElement('a');
  a.href = url;
  a.download = downloadName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  return downloadName;
}
