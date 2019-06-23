const toPath = string => {
    const lowered = string.toLowerCase();
    let res = lowered.replace(/ /g, "-");
    if(res.includes("\u0101")) {
        res = res.replace("\u0101", "a");
    }
    return res;
};

module.exports.toPath = toPath;

