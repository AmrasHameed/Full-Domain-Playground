// function linear(arr,value) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i]===value) {
//             return i
//         }
//     }
//     return -1
// }


let arr = [1,3,8,10,16,21,25]
t = 1
console.log(binary(arr,t))


function binary(arr,t) {
    let left = 0
    let right = arr.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] === t) {
            return mid
        } else if(arr[mid] < t) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

