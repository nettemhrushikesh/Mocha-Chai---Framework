
function replaceproperty(object , key , value){
    return{
        ...object,
        [key]:value
    };
}


const person = {
    name: "vikram",
    age: 21
}

const updatedperson = replaceproperty(person , "name" , "Ramana" );
// expect(updatedperson.name).to.eql("Ramana");
console.log(updatedperson)
