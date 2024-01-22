/**
 * class : 
 *      클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한
 *      변수와 메서드(함수)를 정의하는 일종의 틀이다. - 사전적정의
 * 
 *  코드팩토리식 해석 : 정보를 일반화해서 정리하는 방법이다!
 */

class IdolModel {
    name; // 프로퍼티 let const 적지말고
    year; // 이거도 속성 정의 안해도 ㄱㅊ음

    constructor(name,year){ // 생성자
        this.name = name;
        this.year = year;
    }

    // 클래스안에서의 함수 : 메서드
    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }

}

// *** 클래스로 생성한 인스턴스는 '오브젝트다' '객체다'

const yuj = new IdolModel('안유진',2003); // 인스턴스 제작
console.log(yuj)
console.log(yuj.name) // 객체처럼 사용 가능