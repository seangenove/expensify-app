const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Sean',
            age: 22
        });
        // reject('Something went wrong');
    }, 5000);
})

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 5000);
    });
}).then((data) => {
    console.log('does this run?', data);
}).catch((error) => {
    console.log(error)
});

console.log('after');