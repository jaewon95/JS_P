
// 함수

function cal(number){ // number : 함수에서 밖에서 입력 받는것 == 파라미터
    return number * 10
};

console.log(cal(3)); // 실제 입력한 값은 argument 라고 한다.



// arrow 함수
//const mul = (파라미터자리) => {
const mul = (x,y) => {    
    return x * y;
}

// 간략하게 ver.1 위와 같음
const mul1 = (x,y) => x * y;

// ver2 : 파라미터를 1개만 받는다. 괄호생략가능
const mul2 = x => x * 2;

// ver3
const mul3 = x => y => z => `x : ${x} y: ${y} z: ${z}`
console.log(mul3(3)(5) (7));

function mul33(x) {
    return function(y){
        return function(z){
            return `x : ${x} y: ${y} z: ${z}`
        }
    }
}


// arguments 나열하기
const mul4 = function(x,y,z){
    console.log(arguments); // [Arguments] { '0': 3, '1': 2, '2': 1 }
    return x * y * z;
}

// mul4(3,2,1);

const mul5 = (x,y,z) => {
    console.log(arguments); // 엄청 길다
    
    return x * y * z;
}

// mul5(3,2,1);


const mul6 = function(...a) { // 스프레드? 하여튼 무제한으로 파라미터 받기 가능
    console.log(arguments) // 객체로 쭉 나열해줌 순서로~
    return Object.values(arguments).reduce((a,b) => a*b ,1) 
};

// console.log(mul6(7,6,5,4));

// 이름없이도 함수 만들기 가능! 즉시실행함수, 정의와 동시에 실행
// immediately invoked function
(function (x,y) {
    console.log(x,y);
})(4,5)

// 비교하려는값 instanceof 우측값 : 왼쪽이 오른쪽 타입이여?
console.log(mul6 instanceof Object) // * JS에서 함수는 Object 타입이다.
// true 나옴
