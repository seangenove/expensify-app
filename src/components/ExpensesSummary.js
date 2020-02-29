import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from './../selectors/expenses'
import getExpensesTotal from './../selectors/expenses-total'
import numeral from 'numeral';

// numeral.locale('php');

export const ExpensesSummary = ({ visibleExpenseCount, visibleExpenseSum }) => {
    const expenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(visibleExpenseSum / 100).format('$0,0.00');


    return (
        <div>
            <h3>
                Viewing {visibleExpenseCount} {expenseWord} totalling to {formattedExpenseTotal}
            </h3>
        </div>)
}

const mapStateToProps = (state) => {
    const visibleExpenseCount = selectExpenses(state.expenses, state.filters).length

    return {
        visibleExpenseCount: visibleExpenseCount,
        visibleExpenseSum: getExpensesTotal(selectExpenses(state.expenses, state.filters))
    }
};

export default connect(mapStateToProps)(ExpensesSummary);

