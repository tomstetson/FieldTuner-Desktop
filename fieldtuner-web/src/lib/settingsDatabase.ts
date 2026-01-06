import type { SettingsDatabase } from '../types/settings';

export const SETTINGS_DATABASE: SettingsDatabase = {
  // ==================== AUDIO - VOLUME ====================
  "GstAudio.Volume": {
    name: "Master Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Main game volume.",
    searchAliases: ["volume", "master", "sound"]
  },
  "GstAudio.Volume_SFX": {
    name: "SFX Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Sound effects volume (gunfire, explosions).",
    searchAliases: ["sfx", "effects volume", "sound effects"]
  },
  "GstAudio.Volume_Music": {
    name: "Music Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Background music volume.",
    searchAliases: ["music", "music volume", "soundtrack"]
  },
  "GstAudio.Volume_MusicInMenus": {
    name: "Menu Music Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Music volume in menus.",
    searchAliases: ["menu music"]
  },
  "GstAudio.Volume_UI": {
    name: "UI Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Menu and interface sounds volume.",
    searchAliases: ["ui volume", "menu sounds"]
  },
  "GstAudio.Volume_VO": {
    name: "Voice Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Character voice volume.",
    searchAliases: ["voice", "vo", "dialogue"]
  },
  "GstAudio.Volume_VO-InWorld": {
    name: "In-World Voice Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "In-world character voice volume.",
    searchAliases: ["world voice"]
  },
  "GstAudio.Volume_Tinnitus": {
    name: "Tinnitus Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Ringing effect after explosions.",
    searchAliases: ["tinnitus", "ringing"]
  },
  "GstAudio.Volume_Controller_Speaker": {
    name: "Controller Speaker Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "DualSense controller speaker volume.",
    searchAliases: ["controller speaker"]
  },
  "GstAudio.Volume_Radio_Driver": {
    name: "Radio Driver Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Vehicle radio volume for driver.",
    searchAliases: ["radio driver"]
  },
  "GstAudio.Volume_Radio_Passenger": {
    name: "Radio Passenger Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Vehicle radio volume for passengers.",
    searchAliases: ["radio passenger"]
  },
  "GstAudio.Volume_Radio_InWorld": {
    name: "Radio In-World Volume",
    category: "Audio",
    subcategory: "Volume",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Radio volume heard from outside vehicle.",
    searchAliases: ["radio world"]
  },
  "GstAudio.VOIPVolume": {
    name: "VOIP Volume",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Voice chat volume.",
    searchAliases: ["voip", "voice chat", "voice volume"]
  },
  "GstAudio.MicrophoneVolume": {
    name: "Microphone Volume",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Your microphone input volume.",
    searchAliases: ["mic", "microphone"]
  },

  // ==================== AUDIO - VOICE CHAT ====================
  "GstAudio.VoipOn": {
    name: "VOIP Enable",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Enable in-game voice chat.",
    searchAliases: ["voip enable", "voice chat enable"]
  },
  "GstAudio.VoipMode": {
    name: "VOIP Mode",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "int",
    default: 2,
    range: [0, 2],
    options: { 0: "Off", 1: "Push to Talk", 2: "Open Mic" },
    tooltip: "Voice chat activation mode.",
    searchAliases: ["ptt", "push to talk", "open mic"]
  },
  "GstAudio.VoipChannel": {
    name: "VOIP Channel",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Squad", 1: "Team", 2: "All" },
    tooltip: "Who can hear your voice chat.",
    searchAliases: ["voice channel"]
  },
  "GstAudio.VoipAutoLevel": {
    name: "VOIP Auto Level",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Automatically adjust microphone volume.",
    searchAliases: ["auto level", "auto gain"]
  },
  "GstAudio.VoipPosMode": {
    name: "VOIP Positional",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "3D positional voice chat.",
    searchAliases: ["positional audio", "3d voice"]
  },
  "GstAudio.OpenMicThreshold": {
    name: "Open Mic Threshold",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "float",
    default: 0.32,
    range: [0.0, 1.0],
    tooltip: "Sound level to activate open mic.",
    searchAliases: ["mic threshold", "voice activation"]
  },
  "GstAudio.OptionVOIPLowerGameAudio": {
    name: "VOIP Lowers Game Audio",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "float",
    default: 0.25,
    range: [0.0, 1.0],
    tooltip: "How much game audio lowers during voice chat.",
    searchAliases: ["duck audio"]
  },
  "GstAudio.VoipVolumeReductionAmount": {
    name: "VOIP Volume Reduction",
    category: "Audio",
    subcategory: "Voice Chat",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Amount game audio reduces during voice chat.",
    searchAliases: ["volume reduction"]
  },

  // ==================== AUDIO - GENERAL ====================
  "GstAudio.3dEnabled": {
    name: "3D Audio",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Enable 3D spatial audio.",
    searchAliases: ["3d audio", "spatial audio", "surround"]
  },
  "GstAudio.AudioQuality": {
    name: "Audio Quality",
    category: "Audio",
    subcategory: "General",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Low", 1: "Medium", 2: "High" },
    tooltip: "Audio processing quality.",
    searchAliases: ["audio quality", "sound quality"]
  },
  "GstAudio.SpeakerConfiguration": {
    name: "Speaker Configuration",
    category: "Audio",
    subcategory: "General",
    type: "int",
    default: 0,
    range: [0, 5],
    options: { 0: "Auto", 1: "Stereo", 2: "Headphones", 3: "4.0", 4: "5.1", 5: "7.1" },
    tooltip: "Speaker setup configuration.",
    searchAliases: ["speakers", "headphones", "surround"]
  },
  "GstAudio.SoundSystemSize": {
    name: "Sound System Size",
    category: "Audio",
    subcategory: "General",
    type: "int",
    default: 20,
    range: [0, 100],
    tooltip: "Virtual room size for audio.",
    searchAliases: ["room size"]
  },
  "GstAudio.StereoBalance": {
    name: "Stereo Balance",
    category: "Audio",
    subcategory: "General",
    type: "float",
    default: 0.0,
    range: [-1.0, 1.0],
    tooltip: "Left/right audio balance.",
    searchAliases: ["balance", "left right"]
  },
  "GstAudio.PlaySoundInBackground_OnOff": {
    name: "Background Audio",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Play sound when game is minimized.",
    searchAliases: ["background audio", "background sound"]
  },
  "GstAudio.PlayMusicInMenus_OnOff": {
    name: "Menu Music",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Play music in menus.",
    searchAliases: ["menu music"]
  },
  "GstAudio.DiegeticMusic": {
    name: "In-Game Music",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Music during gameplay.",
    searchAliases: ["gameplay music", "diegetic"]
  },
  "GstAudio.DiegeticRadio": {
    name: "In-Game Radio",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Radio sounds in game world.",
    searchAliases: ["radio"]
  },
  "GstAudio.CarRadio": {
    name: "Vehicle Radio",
    category: "Audio",
    subcategory: "General",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Enable vehicle radio.",
    searchAliases: ["car radio", "vehicle radio"]
  },
  "GstAudio.RadioStation": {
    name: "Radio Station",
    category: "Audio",
    subcategory: "General",
    type: "int",
    default: 0,
    range: [0, 10],
    tooltip: "Selected radio station.",
    searchAliases: ["station"]
  },

  // ==================== AUDIO - FEEDBACK ====================
  "GstAudio.HitIndicatorSound": {
    name: "Hit Indicator Sound",
    category: "Audio",
    subcategory: "Feedback",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Sound when hitting enemies. Essential for competitive.",
    searchAliases: ["hit sound", "hit indicator", "hitmarker"]
  },
  "GstAudio.InGameAnnouncer_OnOff": {
    name: "Announcer",
    category: "Audio",
    subcategory: "Feedback",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "In-game announcer voice.",
    searchAliases: ["announcer", "voice announcer"]
  },
  "GstAudio.Announcer_Voice": {
    name: "Announcer Voice",
    category: "Audio",
    subcategory: "Feedback",
    type: "int",
    default: 0,
    range: [0, 5],
    tooltip: "Announcer voice selection.",
    searchAliases: ["announcer type"]
  },
  "GstAudio.Freq_Tinitus": {
    name: "Tinnitus Frequency",
    category: "Audio",
    subcategory: "Feedback",
    type: "float",
    default: 20000.0,
    range: [1000.0, 20000.0],
    tooltip: "Frequency of tinnitus ringing effect.",
    searchAliases: ["tinnitus freq"]
  },

  // ==================== AUDIO - SUBTITLES ====================
  "GstAudio.VOSubtitles": {
    name: "Voice Subtitles",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show subtitles for voice.",
    searchAliases: ["subtitles", "captions"]
  },
  "GstAudio.SubtitlesSquad": {
    name: "Squad Subtitles",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show squad voice subtitles.",
    searchAliases: ["squad captions"]
  },
  "GstAudio.SubtitlesFriendlies": {
    name: "Friendly Subtitles",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show friendly voice subtitles.",
    searchAliases: ["friendly captions"]
  },
  "GstAudio.SubtitlesEnemies": {
    name: "Enemy Subtitles",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show enemy voice subtitles.",
    searchAliases: ["enemy captions"]
  },
  "GstAudio.SubtitlesCommander": {
    name: "Commander Subtitles",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show commander voice subtitles.",
    searchAliases: ["commander captions"]
  },
  "GstAudio.SubtitlesShowSpeakerName": {
    name: "Show Speaker Name",
    category: "Audio",
    subcategory: "Subtitles",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Show who is speaking in subtitles.",
    searchAliases: ["speaker name"]
  },
  "GstAudio.SubtitlesTextSize": {
    name: "Subtitle Size",
    category: "Audio",
    subcategory: "Subtitles",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Small", 1: "Medium", 2: "Large" },
    tooltip: "Subtitle text size.",
    searchAliases: ["subtitle size", "caption size"]
  },

  // ==================== AUDIO - ACCESSIBILITY ====================
  "GstAudio.MenuNarration": {
    name: "Menu Narration",
    category: "Audio",
    subcategory: "Accessibility",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Narrate menu options.",
    searchAliases: ["narration", "screen reader"]
  },
  "GstAudio.TTSEnabled": {
    name: "Text to Speech",
    category: "Audio",
    subcategory: "Accessibility",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Read text aloud.",
    searchAliases: ["tts", "text to speech"]
  },
  "GstAudio.STTEnabled": {
    name: "Speech to Text",
    category: "Audio",
    subcategory: "Accessibility",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Convert voice chat to text.",
    searchAliases: ["stt", "speech to text"]
  },
  "GstAudio.AudioLanguage": {
    name: "Audio Language",
    category: "Audio",
    subcategory: "Accessibility",
    type: "int",
    default: 0,
    range: [0, 20],
    tooltip: "Game audio language.",
    searchAliases: ["language", "audio language"]
  },
  "GstAudio.VOLanguage": {
    name: "Voice Language",
    category: "Audio",
    subcategory: "Accessibility",
    type: "int",
    default: 0,
    range: [0, 20],
    tooltip: "Voice over language.",
    searchAliases: ["vo language"]
  },
  "GstAudio.MyTeamSpeaksMyLanguage": {
    name: "Team Speaks My Language",
    category: "Audio",
    subcategory: "Accessibility",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Team characters speak your language.",
    searchAliases: ["team language"]
  },
  "GstAudio.UISFXMixMode": {
    name: "UI SFX Mix Mode",
    category: "Audio",
    subcategory: "Accessibility",
    type: "int",
    default: 0,
    range: [0, 2],
    tooltip: "UI sound effects mixing mode.",
    searchAliases: ["ui mix"]
  },

  // ==================== GRAPHICS - DISPLAY ====================
  "GstRender.Dx12Enabled": {
    name: "DirectX 12",
    category: "Graphics",
    subcategory: "API",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Enable DirectX 12 for better performance on modern GPUs.",
    searchAliases: ["dx12", "directx", "api"]
  },
  "GstRender.FullscreenMode": {
    name: "Fullscreen Mode",
    category: "Graphics",
    subcategory: "Display",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Windowed", 1: "Borderless", 2: "Fullscreen" },
    tooltip: "Fullscreen (2) = best performance, Borderless (1) = easy alt-tab",
    searchAliases: ["fullscreen", "windowed", "borderless", "screen mode"]
  },
  "GstRender.VSyncMode": {
    name: "V-Sync",
    category: "Performance",
    subcategory: "Frame Sync",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Prevents screen tearing but adds input lag. Disable for competitive play.",
    searchAliases: ["vsync", "sync", "tearing", "vertical sync"]
  },
  "GstRender.FieldOfViewVertical": {
    name: "Field of View",
    category: "Graphics",
    subcategory: "Camera",
    type: "float",
    default: 70.0,
    range: [50.0, 120.0],
    tooltip: "Higher FOV = wider view but smaller targets. Pro players use 90-105.",
    searchAliases: ["fov", "field of view", "view angle"]
  },
  "GstRender.Vehicle3rdPersonFOV": {
    name: "Vehicle 3rd Person FOV",
    category: "Graphics",
    subcategory: "Camera",
    type: "float",
    default: 70.0,
    range: [50.0, 120.0],
    tooltip: "Field of view when in 3rd person vehicle view.",
    searchAliases: ["vehicle fov", "3rd person fov", "third person"]
  },
  "GstRender.WeaponFOV": {
    name: "Weapon Field of View",
    category: "Graphics",
    subcategory: "Camera",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Narrow", 1: "Default", 2: "Wide" },
    tooltip: "How much of your weapon is visible on screen.",
    searchAliases: ["weapon fov", "gun fov", "viewmodel"]
  },
  "GstRender.WorldBrightness": {
    name: "World Brightness",
    category: "Graphics",
    subcategory: "Display",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "In-game world brightness level.",
    searchAliases: ["world bright", "game brightness"]
  },
  "GstRender.UIBrightness": {
    name: "UI Brightness",
    category: "Graphics",
    subcategory: "Display",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "HUD and menu brightness level.",
    searchAliases: ["ui bright", "hud brightness", "interface brightness"]
  },
  "GstRender.ResolutionScale": {
    name: "Resolution Scale",
    category: "Performance",
    subcategory: "Resolution",
    type: "float",
    default: 1.0,
    range: [0.5, 2.0],
    tooltip: "Render resolution multiplier. Lower = better FPS, Higher = better quality.",
    searchAliases: ["resolution", "scale", "render scale"]
  },
  "GstRender.FrameRateLimit": {
    name: "FPS Limit",
    category: "Performance",
    subcategory: "Frame Rate",
    type: "float",
    default: 0.0,
    range: [0.0, 500.0],
    tooltip: "Cap FPS to reduce GPU load/heat. 0 = unlimited.",
    searchAliases: ["fps", "frame rate", "fps limit", "framerate", "cap"]
  },
  "GstRender.FrameRateLimiterEnable": {
    name: "Frame Limiter Enable",
    category: "Performance",
    subcategory: "Frame Rate",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Enable the built-in frame rate limiter.",
    searchAliases: ["limiter", "fps limit enable"]
  },
  "GstRender.FrameRateLimiterInMenu": {
    name: "Frame Limiter In Menu",
    category: "Performance",
    subcategory: "Frame Rate",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Apply frame rate limit in menus.",
    searchAliases: ["menu fps limit"]
  },
  "GstRender.DynamicResolutionScale": {
    name: "Dynamic Resolution Scale",
    category: "Performance",
    subcategory: "Resolution",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Automatically adjust resolution to maintain frame rate.",
    searchAliases: ["drs", "dynamic res", "auto resolution"]
  },
  "GstRender.UpscalingTechnique": {
    name: "Upscaling Technique",
    category: "Performance",
    subcategory: "Upscaling",
    type: "int",
    default: 0,
    range: [0, 4],
    options: { 0: "Off", 1: "DLSS", 2: "FSR", 3: "XeSS", 4: "TSR" },
    tooltip: "AI/temporal upscaling method. DLSS (NVIDIA), FSR (AMD), XeSS (Intel).",
    searchAliases: ["dlss", "fsr", "xess", "upscaling", "super resolution"]
  },
  "GstRender.UpscalingQuality": {
    name: "Upscaling Quality",
    category: "Performance",
    subcategory: "Upscaling",
    type: "int",
    default: 2,
    range: [0, 4],
    options: { 0: "Ultra Performance", 1: "Performance", 2: "Balanced", 3: "Quality", 4: "Ultra Quality" },
    tooltip: "Upscaling quality preset. Lower = more FPS, less quality.",
    searchAliases: ["dlss quality", "fsr quality", "upscale quality"]
  },
  "GstRender.AMDFSRFrameGeneration": {
    name: "AMD FSR Frame Generation",
    category: "Performance",
    subcategory: "Frame Gen",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "AMD FSR 3 Frame Generation. Works on any GPU.",
    searchAliases: ["fsr fg", "fsr frame gen", "fluid motion"]
  },
  "GstRender.PerformanceOverlay": {
    name: "Performance Overlay",
    category: "Performance",
    subcategory: "Debug",
    type: "int",
    default: 0,
    range: [0, 3],
    options: { 0: "Off", 1: "Simple", 2: "Detailed", 3: "Full" },
    tooltip: "Show FPS and performance stats on screen.",
    searchAliases: ["fps counter", "overlay", "stats", "performance monitor"]
  },
  "GstRender.FullscreenRefreshRate": {
    name: "Refresh Rate",
    category: "Graphics",
    subcategory: "Display",
    type: "float",
    default: 60.0,
    range: [60.0, 360.0],
    tooltip: "Monitor refresh rate in Hz. Common: 60, 144, 165, 240, 360.",
    searchAliases: ["refresh", "hz", "hertz", "monitor rate"]
  },

  // ==================== GRAPHICS - QUALITY ====================
  "GstRender.OverallGraphicsQuality": {
    name: "Overall Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 4],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra", 4: "Ultra+" },
    tooltip: "Master quality preset. Affects most visual settings.",
    searchAliases: ["quality", "overall", "preset", "graphics quality"]
  },
  "GstRender.TextureQuality": {
    name: "Texture Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 4],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra", 4: "Ultra+" },
    tooltip: "Higher = sharper textures but more VRAM usage.",
    searchAliases: ["texture", "textures"]
  },
  "GstRender.TextureFiltering": {
    name: "Texture Filtering",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 4],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra", 4: "Ultra+" },
    tooltip: "Anisotropic filtering quality. Higher = sharper textures at angles.",
    searchAliases: ["filtering", "anisotropic", "af"]
  },
  "GstRender.ShadowQuality": {
    name: "Shadow Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Shadow rendering quality. Major performance impact.",
    searchAliases: ["shadow", "shadows"]
  },
  "GstRender.EffectsQuality": {
    name: "Effects Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Explosions, smoke, particles quality.",
    searchAliases: ["effects", "particles", "explosions"]
  },
  "GstRender.LightingQuality": {
    name: "Lighting Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Lighting and illumination quality.",
    searchAliases: ["lighting", "lights", "illumination"]
  },
  "GstRender.PostProcessQuality": {
    name: "Post Process Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Post-processing effects quality.",
    searchAliases: ["post process", "postprocess", "pp"]
  },
  "GstRender.MeshQuality": {
    name: "Mesh Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "3D model detail level.",
    searchAliases: ["mesh", "model", "geometry", "lod"]
  },
  "GstRender.TerrainQuality": {
    name: "Terrain Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Ground/terrain detail.",
    searchAliases: ["terrain", "ground", "landscape"]
  },
  "GstRender.VegetationQuality": {
    name: "Vegetation Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Grass, trees, foliage quality.",
    searchAliases: ["vegetation", "grass", "trees", "foliage"]
  },
  "GstRender.UndergrowthQuality": {
    name: "Undergrowth Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Ground cover and small vegetation detail.",
    searchAliases: ["undergrowth", "ground cover", "bushes"]
  },
  "GstRender.LocalLightShadowQuality": {
    name: "Local Light & Shadow Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Quality of local light sources and their shadows.",
    searchAliases: ["local light", "local shadow", "point light"]
  },
  "GstRender.SunShadowQuality": {
    name: "Sun Shadow Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Sun/directional shadow quality.",
    searchAliases: ["sun shadow", "directional shadow"]
  },
  "GstRender.ShadowFiltering": {
    name: "Shadow Filtering",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "PCF", 1: "PCSS", 2: "PCSS Ultra" },
    tooltip: "Shadow edge softness technique. PCSS gives realistic soft shadows.",
    searchAliases: ["shadow filter", "pcss", "pcf", "soft shadows"]
  },
  "GstRender.ReflectionQuality": {
    name: "Reflection Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Overall reflection quality.",
    searchAliases: ["reflection", "mirror"]
  },
  "GstRender.ScreenSpaceAOGI": {
    name: "Screen Space AO & GI",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 4],
    options: { 0: "Off", 1: "HBAO", 2: "GTAO Low", 3: "GTAO Medium", 4: "GTAO High" },
    tooltip: "Ambient occlusion and global illumination technique.",
    searchAliases: ["gtao", "hbao", "ssao", "ao gi"]
  },
  "GstRender.HighFidelityObjectsAmount": {
    name: "High Fidelity Objects Amount",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Low", 1: "Medium", 2: "High", 3: "Ultra" },
    tooltip: "Amount of high detail objects rendered.",
    searchAliases: ["high fidelity", "object detail", "lod distance"]
  },
  "GstRender.VolumetricQuality": {
    name: "Volumetric Quality",
    category: "Graphics",
    subcategory: "Quality",
    type: "int",
    default: 2,
    range: [0, 3],
    options: { 0: "Off", 1: "Low", 2: "Medium", 3: "High" },
    tooltip: "Volumetric fog and lighting. Significant performance impact.",
    searchAliases: ["volumetric", "fog", "god rays"]
  },

  // ==================== GRAPHICS - ANTI-ALIASING ====================
  "GstRender.AntiAliasingDeferred": {
    name: "Anti-Aliasing",
    category: "Graphics",
    subcategory: "Anti-Aliasing",
    type: "int",
    default: 2,
    range: [0, 8],
    options: { 0: "Off", 1: "FXAA Low", 2: "FXAA Medium", 3: "FXAA High", 4: "TAA Low", 5: "TAA Medium", 6: "TAA High", 7: "TAA Ultra", 8: "DLAA" },
    tooltip: "Smooths jagged edges. TAA can cause blur, FXAA is lighter.",
    searchAliases: ["aa", "antialiasing", "anti-aliasing", "fxaa", "taa"]
  },
  "GstRender.AmbientOcclusion": {
    name: "Ambient Occlusion",
    category: "Graphics",
    subcategory: "Effects",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Adds realistic shadows in corners/crevices.",
    searchAliases: ["ao", "ambient occlusion", "ssao", "hbao"]
  },
  "GstRender.ScreenSpaceReflections": {
    name: "Screen Space Reflections",
    category: "Graphics",
    subcategory: "Effects",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Real-time reflections on surfaces.",
    searchAliases: ["ssr", "reflections", "screen space"]
  },

  // ==================== GRAPHICS - POST PROCESSING ====================
  "GstRender.MotionBlurEnable": {
    name: "Motion Blur",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Adds blur during movement. DISABLE for competitive.",
    searchAliases: ["motion blur", "blur", "movement blur"]
  },
  "GstRender.MotionBlurWorld": {
    name: "Motion Blur World",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "float",
    default: 0.0,
    range: [0.0, 100.0],
    tooltip: "World motion blur intensity. Set to 0 for competitive.",
    searchAliases: ["world blur"]
  },
  "GstRender.MotionBlurWeapon": {
    name: "Motion Blur Weapon",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "float",
    default: 0.0,
    range: [0.0, 100.0],
    tooltip: "Weapon motion blur intensity.",
    searchAliases: ["weapon blur"]
  },
  "GstRender.DepthOfFieldEnable": {
    name: "Depth of Field",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Blurs background when aiming.",
    searchAliases: ["dof", "depth of field", "focus blur"]
  },
  "GstRender.WeaponDOF": {
    name: "Weapon DOF",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Weapon depth of field blur.",
    searchAliases: ["weapon dof", "weapon focus"]
  },
  "GstRender.FilmGrain": {
    name: "Film Grain",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Adds cinematic grain effect.",
    searchAliases: ["film grain", "grain", "noise"]
  },
  "GstRender.LensDistortion": {
    name: "Lens Distortion",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Camera lens distortion effect.",
    searchAliases: ["lens distortion", "distortion"]
  },
  "GstRender.ChromaticAberration": {
    name: "Chromatic Aberration",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Color fringing effect.",
    searchAliases: ["chromatic", "aberration", "color fringing"]
  },
  "GstRender.Vignette": {
    name: "Vignette",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Darkens screen edges.",
    searchAliases: ["vignette", "edge darkening"]
  },
  "GstRender.Brightness": {
    name: "Brightness",
    category: "Graphics",
    subcategory: "Display",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Screen brightness.",
    searchAliases: ["brightness", "bright"]
  },
  "GstRender.Contrast": {
    name: "Contrast",
    category: "Graphics",
    subcategory: "Display",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Image contrast level.",
    searchAliases: ["contrast"]
  },
  "GstRender.SharpnessSlider": {
    name: "Sharpness",
    category: "Graphics",
    subcategory: "Post Processing",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Image sharpening.",
    searchAliases: ["sharpness", "sharp", "sharpen"]
  },
  "GstRender.HighDynamicRangeMode": {
    name: "HDR",
    category: "Graphics",
    subcategory: "Display",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "High Dynamic Range. Requires HDR monitor.",
    searchAliases: ["hdr", "high dynamic range"]
  },

  // ==================== PERFORMANCE ====================
  "GstRender.FutureFrameRendering": {
    name: "Future Frame Rendering",
    category: "Performance",
    subcategory: "Latency",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Pre-renders frames for smoother gameplay.",
    searchAliases: ["ffr", "future frame", "pre-render"]
  },
  "GstRender.FrameGeneration": {
    name: "Frame Generation",
    category: "Performance",
    subcategory: "Frame Gen",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "AI frame generation. Requires RTX 40xx/RX 7xxx.",
    searchAliases: ["frame gen", "dlss fg", "afmf"]
  },
  "GstRender.NVIDIAFrameGenerationEnabled": {
    name: "NVIDIA Frame Gen",
    category: "Performance",
    subcategory: "Frame Gen",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "DLSS 3 Frame Generation. RTX 40 series only.",
    searchAliases: ["nvidia fg", "dlss 3", "dlss frame gen"]
  },
  "GstRender.NvidiaLowLatency": {
    name: "NVIDIA Reflex",
    category: "Performance",
    subcategory: "Latency",
    type: "int",
    default: 2,
    range: [0, 2],
    options: { 0: "Off", 1: "On", 2: "On + Boost" },
    tooltip: "Reduces input latency on NVIDIA GPUs.",
    searchAliases: ["reflex", "nvidia latency", "low latency"]
  },
  "GstRender.AMDLowLatency": {
    name: "AMD Anti-Lag",
    category: "Performance",
    subcategory: "Latency",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Reduces input latency on AMD GPUs.",
    searchAliases: ["anti-lag", "amd latency"]
  },

  // ==================== RAY TRACING ====================
  "GstRender.RaytracingAmbientOcclusion": {
    name: "RT Ambient Occlusion",
    category: "Graphics",
    subcategory: "Ray Tracing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Ray-traced ambient occlusion. Huge performance impact.",
    searchAliases: ["rtao", "ray traced ao", "rt ao"]
  },
  "GstRender.RaytracingReflections": {
    name: "RT Reflections",
    category: "Graphics",
    subcategory: "Ray Tracing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Ray-traced reflections. Major performance impact.",
    searchAliases: ["rt reflections", "ray traced reflections"]
  },
  "GstRender.RaytracingGlobalIllumination": {
    name: "RT Global Illumination",
    category: "Graphics",
    subcategory: "Ray Tracing",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Ray-traced global illumination. Heaviest RT feature.",
    searchAliases: ["rtgi", "ray traced gi", "global illumination"]
  },

  // ==================== INPUT - MOUSE ====================
  "GstInput.MouseSensitivity": {
    name: "Mouse Sensitivity",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 10.0],
    tooltip: "Mouse sensitivity for soldier.",
    searchAliases: ["sensitivity", "sens", "mouse sens", "mouse speed"]
  },
  "GstInput.MouseSensitivityVehicle": {
    name: "Vehicle Mouse Sensitivity",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 10.0],
    tooltip: "Mouse sensitivity in vehicles.",
    searchAliases: ["vehicle sens", "vehicle sensitivity"]
  },
  "GstInput.MouseRawInput": {
    name: "Raw Mouse Input",
    category: "Input",
    subcategory: "Mouse",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Bypass Windows mouse acceleration.",
    searchAliases: ["raw input", "raw mouse", "mouse accel"]
  },
  "GstInput.VerticalSoldierMouseRatio": {
    name: "Vertical Mouse Ratio",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Vertical to horizontal sensitivity ratio.",
    searchAliases: ["vertical ratio", "y ratio"]
  },
  "GstInput.VerticalSoldierMouseZoomRatio": {
    name: "Vertical Zoom Mouse Ratio",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Vertical sensitivity ratio when zoomed.",
    searchAliases: ["vertical zoom ratio"]
  },
  "GstInput.VerticalVehicleMouseRatio": {
    name: "Vertical Vehicle Mouse Ratio",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Vehicle vertical to horizontal sensitivity ratio.",
    searchAliases: ["vehicle vertical ratio"]
  },
  "GstInput.VerticalVehicleMouseZoomRatio": {
    name: "Vertical Vehicle Zoom Ratio",
    category: "Input",
    subcategory: "Mouse",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Vehicle vertical sensitivity ratio when zoomed.",
    searchAliases: ["vehicle zoom vertical"]
  },

  // ==================== INPUT - UNIFORM AIMING ====================
  "GstInput.UniformSoldierAiming": {
    name: "Uniform Soldier Aiming",
    category: "Input",
    subcategory: "Aiming",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Consistent sensitivity across all zoom levels.",
    searchAliases: ["usa", "uniform aiming", "uniform soldier"]
  },
  "GstInput.UniformSoldierAimingCoefficient": {
    name: "USA Coefficient",
    category: "Input",
    subcategory: "Aiming",
    type: "float",
    default: 1.33,
    range: [0.1, 3.0],
    tooltip: "Uniform aiming coefficient. 1.33 is default for BF games.",
    searchAliases: ["usa coefficient", "aiming coefficient"]
  },
  "GstInput.UniformVehicleAiming": {
    name: "Uniform Vehicle Aiming",
    category: "Input",
    subcategory: "Aiming",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Consistent sensitivity for vehicle zoom levels.",
    searchAliases: ["vehicle uniform aiming"]
  },
  "GstInput.UniformVehicleAimingCoefficient": {
    name: "Vehicle USA Coefficient",
    category: "Input",
    subcategory: "Aiming",
    type: "float",
    default: 1.78,
    range: [0.1, 3.0],
    tooltip: "Vehicle uniform aiming coefficient.",
    searchAliases: ["vehicle coefficient"]
  },

  // ==================== INPUT - ZOOM SENSITIVITY ====================
  "GstInput.SoldierZoomSensitivityAll": {
    name: "All Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Master zoom sensitivity multiplier.",
    searchAliases: ["zoom sens", "ads sensitivity"]
  },
  "GstInput.SoldierZoomSensitivity1x00": {
    name: "1x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 1x zoom.",
    searchAliases: ["1x sens"]
  },
  "GstInput.SoldierZoomSensitivity1x25": {
    name: "1.25x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 1.25x zoom.",
    searchAliases: ["1.25x sens"]
  },
  "GstInput.SoldierZoomSensitivity1x50": {
    name: "1.5x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 1.5x zoom.",
    searchAliases: ["1.5x sens"]
  },
  "GstInput.SoldierZoomSensitivity2x00": {
    name: "2x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 2x zoom.",
    searchAliases: ["2x sens"]
  },
  "GstInput.SoldierZoomSensitivity3x00": {
    name: "3x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 3x zoom.",
    searchAliases: ["3x sens"]
  },
  "GstInput.SoldierZoomSensitivity4x00": {
    name: "4x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 4x zoom.",
    searchAliases: ["4x sens"]
  },
  "GstInput.SoldierZoomSensitivity6x00": {
    name: "6x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 6x zoom.",
    searchAliases: ["6x sens"]
  },
  "GstInput.SoldierZoomSensitivity8x00": {
    name: "8x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 8x zoom.",
    searchAliases: ["8x sens"]
  },
  "GstInput.SoldierZoomSensitivity10x00": {
    name: "10x Zoom Sensitivity",
    category: "Input",
    subcategory: "Zoom",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Sensitivity at 10x zoom (sniper).",
    searchAliases: ["10x sens", "sniper sens"]
  },

  // ==================== INPUT - CONTROLS ====================
  "GstInput.HoldButtonToZoom": {
    name: "Hold to ADS",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Hold button to aim down sights vs toggle.",
    searchAliases: ["hold zoom", "toggle ads", "aim toggle"]
  },
  "GstInput.HoldButtonToZoomVehicle": {
    name: "Hold to ADS (Vehicle)",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Hold to zoom in vehicles.",
    searchAliases: ["vehicle zoom toggle"]
  },
  "GstInput.SprintHold": {
    name: "Hold to Sprint",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Hold button to sprint vs toggle.",
    searchAliases: ["hold sprint", "toggle sprint", "sprint toggle"]
  },
  "GstInput.SprintDoubleTap": {
    name: "Double Tap Sprint",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Double tap forward to sprint.",
    searchAliases: ["double tap sprint"]
  },
  "GstInput.SprintDoorBarge": {
    name: "Sprint Door Barge",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Break through doors while sprinting.",
    searchAliases: ["door barge", "kick door"]
  },
  "GstInput.SprintVaultOver": {
    name: "Sprint Vault Over",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Auto vault while sprinting.",
    searchAliases: ["auto vault", "sprint vault"]
  },
  "GstInput.SlideDoubleTap": {
    name: "Double Tap Slide",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Double tap crouch to slide.",
    searchAliases: ["double tap slide"]
  },
  "GstInput.SlideOnCrouch": {
    name: "Slide on Crouch",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Single crouch press to slide while sprinting.",
    searchAliases: ["crouch slide"]
  },
  "GstInput.LeaningEnabled": {
    name: "Leaning Enabled",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Enable manual leaning.",
    searchAliases: ["lean", "peek"]
  },
  "GstInput.LeanHold": {
    name: "Hold to Lean",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Hold vs toggle lean.",
    searchAliases: ["lean toggle"]
  },
  "GstInput.LeaningSensitivity": {
    name: "Leaning Sensitivity",
    category: "Input",
    subcategory: "Controls",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "How much you lean.",
    searchAliases: ["lean amount"]
  },
  "GstInput.HoldForBreathControl": {
    name: "Hold for Breath Control",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Hold to steady scope.",
    searchAliases: ["steady scope", "breath hold"]
  },
  "GstInput.QuickThrowGrenade": {
    name: "Quick Throw Grenade",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Throw grenade without equipping.",
    searchAliases: ["quick throw", "fast grenade"]
  },
  "GstInput.LandingRoll": {
    name: "Landing Roll",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Roll on landing to reduce damage.",
    searchAliases: ["roll", "parachute roll"]
  },
  "GstInput.RollCameraInLandingRoll": {
    name: "Roll Camera in Landing Roll",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Camera rolls with character during landing roll animation.",
    searchAliases: ["camera roll", "landing camera"]
  },
  "GstInput.ParachuteAutodeploy": {
    name: "Parachute Autodeploy",
    category: "Input",
    subcategory: "Controls",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Off", 1: "Skydive/Insertion", 2: "Always" },
    tooltip: "Automatically deploy parachute when falling.",
    searchAliases: ["auto parachute", "chute deploy"]
  },
  "GstInput.MountType": {
    name: "Mount Type",
    category: "Input",
    subcategory: "Controls",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Off", 1: "Side and Up", 2: "All Directions" },
    tooltip: "Weapon mounting direction options.",
    searchAliases: ["weapon mount", "bipod mount"]
  },
  "GstInput.MountPresets": {
    name: "Mount Presets",
    category: "Input",
    subcategory: "Controls",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Combo", 1: "ADS Only", 2: "Manual" },
    tooltip: "How weapon mounting is activated.",
    searchAliases: ["mount preset", "bipod preset"]
  },
  "GstInput.PeekType": {
    name: "Peek Type",
    category: "Input",
    subcategory: "Controls",
    type: "int",
    default: 1,
    range: [0, 2],
    options: { 0: "Off", 1: "Side and Up", 2: "All Directions" },
    tooltip: "Corner peeking options.",
    searchAliases: ["peek", "corner peek"]
  },
  "GstInput.InteractReloadPriority": {
    name: "Interact & Reload Priority",
    category: "Input",
    subcategory: "Controls",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Prioritize Interact", 1: "Prioritize Reload", 2: "Tap/Hold" },
    tooltip: "What happens when interact and reload are on same button.",
    searchAliases: ["interact priority", "reload priority"]
  },
  "GstInput.InvertDemolitionCharge": {
    name: "Invert Demolition Charge",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert throw direction for demo charges.",
    searchAliases: ["invert demo", "c4 invert"]
  },
  "GstInput.MountBreakout": {
    name: "Mount Breakout",
    category: "Input",
    subcategory: "Controls",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Easily break out of weapon mount.",
    searchAliases: ["unmount", "bipod breakout"]
  },

  // ==================== INPUT - VEHICLE ====================
  "GstInput.VehicleAimRelativeControl": {
    name: "Vehicle Relative Aim",
    category: "Input",
    subcategory: "Vehicle",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Aim relative to vehicle movement.",
    searchAliases: ["relative aim"]
  },
  "GstInput.VehicleDecoupleAimingKeyboardAndMouse": {
    name: "Decouple Vehicle Aim (KB/M)",
    category: "Input",
    subcategory: "Vehicle",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Separate turret from vehicle movement.",
    searchAliases: ["decouple aim", "turret decouple"]
  },
  "GstInput.OptionHelicopterAssist": {
    name: "Helicopter Assist",
    category: "Input",
    subcategory: "Vehicle",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Assisted helicopter controls.",
    searchAliases: ["heli assist", "helicopter help"]
  },
  "GstInput.VehicleBoost": {
    name: "Vehicle Boost",
    category: "Input",
    subcategory: "Vehicle",
    type: "int",
    default: 0,
    range: [0, 1],
    options: { 0: "Hold", 1: "Toggle" },
    tooltip: "Hold or toggle to activate vehicle boost.",
    searchAliases: ["boost toggle", "nitro"]
  },

  // ==================== INPUT - VERTICAL LOOK ====================
  "GstInput.InvertAllVerticalLook": {
    name: "Invert All Vertical Look",
    category: "Input",
    subcategory: "Vertical Look",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Off", 1: "Invert", 2: "Per-Type" },
    tooltip: "Invert vertical look for all or per vehicle type.",
    searchAliases: ["invert look", "invert y", "inverted"]
  },
  "GstInput.InvertVerticalLookInfantry": {
    name: "Invert Vertical - Infantry",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert vertical look for infantry.",
    searchAliases: ["invert infantry"]
  },
  "GstInput.InvertVerticalLookVehicleDriver": {
    name: "Invert Vertical - Vehicle Driver",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert vertical look for ground vehicle driver.",
    searchAliases: ["invert vehicle driver"]
  },
  "GstInput.InvertVerticalLookTransportDriver": {
    name: "Invert Vertical - Transport Driver",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert vertical look for transport vehicle driver.",
    searchAliases: ["invert transport"]
  },
  "GstInput.InvertVerticalLookAircraft": {
    name: "Invert Vertical - Aircraft",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert vertical look in aircraft.",
    searchAliases: ["invert aircraft", "invert plane"]
  },
  "GstInput.InvertVerticalFlightAircraft": {
    name: "Invert Vertical Flight - Aircraft",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Invert pitch controls in aircraft (pull back to climb).",
    searchAliases: ["invert flight", "invert pitch"]
  },
  "GstInput.InvertVerticalLookGunner": {
    name: "Invert Vertical - Gunner",
    category: "Input",
    subcategory: "Vertical Look",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Invert vertical look for vehicle gunner positions.",
    searchAliases: ["invert gunner"]
  },

  // ==================== INPUT - AIM ASSIST ====================
  "GstInput.InfantryAimAssist": {
    name: "Infantry Aim Assist",
    category: "Input",
    subcategory: "Aim Assist",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Aim assist strength for infantry (controller).",
    searchAliases: ["aim assist", "auto aim"]
  },
  "GstInput.InfantryAimAssistSlowdown": {
    name: "Infantry Aim Assist Slowdown",
    category: "Input",
    subcategory: "Aim Assist",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Aim slowdown when near targets (controller).",
    searchAliases: ["aim slowdown", "sticky aim"]
  },
  "GstInput.InfantryAimInputCurve": {
    name: "Infantry Aim Input Curve",
    category: "Input",
    subcategory: "Aim Assist",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Standard", 1: "Linear", 2: "Acceleration" },
    tooltip: "Stick response curve for infantry aiming.",
    searchAliases: ["input curve", "response curve"]
  },
  "GstInput.InfantryZoomAimInputCurve": {
    name: "Infantry Zoom Aim Input Curve",
    category: "Input",
    subcategory: "Aim Assist",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Standard", 1: "Linear", 2: "Acceleration" },
    tooltip: "Stick response curve when zoomed.",
    searchAliases: ["zoom curve", "ads curve"]
  },
  "GstInput.VehicleAimAssist": {
    name: "Vehicle Aim Assist",
    category: "Input",
    subcategory: "Aim Assist",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Aim assist strength in vehicles (controller).",
    searchAliases: ["vehicle aim assist"]
  },
  "GstInput.VehicleAimAssistSlowdown": {
    name: "Vehicle Aim Assist Slowdown",
    category: "Input",
    subcategory: "Aim Assist",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Aim slowdown when near targets in vehicles.",
    searchAliases: ["vehicle slowdown"]
  },
  "GstInput.VehicleAimInputCurve": {
    name: "Vehicle Aim Input Curve",
    category: "Input",
    subcategory: "Aim Assist",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Standard", 1: "Linear", 2: "Acceleration" },
    tooltip: "Stick response curve in vehicles.",
    searchAliases: ["vehicle curve"]
  },
  "GstInput.VehicleZoomAimInputCurve": {
    name: "Vehicle Zoom Aim Input Curve",
    category: "Input",
    subcategory: "Aim Assist",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Standard", 1: "Linear", 2: "Acceleration" },
    tooltip: "Stick response curve when zoomed in vehicles.",
    searchAliases: ["vehicle zoom curve"]
  },
  "GstInput.OptionAirplanePilotControl": {
    name: "Airplane Control Scheme",
    category: "Input",
    subcategory: "Vehicle",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Airplane control style.",
    searchAliases: ["plane controls", "jet controls"]
  },
  "GstInput.PlaneFreelookDecouple": {
    name: "Plane Freelook Decouple",
    category: "Input",
    subcategory: "Vehicle",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Decouple freelook in planes.",
    searchAliases: ["plane freelook"]
  },
  "GstInput.FreelookSensitivity": {
    name: "Freelook Sensitivity",
    category: "Input",
    subcategory: "Vehicle",
    type: "float",
    default: 0.5,
    range: [0.0, 1.0],
    tooltip: "Look around sensitivity in vehicles.",
    searchAliases: ["freelook sens"]
  },

  // ==================== INPUT - VEHICLE SENSITIVITY ====================
  "GstInput.VehicleSensitivityTank": {
    name: "Tank Sensitivity",
    category: "Input",
    subcategory: "Vehicle Sensitivity",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Tank turret sensitivity.",
    searchAliases: ["tank sens"]
  },
  "GstInput.VehicleSensitivityTransport": {
    name: "Transport Sensitivity",
    category: "Input",
    subcategory: "Vehicle Sensitivity",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Transport vehicle sensitivity.",
    searchAliases: ["transport sens"]
  },
  "GstInput.VehicleSensitivityHelicopterPilot": {
    name: "Helicopter Sensitivity",
    category: "Input",
    subcategory: "Vehicle Sensitivity",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Helicopter pilot sensitivity.",
    searchAliases: ["heli sens", "helicopter sens"]
  },
  "GstInput.VehicleSensitivityPlanePilot": {
    name: "Plane Sensitivity",
    category: "Input",
    subcategory: "Vehicle Sensitivity",
    type: "float",
    default: 1.0,
    range: [0.0, 2.0],
    tooltip: "Fixed wing aircraft sensitivity.",
    searchAliases: ["plane sens", "jet sens"]
  },

  // ==================== INPUT - CONTROLLER ====================
  "GstInput.Vibration": {
    name: "Controller Vibration",
    category: "Input",
    subcategory: "Controller",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Controller rumble feedback.",
    searchAliases: ["vibration", "rumble", "haptic"]
  },
  "GstInput.VibrationIntensity": {
    name: "Vibration Intensity",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "Controller vibration strength.",
    searchAliases: ["rumble intensity"]
  },
  "GstInput.GamepadLeftStickDeadzoneCenter": {
    name: "Left Stick Deadzone",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 0.08,
    range: [0.0, 0.5],
    tooltip: "Left stick center deadzone.",
    searchAliases: ["left deadzone", "stick deadzone"]
  },
  "GstInput.GamepadRightStickDeadzoneCenter": {
    name: "Right Stick Deadzone",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 0.08,
    range: [0.0, 0.5],
    tooltip: "Right stick center deadzone.",
    searchAliases: ["right deadzone", "aim deadzone"]
  },
  "GstInput.GamepadLeftTriggerDeadzone": {
    name: "Left Trigger Deadzone",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 0.0,
    range: [0.0, 0.5],
    tooltip: "Left trigger deadzone.",
    searchAliases: ["l2 deadzone", "lt deadzone"]
  },
  "GstInput.GamepadRightTriggerDeadzone": {
    name: "Right Trigger Deadzone",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 0.0,
    range: [0.0, 0.5],
    tooltip: "Right trigger deadzone.",
    searchAliases: ["r2 deadzone", "rt deadzone"]
  },
  "GstInput.StickAimingAccelerationAmount": {
    name: "Stick Aim Acceleration",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 0.7,
    range: [0.0, 1.0],
    tooltip: "Aim acceleration on controller.",
    searchAliases: ["aim acceleration", "turn acceleration"]
  },
  "GstInput.ControllerAimingCurveSoldier": {
    name: "Aiming Curve (Soldier)",
    category: "Input",
    subcategory: "Controller",
    type: "int",
    default: 0,
    range: [0, 3],
    options: { 0: "Standard", 1: "Precision", 2: "Aggressive", 3: "Custom" },
    tooltip: "Stick response curve for soldier.",
    searchAliases: ["aim curve", "response curve"]
  },
  "GstInput.AdaptiveTriggerWeaponFireIntensity": {
    name: "Adaptive Trigger Fire Intensity",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "DualSense adaptive trigger resistance for firing.",
    searchAliases: ["adaptive trigger", "dualsense"]
  },
  "GstInput.AdaptiveTriggerWeaponZoomIntensity": {
    name: "Adaptive Trigger Zoom Intensity",
    category: "Input",
    subcategory: "Controller",
    type: "float",
    default: 1.0,
    range: [0.0, 1.0],
    tooltip: "DualSense adaptive trigger resistance for aiming.",
    searchAliases: ["adaptive trigger zoom"]
  },
  "GstInput.IsRightHanded": {
    name: "Right Handed",
    category: "Input",
    subcategory: "Controller",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Stick layout handedness.",
    searchAliases: ["southpaw", "left handed"]
  },

  // ==================== INPUT - GYRO ====================
  "GstInput.GyroDisabled": {
    name: "Gyro Disabled",
    category: "Input",
    subcategory: "Gyro",
    type: "bool",
    default: 0,
    range: [0, 1],
    tooltip: "Disable gyro aiming.",
    searchAliases: ["gyro off", "motion control"]
  },
  "GstInput.GyroAimingModeSoldier": {
    name: "Gyro Aiming Mode (Soldier)",
    category: "Input",
    subcategory: "Gyro",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Off", 1: "Always On", 2: "ADS Only" },
    tooltip: "When gyro aiming is active.",
    searchAliases: ["gyro mode", "motion aiming"]
  },
  "GstInput.GyroAimingModeVehicle": {
    name: "Gyro Aiming Mode (Vehicle)",
    category: "Input",
    subcategory: "Gyro",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Off", 1: "Always On", 2: "ADS Only" },
    tooltip: "Gyro aiming in vehicles.",
    searchAliases: ["vehicle gyro"]
  },

  // ==================== INPUT - ACCESSIBILITY ====================
  "GstInput.InputMethod": {
    name: "Input Method",
    category: "Input",
    subcategory: "Accessibility",
    type: "int",
    default: 0,
    range: [0, 2],
    options: { 0: "Keyboard/Mouse", 1: "Controller", 2: "Auto" },
    tooltip: "Primary input method.",
    searchAliases: ["input type", "controller mode"]
  },
  "GstInput.HeadtrackingEnabled": {
    name: "Head Tracking",
    category: "Input",
    subcategory: "Accessibility",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Enable head tracking support.",
    searchAliases: ["head tracking", "tobii"]
  },
  "GstInput.SpeechRecognitionEnabled": {
    name: "Speech Recognition",
    category: "Input",
    subcategory: "Accessibility",
    type: "bool",
    default: 1,
    range: [0, 1],
    tooltip: "Enable voice commands.",
    searchAliases: ["voice commands", "speech"]
  },
};

export function getSettingInfo(key: string) {
  return SETTINGS_DATABASE[key];
}

export function getCategories(): string[] {
  const categories = new Set<string>();
  Object.values(SETTINGS_DATABASE).forEach(s => categories.add(s.category));
  return Array.from(categories).sort();
}

export function getSettingsByCategory(category: string) {
  return Object.entries(SETTINGS_DATABASE)
    .filter(([_, info]) => info.category === category)
    .reduce((acc, [key, info]) => ({ ...acc, [key]: info }), {} as SettingsDatabase);
}

export function searchSettings(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return SETTINGS_DATABASE;
  
  return Object.entries(SETTINGS_DATABASE)
    .filter(([key, info]) => {
      if (info.name.toLowerCase().includes(q)) return true;
      if (info.category.toLowerCase().includes(q)) return true;
      if (info.subcategory.toLowerCase().includes(q)) return true;
      if (key.toLowerCase().includes(q)) return true;
      return info.searchAliases.some(alias => alias.toLowerCase().includes(q));
    })
    .reduce((acc, [key, info]) => ({ ...acc, [key]: info }), {} as SettingsDatabase);
}
