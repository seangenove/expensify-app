import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from './../fixtures/expenses';

test('Should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'new Description'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value);
});

test('Should set note on text area change', () => {
    const value = 'new Note'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid input', () => {
    const value = '23.23'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount if invalid input', () => {
    const value = '....1'
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('');
});
