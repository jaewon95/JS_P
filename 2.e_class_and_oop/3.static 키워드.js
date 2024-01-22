/**
 * static 키워드 : 클래스에 직접 귀속됨. new 키워드 없이도 사용 가능함.
 */

// class IdolModel {
//     name;
//     year;
//     static groupName;

//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }

const yuj = new IdolModel('안유진',2003);
console.log(yuj);




class IdolModel {
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    /**
     * factory constructor
     */
    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }
}

const yuj2 = IdolModel.fromObject({
    name : '안유진',
    year : 2003
});

console.log(yuj2)