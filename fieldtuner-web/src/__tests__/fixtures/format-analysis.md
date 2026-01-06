# BF6 PROFSAVE_profile Format Analysis

## Source File Details
- **Original Path**: `C:\Users\Tom Stetson\OneDrive\Documents\00-VibeCode-Projects\FieldTuner_Combo\fieldtuner-web\Source_Files_dev\PROFSAVE_profile`
- **Backup Created**: `src/__tests__/fixtures/PROFSAVE_profile_backup.txt`
- **File Size**: 38,501 bytes
- **Total Lines**: 826

## Encoding
- **Character Encoding**: UTF-8 / ASCII (no BOM)
- **Line Endings**: Unix-style LF (0x0A) - NOT Windows CRLF

## Format Structure
```
KeyName Value
```
- Single space separator between key and value
- One setting per line
- No quotes around values
- No trailing whitespace (except empty values)

## Key Prefixes Found
| Prefix | Count | Description |
|--------|-------|-------------|
| `GstAudio.` | 57 | Audio settings |
| `GstRender.` | 127 | Graphics/rendering settings |
| `GstInput.` | 132 | Input/controls settings |
| `GstKeyBinding.` | 481 | Key binding configurations |

## Value Types
1. **Integer**: `0`, `1`, `2`, `20`
2. **Float**: `0.500000`, `1.000000`, `165.057999` (6 decimal places)
3. **Negative Integer**: `-493867777` (HUD colors)
4. **Empty String**: `GstAudio.VoipInputDevice ` (key with trailing space, no value)

## Special Cases to Handle
1. **Empty values**: Some settings have no value after the space
2. **Negative numbers**: HUD color settings use large negative integers
3. **High precision floats**: 6 decimal places for float values
4. **Very large integers**: Shader bundle versions with 18+ digit keys
5. **Line endings**: Must preserve LF-only for game compatibility

## Settings Categories for UI
- Audio (GstAudio.*)
- Graphics/Render (GstRender.*)
- Input/Controls (GstInput.*)
- Key Bindings (GstKeyBinding.*) - Complex, multi-value bindings

## Recommendations
1. Preserve original line order when saving
2. Use LF line endings in output
3. Handle empty values gracefully
4. Consider hiding GstKeyBinding.* from main UI (too complex)
5. Hide ShaderBundleVersion_* entries (internal use only)
