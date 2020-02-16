const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should generate greeting with provided name', () => {
    const result = generateGreeting('Sean');
    expect(result).toBe('Hello Sean');
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
});
