// Finding characters
String.prototype.GetBefore = function(str) {
    return this.substring(0, this.indexOf(str))
}
String.prototype.GetAfter = function(str) {
    return this.substring(this.indexOf(str) + 1)
}
String.prototype.GetBetween = function(firstStr, secondStr) {
    return this.substring(
        this.indexOf(firstStr) + 1,
        this.lastIndexOf(secondStr)
    )
}