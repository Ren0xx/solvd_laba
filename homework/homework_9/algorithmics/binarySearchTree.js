const { BinaryTree, TreeNode } = require("../structures/binaryTree");

/**
 * To check if the Binary Three is BST we have to check:
 * if the left subtree value is lower than
 * the root value
 * and
 * if the right subtree value is higher than
 * the root value
 * ----
 * Using recursion and passing the min/max values
 * is the one way to do it
 *
 * If at any point the checks fail, we return false
 */
function checkIfBST(root, min = -Infinity, max = Infinity) {
	// empty tree is still BST
	if (root === null) return true;

	if (root.val <= min || root.val >= max) return false;

	// In each step we have to update min/max values

	// traverse left subtree, min does not change, max = root value
	const isLeftBST = checkIfBST(root.left, min, root.val);
	// traverse right subtree, max does not change, min = root value
	const isRightBST = checkIfBST(root.right, root.val, max);

	//check if both left and right subtree meet the condition
	return isLeftBST && isRightBST;
}

const bst = new BinaryTree();
bst.insert(new TreeNode(10));
bst.insert(new TreeNode(5));
bst.insert(new TreeNode(15));
bst.insert(new TreeNode(3));
bst.insert(new TreeNode(7));
bst.insert(new TreeNode(12));
bst.insert(new TreeNode(18));

const notBst = new BinaryTree();
notBst.insert(new TreeNode(10));
notBst.insert(new TreeNode(15));
notBst.insert(new TreeNode(5));
notBst.insert(new TreeNode(3));
notBst.insert(new TreeNode(7));
notBst.insert(new TreeNode(12));
notBst.insert(new TreeNode(18));

console.log("Binary Search Tree:");
console.log("Is BST?", checkIfBST(bst.root));
console.log("Is BST?", checkIfBST(notBst.root));

