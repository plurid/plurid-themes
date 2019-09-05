import {
    Theme,
} from '../../interfaces';

import {
    THEME_NAME_DEVIEW,
    THEME_TYPE_DARK,
} from '../../constants';



const deview: Theme = {
    name: THEME_NAME_DEVIEW,
    type: THEME_TYPE_DARK,
    backgroundColorPrimary: 'hsl(91, 81%, 24%)',
    backgroundColorPrimaryAlpha: 'hsla(91, 81%, 24%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(91, 81%, 76%)',
    backgroundColorSecondary: 'hsl(91, 81%, 39%)',
    backgroundColorSecondaryAlpha: 'hsla(91, 81%, 39%, 0.4)',
    backgroundColorTertiary: 'hsl(91, 81%, 29%)',
    backgroundColorTertiaryAlpha: 'hsla(91, 81%, 29%, 0.3)',
    colorPrimary: 'hsl(91, 7%, 97%)',
    colorPrimaryInverted: 'hsl(91, 7%, 77%)',
    colorSecondary: 'hsl(91, 7%, 77%)',
    shadow: 'hsla(91, 81%, 10%, 0.7)',
};


export default deview;
