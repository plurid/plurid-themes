import {
    Theme,
} from '../../';

import {
    THEME_NAME_DENOTE,
    THEME_TYPE_DARK,
} from '../../constants';



const denote: Theme = {
    type: THEME_TYPE_DARK,
    name: THEME_NAME_DENOTE,

    baseColor: 'hsl(240, 13%, 16%)',
    baseColorInverted: 'hsl(240, 13%, 84%)',

    backgroundColorDark: 'hsl(240, 94%, 10%)',
    backgroundColorBright: 'hsl(240, 94%, 90%)',

    backgroundColorPrimary: 'hsl(240, 13%, 16%)',
    backgroundColorPrimaryAlpha: 'hsla(240, 94%, 20%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(240, 13%, 84%)',

    backgroundColorSecondary: 'hsl(240, 94%, 30%)',
    backgroundColorSecondaryAlpha: 'hsla(240, 94%, 30%, 0.4)',
    backgroundColorSecondaryInverted: 'hsl(240, 94%, 70%)',

    backgroundColorTertiary: 'hsl(240, 94%, 37%)',
    backgroundColorTertiaryAlpha: 'hsla(240, 94%, 37%, 0.4)',
    backgroundColorTertiaryInverted: 'hsl(240, 94%, 63%)',

    backgroundColorQuaternary: 'hsl(240, 94%, 47%)',
    backgroundColorQuaternaryAlpha: 'hsla(240, 94%, 47%, 0.4)',
    backgroundColorQuaternaryInverted: 'hsl(240, 94%, 53%)',

    colorPrimary: 'hsl(240, 7%, 97%)',
    colorPrimaryInverted: 'hsl(240, 7%, 3%)',

    colorSecondary: 'hsl(240, 7%, 77%)',
    colorSecondaryInverted: 'hsl(240, 7%, 23%)',

    colorTertiary: 'hsl(240, 7%, 67%)',
    colorTertiaryInverted: 'hsl(240, 7%, 33%)',


    boxShadowUmbra: '0px 3px 6px 0px hsla(240, 94%, 10%, 0.8)',
    boxShadowUmbraColor: 'hsla(240, 94%, 10%, 0.8)',
    boxShadowUmbraInset: 'inset 0px -3px 4px 0px hsla(240, 94%, 10%, 0.9)',

    boxShadowPenumbra: '0px 3px 12px 0px hsla(240, 94%, 10%, 0.8)',
    boxShadowPenumbraColor: 'hsla(240, 94%, 10%, 0.8)',
    boxShadowPenumbraInset: 'inset 0px -3px 6px 0px hsla(240, 94%, 10%, 0.9)',

    boxShadowAntumbra: '0px 3px 18px 0px hsla(240, 94%, 10%, 0.8)',
    boxShadowAntumbraColor: 'hsla(240, 94%, 10%, 0.8)',
    boxShadowAntumbraInset: 'inset 0px -3px 8px 0px hsla(240, 94%, 10%, 0.9)',
};


export default denote;
