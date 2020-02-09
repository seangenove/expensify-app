// const person = {
//     name: 'Sean',
//     age: 22,
//     location: {
//         city: 'Baguio',
//         temperature: 12
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`)

// const { city, temperature: temp }  = person.location
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);   
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } =  book.publisher

// console.log(publisherName); // Penguin, default of Self-Published

// const address = ['124 M. Roxas Street', 'Lower Brookside', 'Baguio', '2600'];
// const [ , , city, zip ] = address;
// console.log(`You are in  ${city} ${zip}` );

const item = ['Coffee (hot)', '$2.00', '$2.50', '$69.75'];
const [ itemName, , , itemPrice ] = item;

console.log(`A medium ${itemName} costs ${itemPrice}`);
