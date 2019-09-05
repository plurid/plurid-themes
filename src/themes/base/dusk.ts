import {
    Theme,
} from '../../interfaces';

import {
    THEME_NAME_DUSK,
    THEME_TYPE_DARK,
} from '../../constants';



const dusk: Theme = {
    name: THEME_NAME_DUSK,
    type: THEME_TYPE_DARK,
    backgroundColorPrimary: 'hsl(220, 2%, 15%)',
    backgroundColorPrimaryAlpha: 'hsla(220, 2%, 15%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(220, 2%, 85%)',
    backgroundColorSecondary: 'hsl(220, 2%, 25%)',
    backgroundColorSecondaryAlpha: 'hsla(220, 2%, 25%, 0.4)',
    backgroundColorTertiary: 'hsl(220, 2%, 35%)',
    backgroundColorTertiaryAlpha: 'hsla(220, 2%, 35%, 0.4)',
    colorPrimary: 'hsl(220, 2%, 95%)',
    colorPrimaryInverted: 'hsl(220, 2%, 5%)',
    colorSecondary: 'hsl(220, 2%, 65%)',
    shadow: 'hsla(220, 2%, 10%, 0.7)',
};


export default dusk;
