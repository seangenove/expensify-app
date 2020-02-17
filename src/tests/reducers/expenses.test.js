import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should remove expense from provided id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses
    ]);
});

test('Should add expense from provided id', () => {
    const expense = {
        id: '4',
        description: 'Balloons',
        note: '',
        amount: 195,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        expense
    ]);
});

test('Should edit expense from provided id', () => {
    const amount = 6969;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[0].amount).toBe(amount);
});

test('Should not edit expense if expense not found', () => {
    const amount = 5555;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});