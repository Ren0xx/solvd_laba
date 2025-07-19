class User {
	static id = 0;
	//using true private field
	#balance;

	constructor(name, email, balance = 0) {
		// check if name and email are strings
		if (typeof name !== "string" || typeof email !== "string")
			// throw if constructor arguments types are incorrect
			throw new TypeError("Incorrect types passed to the constructor");

		// check if initial balance is a non-negative number
		if (typeof balance !== "number" || balance < 0)
			// throw if balance is not a valid non-negative number
			throw new RangeError("Balance must be a non-negative number");

		this.name = name;
		this.email = email;
		this.#balance = balance;
		this.id = User.id++;
	}

	deposit(amount) {
		// check if deposit amount is a positive number
		if (typeof amount !== "number" || amount <= 0)
			// throw if deposit amount is invalid
			throw new Error("Deposit amount must be positive");
		this.balance += amount;
	}

	withdraw(amount) {
		// check if withdraw amount is a positive number
		if (typeof amount !== "number" || amount <= 0)
			// throw if withdraw amount is invalid
			throw new Error("Withdraw amount must be positive");
		// check sufficient funds before withdrawal
		if (amount > this.balance)
			// throw if insufficient funds
			throw new Error("Not enough funds");
		this.balance -= amount;
	}

	// public getter for private balance
	get balance() {
		return this.#balance;
	}

	// public setter with validation for private balance
	set balance(amount) {
		// check if new balance is a non-negative number
		if (typeof amount !== "number" || amount < 0)
			// throw if setting to invalid balance
			throw new TypeError("Balance must be a non-negative number");
		this.#balance = amount;
	}
}

export default User;

