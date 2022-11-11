
document.getElementById("count").innerHTML = 0
function counter() {
    let num = document.getElementById("count").innerHTML
    num = parseInt(num)
    num++
    console.log(num)
    document.getElementById("count").innerHTML = num
}
function reset() {
    document.getElementById("count").innerHTML = 0
    console.log(document.getElementById("count").innerHTML)
}