// Functions with history
Function.prototype.RunWithHistory = function(...args) {
    // Create history if not has
    if(!Object.IsHasMeta(this))
        Object.SetMeta(this, { history: [] })

    // Receive current meta
    const meta = Object.GetMeta(this)

    // Run function
    const now = new Date()
    const result = this(...args)

    // Add new value to history
    meta.history.push({
        time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`,
        arguments: args,
        result: result
    })

    // Return function result
    return result
}
Function.prototype.GetHistory = function() {
    // Receive meta and return history array
    return Object.GetMeta(this)?.history
}

// Functions with state
class State {
    static get $Data() {
        return Symbol.for('state_data')
    }

    constructor() {
        this[State.$Data] = {}
    }

    SetValue(name, value) {
        this[State.$Data][name] = value
    }
    GetValue(name) {
        return this[State.$Data][name]
    }
    GetValues() {
        return this[State.$Data]
    }
}
Function.prototype.RunWithState = function() {
    // Create state if not has
    if(!Object.IsHasMeta(this))
        Object.SetMeta(this, { state: new State() })

    // Receive current meta
    const meta = Object.GetMeta(this)

    // Run function, state can be changed
    const result = this.call(meta, ...args)

    // Update meta with state
    Object.SetMeta(this, meta)

    // Return function result
    return result
}
Function.prototype.GetState = function() {
    return Object.GetMeta(this)?.state
}

// Functions