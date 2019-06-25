const toPath = string => {
    const lowered = string.toLowerCase();
    let res = lowered.replace(/ /g, "-");
    if(res.includes("\u0101")) {
        res = res.replace("\u0101", "a");
    }
    return res;
};

const dePath = path => {
    const withSpaces = path.replace(/-/g, " ");
    let res = `${withSpaces.charAt(0).toUpperCase()}${withSpaces.substr(1)}`;
    if(res.includes("aori")) {
        res = res.replace("aori", "\u0101ori");
    }
    return res;
}

module.exports.toPath = toPath;
module.exports.dePath = dePath;

