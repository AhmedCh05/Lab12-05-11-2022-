let MyArray=[]
function fibonacciSeries(i,j){
    let Var=document.getElementById("Var").value
    Var=parseInt(Var)

    if(Var<1) {
        MyArray="Invalid Number"
        document.getElementById("result").innerHTML=MyArray
        return Var
    }

    if(Var===1){
        MyArray=[0,1]
        document.getElementById("result").innerHTML=MyArray
        return Var
    }

    if(MyArray[j]>Var){
        console.log("j>Var",MyArray[j],j,Var,MyArray)
        MyArray.splice(j,1)
        console.log(MyArray)
        return Var
    }
    if(i===0&&j===0){
        MyArray.push(0)
        MyArray.push(1)
        console.log("1st iter: ",MyArray)
        fibonacciSeries(0,1)
        return Var
    }
    MyArray.push(MyArray[i]+MyArray[j])
    i++
    j++
    fibonacciSeries(i,j)
    document.getElementById("result").innerHTML=MyArray
}
