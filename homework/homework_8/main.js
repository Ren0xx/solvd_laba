//importing classes and books data
import { Fiction, NonFiction } from "./classes/Book.js";
import Cart from "./classes/Cart.js";
import User from "./classes/User.js";
import Order from "./classes/Order.js";

import { fictionBooksData, nonFictionBooksData } from "./data/booksData.js";

/**
 * Scenario Simulation
 * -------------------
 * Users browse books (both Fiction and NonFiction),
 * add them to their personal carts,
 * and place orders.
 *
 * BONUS
 * Each user has an account balance. When placing an order,
 * the total price of books is calculated and taken from the user's balance.
 * If the user can't afford the order, an error is shown.
 */

//creating books objects
const fictionBooks = fictionBooksData.map(
	({ title, author, isbn, price, available, genre }) =>
		new Fiction(title, author, isbn, price, available, genre)
);
const nonFictionBooks = nonFictionBooksData.map(
	({ title, author, isbn, price, available, subject }) =>
		new NonFiction(title, author, isbn, price, available, subject)
);
const bookStore = nonFictionBooks.concat(fictionBooks); //all books

//creating users
const anna = new User("Anna Smith", "anna@example.com", 150);
const john = new User("John Doe", "john@example.com", 100);
const mary = new User("Mary Johnson", "mary@example.com", 50);

//each cart for each user
const annaCart = new Cart(anna);
const johnCart = new Cart(john);
const maryCart = new Cart(mary);

// users add books to their carts
// using `addBook` method they can add more than one book at once
annaCart.addBook(bookStore[0], bookStore[1], bookStore[2]);
johnCart.addBook(bookStore[1], bookStore[3]);
maryCart.addBook(bookStore[0], bookStore[1], bookStore[2], bookStore[4]);

// attempt to place orders
function tryPlacingOrder(user, cart) {
	const total = cart.totalPrice;

	if (user.balance < total) {
		console.log(
			`${user.name} does not have enough balance to place the order.`
		);
		console.log(`Balance: ${user.balance}, Required: ${total.toFixed(2)}`);
		return;
	} else {
		user.withdraw(total);
		const order = new Order(user, cart.books);
		console.log(`${order.userData.name} placed an order successfully!`);
		console.log("Order total:", order.totalPrice.toFixed(2));
		console.log("Remaining balance:", user.balance.toFixed(2));
		console.log("Books:", order.booksData);
		/**
		 * About Order Class
		 * order.books
		 * 		or
		 * order.books = []
		 * Won't work because books is a private field
		 * and it is more secure
		 * and we can only access data about the books using `order.booksData`
		 *
		 * Same with 'user' field
		 * only `order.userData` method is able to get the data about the user
		 */
	}
}

tryPlacingOrder(anna, annaCart); // success

johnCart.addBook(bookStore[0], bookStore[2]); // add more books
tryPlacingOrder(john, johnCart); // fail

maryCart.removeBook(bookStore[0]); // remove one book
tryPlacingOrder(mary, maryCart); // fail

