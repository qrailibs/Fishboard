import IType from './IType'

// Classes
class NumberType extends IType {
    [IType.$IsValue](value) { return typeof value == 'number' }
}
class BigNumberType extends IType {
    [IType.$IsValue](value) { return typeof value == 'bigint' }
}
class StringType extends IType {
    [IType.$IsValue](value) { return typeof value == 'string' }
}
class BooleanType extends IType {
    [IType.$IsValue](value) { return typeof value == 'boolean' }
}
class FunctionType extends IType {
    [IType.$IsValue](value) { return typeof value == 'function' }
}
class ObjectType extends IType {
    [IType.$IsValue](value) { return typeof value == 'object' }
}
class SymbolType extends IType {
    [IType.$IsValue](value) { return typeof value == 'symbol' }
}
class DOMElementType extends IType {
    [IType.$IsValue](value) { return value instanceof HTMLElement }
}



// Statics
export default class Types {
    // Instances...
    static get Number() { return new NumberType() }
    static get BigNumber() { return new BigNumberType() }
    static get String() { return new StringType() }
    static get Boolean() { return new BooleanType() }
    static get Function() { return new FunctionType() }
    static get Object() { return new ObjectType() }
    static get Symbol() { return new SymbolType() }
    static get DOMElement() { return new DOMElementType() }



    // Types...
    static get TypeNumber() { return NumberType }
    static get TypeBigNumber() { return BigNumberType }
    static get TypeString() { return StringType }
    static get TypeBoolean() { return BooleanType }
    static get TypeFunction() { return FunctionType }
    static get TypeObject() { return ObjectType }
    static get TypeSymbol() { return SymbolType }
    static get TypeDOMElement() { return DOMElementType }
}