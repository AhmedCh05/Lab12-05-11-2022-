
let arr = [1, -1, 0, -3, 5]
function sumofPositive() {
    var sum = 0
    var len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }

    document.getElementById("result").innerHTML = sum
}