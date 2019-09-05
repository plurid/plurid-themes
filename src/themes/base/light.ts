import {
    Theme,
} from '../../';

import {
    THEME_NAME_LIGHT,
    THEME_TYPE_BRIGHT,
} from '../../constants';



const light: Theme = {
    name: THEME_NAME_LIGHT,
    type: THEME_TYPE_BRIGHT,
    backgroundColorPrimary: 'hsl(220, 2%, 97%)',
    backgroundColorPrimaryAlpha: 'hsla(220, 2%, 97%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(220, 2%, 3%)',
    backgroundColorSecondary: 'hsl(220, 2%, 77%)',
    backgroundColorSecondaryAlpha: 'hsla(220, 2%, 77%, 0.4)',
    backgroundColorTertiary: 'hsl(220, 2%, 57%)',
    backgroundColorTertiaryAlpha: 'hsla(220, 2%, 57%, 0.3)',
    colorPrimary: 'hsl(220, 2%, 10%)',
    colorPrimaryInverted: 'hsl(220, 2%, 90%)',
    colorSecondary: 'hsl(220, 2%, 50%)',
    shadow: 'hsla(220, 2%, 10%, 0.7)',

    // backgroundColorHover: 'hsla(220, 2%, 55%, 0.3)',
};


export default light;
