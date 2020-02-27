import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from './../selectors/expenses'
import getExpensesTotal from './../selectors/expenses-total'
import numeral from 'numeral';

numeral.locale('php');

export const ExpensesSummary = (props) => (
    <div>
        <h3>
            Expense Count: {props.visibleExpenseCount}
        </h3>

        <h3>
            Expense Total: {numeral(props.visibleExpenseSum / 100).format('$0,0.00')}
        </h3>
    </div>
)

const mapStateToProps = (state) => ({
    visibleExpenseCount: selectExpenses(state.expenses, state.filters).length,
    visibleExpenseSum: getExpensesTotal(selectExpenses(state.expenses, state.filters))

});

export default connect(mapStateToProps)(ExpensesSummary);

