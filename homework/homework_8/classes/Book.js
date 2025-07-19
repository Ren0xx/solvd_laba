class Book {
	constructor(title, author, isbn, price, availability) {
		//check if any of the types is not correct, if so, throw an error
		if (
			typeof title !== "string" ||
			typeof author !== "string" ||
			typeof isbn !== "string" ||
			typeof price !== "number" ||
			typeof availability !== "boolean"
		)
			throw new TypeError("Incorrect types passed to the constructor");

		//creating object with given properties
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.price = price;
		this.availability = availability;
	}
}
/** Polymorphism - Fiction and NonFiction inheritance the properties of Book class
 * But they also get new properties: genre and subject
 */
class Fiction extends Book {
	constructor(title, author, isbn, price, availability, genre) {
		super(title, author, isbn, price, availability);
		//check if genre is of the type string
		if (typeof genre !== "string") {
			throw new TypeError("Genre must be a string");
		}
		this.genre = genre;
	}
}

class NonFiction extends Book {
	constructor(title, author, isbn, price, availability, subject) {
		super(title, author, isbn, price, availability);

		//check if subject is of the type string
		if (typeof subject !== "string") {
			throw new TypeError("Subject must be a string");
		}
		this.subject = subject;
	}
}

export { NonFiction, Fiction };
export default Book;

