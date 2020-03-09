import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from './../selectors/expenses'
import getExpensesTotal from './../selectors/expenses-total'
import numeral from 'numeral';

// numeral.locale('php');

export const ExpensesSummary = ({ visibleExpenseCount, visibleExpenseSum }) => {
    const expenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(visibleExpenseSum / 100).format('$0,0.00');


    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{visibleExpenseCount}</span> {expenseWord} totalling to <span>{formattedExpenseTotal}</span>
                </h1>
                <div>
                    <Link className="button" to="/create">Add Expense</Link>                
                </div>
            </div>
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

