import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expensesTotal={5000} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={25000} />
  );
  expect(wrapper).toMatchSnapshot();
});
