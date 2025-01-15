let arr = [1,2,3]

let s = arr.reduce(function(acc,num){
    acc.push(num*2)
    return acc
},[]) //1.초기값은 없어도 됨 2. function(acc,num) -> call back

console.log(s)

