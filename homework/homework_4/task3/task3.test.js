const { bankAccount, BankAccount } = require('./task3');

describe('bankAccount object', () => {
    let account;

    beforeEach(() => {
        account = Object.create(bankAccount);
        account._balance = 1000;
    });

    test('initial balance and formattedBalance', () => {
        expect(account.balance).toBe(1000);
        expect(account.formattedBalance).toBe('$1000');
    });

    test('setting balance to valid number updates balance and formattedBalance', () => {
        account.balance = 200;
        expect(account.balance).toBe(200);
        expect(account.formattedBalance).toBe('$200');
    });

    test('setting balance to negative number throws error', () => {
        expect(() => { account.balance = -50; }).toThrow('Invalid amount: Balance must be a positive number');
    });

    test('setting balance to non-number throws error', () => {
        expect(() => { account.balance = '500'; }).toThrow('Invalid amount: Balance must be a positive number');
    });

    describe('transfer method', () => {
        let target;

        beforeEach(() => {
            target = Object.create(bankAccount);
            target._balance = 500;
        });

        test('successful transfer updates both accounts', () => {
            account.transfer(target, 300);
            expect(account.balance).toBe(700);
            expect(target.balance).toBe(800);
            expect(account.formattedBalance).toBe('$700');
            expect(target.formattedBalance).toBe('$800');
        });

        test('transfer with amount not a number throws error', () => {
            expect(() => account.transfer(target, '100')).toThrow('Error: Transfer amount must be a positive number');
        });

        test('transfer with zero or negative amount throws error', () => {
            expect(() => account.transfer(target, 0)).toThrow('Error: Transfer amount must be a positive number');
            expect(() => account.transfer(target, -10)).toThrow('Error: Transfer amount must be a positive number');
        });

        test('transfer amount greater than balance throws error', () => {
            expect(() => account.transfer(target, 2000)).toThrow('Not enough funds!');
        });

        test('transfer to invalid target throws error', () => {
            expect(() => account.transfer(null, 100)).toThrow('Invalid target account');
            expect(() => account.transfer({}, 100)).toThrow('Invalid target account');
        });
    });
});

//tests for class
describe('BankAccount class', () => {
    let acct, target;

    beforeEach(() => {
        acct = new BankAccount();
        target = new BankAccount(500);
    });

    test('initial balance and formattedBalance', () => {
        expect(acct.balance).toBe(1000);
        expect(acct.formattedBalance).toBe('$1000');
    });

    test('setting balance to valid number', () => {
        acct.balance = 200;
        expect(acct.balance).toBe(200);
        expect(acct.formattedBalance).toBe('$200');
    });

    test('setting balance to negative throws', () => {
        expect(() => { acct.balance = -1; }).toThrow('Invalid amount: Balance must be a positive number');
    });

    test('setting balance to non-number throws', () => {
        expect(() => { acct.balance = '100'; }).toThrow('Invalid amount: Balance must be a positive number');
    });

    describe('transfer method', () => {
        test('successful transfer', () => {
            acct.transfer(target, 300);
            expect(acct.balance).toBe(700);
            expect(target.balance).toBe(800);
            expect(acct.formattedBalance).toBe('$700');
            expect(target.formattedBalance).toBe('$800');
        });

        test('transfer zero or negative throws', () => {
            expect(() => acct.transfer(target, 0)).toThrow('Error: Transfer amount must be a positive number');
            expect(() => acct.transfer(target, -50)).toThrow('Error: Transfer amount must be a positive number');
        });

        test('transfer amount exceeding balance throws', () => {
            expect(() => acct.transfer(target, 2000)).toThrow('Not enough funds!');
        });

        test('transfer to invalid target throws', () => {
            expect(() => acct.transfer({}, 100)).toThrow('Invalid target account');
            expect(() => acct.transfer(null, 100)).toThrow('Invalid target account');
        });
    });
});
