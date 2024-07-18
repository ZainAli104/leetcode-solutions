var isSubsequence = function(s, t) {
    const sLen = s.length
    const tLen = t.length
    let counter = 0

    for (let i=0; i<tLen; i++) {
        if (t[i] === s[counter]) {
            counter++
        }
    }

    return counter===sLen
};

let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s, t))