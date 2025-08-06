const { Node, LinkedList } = require("../structures/linkedList");

/**
 * Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)
 *
 * We go through the list using two pointers:
 * tortoise - slow, going one step at the time
 * hare - fast, going two steps at the time
 *
 * If in any point in time they meet, the list has a cycle
 * It will work because faster pointer will `catch` the slower one
 */
function hasACycle(linkedList) {
	// if list is empty is has no cycle
	if (!linkedList.head) return false;

	//creating two pointers: slow and fast
	let tortoise = linkedList.head;
	let hare = linkedList.head;

	//while hare is not null and have pointer to next element
	while (hare && hare.next) {
		//tortoise is `slower` 1x
		tortoise = tortoise.next;
		//hare `jumps` 2x faster
		hare = hare.next.next;
		//they are in the same place
		if (tortoise === hare) return true;
	}
	//cycle not found
	return false;
}

console.log("Linked list cycle:");
// no cycle 1 -> 2 -> 3
const list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);

// cycle 1 -> 2 -> 3 -> 1 -> 2...
const list2 = new LinkedList();
list2.insert(1);
list2.insert(2);
list2.insert(3);

// 3 -> 1
const node1 = list2.search(1);
const node3 = list2.search(3);
node3.next = node1;

console.log(hasACycle(list1)); //false
console.log(hasACycle(list2)); //true

