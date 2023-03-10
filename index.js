
function runningSum(nums) {
    // console.log("Running")
    let outputArr = []
    let currentSum = 0
    for (let i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i]
        outputArr = [...outputArr, currentSum]
    }
    return outputArr
}




// console.log('runningSum -', runningSum([1, 2, 3, 4]))
console.log('runningSum -', runningSum([1, 1, 1, 1, 1]))