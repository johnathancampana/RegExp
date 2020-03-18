const r = 'hi[a-z]*';
const s = 'hitter, thimble, howdy';
let match;

function highlight(regexp, str) {

    let reg = RegExp(regexp, 'g');
    let matches = str.matchAll(reg);

    for (const match of matches) {
        let m = match[0], start = match.index, end = match.index + match[0].length, inp = match.input;
        console.log(`Found ${m} start=${start} end=${end}.`);
    }
}

highlight(r, s);