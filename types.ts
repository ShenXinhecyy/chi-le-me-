
export type AppView = 
  | 'MODE_SELECTION' 
  | 'ELDERLY_DASHBOARD' 
  | 'YOUTH_DASHBOARD' 
  | 'CDT_ASSESSMENT' 
  | 'VOICE_JOURNAL' 
  | 'COGNITIVE_TRENDS' 
  | 'GOD_MODE' 
  | 'PASSIVE_MONITORING';

export interface UserProfile {
  name: string;
  age: number;
  mode: 'elderly' | 'youth' | null;
}

export interface MetricData {
  day: string;
  value: number;
  baseline: number;
}
