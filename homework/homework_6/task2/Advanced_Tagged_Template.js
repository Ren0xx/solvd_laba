function highlightKeywords(template, keywords) {
    const span = (word) => `<span class='highlight'>${word} </span>`;

    return template.replace(/\$\{([^}]+)\}/g, (_, key) => span(keywords[key]));
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to 
// create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
