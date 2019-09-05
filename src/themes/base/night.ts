import {
    Theme,
} from '../../';

import {
    THEME_NAME_NIGHT,
    THEME_TYPE_DARK,
} from '../../constants';



const night: Theme = {
    name: THEME_NAME_NIGHT,
    type: THEME_TYPE_DARK,
    backgroundColorPrimary: 'hsl(220, 2%, 4%)',
    backgroundColorPrimaryAlpha: 'hsla(220, 2%, 4%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(220, 2%, 96%)',
    backgroundColorSecondary: 'hsl(220, 2%, 14%)',
    backgroundColorSecondaryAlpha: 'hsla(220, 2%, 14%, 0.4)',
    backgroundColorTertiary: 'hsl(220, 2%, 24%)',
    backgroundColorTertiaryAlpha: 'hsla(220, 2%, 24%, 0.3)',
    colorPrimary: 'hsl(220, 2%, 87%)',
    colorPrimaryInverted: 'hsl(220, 2%, 13%)',
    colorSecondary: 'hsl(220, 2%, 67%)',
    shadow: 'hsla(220, 2%, 10%, 0.7)',
};


export default night;
