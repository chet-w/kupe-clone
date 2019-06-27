const toPath = string => {
    const lowered = string.toLowerCase();
    let res = lowered.replace(/ /g, "-");
    if (res.includes("\u0101")) {
        res = res.replace("\u0101", "a");
    }
    return res;
};

const dePath = path => {
    const withSpaces = path.replace(/-/g, " ");
    let res = `${withSpaces.charAt(0).toUpperCase()}${withSpaces.substr(1)}`;
    if (res.includes("aori")) {
        res = res.replace("aori", "\u0101ori");
    }
    return res;
};

const organiseData = (data, comparisonYears) => {

    // Unique set of IDs - essentially the rows we want in the table
    const ids = Array.from(new Set(data.map(record => record.indicator)));

    const records = ids.map((id, i) => {
        const justOneInd = data.filter(record => record.indicator == id);
        const years = justOneInd.map(record => record.year);
        let conciseRecord = {
            indicator: justOneInd[0].indicator,
            description: justOneInd[0].description,
            group: justOneInd[0].group,
        };
        years.map(year => {
            conciseRecord[year] = Number.parseFloat(justOneInd.find(record => record.year === year).total);
        });
        comparisonYears.map(year => {
            const strippedYear = year.replace(/\s/g, "");
            const componentYears = year.replace(" and", "").split(" ").map(number => Number.parseInt(number))
            // Decrease trend
            if(conciseRecord[componentYears[0]] > conciseRecord[componentYears[1]]) {
                conciseRecord[strippedYear] = "down";
            } else if (conciseRecord[componentYears[0]] < conciseRecord[componentYears[1]]) {
                // Increase trend
                conciseRecord[strippedYear] = "up";
            } else {
                conciseRecord[strippedYear] = "same";
            }
        });

        return conciseRecord;
    });

    return records;
}

module.exports.toPath = toPath;
module.exports.dePath = dePath;
module.exports.organiseData = organiseData;
