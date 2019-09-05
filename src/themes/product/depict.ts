import {
    Theme,
} from '../../interfaces';

import {
    THEME_NAME_DEPICT,
    THEME_TYPE_DARK,
} from '../../constants';



const depict: Theme = {
    name: THEME_NAME_DEPICT,
    type: THEME_TYPE_DARK,
    backgroundColorPrimary: 'hsl(327, 94%, 20%)',
    backgroundColorPrimaryAlpha: 'hsla(327, 94%, 20%, 0.4)',
    backgroundColorPrimaryInverted: 'hsl(327, 94%, 80%)',
    backgroundColorSecondary: 'hsl(327, 94%, 30%)',
    backgroundColorSecondaryAlpha: 'hsla(327, 94%, 30%, 0.4)',
    backgroundColorTertiary: 'hsl(327, 94%, 37%)',
    backgroundColorTertiaryAlpha: 'hsla(327, 94%, 37%, 0.4)',
    colorPrimary: 'hsl(327, 7%, 97%)',
    colorPrimaryInverted: 'hsl(327, 7%, 77%)',
    colorSecondary: 'hsl(327, 7%, 77%)',
    shadow: 'hsla(327, 94%, 10%, 0.7)',
};


export default depict;
