import moment from 'moment';
import filterReducer from './../../reducers/filters';

test('Should setup deafult filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount')
});

test('Should set sortBy to date', () => {
    const action = { type: 'SORT_BY_DATE' }
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const state = filterReducer(currentState, action);

    expect(state.sortBy).toBe('date')
});

test('Should set text filter to provided value', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filterReducer(undefined, action);

    expect(state.text).toBe(text);
})

test('Should set startDate to provided value', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filterReducer(undefined, action);

    expect(state.startDate).toBe(startDate);
});

test('Should set startDate to provided value', () => {
    const endDate = moment().endOf('month').subtract(5, 'days'); 
    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filterReducer(undefined, action);

    expect(state.endDate).toBe(endDate);
});
