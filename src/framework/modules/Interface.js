export default class Interface {
    constructor() {
        Object.setMeta(this, {
            className: new.target.name,
            interfaceName: Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor.name
        })
        console.log(this)

        // Check if instantiating interface
        if(Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor.name === 'Interface') {
            throw new Error('Interfaces cannot be instantiated')
        }
        else {
            for(const prop of Object.getAllProperties(this).values()) {
                //console.log(prop)
                if(this[prop] == Interface.Required ) {
                    throw new Error('Interfaces cannot be instantiated')
                }
            }
        }
    }

    static get Required() {
        return Symbol.for('required')
    }
}