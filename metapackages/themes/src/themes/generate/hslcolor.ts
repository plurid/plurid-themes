import {
    HSLColorClass,
    HSLColorValues,
} from '../../interfaces';



class HSLColor implements HSLColorClass {
    private _saturation: number;
    private _hue: number;
    private _lightness: number;
    private _alpha: number | undefined;

    constructor(colors: HSLColorValues) {
        this._saturation = colors.saturation;
        this._hue = colors.hue;
        this._lightness = colors.lightness;
        this._alpha = colors.alpha;
    }

    public saturation() {
        return this._saturation;
    }

    public hue() {
        return this._hue;
    }

    public lightness() {
        return this._lightness;
    }

    public display() {
        if (this._alpha) {
            return `hsla(${this._saturation}, ${this._hue}%, ${this._lightness}%, ${this._alpha})`;
        }

        return `hsl(${this._saturation}, ${this._hue}%, ${this._lightness}%)`;
    }
}


export default HSLColor;
