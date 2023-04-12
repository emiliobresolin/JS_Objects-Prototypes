const pessoas = [
    {id: 3, nome: 'Emilio'},
    {id: 2, nome: 'Helena'},
    {id: 1, nome: 'Letica'}
];
const novasPessoas = {};

for (const pessoa of pessoas)
{
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}
console.log(novasPessoas);
console.log('/=========================/');
const people = [
    {id: 3, nome: 'Emilio'},
    {id: 2, nome: 'Helena'},
    {id: 1, nome: 'Letica'}
];
const newPeople = new Map();

for (const person of people)
{
    const {id} = person;
    newPeople.set(id, {...person});
}
console.log(newPeople);
console.log(newPeople.get(2));

for (const [identifier, {id, nome}] of newPeople)
{
    console.log(identifier, id, nome);
}
console.log('=========================');
for (const people of newPeople.keys())
{
    console.log(people);
}
console.log('=========================');
for (const people of newPeople.values())
{
    console.log(people);
}