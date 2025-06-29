const bankAccount = {
    _balance: 1000,//private: only setters and getters can use this

    get formattedBalance() {
        return `$${this._balance}`;
    },

    set balance(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid amount: Balance must be a positive number');
        }
        this._balance = amount;
    },

    // Additional getter
    get balance() {
        return this._balance;
    },

    transfer(targetAccount, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Error: Transfer amount must be a positive number');
        }
        if (amount > this._balance) {
            throw new Error('Not enough funds!');
        }
        if (!targetAccount || typeof targetAccount !== 'object' || !('_balance' in targetAccount)) {
            throw new Error('Invalid target account');
        }

        this._balance -= amount;
        targetAccount._balance += amount;

    }
};

//Version using class

class BankAccount {
    constructor(initialBalance = 1000) {
        this._balance = initialBalance;
    }

    get formattedBalance() {
        return `$${this._balance}`;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (typeof amount !== 'number' || amount < 0) {
            throw new Error('Invalid amount: Balance must be a positive number');
        }
        this._balance = amount;
    }

    transfer(targetAccount, amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Error: Transfer amount must be a positive number');
        }
        if (amount > this._balance) {
            throw new Error('Not enough funds!');
        }
        if (!(targetAccount instanceof BankAccount)) {
            throw new Error('Invalid target account');
        }

        this._balance -= amount;
        targetAccount._balance += amount;
    }
}

module.exports = { bankAccount, BankAccount };