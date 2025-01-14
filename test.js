const person3 = {
    name: '철수',
    greet: () => console.log('안녕하세요. 반갑습니다.'),
    great4(){
        console.log('다른인사')
    }
};

//2번
const person = {
    name: '철수',
    greet: () => console.log('안녕하세요. 반갑습니다.');
    
};

person.greet(); // 안녕하세요. 반갑습니다.

//1번
const person2 = {
    name: '철수',
    greet: function () {
        console.log('안녕하세요. 반갑습니다.');
    },
};

person2.greet(); // 안녕하세요. 반갑습니다.