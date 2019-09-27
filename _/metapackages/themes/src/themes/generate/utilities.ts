import HSLColor from './hslcolor';

import {
    HSLColorValues,
} from '../../interfaces';



const saturationRE = /\((\d{1,3})\s?,/;
const hueRE = /,\s?(\d{1,3})%\s?,/;
const lightnessRE = /,\s?(\d{1,3})%\)/;

export const parseHSL = (color: string): HSLColor | undefined => {
    const saturationMatch = color.match(saturationRE);
    const hueMatch = color.match(hueRE);
    const lightnessMatch = color.match(lightnessRE);

    if (!saturationMatch || !hueMatch || !lightnessMatch) {
        return;
    }

    const colorValues: HSLColorValues = {
        saturation: parseInt(saturationMatch[1]),
        hue: parseInt(hueMatch[1]),
        lightness: parseInt(lightnessMatch[1]),
    };
    const hslColor = new HSLColor(colorValues);

    return hslColor;
}


export const invertColor = (color: HSLColor): HSLColor => {
    const colorValues: HSLColorValues = {
        saturation: color.saturation(),
        hue: color.hue(),
        lightness: 100 - color.lightness(),
    };
    const hslColor = new HSLColor(colorValues);

    return hslColor;
}
