export default class Interface {
    // Symbols
    static get $Required() {
        return Symbol.for('interface_required')
    }

    constructor() {
        // Set metadata
        const meta = {
            className: new.target.name,
            interfaceName: Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor.name
        }
        Object.SetMeta(this, meta)

        // Check if instantiating interface
        if(Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor.name === 'Interface') {
            throw new Error(`Interfaces cannot be instantiated (class ${meta.className})`)
        }
        else {
            for(const prop of Object.GetAllProperties(this).values()) {
                if(this[prop] == Interface.$Required ) {
                    throw new Error(`Class '${meta.className}' not implemented all properties/methods of interface '${meta.interfaceName}'`)
                }
            }
        }
    }
}