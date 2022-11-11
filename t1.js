
function checkNum(Num) {
    Num = document.getElementById("num").value
    var res;
    N = parseInt(Num)
    if (N == 0) res = "Zero"
    else if (N > 0) res = "Positive"
    else if (N < 0) res = "Negative"
    document.getElementById("result").innerHTML = res
}