class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null; // root node of the tree
	}

	insert(node) {
		// Insert node using level-order traversal (BFS)
		if (this.root === null) {
			this.root = node;
			return;
		}
		const queue = [this.root];

		while (queue.length > 0) {
			const current = queue.shift();

			// Insert as left child if empty
			if (current.left === null) {
				current.left = node;
				return;
			}
			queue.push(current.left);

			// Insert as right child if empty
			if (current.right === null) {
				current.right = node;
				return;
			}
			queue.push(current.right);
		}
	}

	inOrder() {
		// Left -> Root -> Right
		if (this.root === null) return null;
		const ans = [];

		function traverse(root) {
			if (root === null) return;

			traverse(root.left);
			ans.push(root.val);
			traverse(root.right);
		}
		traverse(this.root);
		return ans;
	}

	preOrder() {
		// Root -> Left -> Right
		if (this.root === null) return [];
		const ans = [];

		function traverse(root) {
			if (root === null) return;

			ans.push(root.val);
			traverse(root.left);
			traverse(root.right);
		}
		traverse(this.root);
		return ans;
	}

	postOrder() {
		// Left -> Right -> Root
		if (this.root === null) return [];
		const result = [];

		function traverse(root) {
			if (root === null) return;

			traverse(root.left);
			traverse(root.right);
			result.push(root.val);
		}
		traverse(this.root);
		return result;
	}
}

const tree = new BinaryTree();

tree.insert(new TreeNode(1));
tree.insert(new TreeNode(2));
tree.insert(new TreeNode(3));

console.log(tree.inOrder()); // [2, 1, 3]
console.log(tree.preOrder()); // [1, 2, 3]
console.log(tree.postOrder()); // [2, 3, 1]

module.exports = { TreeNode, BinaryTree };

