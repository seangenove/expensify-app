import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAypFBR8ZNq9D9umI9jKfqXgWb3ak51Phg",
    authDomain: "expensify-77c71.firebaseapp.com",
    databaseURL: "https://expensify-77c71.firebaseio.com",
    projectId: "expensify-77c71",
    storageBucket: "expensify-77c71.appspot.com",
    messagingSenderId: "500233728350",
    appId: "1:500233728350:web:0f11d0554314ce1db91fcf",
    measurementId: "G-MVS53N6TLV"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val()
    
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `);
}, (e) => {
    console.log('Error with data fetching.', e)
});

setTimeout(() => {
    database.ref('job/company').set('Nokia');
}, 5000); 

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// database.ref().set({
//     name: 'Sean Genove',
//     age: 26,
//     stressLevel: 6, 
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Baguio City',
//         country: 'Philippines'
//     }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((error) => {
//     console.log('This failed.');
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log("Success!");
// }).catch((error) => {
//     console.log("Failed", error);
// })
