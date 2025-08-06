/**
 * Stores items in FIFO (First In, First Out) order.
 */
class Queue {
	constructor(items = []) {
		this.items = items;
	}

	//Add an item to the end of the queue.
	enqueue(item) {
		this.items.push(item);
	}

	//Remove and return the front item from the queue.
	dequeue() {
		if (!this.items.length)
			throw new Error("Queue is empty. Cannot remove item");
		return this.items.shift();
	}
	//Get the front item without removing it.
	peek() {
		return this.items[0] ?? null;
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2

