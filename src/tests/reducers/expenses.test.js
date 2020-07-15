import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Car rent',
    note: '',
    amount: 2000,
    createdAt: moment(0).add(6, 'days').valueOf()
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state.length).toEqual(4);
  expect(state[3]).toEqual(expense);
});

test('should edit an expense', () => {
  const updates = {
    amount: 3000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(updates.amount);
});

test('should not edit expense if id not found', () => {
  const updates = {
    amount: 3000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});