const symbols = {
    meta: Symbol.for('meta')
}

// Get all properties of object (From prototypes too)
Object.prototype.getAllProperties = (obj) => {
    var allProps = [], curr = obj
    do {
        var props = Object.getOwnPropertyNames(curr)
        props.forEach(function(prop){
            if (allProps.indexOf(prop) === -1)
                allProps.push(prop)
        })
    } while(curr = Object.getPrototypeOf(curr))
    return allProps
}
Object.prototype.setMeta = (obj, meta) => {
    obj[symbols.meta] = meta
}
Object.prototype.getMeta = (obj) => {
    return obj[symbols.meta]
}