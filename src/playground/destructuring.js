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

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } =  book.publisher

console.log(publisherName); // Penguin, default of Self-Published
