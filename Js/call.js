// In JavaScript, call is a method that allows you to 
// call a function with a specified this value and arguments 
//provided individually. It is primarily used to invoke functions 
// in a specific context.
// we can also pass external arguments with coma seperated values

let person1 = {
    name: "harsh",
    age: 24,
    showdeatils: function(){
        console.log(this.name + " is " + this.age + " year's old");
    }
}
// person1.showdeatils();
let person2 = {
    name: "Kumar",
    age: 25
}

// person1.showdeatils.call(person2);



let person3 = {
    name: "harsh",
    age: 24,

}
let person4 = {
    name: "Kumar",
    age: 25
}
let  showdeatils2 = function(city,car){
    console.log(`${this.name} is ${this.age} year's old and lives in ${city} and drives the ${car}`);
}
showdeatils2.call(person4, "lucknow", "BMW");

