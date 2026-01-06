export type SettingType = 'bool' | 'int' | 'float';
export type Category = 'Graphics' | 'Performance' | 'Audio' | 'Input' | 'Gameplay';

export interface SettingMetadata {
  name: string;
  category: Category;
  subcategory: string;
  type: SettingType;
  default: number;
  range: [number, number];
  options?: Record<number, string>;
  tooltip: string;
  searchAliases: string[];
}

export interface Preset {
  name: string;
  icon: string;
  color: string;
  description: string;
  settings: Record<string, string>;
}

export interface ConfigState {
  original: Record<string, string>;
  current: Record<string, string>;
  fileName: string | null;
  isLoaded: boolean;
}

export type SettingsDatabase = Record<string, SettingMetadata>;
