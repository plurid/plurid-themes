import {
    parseHSL,
} from '../themes/generate/utilities';



interface DecomposedColor {
    hue: number;
    saturation: number;
    lightness: number;
}


/**
 * Decomposes a `colorString` into its constituents: hue, saturation, and lightness.
 *
 *
 * @param colorString
 */
export const decomposeColor = (
    colorString: string,
): DecomposedColor | undefined => {
    const decomposed = parseHSL(colorString);

    if (!decomposed) {
        return;
    }

    return {
        hue: decomposed.hue(),
        saturation: decomposed.saturation(),
        lightness: decomposed.lightness(),
    };
}
