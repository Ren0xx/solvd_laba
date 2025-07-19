import Book from "./Book.js";
import User from "./User.js";

class Order {
	//using true private fields
	#user;
	#books;

	constructor(user, books) {
		if (!(user instanceof User))
			throw new TypeError("Argument passed is not of class `User`");
		if (!Array.isArray(books))
			throw new TypeError("Argument passed is not Array");
		for (const book of books) {
			if (!(book instanceof Book))
				throw new TypeError("Argument passed is not of class `Book`");
		}
		this.#user = user;
		this.#books = books;
	}

	get userData() {
		return {
			id: this.#user.id,
			name: this.#user.name,
			email: this.#user.email,
			balance: this.#user.balance,
		};
	}

	get booksData() {
		return this.#books.map(({ title, author, price, isbn }) => ({
			title,
			author,
			price,
			isbn,
		}));
	}

	get totalPrice() {
		return this.#books.reduce((acc, curr) => acc + curr.price, 0);
	}
}

export default Order;

