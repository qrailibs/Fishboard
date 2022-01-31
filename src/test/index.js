import { IType, Types } from '../framework/fishboard'

// (password length should be min: 6, max: 12)
class PasswordType extends Types.TypeString {
    [IType.$IsValue](value) {
        return super[IType.$IsValue](value) && value.length >= 6 && value.length <= 12
    }
}

const password = new PasswordType()
console.log(password.IsValue('abc')) // false
console.log(password.IsValue('123abcdf')) // true