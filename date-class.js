console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9).getTime());
console.log(new Date(1260334800000));
console.log(new Date(1260334800000).getFullYear());

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("2-13-1961x"));
