/**
 * super / override
 */

class IdolModel {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    };
    
    sayHello(){
        return `ㅎㅇ ${this.name}임`;
    }
};

class 아이돌메이커 extends IdolModel {
    part; // 자식에서 프로퍼티 생성

    // 부모가 가진 것 대신 
    // 내가 새롭게 덮어쓰고자 하면 다시 작성하면됨. override.
    constructor(name,year,part){
        super(name,year); // 부모의 생성자를 실행하는것과 같음. 
        this.part = part;
    };

    sayHello(){
        return `${super.sayHello()}. ${this.part}를 맡고있다`;
    };
}

const yuj = new 아이돌메이커('안유진',2002,'보컬');
console.log(yuj)
console.log(yuj.sayHello());

// super 클래스는 생성자 , 함수에서 활용 가능함
