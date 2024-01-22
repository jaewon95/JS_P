/**
 *  매우 매우 가장 중요하다
 *  Object 객체
 */

/*
 *  1) const 로 선언한 경우 객체 자체를 변경 할 수는 없다.
 *  2) 대신 객체 안의 프로퍼티나 메서드는 변경이 가능하다.
 */


// key : value
let yuj = {
    name : '안유진',
    group : '아이브',
    // object 안에 함수를 적으면 methods 라고 부름
    dance : function(){
        return `${this.name}이 춤을 춤`;
    }
}

console.log(yuj);
console.log(yuj.name);
console.log(yuj.dance());

const namek1 = 'name';
const nameV1 = '안유진';

const grkey = 'group';
const grValue = '아이브';

const yj2 = {
    [namek1] : nameV1 , // 변수를 key 값으로 쓰고싶으면 [] 안에 적어라
    [grkey] : grValue
};

console.log(yj2)

yj2.group = '코드팩토리'; // yj2['group'] = '코드팩토리';
console.log(yj2)

// 없는 key 를 객체에 추가하면 새로 생성된다.

// 삭제하는 방법 -> delete 객체[key값]

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(yj2)) // : array로 반환
console.log(Object.values(yj2)) // : array로 반환


