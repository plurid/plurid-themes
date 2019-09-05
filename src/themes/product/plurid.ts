import {
    Theme,
} from '../../interfaces';

import {
    THEME_NAME_PLURID,
    THEME_TYPE_BRIGHT,
} from '../../constants';



const plurid: Theme = {
    name: THEME_NAME_PLURID,
    type: THEME_TYPE_BRIGHT,
    backgroundColorPrimary: 'hsl(247, 19%, 39%)',
    backgroundColorPrimaryAlpha: 'hsla(247, 19%, 39%, 0.4)',
    backgroundColorPrimaryInverted: 'hsla(247, 19%, 61%)',
    backgroundColorSecondary: 'hsl(247, 19%, 19%)',
    backgroundColorSecondaryAlpha: 'hsla(247, 19%, 19%, 0.4)',
    backgroundColorTertiary: 'hsl(247, 19%, 9%)',
    backgroundColorTertiaryAlpha: 'hsla(247, 19%, 9%, 0.4)',
    colorPrimary: 'hsl(247, 7%, 97%)',
    colorPrimaryInverted: 'hsl(247, 7%, 77%)',
    colorSecondary: 'hsl(247, 7%, 77%)',
    shadow: 'hsla(247, 94%, 10%, 0.7)',
};


export default plurid;
