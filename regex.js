let r = '[A-Z]*';
let s = 'ABCDefGhIJ';

function highlight(regexp, str) {

    let reg = RegExp(regexp, 'g');
    let matches = str.matchAll(regexp);
    let arr = [];
    console.log(matches);
    for (const match of matches) {
        let m = match[0], start = match.index, end = match.index + match[0].length;
        if (m != '') {
            console.log('match=', m, 'start=', start, 'end= ', end);
            while (start < end) {
                arr.push(start);
                start++;
            }
        }
    }

    console.log(arr);

    let i = 0;
    let ret = '';
    let inHighlighted = false;

    while (i < str.length) {
        if (arr.includes(i)) {
            if (!inHighlighted) {
                ret +='<span class="highlight">';
                inHighlighted = true;
            }
            ret += str.charAt(i);
        }
        else {
            if (inHighlighted) {
                ret +='</span>';
                inHighlighted = false;
            }
            ret += str.charAt(i);
        }
        i++;
    }
    if (inHighlighted) {
        ret += '</span>';
    }
    console.log(ret);
    return ret;
}

highlight(r, s);
