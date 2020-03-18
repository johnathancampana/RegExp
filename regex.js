const r = 'hi[a-z]*';
const s = 'hitter, thimble, howdy';
let match;

function highlight(regexp, str) {

    let reg = RegExp(regexp, 'g');
    let matches = str.matchAll(reg);
    let arr = [0];

    for (const match of matches) {
        let m = match[0], start = match.index, end = match.index + match[0].length;
        arr.push(start, end);
        console.log(`Found ${m} start=${start} end=${end}.`);
        // str = str.substr(0, start) + '<span class="highlight">' + str.substr(start, end - start + 1) + 
        // '</span>' + str.substr(end + 1);
    }

    let i = 0;
    let ret = '';
    let inHighlighted = false;
    while (i < str.length) {
        if (arr.includes(i)) {
            if (inHighlighted) {
                ret += '</span>';
            }
            else {
                ret += '<span class="highlight">'

            }
            inHighlighted = !inHighlighted
        }
        ret += str.charAt(i);
        i++;
    }
    var element = document.getElementById("result");
    element.innerHTML = ret;
    console.log('return =', ret);
    return ret;
}

highlight(r, s);