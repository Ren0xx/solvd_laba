class Node {
	constructor(data) {
		this.data = data;
		// pointer to the next node in the list
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insert(data) {
		// create a new node
		const node = new Node(data);

		// if list is empty, new node becomes head
		if (!this.head) {
			this.head = node;
		} else {
			// if not, traverse to the last node
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			// add the new node at the end
			current.next = node;
		}

		// increase the size of the list
		this.size++;
	}

	delete(data) {
		if (!this.head) return null;

		// if head contains data, move head to the next node
		if (this.head.data === data) {
			this.head = this.head.next;
			this.size--;
			return;
		}

		// search for the node with the data to delete
		let previous = this.head;
		let current = this.head.next;
		while (current) {
			if (current.data === data) {
				// remove node by skipping it
				// previous pointer points to current's next
				previous.next = current.next;
				this.size--;
				return;
			}
			previous = current;
			current = current.next;
		}
	}

	print() {
		// prints all elements in the list
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	search(data) {
		if (!this.head) return null;

		// if head contains the data, return head
		if (this.head.data === data) {
			return this.head;
		}

		// traverse nodes until data is found or end of list
		let current = this.head.next;
		while (current) {
			if (current.data === data) {
				return current;
			}
			current = current.next;
		}
		// if not found, return null
		return null;
	}
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

list.print(); // 10 20 30

console.log(list.search(20)); // Node { data: 20, next: ... }
list.delete(20);
list.print(); // 10 30

module.exports = { Node, LinkedList };

