// #region imports
    import {
        THEME_NAMES,
        THEME_TYPES,
    } from '../constants';
// #endregion imports



// #region module
export interface Theme {
    type: keyof typeof THEME_TYPES;
    name: keyof typeof THEME_NAMES;

    baseColor: string;
    baseColorInverted: string;

    backgroundColorDark: string;
    backgroundColorBright: string;

    backgroundColorPrimary: string;
    backgroundColorPrimaryAlpha: string;
    backgroundColorPrimaryInverted: string;

    backgroundColorSecondary: string;
    backgroundColorSecondaryAlpha: string;
    backgroundColorSecondaryInverted: string;

    backgroundColorTertiary: string;
    backgroundColorTertiaryAlpha: string;
    backgroundColorTertiaryInverted: string;

    backgroundColorQuaternary: string;
    backgroundColorQuaternaryAlpha: string;
    backgroundColorQuaternaryInverted: string;


    colorPrimary: string;
    colorPrimaryInverted: string;

    colorSecondary: string;
    colorSecondaryInverted: string;

    colorTertiary: string;
    colorTertiaryInverted: string;


    boxShadowUmbra: string;
    boxShadowUmbraColor: string;
    boxShadowUmbraInset: string;

    boxShadowPenumbra: string;
    boxShadowPenumbraColor: string;
    boxShadowPenumbraInset: string;

    boxShadowAntumbra: string;
    boxShadowAntumbraColor: string;
    boxShadowAntumbraInset: string;

    fontFamilySansSerif: string;
    fontFamilySerif: string;
    fontFamilyMonospace: string;
}


export interface HSLColorClass {
    saturation: () => number;
    hue: () => number;
    lightness: () => number;
    alpha: () => number | undefined;
    display: () => string;
}


export interface HSLColorValues {
    saturation: number;
    hue: number;
    lightness: number;
    alpha?: number;
}
// #endregion module
