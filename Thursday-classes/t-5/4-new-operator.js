// it is mostly used with constrcutor functions

//constructor
//1,capital letter name [string, number, array, object]
//2.should be excuted by 'new' operator

function User(name){
    this.name = name;
    this.isipad = false
}

const aj = new User('ani');
console.log(aj);

//new ka jaadu
//1. this = {}
//2. operations
//3.return this;


