import {
    Theme,
} from '../../interfaces';

import {
    THEME_NAME_DAWN,
    THEME_TYPE_BRIGHT,
} from '../../constants';



const dawn: Theme = {
    name: THEME_NAME_DAWN,
    type: THEME_TYPE_BRIGHT,
    backgroundColorPrimary: 'hsl(220, 2%, 70%)',
    backgroundColorPrimaryAlpha: 'hsla(220, 2%, 70%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(220, 2%, 30%)',
    backgroundColorSecondary: 'hsl(220, 2%, 50%)',
    backgroundColorSecondaryAlpha: 'hsla(220, 2%, 50%, 0.4)',
    backgroundColorTertiary: 'hsl(220, 2%, 39%)',
    backgroundColorTertiaryAlpha: 'hsla(240, 13%, 39%, 0.3)',
    colorPrimary: 'hsl(220, 7%, 15%)',
    colorPrimaryInverted: 'hsl(220, 7%, 85%)',
    colorSecondary: 'hsl(220, 7%, 40%)',
    shadow: 'hsla(220, 2%, 10%, 0.7)',

    // backgroundColor: 'hsl(220, 2%, 70%)',
    // backgroundColorSecondary: 'hsl(220, 2%, 50%)',
    // backgroundColorHover: 'hsla(220, 2%, 40%, 0.3)',
    // color: 'hsl(220, 2%, 17%)',
    // colorSecondary: 'hsl(220, 2%, 47%)',
};


export default dawn;
