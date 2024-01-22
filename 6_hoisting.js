/**
 * 호이스팅 : 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 * 
 * let , const 도 호이스팅이 된다
 * 단, 할당전에는 접근할 수 없다는것임. var는 호이스팅을 막지 못함. ㅇㅋ?
 */

console.log(name);
var name = '코팩';
console.log(name);

// 위 코드를 풀어 쓰자면 아래와같다
var name;
console.log(name);
name = '코팩';
console.log(name);