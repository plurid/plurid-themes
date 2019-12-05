import {
    THEME_NAMES,
    THEME_TYPES,
} from './constants';

import {
    Theme,
} from './interfaces';

import {
    decomposeColor,
} from './utilities';

import generateTheme from './themes/generate';

import night from './themes/base/night';
import dusk from './themes/base/dusk';
import dawn from './themes/base/dawn';
import light from './themes/base/light';

import ponton from './themes/base/ponton';
import jaune from './themes/base/jaune';
import furor from './themes/base/furor';

import plurid from './themes/product/plurid';
import denote from './themes/product/denote';
import depict from './themes/product/depict';
import deveil from './themes/product/deveil';
import deview from './themes/product/deview';



export {
    /** interfaces */
    Theme,

    /** constants */
    THEME_NAMES,
    THEME_TYPES,

    /** functions */
    generateTheme,
    decomposeColor,

    /** themes */
    /** base */
    night,
    dusk,
    dawn,
    light,

    ponton,
    jaune,
    furor,

    /** product */
    plurid,
    denote,
    depict,
    deveil,
    deview,
}


const themes = {
    night,
    dusk,
    dawn,
    light,

    ponton,
    jaune,
    furor,

    plurid,
    denote,
    depict,
    deveil,
    deview,
};

export default themes;
