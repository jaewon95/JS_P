/**
 * 상속 : 객체들 간의 관계를 구축하는 방법이다.
 *      수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과
 *      동작을 상속받을 수 있다.
 */

class IdolModel {
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    };
}

class 여자아이돌 extends IdolModel {
    dance(){
        return `여자 아이돌 ${this.name}이 춤을 춥니다.`;
    }
}

class 남자아이돌 extends IdolModel {
    sing(){
        return `남자 아이돌이 노래를 부릅니다.`
    }
};

const yuj = new 여자아이돌('안유진', 2003);
console.log(yuj.dance());


