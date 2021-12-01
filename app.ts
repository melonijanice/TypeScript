const person: {
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]//tuple type

} =
{
    name:'Janice',
    age:30,
    hobbies:['sports','cookies'],
    role:[2,'author']
}
console.log(person.name)