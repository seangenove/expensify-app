import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from './../../components/ExpensesSummary';
import expenses from './../fixtures/expenses';

test('Should render ExpensesSummary correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});
