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
import decode from './themes/product/decode';
import defile from './themes/product/defile';
import deleaf from './themes/product/deleaf';
import demail from './themes/product/demail';
import denote from './themes/product/denote';
import depict from './themes/product/depict';
import deself from './themes/product/deself';
import desit from './themes/product/desit';
import desky from './themes/product/desky';
import detime from './themes/product/detime';
import detune from './themes/product/detune';
import deturn from './themes/product/deturn';
import deveil from './themes/product/deveil';
import deview from './themes/product/deview';
import dewiki from './themes/product/dewiki';



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
    decode,
    defile,
    deleaf,
    demail,
    denote,
    depict,
    deself,
    desit,
    desky,
    detime,
    detune,
    deturn,
    deveil,
    deview,
    dewiki,

    plurid,
}


const themes = {
    night,
    dusk,
    dawn,
    light,

    ponton,
    jaune,
    furor,

    decode,
    defile,
    deleaf,
    demail,
    denote,
    depict,
    deself,
    desit,
    desky,
    detime,
    detune,
    deturn,
    deveil,
    deview,
    dewiki,

    plurid,
};

export default themes;
