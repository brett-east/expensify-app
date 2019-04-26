import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup editExpense action object', () => {
  const updates = {
    note: 'New note'
  };
  const action = editExpense('123abc', updates);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates
  });
});

test('should setup addExpense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action object with default values', () => {
  const defaultData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  });
});
