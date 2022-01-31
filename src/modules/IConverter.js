import Interface from "./Interface";

export default class IConverter extends Interface {
    // Symbols
    static get $Input() {
        return Symbol.for('iconverter_input')
    }
    static get $Output() {
        return Symbol.for('iconverter_output')
    }
    static get $Convert() {
        return Symbol.for('iconverter_convert')
    }

    // Required, Private
    [IType.$IsValue](value) { return Interface.$Required }

    // Public
    IsValue(value) { return this[IType.$IsValue] }
}