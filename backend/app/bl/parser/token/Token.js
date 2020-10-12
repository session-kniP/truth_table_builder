class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }

    getType() {
        return Object.assign({}, this.value);
    }

    getValue() {
        return Object.assign({}, this.value);
    }

    replaceValue(newValue) {
        this.value = newValue;
    }
}

module.exports = Token;
