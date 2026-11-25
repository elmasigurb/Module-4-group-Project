/** Every available icon name (used by the Icon overview story and Storybook controls) */
export const iconNames = [
  'home',
  'receipt',
  'camera',
  'bell',
  'user',
  'folder',
  'back',
  'forward',
  'search',
] as const;

export type IconName = (typeof iconNames)[number];
