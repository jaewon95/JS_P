/**
 * getter setter
 */

class IdolModel {
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    };

    // getter 
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    get nameAndYear(){
        return `${this.name} - ${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}

const yuj = new IdolModel('안유진',2003);
console.log(yuj);
console.log(yuj.nameAndYear)

class IdolModel2 {
    #name; // private 선언  #은 es7 문법임 
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    };

    get getName(){
        return this.#name;
    }
}

const yuj2 = new IdolModel2('안유진', 2003);
console.log(yuj2);

console.log(yuj2.getName)




