// const bubble = (arr) => {
//     for(let i = 0; i < arr.length - 1; i++) {
//         let swap = false
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//                 swap = true
//             }
//         }
//         if(!swap)break
//     }
//     return arr
// }

// const insert = (arr) => {
//     for(let i = 1; i < arr.length; i++) {
//         let num = arr[i]
//         let j = i - 1
//         while(j >= 0 && arr[j] > num) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = num
//     }
//     return arr
// }


// const select = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         let min = i
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         [arr[i] , arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }

// const merge = (arr) => {
//     if(arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// const mergeSort = (left, right) => {
//     let sorted = []
//     while(left.length && right.length) {
//         if(left[0] > right[0]) {
//             sorted.push(right.shift())
//         } else {
//             sorted.push(left.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }


const quick = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        }
        if(arr[i] > pivot) {
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}


let arr = [3,7,1,5,4,2]
console.log(quick(arr))
