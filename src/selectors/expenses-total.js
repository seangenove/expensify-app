export default (expenses) => {
    if (expenses && expenses.length) {
        return expenses
            .map(expense => (expense.amount))
            .reduce((sum, value) => sum + value, 0);
    } else {
        return 0;
    }
};
