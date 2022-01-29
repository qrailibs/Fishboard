![Fishboard banner](https://github.com/Proxymal/Fishboard/blob/main/other/LOGO_BANNER.png)

# About
**Fishboard** is framework to make your JavaScript code more structured, object-oriented and easy-to-maintain. 

### Core features
- [Interface](#interface)
- [Module](#module)
- [ModuleTests](#moduletests)
- [Model](#model)
- [Controller](#controller)
- [Extender](#extender)
- [IType](#itype)
- [Types](#types)
- [IValidator](#ivalidator)
- [Validators](#validators)
- [IConverter](#iconverter)

### Additional features
- [Object features](#object-features)
- [Array features](#array-features)
- [String features](#string-features)
- [Functions with history](#functions-with-history)
- [Functions with state](#functions-with-state)



# Installation
You can install framework via node package manager:
```
npm i fishboard -d
```
**NOTICE**: framework is uses alot of modern JavaScript, you should use *Webpack + Babel* when you use **Fishboard** in your project.



# Core features
**Fishboard** has a bunch of features that it's implements in the JavaScript.

### Interface
Every object-oriented programming language has *Interfaces* feature, *Interface* is abstract class with properties and methods,
instances of *Interface* cannot be created, but classes can inherit Interfaces and implement logic of it's properties and methods.
**Fishboard** allows you to create interfaces:
```js
import { Interface } from 'fishboard'

// Interface
class ICar extends Interface {
    // 'price' property should be implemented in classes of ICar
    get price() { return Interface.$Required }
}

// Class that implements interface
class Audi extends ICar {
    get price() { return 1_000_000 }
}
class BMW extends ICar {} // Error -> property 'price' not implemented
```

### Module
**Modules** - is independent collection of functions that can be auto-tested. 
Example of creating module:
```js
import { Module } from 'fishboard'

const math = new Module({
  plus: (a, b) => a + b,
  minus: (a, b) => a - b
})

console.log(math.plus(10, 10)) // 20
console.log(math.minus(20, 10)) // 10
```

### ModuleTests
*Modules* is also can be tested with **ModuleTests**. 
Example of creating tests for module:
```js
import { Module, ModuleTests } from 'fishboard'

const math = new Module({
  plus: (a, b) => a + b,
  minus: (a, b) => a - b
})
const mathTests = new ModuleTests({
  plus: (test, run) => {
    test.IsEquals(run(1, 1), 2) // 1 + 1 = 2?
  },
  minus: (test, run) => {
    test.IsEquals(run(2, 1), 1) // 2 - 1 = 1?
  }
})

const testResults = mathTests.Test()
console.log(testResults.IsSuccess) // true
```

### Model
**Models** - is things that describes some object structure. *Models* also allows to validate if object has described structure.
Example of creating model and validating:
```js
import { Model, Types } from 'fishboard'

const UserModel = new Model({
    id: Types.Number,
    nickname: Types.String,
    biography: Types.String
})

const userJohn = {
    id: 1,
    nickname: 'john_2008',
    biography: 'typical gamer'
}
const userMike = {
    id: 2,
    nickname: 'mikegamer100',
    biography: 1
}
console.log(UserModel.IsValid(userJohn)) // true
console.log(UserModel.IsValid(userMike)) // false (biography was not string)
```
Also you can generate random model instances(objects):
```js
import { Model, Types } from 'fishboard'

const UserModel = new Model({
    id: Types.Number,
    nickname: Types.String,
    biography: Types.String
})

const randomUser = UserModel.RandomInstance()
console.log(randomUser) // { id: 31874, nickname: 'qL9Nx*^ajD(', biography: 'KD1_d$jd(ac0+' }
```

### Controller
In progress

### Extender
In progress

### IType
In progress

### Types
In progress

### IValidator
In progress

### Validators
In progress

### IConverter
**IConverter** - is *interface* that allows you to implement types converters.

When you implement *IConverter* you should implement:
- property `[IConverter.Input` (Should return instance of IType)
- property `[IConverter.Output]` (Should return instance of IType)
- method `[IConverter.Convert] (input)` (Should return value of type `output`)

Example of creating DOM node to string converter:
```js
import { IConverter, Types } from 'fishboard'

class DomToStringConverter extends IConverter {
    get [IConverter.$Input]() {
        return Types.DOMElement
    }
    get [IConverter.$Output]() {
        return Types.String
    }
    [IConverter.$Convert] (input) {
        return input.innerText
    }
}

const someDomNode = document.getElementById('someNode') // Some node in HTML that have text 'Hello world'
console.log(new DomToStringConverter().convert(someDomNode)) // Hello world
```



# Additional features
**Fishboard** also offers additional features as extensions of existing JavaScript things. All of the additional features
will be added to JavaScript when you will import something from `fishboard` or just write:
```js
import 'fishboard'
```

### Object reflection
`Object.GetAllProperties` - returns all of the object properties, including ones from prototypes.
```js
class A { get x() { return 1 } }
class B extends A {}
class C extends B {}

console.log(Object.getAllProperties(new C())) // [ 'x' ]
```

### Object metadata
**Fishboard** also allows you to use hidden property **meta** in object, that can be used to store any metadata of object.
Available methods is:
- `Object.GetMeta()`
- `Object.SetMeta(value)`
- `Object.IsHasMeta()`
```js
let myObject = {}
let myMeta = { x: 100 }

console.log(Object.IsHasMeta(myObject)) // false
Object.SetMeta(myObject, myMeta)
console.log(Object.GetMeta(myObject)) // { x: 100 }
```

### Array features
In progress

### String features
In progress

### Functions with history
You can easily store history of function results by running function with `.RunWithHistory(...args)`. Example: 
```js
function plus(a, b) {
    return a + b
}

console.log(plus.RunWithHistory(1, 1)) // 2
console.log(plus.RunWithHistory(2, 2)) // 4

console.log(plus.GetHistory())
// [
//      { time: '12:00:00.00', arguments: [1, 1], result: 2 }
//      { time: '12:00:00.01', arguments: [2, 2], result: 4 }
// ]
```

### Functions with state
You can also call function and store state by running function with `.RunWithState(...args)`. Example: 
```js
function someFunc() {
    // If defined 'i' in state, do a++ (Or set 0 to 'i')
    this.state.SetValue('i', this.state.GetValue('i') + 1 || 0)
}

someFunc.RunWithState() // i is 0
someFunc.RunWithState() // i is 1
someFunc.RunWithState() // i is 2

console.log(someFunc.GetState().GetValues()) // { i: 2 }
```
When you run function with state, it has access to `this.state` variable, which is instance of `State` class.
`State` class has these properties and methods:
- `.SetValue(name, value)` (Sets value in state)
- `.GetValue(name)` (Gets value in state)
- `.GetValues()` (Returns all values in state as object
