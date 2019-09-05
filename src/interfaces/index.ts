import {
    ThemeNames,
    ThemeTypes,
} from '../enumerations';



export interface Theme {
    name: keyof typeof ThemeNames;
    type: keyof typeof ThemeTypes;
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
