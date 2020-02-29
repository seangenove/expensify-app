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

database.ref().set({
    name: 'Sean Genove',
    age: 26,
    isSingle: false,
    location: {
        city: 'Baguio City',
        country: 'Philippines'
    }
});

database.ref('age').set(27);
database.ref('location/city').set('asdasd');

database.ref('attributes').set({
    height: 123,
    weight: 123
});



