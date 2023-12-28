function CustomArray(...args) {
    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
}

CustomArray.prototype.push = function(value) {
    this[this.size()] = value;
};

CustomArray.prototype.pop = function() {
    if (this.size() > 0) {
        delete this[this.size() - 1];
    }
};

CustomArray.prototype.top = function() {
    if (this.size() > 0) {
        return this[this.size() - 1];
    }
    return undefined;
};

CustomArray.prototype.print = function() {
    let list = [];
    for (let i = 0; i < this.size(); i++) {
        list.push(this[i]);
    }
    console.log(list);
};

CustomArray.prototype.printReverse = function() {
    let res = "";
    for (let i = this.size() - 1; i >= 0; i--) {
        res += this[i] + " ";
    }
    console.log(res);
};


CustomArray.prototype.size = function() {
    let count = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key) && !isNaN(key)) {
            count++;
        }
    }
    return count;
};

const myStacku = new CustomArray(1, 2, 3);

myStacku.push(4);
myStacku.print();

myStacku.pop();
myStacku.print();

console.log(myStacku.top());

myStacku.printReverse();

console.log(myStacku.size());



