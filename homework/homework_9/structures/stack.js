/**
 * Stores items in LIFO (Last In, First Out) order.
 */
class Stack {
	constructor(items = []) {
		this.items = items;
	}

	//Add an item to the top of the stack.
	push(item) {
		this.items.push(item);
	}
	//Remove and return the top item from the stack.
	pop() {
		if (this.isEmpty())
			throw new Error("Stack is empty. Cannot remove item");
		return this.items.pop();
	}
	//Get the top item without removing it.
	peek() {
		if (this.isEmpty()) return null; // no element to return

		return this.items[this.items.length - 1];
	}

	//Additional method to check if stack is empty
	isEmpty() {
		return this.items.length === 0;
	}
}
const stack = new Stack();

stack.push(1);
stack.push(2);

console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.isEmpty()); //false

module.exports = Stack;

