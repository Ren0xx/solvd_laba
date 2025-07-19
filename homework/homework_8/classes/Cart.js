import Book from "./Book.js";
import User from "./User.js";

class Cart {
	//using true private field
	#books;

	constructor(user) {
		//if wrong type is passed - throw an error
		if (!(user instanceof User))
			throw new TypeError("Argument passed is not of class `User`");

		//data about the user for the order
		this.user = user;
		//books currently in cart
		this.#books = [];
	}

	//this method handles multiply books at once, so user can add one book or more
	addBook(...books) {
		books.forEach((book) => {
			//if wrong type is passed - throw an error
			if (!(book instanceof Book))
				throw new TypeError("Argument passed is not of class `Book`");
			// do not add duplicates and add ONLY if book is available
			if (!this.#books.includes(book) && book.availability)
				this.#books.push(book);
		});
	}

	//this method handles multiply books at once, so user can remove one book or more
	removeBook(...books) {
		books.forEach((book) => {
			//if wrong type is passed - throw an error
			if (!(book instanceof Book))
				throw new TypeError("Argument passed is not of class `Book`");
			this.#books = this.#books.filter((b) => b.isbn !== book.isbn);
		});
	}

	//calculates total price of books currently in the cart using reduce array method
	get totalPrice() {
		return this.#books.reduce((acc, curr) => acc + curr.price, 0);
	}

	//getter for book field
	get books() {
		return this.#books;
	}
}

export default Cart;

