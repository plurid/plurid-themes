import {
    THEME_NAMES,
    THEME_TYPES,
} from '../constants';


export interface Theme {
    name: keyof typeof THEME_NAMES;
    type: keyof typeof THEME_TYPES;
    backgroundColorPrimary: string;
    backgroundColorPrimaryAlpha: string;
    backgroundColorPrimaryInverted: string;
    backgroundColorSecondary: string;
    backgroundColorSecondaryAlpha: string;
    backgroundColorTertiary: string;
    backgroundColorTertiaryAlpha: string;
    colorPrimary: string;
    colorPrimaryInverted: string;
    colorSecondary: string;
    shadow: string;
}
