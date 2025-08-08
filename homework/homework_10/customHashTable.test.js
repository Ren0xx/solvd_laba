const { CustomHashTable } = require("./customHashTable.js");

describe("CustomHashTable", () => {
	let ht;

	//create a new hash table for each test
	beforeEach(() => {
		ht = new CustomHashTable();
	});

	// Test 1: Insert and Retrieve Values
	test("inserts and retrieves values correctly", () => {
		ht.insert("abc", 10);
		ht.insert("xyz", 20);
		expect(ht.get("abc")).toBe(10);
		expect(ht.get("xyz")).toBe(20);
	});

	// Test 2: Delete Values
	test("deletes keys and marks them as DELETED", () => {
		ht.insert("abc", 10);
		expect(ht.delete("abc")).toBe(true);
		expect(ht.get("abc")).toBeUndefined();
		expect(ht.delete("non-existent")).toBe(false);
	});

	// Test 3: Handle Collisions with Quadratic Probing
	test("handles collisions using quadratic probing", () => {
		// Force collision by using keys with the same hash
		const keys = ["abc", "acb", "bac", "bca"];
		keys.forEach((key, i) => ht.insert(key, i * 10));

		// Verify all keys
		keys.forEach((key, i) => {
			console.log(ht.get(key));
			expect(ht.get(key)).toBe(i * 10);
		});
	});

	// Test 4: Hash Function Consistency
	test("hash function returns consistent values", () => {
		const hash1 = ht.hash("test-key");
		const hash2 = ht.hash("test-key");
		expect(hash1).toBe(hash2); // Same key → same hash
		expect(hash1).toBeLessThan(ht.tableSize);
	});
});

