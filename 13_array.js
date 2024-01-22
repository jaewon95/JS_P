/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);
// push - 맨 마지막에 요소 추가
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);
console.log('=====')
// pop - 맨 끝 요소 삭제
console.log(iveMembers.pop('코드팩토리'));
console.log(iveMembers);
// shift() - 맨 앞 요소 삭제
// unshift() - 맨 앞으로 요소 추가
// .splice('1','1') ex 인덱스 1에서부터 1개의 요소를 제거


// 위에는 어지간해서는 걍 쓰지마라.. 왜? 기본값은 건들지마라는거임
// 알고는 있어야한다 ㅇㅋ? ㅇㅋ.
// -----------------------------------------------------------------------------------

// 메모리 주소가 다르다. 기존의 배열은 건들지 않는다
// concat() : 마지막 요소 추가해서 새로운 배열로 반환함
console.log(iveMembers.concat('코드팩토리'))

// slice() : splice의 다른 버전. 
// array.slice(start, end);
// start: 추출을 시작할 인덱스
// end: 추출을 종료할 인덱스 (해당 인덱스는 포함되지 않음)

// spread operator : 완전 새로운 배열 생성. 아예 새로운 메모리 공간
let iveMembers2 = [
    ...iveMembers,
]

console.log(iveMembers2)



console.log('-------')
// 압도적으로 많이 사용 .join() : string 반환
// console.log(typeof iveMembers.join());
console.log(iveMembers.join()); // , 으로 나옴
console.log(iveMembers.join('/'));

// 정렬 sort() : 오름차순
// 정렬 reverse() : 내림차순

// map() : array 모든 값 순회함. 기존 배열 ㄴㄴ 새로운 배열 반환함
// filter() : 모든 값 순회. true에 해당만 반환 false면 반환 없음. 얘도 새로운 배열로 반환함
// find() : 모든값 순회 . true에 해당하는 '첫번째 값'만 반환함
// findIndex() : 모든값 순회 . true에 해당하는 '첫번째 값'의 자릿수를 알려줌

// reduce() :  ***** 좀 어려움ㅇㅇ.. 나중에 봐
// reduce( 함수 ,시작값)
