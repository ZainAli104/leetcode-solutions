var moveZeroes = function(nums) {
    let numsLength = nums.length
    
    let i = 0
    while (i<numsLength) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            numsLength--
            continue
        }
        i++
    }
};

let num = [0,1,0,3,12]

moveZeroes(num)

console.log(num)