![Fishboard banner](https://github.com/Proxymal/Fishboard/blob/main/other/LOGO_BANNER.png)

# About
**Fishboard** is framework to make your JavaScript code more structured, object-oriented and easy-to-maintain. Framework has these features:
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



# Installation
You can install framework via node package manager:
```
npm i fishboard -d
```



# Features
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
    get price() { return Interface.Required }
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
Also you can generate random model objects:
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
In progress
