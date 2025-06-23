/**
 * @param {{firstName: string, lastName:string}} person
 * @return {string}
 */
function getFullName(person) {
    if (
        typeof person !== 'object' ||
        person === null ||
        typeof person.firstName !== 'string' ||
        typeof person.lastName !== 'string'
    ) {
        throw new TypeError('Expected { firstName: string, lastName: string }');
    }
    return `${person.firstName} ${person.lastName}`;
}

/**
 * @param {string} words
 * @return {string[]} 
 */
function filterUniqueWords(words) {
    if (typeof words !== 'string') {
        throw new TypeError('Expected a string');
    }
    return Array
        .from(
            new Set(
                words
                    .trim()
                    .split(/\s+/)
                    .filter(w => /^[A-Za-z]+$/.test(w))
                    .map(w => w.toLowerCase())
            )
        )
        .sort();
}

/**
 * @param {{name: string, grades: number[]}[]} students
 * @return {{name: string, averageGrade: number}[]}
 */
function getAverageGrade(students) {
    if (!Array.isArray(students)) {
        throw new TypeError('Expected an array of students');
    }
    return students.map(s => {
        if (
            typeof s !== 'object' ||
            s === null ||
            typeof s.name !== 'string' ||
            !Array.isArray(s.grades) ||
            s.grades.some(g => typeof g !== 'number')
        ) {
            throw new TypeError(
                'Each student must be { name: string, grades: number[] }'
            );
        }
        const avg = s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
        return { name: s.name, averageGrade: avg };
    });
}

module.exports = {
    getFullName,
    filterUniqueWords,
    getAverageGrade,
};
