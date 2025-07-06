function multiline([raw]) {
    const lines = raw
        .split(/\r?\n/)
        .filter((_, i, a) => i > 0 && i < a.length - 1);

    let counter = 1;

    let result = '';
    for (const line of lines) {
        if (line !== '"') {
            result += `${counter}  ${line} \n`;
            counter++;
        }
    }
    return result;
}
const code1 = multiline`
function add(a, b) {
    return a + b;
}
`;

const code2 = multiline`
function subtract(a, b)
{
    return a + b;
}
`;

console.log(code1);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }";;

console.log(code2);
// Expected:
// 1  function subtract(a, b) 
// 2  { 
// 3      return a + b; 
// 4  } 