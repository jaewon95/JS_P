/**
 * Property : 객체 안에 들어가는 값임
 * Attribute : 자동으로 생성되는 속성들
 *              프로퍼티의 메타데이터를 나타냄. 
 *              특정 프로퍼티에 대한 추가 정보를 제공하며, 
 *              프로퍼티의 동작 및 특성을 정의. 
 *              어트리뷰트에는 값, 쓰기 가능 여부, 열거 가능 여부, 
 *              설정 가능 여부 등이 포함됨.
 * 
 * 
 * Property 타입은 크게 2개임
 * 1 ) 데이터 프로퍼티 : key, value 형성된 실질적 값을 갖고 있는 프로퍼티
 *  ex. { name: '안유진', year: 2003 }
 * 
 * 2 ) 액세서 프로퍼티 : 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                      설정할때 호출되는 함수로 구성된 프로퍼티
 *                      getter / setter 
 * 
 */

const yuj = {
    name : '안유진',
    year : 2003,
};


// Object. <<<----- 시작이 대문자로 시작하면
//                     생성자 함수 or 클래스

console.log(Object.getOwnPropertyDescriptor(yuj, 'name')); // 클래스에 직접 있는 함수는 static

// -> { value: '안유진', writable: true, enumerable: true, configurable: true }

/**
 * 1) value : 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는 여부. false로 설정하면 프로퍼티 값 수정 x
 * 3) enumerable - 열거가 가능한지 여부. for in 을 사용가능하면 true 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단함.
 *                  false 일 경우 프로퍼티 삭제나 어트리뷰트 변경 금지.
 *                  writable이 true인 경우 값 변경과 writable을 변경하는건 가능
 */





// 해당 객체가 가지고 있는 모든 Attribute 속성값 나열해줌
console.log(Object.getOwnPropertyDescriptors(yuj));

/**
 * {
  name: {
    value: '안유진',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 2003, writable: true, enumerable: true, configurable: true }
}
 */



const yuj2 = {
    name :'안유진',
    year : 2003,

    get age(){ // getter
        return new Date().getFullYear() - this.year; // 현재
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

