import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from './../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
                console.log(e.target.value);
            }}
        />
        <select
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                }
                console.log(e.target.value)
            }}
        >
            <option value="date" selected={props.filters.sortBy === 'date' ? "selected" : null}>
                Date
            </option>
            <option value="amount" selected={props.filters.sortBy === 'amount' ? "selected" : null}>
                Amount
            </option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);