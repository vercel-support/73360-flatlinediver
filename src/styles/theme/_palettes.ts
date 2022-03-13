import { IThemeMode } from '@context/theme-mode';
import _baseColors from './_base-colors.json';

export const _palettes: Record<
  IThemeMode['mode'],
  {
    text: string;
    bg: string;
    link: string;
  }
> = {
  light: {
    text: _baseColors[500],
    bg: _baseColors[100],
    link: _baseColors[400],
  },
  dark: {
    text: _baseColors[200],
    bg: _baseColors[600],
    link: _baseColors[300],
  },
} as const;