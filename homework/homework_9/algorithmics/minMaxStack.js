const Stack = require("../structures/stack");

class MinMaxStack extends Stack {
	minStack = new Stack();
	maxStack = new Stack();

	getMin() {
		// Returns current minimum element
		return this.minStack.peek();
	}

	getMax() {
		// Returns current maximum element
		return this.maxStack.peek();
	}

	push(val) {
		// Pushes value onto the stack and updates min/max stacks
		super.push(val);

		const min = this.minStack.isEmpty()
			? val
			: Math.min(val, this.getMin());
		const max = this.maxStack.isEmpty()
			? val
			: Math.max(val, this.getMax());

		this.minStack.push(min);
		this.maxStack.push(max);
		// Time complexity: O(1)
	}

	pop() {
		// Pops value from the stack and updates min/max stacks
		this.minStack.pop();
		this.maxStack.pop();
		return super.pop();
		// Time complexity: O(1)
	}
}
//Time complexity is O(1) because we know that min/max
// element is always at the peek, so it's like getting value
// by index from array

const stack = new MinMaxStack();

console.log("Min/Max stack:");
stack.push(5);

console.log(stack.getMin()); // 5
console.log(stack.getMax()); // 5

stack.push(2);
console.log(stack.getMin()); // 2
console.log(stack.getMax()); // 5

stack.push(8);
console.log(stack.getMin()); // 2
console.log(stack.getMax()); // 8

stack.pop();
console.log(stack.getMin()); // 2
console.log(stack.getMax()); // 5

stack.pop();
console.log(stack.getMin()); // 5
console.log(stack.getMax()); // 5

