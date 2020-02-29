import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from './../../components/ExpensesSummary';
import expenses from './../fixtures/expenses';

test('Should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary
            visibleExpenseCount={1}
            visibleExpenseSum={500}
        />
    );

    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary
            visibleExpenseCount={23}
            visibleExpenseSum={69000}
        />
    );
    
    expect(wrapper).toMatchSnapshot();
});
