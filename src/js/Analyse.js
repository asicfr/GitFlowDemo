
const analyse = (txt) => {
    txt = txt.substring(3);
    txt = txt.replace(/ +/g, "");
    return txt   
}

module.exports = analyse;