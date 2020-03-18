// function highlight(regex, str) {
//     let arr = str.matchAll(regex);
//     return arr;
// }

// console.log(highlight(/el/g, "hello"));

const regexp = RegExp('hi[a-z]*','g');
const str = 'hitter, him, howdy';
let match;

function highlight(regex, s) {
    let matches = s.matchAll(regex);
    console.log(matches);
    for (const match of matches) {
        let m = match[0];
        let start = match.index;
        let end = match.index + match[0].length;
        console.log(`Found ${m} start=${start} end=${end}.`);
        var result = document.getElementById("result");
        let text = document.createTextNode(''+intValue);
        result.innerHTML = '';
        result.append(text);
    }
}

highlight(regexp, str);
