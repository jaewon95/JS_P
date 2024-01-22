
/**
 * break -> 가장 가까운 for문 중지
 * continue -> 반복의 나머지 부분을 건너뛰고 다음 반복을 실행, 특정 조건 건너뛰기
 */

for( let i=0; i<= 10; i++ ) {
    console.log(i);
}

// for in -> key값 받기 가능 dict -> 객체 라고 부름 . 으로 접근함
const y = {
    name : '유진',
    year : 2003
}

for(let key in y){
    console.log(key)
}

// for of -> array 사용