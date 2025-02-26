function sumCustomerExpenses(сustomerExpenses) {
    let sum = 0;
    сustomerExpenses.forEach(expense => {
      sum += expense;
    });
    return sum;
  }
  
  let сustomerExpenses = [10000, 20000, 30000];
  console.log(sumCustomerExpenses(сustomerExpenses));