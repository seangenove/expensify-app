import moment from 'moment';
import getExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const sumResult = getExpensesTotal([]);

    expect(sumResult).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const sumResult = getExpensesTotal([expenses[0]]);

    expect(sumResult).toBe(195);
});

test('Should correctly add up a multiple expenses', () => {
    const sumResult = getExpensesTotal(expenses);

    expect(sumResult).toBe(114195);
});
