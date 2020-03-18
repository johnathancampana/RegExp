function highlight(regexp, str) {

    let reg = RegExp(regexp, 'g');
    let matches = str.matchAll(regexp);
    let arr = [0];

    for (const match of matches) {
        let m = match[0], start = match.index, end = match.index + match[0].length;
        arr.push(start, end);
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
                ret += '<span class="highlight">';
            }
            inHighlighted = !inHighlighted;
        }
        ret += str.charAt(i);
        i++;
    }
    if (inHighlighted) {
        ret += '</span>';
    }
    
    return ret;
}
