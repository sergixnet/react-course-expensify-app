import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectTotalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  const expenseCount = expenses.length;
  const expensesTotal = selectTotalExpenses(expenses);
  return {
    expenseCount,
    expensesTotal
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
