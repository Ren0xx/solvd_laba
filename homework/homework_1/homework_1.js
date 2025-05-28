/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.plus = function (number) {
	const a = this.split("").reverse();
	const b = number.split("").reverse();
	const result = [];
	let carryValue = 0;

	const maxLength = Math.max(a.length, b.length);
	for (let i = 0; i < maxLength; i++) {
		const digitA = i < a.length ? Number.parseInt(a[i], 10) : 0;
		const digitB = i < b.length ? Number.parseInt(b[i], 10) : 0;

		let sum = digitA + digitB + carryValue;
		if (sum >= 10) {
			carryValue = 1;
			sum -= 10;
		} else {
			carryValue = 0;
		}

		result.push(sum);
	}
	return result.reverse().join("");
};

/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.minus = function (number) {
	const a = this.split("").reverse();
	const b = number.split("").reverse();
	const result = [];
	let borrowValue = 0;

	for (let i = 0; i < a.length; i++) {
		let digitA = Number.parseInt(a[i]) - borrowValue;
		const digitB = i < b.length ? Number.parseInt(b[i], 10) : 0;
		if (digitA < digitB) {
			digitA += 10;
			borrowValue = 1;
		} else {
			borrowValue = 0;
		}
		result.push(digitA - digitB);
	}
	return (
		result
			.reverse()
			.join("")
			.replace(/^0+(?!$)/, "") || "0"
	); // Remove leading zeros with empty string
};

/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.divide = function (number) {
	const divisor = number;
	//check for dividing by zero
	if (divisor === "0") {
		throw new Error("Division by zero is not allowed.");
	}
	//check if dividend is zero
	if (this === "0") {
		return "0";
	}

	let result = "";
	let currentValue = "";
	for (let i = 0; i < this.length; i++) {
		currentValue += this[i];

		let howManyTimes = 0;

		for (let d = 1; d <= 9; d++) {
			const product = divisor.multiply(d.toString());
			if (
				product.length > currentValue.length ||
				(product.length === currentValue.length && product > currentValue)
			) {
				break;
			}
			howManyTimes = d;
		}
		result += howManyTimes.toString();
		//using function defined earlier
		const amountToSubtract = divisor.multiply(howManyTimes.toString());
		currentValue = currentValue.minus(amountToSubtract);
	}

	return result.replace(/^0+(?!$)/, "") || "0"; // Remove leading zeros with empty string
};
/**
 * @param {string} number
 * @returns {string}
 */

String.prototype.multiply = function (number) {
	const a = this.split("").reverse();
	const b = number.split("").reverse();
	const result = Array(a.length + b.length).fill(0);

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			result[i + j] += Number.parseInt(a[i]) * Number.parseInt(b[j]);
		}
	}

	for (let k = 0; k < result.length - 1; k++) {
		const carry = Math.floor(result[k] / 10);
		result[k] %= 10;
		result[k + 1] += carry;
	}

	return result
		.reverse()
		.join("")
		.replace(/^0+(?!$)/, ""); // Remove leading zeros with empty string
};

const s1 = "100";
const s2 = "50";

console.log(`Adding ${s1} and ${s2} = ${s1.plus(s2)}`); // "150"
console.log(`Subtracting ${s2} from ${s1} = ${s1.minus(s2)}`); // "50"
console.log(`Dividing ${s1} by ${s2} = ${s1.divide(s2)}`); // "2"
console.log(`Multiplying ${s1} by ${s2} = ${s1.multiply(s2)} \n`); // "5000"

console.log(
	"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".plus(
		"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
	),
	"\n",
);

console.log(
	"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".minus(
		"1",
	),
	"\n",
);

console.log(
	"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".multiply(
		"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
	),
	"\n",
);

console.log(
	"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".multiply(
		"234567",
	),
	"\n",
);
console.log(
	"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999".divide(
		"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
	),
);
