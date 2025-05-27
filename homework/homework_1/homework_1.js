/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.plus = function (number) {
	const value = Number.parseInt(this) + Number.parseInt(number);
	return value.toString();
};

/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.minus = function (number) {
	const value = Number.parseInt(this) - Number.parseInt(number);
	return value.toString();
};

/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.divide = function (number) {
	const value = Number.parseInt(this) / Number.parseInt(number);
	return value.toString();
};

/**
 * @param {string} number
 * @returns {string}
 */
String.prototype.multiply = function (number) {
	const value = Number.parseInt(this) * Number.parseInt(number);
	return value.toString();
};

const s1 = "100";
const s2 = "50";

console.log(`Adding ${s1} and ${s2} = ${s1.plus(s2)}`); // "150"
console.log(`Subtracting ${s2} from ${s1} = ${s1.minus(s2)}`); // "50"
console.log(`Dividing ${s1} by ${s2} = ${s1.divide(s2)}`); // "2"
console.log(`Multiplying ${s1} by ${s2} = ${s1.multiply(s2)}`); // "5000"
