class Person{
  constructor(public name:string, public age:number, public is_male:boolean){

  }
  display(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.is_male);
  }
}

function display_person(person:Person){
  console.log(person.name);
  console.log(person.age);
  console.log(person.is_male);
}
var p:Person = new Person('Sachin', 31, true);
p.display();
display_person(p);
