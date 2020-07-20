import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toEqual(0);
});

test('should add up a single expense', () => {
  const expense = expenses[1];
  const total = selectExpensesTotal([expense]);
  expect(total).toEqual(expense.amount);
});

test('should add up a multiple expenses', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toEqual(114195);
});
