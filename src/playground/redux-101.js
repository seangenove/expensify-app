import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count 
})

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions (output are bsed piurely on input to function)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount({ incrementBy: 5 })); // 5
store.dispatch(incrementCount()); // 6

store.dispatch(resetCount()); // 0

store.dispatch(decrementCount({ decrementBy: 10 })); // -10
store.dispatch(decrementCount()) // -11

store.dispatch(setCount({ count: 555 })) // 106
