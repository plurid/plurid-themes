import {
    Theme,
} from '../../';

import {
    THEME_NAME_DEWIKI,
    THEME_TYPE_BRIGHT,
} from '../../constants';



const dewiki: Theme = {
    type: THEME_TYPE_BRIGHT,
    name: THEME_NAME_DEWIKI,

    baseColor: 'hsl(0, 89%, 77%)',
    baseColorInverted: 'hsl(0, 89%, 23%)',

    backgroundColorDark: 'hsl(0, 89%, 10%)',
    backgroundColorBright: 'hsl(0, 89%, 90%)',

    backgroundColorPrimary: 'hsl(0, 89%, 77%)',
    backgroundColorPrimaryAlpha: 'hsla(0, 89%, 77%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(0, 89%, 23%)',

    backgroundColorSecondary: 'hsl(0, 89%, 67%)',
    backgroundColorSecondaryAlpha: 'hsla(0, 89%, 67%, 0.4)',
    backgroundColorSecondaryInverted: 'hsl(0, 89%, 33%)',

    backgroundColorTertiary: 'hsl(0, 89%, 60%)',
    backgroundColorTertiaryAlpha: 'hsla(0, 89%, 60%, 0.4)',
    backgroundColorTertiaryInverted: 'hsl(0, 89%, 40%)',

    backgroundColorQuaternary: 'hsl(0, 89%, 50%)',
    backgroundColorQuaternaryAlpha: 'hsla(0, 89%, 50%, 0.4)',
    backgroundColorQuaternaryInverted: 'hsl(0, 89%, 50%)',

    colorPrimary: 'hsl(0, 7%, 97%)',
    colorPrimaryInverted: 'hsl(0, 7%, 3%)',

    colorSecondary: 'hsl(0, 7%, 77%)',
    colorSecondaryInverted: 'hsl(0, 7%, 23%)',

    colorTertiary: 'hsl(0, 7%, 67%)',
    colorTertiaryInverted: 'hsl(0, 7%, 33%)',


    boxShadowUmbra: '0px 3px 6px 0px hsla(0, 89%, 10%, 0.8)',
    boxShadowUmbraColor: 'hsla(0, 89%, 10%, 0.8)',
    boxShadowUmbraInset: 'inset 0px -3px 4px 0px hsla(0, 89%, 10%, 0.9)',

    boxShadowPenumbra: '0px 3px 12px 0px hsla(0, 89%, 10%, 0.8)',
    boxShadowPenumbraColor: 'hsla(0, 89%, 10%, 0.8)',
    boxShadowPenumbraInset: 'inset 0px -3px 6px 0px hsla(0, 89%, 10%, 0.9)',

    boxShadowAntumbra: '0px 3px 18px 0px hsla(0, 89%, 10%, 0.8)',
    boxShadowAntumbraColor: 'hsla(0, 89%, 10%, 0.8)',
    boxShadowAntumbraInset: 'inset 0px -3px 8px 0px hsla(0, 89%, 10%, 0.9)',
};


export default dewiki;
