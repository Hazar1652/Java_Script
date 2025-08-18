Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.ownFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;

}

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.ownFilter(num => num % 2 === 0);

console.log(evenNumbers);

let arr = [10, 20, 30];

arr.myForEach((element, index, array) => {
    console.log(`Елемент: ${element}, індекс: ${index}, масив: ${array}`);
});