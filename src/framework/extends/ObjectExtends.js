Object.prototype.Symbols = {
    Meta: Symbol.for('meta')
}

// Object reflection
// Get all properties of object (From prototypes too)
Object.prototype.GetAllProperties = (obj) => {
    var allProps = [], curr = obj
    do {
        var props = Object.getOwnPropertyNames(curr)
        props.forEach((prop) => {
            if (allProps.indexOf(prop) === -1 && prop != 'undefined') allProps.push(prop)
        })
    } while(curr = Object.getPrototypeOf(curr))
    return allProps
}

// Object metadata
Object.prototype.SetMeta = (obj, meta) => {
    obj[Object.Symbols.Meta] = meta
}
Object.prototype.GetMeta = (obj) => {
    return obj[Object.Symbols.Meta]
}
Object.prototype.IsHasMeta = (obj) => {
    return obj[Object.Symbols.Meta] !== undefined
}