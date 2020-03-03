import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from './../../actions/expenses';
import expenses from './../fixtures/expenses';
import database from './../../firebase/firebase';

// describe("long asynchronous specs", function() {

//     var originalTimeout;

//     beforeEach(function() {
//         originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     });

//     it("takes a long time", function(done) {
//         setTimeout(function() {
//             done();
//         }, 20000);
//     });

//     afterEach(function() {
//         jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
//     });
// });

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'awts' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'awts'
        }
    })
});

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2]
        }
    })
});

// NOTE
// For some reason, test cases labelled as ASYNC does not work when connected to a company network
// This passes but when company network is used it seems like  asynchronous callback is being blocked
test('ASYNC: Should setup add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 300,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('ASYNC: Should setup add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
});
