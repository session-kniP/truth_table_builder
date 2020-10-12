class TrurhTable {
    constructor(header, body) {
        this.header = header;
        console.log(header);

        this.header[this.header.length - 1] = 'F';
        this.body = body || [];
    }

    setHeader(header) {
        this.header = header;
    }

    addRow(row) {
        this.body.push(row);
    }

    setBody(body) {
        this.body = body;
    }

    toString() {
        let result = '';
        result += this.header.map((el) => `| ${el}`.padEnd(28 - el.length)).join('');
        result += '\n';
        this.body.forEach((row) => {
            result += row.map((el) => `| ${el.toString()}`.padEnd(28 - el.toString().length)).join('');
            result += '\n';
        });

        return result;
    }
}

module.exports = TrurhTable;
