function stripProperty(obj, prop) {
    delete obj.prop
    delete obj[prop]
    return obj;
}