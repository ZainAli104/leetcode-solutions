var addTwoNumbers = function(l1, l2) {
    const l1Int = l1.reverse().join("")
    const l2Int = l2.reverse().join("")
    
    let sum = +l1Int + +l2Int
    sum = sum.toString()
    
    return sum.split("").reverse()
};

const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

// const l1 = [2,4,3], l2 = [5,6,4]

console.log(addTwoNumbers(l1, l2))