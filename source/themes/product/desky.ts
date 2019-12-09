import {
    Theme,
} from '../../';

import {
    THEME_NAME_DESKY,
    THEME_TYPE_DARK,
} from '../../constants';



const desky: Theme = {
    type: THEME_TYPE_DARK,
    name: THEME_NAME_DESKY,

    baseColor: 'hsl(312, 88%, 22%)',
    baseColorInverted: 'hsl(312, 88%, 88%)',

    backgroundColorDark: 'hsl(312, 88%, 10%)',
    backgroundColorBright: 'hsl(312, 88%, 90%)',

    backgroundColorPrimary: 'hsl(312, 88%, 22%)',
    backgroundColorPrimaryAlpha: 'hsla(312, 88%, 22%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(312, 88%, 88%)',

    backgroundColorSecondary: 'hsl(312, 88%, 32%)',
    backgroundColorSecondaryAlpha: 'hsla(312, 88%, 32%, 0.4)',
    backgroundColorSecondaryInverted: 'hsl(312, 88%, 68%)',

    backgroundColorTertiary: 'hsl(312, 88%, 42%)',
    backgroundColorTertiaryAlpha: 'hsla(312, 88%, 42%, 0.4)',
    backgroundColorTertiaryInverted: 'hsl(312, 88%, 58%)',

    backgroundColorQuaternary: 'hsl(312, 88%, 52%)',
    backgroundColorQuaternaryAlpha: 'hsla(312, 88%, 52%, 0.4)',
    backgroundColorQuaternaryInverted: 'hsl(312, 88%, 48%)',

    colorPrimary: 'hsl(312, 88%, 97%)',
    colorPrimaryInverted: 'hsl(312, 88%, 3%)',

    colorSecondary: 'hsl(312, 88%, 77%)',
    colorSecondaryInverted: 'hsl(312, 88%, 23%)',

    colorTertiary: 'hsl(312, 88%, 67%)',
    colorTertiaryInverted: 'hsl(312, 88%, 33%)',


    boxShadowUmbra: '0px 3px 6px 0px hsla(312, 88%, 10%, 0.8)',
    boxShadowUmbraColor: 'hsla(312, 88%, 10%, 0.8)',
    boxShadowUmbraInset: 'inset 0px -3px 4px 0px hsla(312, 88%, 10%, 0.9)',

    boxShadowPenumbra: '0px 3px 12px 0px hsla(312, 88%, 10%, 0.8)',
    boxShadowPenumbraColor: 'hsla(312, 88%, 10%, 0.8)',
    boxShadowPenumbraInset: 'inset 0px -3px 6px 0px hsla(312, 88%, 10%, 0.9)',

    boxShadowAntumbra: '0px 3px 18px 0px hsla(312, 88%, 10%, 0.8)',
    boxShadowAntumbraColor: 'hsla(312, 88%, 10%, 0.8)',
    boxShadowAntumbraInset: 'inset 0px -3px 8px 0px hsla(312, 88%, 10%, 0.9)',
};


export default desky;
