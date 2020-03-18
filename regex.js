// function highlight(regex, str) {
//     let arr = str.matchAll(regex);
//     return arr;
// }

// console.log(highlight(/el/g, "hello"));

const r = RegExp('hi[a-z]*','g');
const s = 'hitter, thimble, howdy';
let match;

function highlight(regexp, str) {

    let matches = str.matchAll(regexp);

    for (const match of matches) {
        let m = match[0], start = match.index, end = match.index + match[0].length, inp = match.input;
        console.log(`Found ${m} start=${start} end=${end}.`);
    }
}

highlight(r, s);