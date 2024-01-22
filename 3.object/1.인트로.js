/**
 * 
 * 객체 선언할때 사용 할 수 있는 방법
 * 1. object 생성해서 객체 생성 - 기본기 {}
 * 2. class를 인스턴스화 해서 생성 - class , OOP
 * 3. function 사용해서 객체생성 (근본방법)
 */


// 1.
const yuj = {
    name : '안유진',
    year : 2003,
}

console.log(yuj);

// 2
class 아이돌 {
    // name; 생략가능 코딩스타일 알아서 해라. 생략가능함
    // year; 
    
    constructor(name , year){
        this.name = name; 
        this.year = year;

        // this.name 프로퍼티 말하는거 알지?
    }
}

const yuj2 = new 아이돌('안유진', 2002);
console.log( typeof yuj2); // object
console.log(yuj2.name)
console.log(yuj2.year);


// 3 : 생성자함수 -> 이렇게 객체 생성 가능함 *** 
function IdolModel(name, year) {
    name; // 오오오 신기함.
    // year;

    this.name = name;
    this.year = year;
}

const 가을 = new IdolModel('가을',2003);
console.log(가을);
console.log(가을.name)