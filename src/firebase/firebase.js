import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })

// setTimeout(() => {
//     database.ref('expenses').push({
//         description: 'Expense 4',
//         note: 'Note 4',
//         amount: 123,
//         createdAt: ''
//     });
// }, 5000)

// database.ref('expenses').push({
//     description: 'Expense 1',
//     note: 'Note 1',
//     amount: 123,
//     createdAt: '' 
// });

// database.ref('expenses').push({
//     description: 'Expense 2',
//     note: 'qweqwe',
//     amount: 900,
//     createdAt: '' 
// });

// database.ref('expenses').push({
//     description: 'Expense 3',
//     note: 'rwewe',
//     amount: 10000,
//     createdAt: '' 
// });

// database.ref('notes/-M1PWQHnf1id_vsS6BFL').remove();

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()

//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `);
// }, (e) => {
//     console.log('Error with data fetching.', e)
// });

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 5000); 

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
