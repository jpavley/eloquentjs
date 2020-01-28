let langInfo = require('./unicode-scripts.js');

function characterLanguage(code) {
    for (let lang of langInfo) {
        if (lang.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            // this looks like and else but it's not!
            return lang;
        }
    }
    return null;
}

// should return Latin
console.log(characterLanguage(121).name);

// should return Han
console.log(characterLanguage(11904).name);