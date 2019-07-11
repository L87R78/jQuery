class Repository {

   constructor(props) {
       this.props = props;
       this.data = new Map();
       this.id = 0;
   }
   get count(){
       return this.id;

   }

    add(entity){
        for (let key in this.props){
            console.log(key);

            if(!entity.hasOwnProperty(key)){
                throw new Error (`Property ${key} is missing from the entity!`);
            }
            if(this.props[key] !== typeof entity[key]){
                throw new TypeError(`Property ${key} is of incorrect type!`)
            }
        }


        this.data.set(this.id, entity);

        return this.id++;
    }
    get(id){
       if(!this.data.has(id)) {
           throw new Error("Entity with id: {id} does not exist!");
       }
       return this.data.get(id)

    }
    update(id, newEntity){
       if(!this.data.hasOwnProperty(id)){
           throw new Error (`Entity with id: ${id} does not exist!". `)
       }
        return this.data.set(id, newEntity);
    }
    del(id){
       if(id < 0){
           throw new Error (`Entity with id: ${id} does not exist!`)
       }
        this.id--;
       return this.data.delete(id);
    }
}
// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
//console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
 entity = {
     name: 'Valio',
     age: 19,
     birthday: new Date(1998, 0, 7)
 };
 repository.update(1, entity);
 //console.log(repository.get(1));
 // {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// // Delete an entity
 repository.del(0);
 console.log(repository.count); // Returns 1
 // let anotherEntity = {
 //     name: 'Nakov',
 //     age: 26,
 //     birthday: new Date(1991, 0, 21)
 // };
 // repository.add(anotherEntity); // should throw an Error
 // anotherEntity = {
 //     name: 'Nakov',
 //     age: 26,
 //     birthday: 1991
 // };
 // //repository.add(anotherEntity); // should throw a TypeError
 // repository.del(-1); // should throw Error for invalid id
