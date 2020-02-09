import { createStore, combineReducers } from 'redux'

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            default:
                return state;
        }

};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asdasdasd',
        description: 'January Rent',
        note: 'THis is the final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
