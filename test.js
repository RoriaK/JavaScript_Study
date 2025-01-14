function add(n1,n2){ //선언식1
    return n1 + n2;
}

let sub = function (n3,n4){ //이름이 적혀지지 않는 함수 // = 람다 //선언식2
    return n3-n4
}

//console.log(sub(3,4))

//let sub2 = (n5,n6) => {return n5 - n6}
let sub2 = (n5,n6) => n5 - n6 //return도 쓰지 말고, 중 괄호도 쓰지 말자
console.log(sub2(5,8))

let sub3 = n3 => n3+1 //인자가 하나라면 괄호 없애고, 인자를 하나만 넣을 수 있음
console.log(sub3(1))

let sub4 = p1 => p1**2
console.log(sub4(5))