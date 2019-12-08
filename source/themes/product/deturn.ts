import {
    Theme,
} from '../../';

import {
    THEME_NAME_DETURN,
    THEME_TYPE_DARK,
} from '../../constants';



const deturn: Theme = {
    type: THEME_TYPE_DARK,
    name: THEME_NAME_DETURN,

    baseColor: 'hsl(248, 77%, 28%)',
    baseColorInverted: 'hsl(248, 77%, 72%)',

    backgroundColorDark: 'hsl(248, 77%, 10%)',
    backgroundColorBright: 'hsl(248, 77%, 90%)',

    backgroundColorPrimary: 'hsl(248, 77%, 28%)',
    backgroundColorPrimaryAlpha: 'hsla(248, 77%, 28%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(248, 77%, 72%)',

    backgroundColorSecondary: 'hsl(248, 77%, 38%)',
    backgroundColorSecondaryAlpha: 'hsla(248, 77%, 38%, 0.4)',
    backgroundColorSecondaryInverted: 'hsl(248, 77%, 62%)',

    backgroundColorTertiary: 'hsl(248, 77%, 48%)',
    backgroundColorTertiaryAlpha: 'hsla(248, 77%, 48%, 0.4)',
    backgroundColorTertiaryInverted: 'hsl(248, 77%, 52%)',

    backgroundColorQuaternary: 'hsl(248, 77%, 58%)',
    backgroundColorQuaternaryAlpha: 'hsla(248, 77%, 58%, 0.4)',
    backgroundColorQuaternaryInverted: 'hsl(248, 77%, 42%)',

    colorPrimary: 'hsl(248, 77%, 97%)',
    colorPrimaryInverted: 'hsl(248, 77%, 3%)',

    colorSecondary: 'hsl(248, 77%, 77%)',
    colorSecondaryInverted: 'hsl(248, 77%, 23%)',

    colorTertiary: 'hsl(248, 77%, 67%)',
    colorTertiaryInverted: 'hsl(248, 77%, 33%)',


    boxShadowUmbra: '0px 3px 6px 0px hsla(248, 77%, 10%, 0.8)',
    boxShadowUmbraColor: 'hsla(248, 77%, 10%, 0.8)',
    boxShadowUmbraInset: 'inset 0px -3px 4px 0px hsla(248, 77%, 10%, 0.9)',

    boxShadowPenumbra: '0px 3px 12px 0px hsla(248, 77%, 10%, 0.8)',
    boxShadowPenumbraColor: 'hsla(248, 77%, 10%, 0.8)',
    boxShadowPenumbraInset: 'inset 0px -3px 6px 0px hsla(248, 77%, 10%, 0.9)',

    boxShadowAntumbra: '0px 3px 18px 0px hsla(248, 77%, 10%, 0.8)',
    boxShadowAntumbraColor: 'hsla(248, 77%, 10%, 0.8)',
    boxShadowAntumbraInset: 'inset 0px -3px 8px 0px hsla(248, 77%, 10%, 0.9)',
};


export default deturn;
