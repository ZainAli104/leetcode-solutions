var compress = function(chars) {
    let s = "";
    let count = 0;
    let result = [];
    
    for (let i=0; i<chars.length; i++) {
        if (s===chars[i]) {
            count++
            chars.splice(i, 1)
            if (i+1==chars.length) {
                result.push(count);
            }
        } else {
            if (count!==0) {
                result.push(count);
            }
            count = 1;
            s = chars[i];
            result.push(s);
        }
    }

    console.log(result)
    return result.length;
};

let arr = ["a","a","b","b","c","c","c"];

console.log(compress(arr));
console.log(arr)