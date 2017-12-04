const analyse = (txt) => {
    txt = txt.substring(3);
    txt = txt.replace(/ +/g, "");
    try {
        return command[txt]()
    }
    catch(err) {
        return "invalid command"
    }
}

const pushFn = () => {
    return "git push"
}

const commitFn = () => {
    return "git commit"
}

const command = {
    commit: commitFn,
    push: pushFn
}

module.exports = analyse;