function localize(...keys) {
    const key = keys[0];
    return translations[language][key];
}

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

let language = "en";
const greeting = "greet";
const introduction = "intro";

//en
const localizedGreetingEng = localize`${greeting}`;
const localizedIntroductionEng = localize`${introduction}`;

console.log(localizedGreetingEng); // Expected: "Hello"
console.log(localizedIntroductionEng); // Expected: "Welcome to our website"
console.log('\n');

//fr
language = "fr";
const localizedGreetingFr = localize`${greeting}`;
const localizedIntroductionFr = localize`${introduction}`;

console.log(localizedGreetingFr); // Expected: "Bonjour" 
console.log(localizedIntroductionFr); // Expected: "Bienvenue sur notre site web"