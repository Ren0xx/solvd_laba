//using symbol as a way to tell that the item was removed
//does not collides with other values
const DELETED = Symbol("deleted");
class CustomHashTable {
	//making the fields private
	#table;
	#size;
	#count;
	constructor(size = 23) {
		// Initialize the hash table...
		this.#size = size;
		this.#table = new Array(size);
		//keeping the items count for resizing
		this.#count = 0;
	}

	//getters and setter for private fields
	get tableSize() {
		return this.#size;
	}

	get table() {
		return this.#table;
	}

	get count() {
		return this.#count;
	}
	set count(val) {
		this.#count = val;
	}

	/**
	 * Hashing using word length folding
	 * Based on splitting words into chunks of given length (here 4)
	 * and using them as a numbers/values.
	 */
	hash(key) {
		//initial values
		let hashValue = 0;
		const numberOfBytes = 4;

		//going through whole key
		for (let i = 0; i < key.length; i += numberOfBytes) {
			let chunkValue = 0;
			//splitting into chunk of given length - until number of bytes or length of the key
			for (let j = 0; j < numberOfBytes && i + j < key.length; j++) {
				//get the value and move it to the right position (<< 8 ...)
				chunkValue |= key.charCodeAt(i + j) << (8 * j);
			}
			//adding the hash value and converting it to non negative 32-bit number (>>> 0);
			hashValue = (hashValue + chunkValue) >>> 0;

			/**
			 * Mixing the bits:
			 * 1.Moving upper/left bits to the lower/right place
			 * 2.XOR operation and assign
			 * Result: New bits are mixed with the original ones
			 */
			hashValue ^= hashValue >>> 16;
		}
		//modulo operator on hash value
		//if table is not of power of 2 - better to use tableSize -1;
		return hashValue % (this.tableSize - 1);
	}
	/**
	 * Collision resolution strategy:
	 * OPEN ADDRESSING - QUADRATIC PROBING
	 * When collision is found we are looking for a new space
	 * not linear, but quadratic (i + n^2  - where n is increasing )
	 *
	 */
	insert(key, value) {
		const size = 0.7;
		//checking if table need resizing -> more than 0.7 in this case
		if ((this.count + 1) / this.tableSize > size) {
			this.#resize();
		}
		//index(hash) and starting point (i)
		let index = this.hash(key);
		let i = 0;

		//we are looking until we find empty space
		//or in that place is the same key
		//or was deleted
		while (
			this.table[index] !== undefined &&
			this.table[index] !== DELETED &&
			this.table[index][0] !== key
		) {
			// moving quadratically: (i^2) and using modulo operator
			i++;
			index = (index + i * i) % this.tableSize;
		}
		//setting the value in the table
		this.table[index] = [key, value];
		this.count++;
	}

	/**
	 * GET
	 * similar to inserting/deleting the key
	 * Where are looking for the key where it should be
	 * if not
	 * we are moving quadratically: (i^2) and using modulo operator
	 */
	get(key) {
		//index(hash) and starting point (i)
		let index = this.hash(key);
		let i = 1;

		//we are looking until we find our key
		while (
			this.table[index] !== undefined ||
			this.table[index] === DELETED
		) {
			//returning the value [index][1] if item is not deleted and is the searched key
			if (this.table[index] !== DELETED && this.table[index][0] === key) {
				return this.table[index][1];
			}

			// moving quadratically: (i^2) and using modulo operator
			i++;
			index = (index + i * i) % this.tableSize;
		}
		//key not found
		return undefined;
	}
	/**
	 * DELETE
	 * similar to inserting/getting the key
	 * Where are looking for the key where it should be
	 * if not
	 * we are moving quadratically: (i^2) and using modulo operator
	 */

	delete(key) {
		//index(hash) and starting point (i)
		let index = this.hash(key);
		let i = 0;

		//we are looking until we find the key
		while (
			this.table[index] !== undefined ||
			this.table[index] === DELETED
		) {
			//setting the value as deleted if item is not deleted already and is the searched key
			if (this.table[index] !== DELETED && this.table[index][0] === key) {
				this.table[index] = DELETED;
				return true;
			}
			i++;
			index = (index + i * i) % this.tableSize;
		}
		//key not found - nothing to delete
		return false;
	}

	//resizing the table to avoid overflow
	//private method
	#resize() {
		const oldTable = this.#table;
		this.#size = this.#size * 2;
		this.#table = new Array(this.#size);
		this.#count = 0;

		for (const item of oldTable) {
			if (item !== undefined && item !== DELETED) {
				this.insert(item[0], item[1]);
			}
		}
	}
	//printing the whole table
	print() {
		for (let i = 0; i < this.tableSize; i++) {
			//getting by the index
			const slot = this.table[i];
			//slot is empty
			if (slot === undefined) {
				console.log(`Index ${i}: EMPTY`);
				//slot was deleted
			} else if (slot === DELETED) {
				console.log(`Index ${i}: DELETED`);
				// slot has a key and a value
			} else {
				console.log(`Index ${i}: Key = ${slot[0]}, Value = ${slot[1]}`);
			}
		}
	}
}

//instance of CustomHashTable
const ht = new CustomHashTable(7);

//inserting some elements
ht.insert("abc", 10);
ht.insert("acb", 20);
ht.insert("bac", 30);
ht.insert("bca", 40);
ht.insert("cab", 50);
ht.insert("cba", 60);
ht.insert("xyz", 70);
ht.insert("zyx", 80);
ht.insert("yxz", 90);

console.log("Get abc:", ht.get("abc")); // 10
console.log("Get acb:", ht.get("acb")); // 20
console.log("Get bac:", ht.get("bac")); // 30
console.log("Get xyz (non existing):", ht.get("xyz")); // undefined
console.log("-----------------------------");
//removing `acb` element
ht.delete("acb");
console.log("After deleting 'acb':");
console.log("Get acb:", ht.get("acb")); // undefined
console.log("-----------------------------");

//printing whole table
console.log("Hash table:\n");
ht.print();

module.exports = { CustomHashTable, DELETED };

//Analysis
