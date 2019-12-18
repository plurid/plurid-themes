<h1 align="center">
    plurid' themes
</h1>

<p align="center">
    <a target="_blank" href="https://www.npmjs.com/package/@plurid/plurid-themes">
        <img src="https://img.shields.io/npm/v/@plurid/plurid-themes.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
    </a>
    <a target="_blank" href="https://github.com/plurid/plurid-themes/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: MIT">
    </a>
</p>



There are four shade-oriented base themes, three color-oriented base themes, and multiple `plurid`-oriented product themes.

The four shade-oriented base themes consist of:

+ `night`
+ `dusk`
+ `dawn`
+ `light`

where the lightness increases from the `night` to `light`,

and the three color-oriented base themes are:

+ `ponton` - blue-based
+ `jaune` - yellow-based
+ `furor` - red-based.

The four shade-oriented base themes are inspired by [radical-style-interfaces](https://github.com/plurid/radical-style-interfaces).

A theme can be further more classified based on the theme `type` (`dark` or `bright`). A `dark` theme will have the primary color darker than the secondary color, whereas a `bright` theme will have the primary color brighter than the secondary color.


## [Demo](https://meta.plurid.com/themes)


## Usage

The themes are intended to be used for `CSS-in-JS` styling along with `react`, `styled-components`, or other packages.

    interface Theme {
        type: "dark" | "bright";
        name: "generated" | "night" | "dusk" | "dawn" | "light"
            | "ponton" | "jaune" | "furor"
            | "plurid"
            | "decode" | "defile" | "deleaf" | "delook"
            | "demail" | "denote" | "depict" | "deself"
            | "desit"  | "desky"  | "detime" | "detune"
            | "deturn" | "deveil" | "deview" | "dewiki";

        baseColor: string;
        baseColorInverted: string;

        backgroundColorDark: string;
        backgroundColorBright: string;

        backgroundColorPrimary: string;
        backgroundColorPrimaryAlpha: string;
        backgroundColorPrimaryInverted: string;

        backgroundColorSecondary: string;
        backgroundColorSecondaryAlpha: string;
        backgroundColorSecondaryInverted: string;

        backgroundColorTertiary: string;
        backgroundColorTertiaryAlpha: string;
        backgroundColorTertiaryInverted: string;

        backgroundColorQuaternary: string;
        backgroundColorQuaternaryAlpha: string;
        backgroundColorQuaternaryInverted: string;


        colorPrimary: string;
        colorPrimaryInverted: string;

        colorSecondary: string;
        colorSecondaryInverted: string;

        colorTertiary: string;
        colorTertiaryInverted: string;


        boxShadowUmbra: string;
        boxShadowUmbraColor: string;
        boxShadowUmbraInset: string;

        boxShadowPenumbra: string;
        boxShadowPenumbraColor: string;
        boxShadowPenumbraInset: string;

        boxShadowAntumbra: string;
        boxShadowAntumbraColor: string;
        boxShadowAntumbraInset: string;
    }

A color can be decomposed into it's constituents (`hue`, `saturation`, `lightness`, `alpha`) using the `decomposeColor` utility function.
