//새 배열 안에 사람 이름만 깔끔하게 모아보자!
let info = 
    [
        {
            "name": "김철수",
            "age": 30,
            "city": "서울"
        },
        {
            "name": "박영희",
            "age": 25,
            "city": "부산"
        },
        {
            "name": "이민수",
            "age": 35,
            "city": "대구"
        },
        {
            "name": "최은영",
            "age": 28,
            "city": "인천"
        }
    ]


//배열 이름 하나를 파둔다. (저장할 공간 마련)
let names = [];
for(let i of info){
    names.push(i.name)
}

console.log(names)

// let names = info[0].map(person => person.name);

// console.log(names);