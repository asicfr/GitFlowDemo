
const analyse = (txt) => {
    txt = txt.substring(4);
    txt = txt.replace(/ +/g, ""); 
    return txt   
}

module.exports = analyse;