let expenses = [];
const getId = require('../utils/getCreateMaxId');
const { getFilteredExpenses } = require('../utils/getFilteredExpenses');

const expensesInit = () => {
  expenses = [];
};

const getExpenses = (query) => {
  expenses = getFilteredExpenses(expenses, query);

  return expenses;
};

const getExpense = (id) => {
  return expenses.find((expense) => expense.id === parseInt(id) || null);
};
const createExpence = ({ userId, spentAt, title, amount, category, note }) => {
  const expense = {
    id: getId.getCreateMaxId(expenses),
    userId,
    spentAt,
    title,
    amount,
    category,
    note,
  };

  expenses.push(expense);

  return expense;
};

const deleteExpense = (id) => {
  expenses = expenses.filter((expense) => expense.id !== parseInt(id));
};

const updateExpence = (id, body) => {
  const expense = getExpense(id);

  Object.assign(expense, {
    ...body,
  });

  return expense;
};

module.exports = {
  expensesInit,
  getExpenses,
  getExpense,
  createExpence,
  deleteExpense,
  updateExpence,
};
