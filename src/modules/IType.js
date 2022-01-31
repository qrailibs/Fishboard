import Interface from "./Interface";

export default class IType extends Interface {
    // Symbols
    static get $IsValue() {
        return Symbol.for('itype_isvalue')
    }

    // Required, Private
    [IType.$IsValue](value) { return Interface.$Required }

    // Public
    IsValue(value) { return this[IType.$IsValue](value) }
    static IsType(value) { return value instanceof IType }
}