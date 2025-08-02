const user = {
  name: "Yehor",
  age: 17,
  hobby: "sleeping",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const { name, age, hobby, premium, mood } = user;

console.log(name);
console.log(age);
console.log(hobby);
console.log(premium);
console.log(mood);

const countProps = (obj) => Object.keys(obj).length;

console.log(countProps(user));

const employees = {
  johny: 7,
  frank: 4,
  jeff: 10,
};

const findBestEmployee = (obj) => {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(obj)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
};

console.log(findBestEmployee(employees));

const salary = {
  johny: 175,
  frank: 104,
  jeff: 210,
};

const countTotalSalary = (obj) => {
  let total = 0;

  for (const [, amount] of Object.entries(obj)) {
    total += amount;
  }

  return total;
};

console.log(countTotalSalary(salary));

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

const getAllProducts = (arr, prop) => {
  let result = [];

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }

  return result;
};

console.log(getAllProducts(products, "name"));
console.log(getAllProducts(products, "price"));
console.log(getAllProducts(products, "quantity"));

const calculateTotalPrice = (allProducts, productName) => {
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      return price * quantity;
    }
  }
};

console.log(calculateTotalPrice(products, "Radar"));
console.log(calculateTotalPrice(products, "Grip"));
console.log(calculateTotalPrice(products, "Scanner"));

const transactionType = {
  withdrawType: "withdraw",
  depositType: "deposit",
};

const account = {
  balance: 0,
  transactions: [],
  lastId: 0,

  createTransaction(amount, type) {
    this.lastId += 1;
    return {
      id: this.lastId,
      amount: amount,
      type: type,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(
      amount,
      transactionType.depositType
    );
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття");
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(
      amount,
      transactionType.withdrawType
    );
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    return null;
  },

  getTransactionTotal(type) {
    let total = 0;

    for (const { amount, type: transactionType } of this.transactions) {
      if (transactionType === type) {
        total += amount;
      }
    }

    return total;
  },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500);

console.log("Поточний баланс:", account.getBalance());

console.log("Транзакція з id=2:", account.getTransactionDetails(2));

console.log("Загальна сума депозитів:", account.getTransactionTotal("deposit"));
console.log("Загальна сума зняття:", account.getTransactionTotal("withdraw"));
