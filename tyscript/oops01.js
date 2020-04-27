var Person = /** @class */ (function () {
    function Person(name, age, is_male) {
        this.name = name;
        this.age = age;
        this.is_male = is_male;
    }
    Person.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.is_male);
    };
    return Person;
}());
function display_person(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.is_male);
}
var p = new Person('Sachin', 31, true);
p.display();
display_person(p);
