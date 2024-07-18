var compress = function(chars) {
    let s = "";
    let count = 0;
    let result = [];
    const charsLength = chars.length;
    
    for (let i=0; i<charsLength; i++) {
        if (s===chars[i]) {
            count++
            if (i+1==charsLength) {
                const res = count.toString().split('')
                result.push(...res)
                chars.push(...res)
            }
        } else {
            if (count!==0 && count!==1) {
                const res = count.toString().split('')
                result.push(...res)
                chars.push(...res)
            }
            count = 1;
            s = chars[i];
            result.push(s)
            chars.push(s)
        }
    }
    
    chars.splice(0, charsLength)
    console.log(result)
    return result.length;
};

let arr = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

console.log(compress(arr));
console.log(arr)