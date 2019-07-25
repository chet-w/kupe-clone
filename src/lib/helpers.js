const prevGroups = require("./config").prevGroups;
const prevLabels = require("./config").prevLabels;
const subgroupGroups = require("./config").subgroupGroups;
const subgroupLabels = require("./config").subgroupLabels;
const totalPopulation = require("./config").totalPopulation;


const toPath = string => {
    const lowered = string.toLowerCase();
    let res = lowered.replace(/ /g, "-");
    res = res.replace(/\"/g, "");
    if (res.includes("\u0101")) {
        res = res.replace(/\u0101/g, "a");
    }
    return res;
};

const dePath = path => {
    const withSpaces = path.replace(/-/g, " ");
    let res = `${withSpaces.charAt(0).toUpperCase()}${withSpaces.substr(1)}`;
    if (res.includes("maori")) {
        res = res.replace("maori", "M\u0101ori");
    } 
    if (res.includes("aori")) {
        res = res.replace("aori", "\u0101ori");
    }
    res = res.replace(/   /g, " - ")
    return res;
};

const capFirst = string => {
    return string.charAt(0).toUpperCase() + string.substring(1);
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
            conciseRecord[year] = Number.parseFloat(justOneInd.find(record => record.year === year).total).toFixed(1);
        });
        comparisonYears.map(year => {
            const strippedYear = year.replace(/\s/g, "");
            const componentYears = year.replace(" and", "").split(" ").map(number => Number.parseInt(number))
            // Decrease trend
            if (conciseRecord[componentYears[0]] > conciseRecord[componentYears[1]]) {
                conciseRecord[strippedYear] = `down`;
            } else if (conciseRecord[componentYears[0]] < conciseRecord[componentYears[1]]) {
                // Increase trend
                conciseRecord[strippedYear] = `up`;
            } else {
                conciseRecord[strippedYear] = `\u2248`;
            }
        });

        return conciseRecord;
    });
    return records;
};

const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatCI = (low, high) => {
    const lowFloat = Number.parseFloat(low);
    const highFloat = Number.parseFloat(high);
    const ci = `(${lowFloat} - ${highFloat})`;
    return ci;
}

const organisePrevalenceData = (data, groups, year) => {

    let filtered = data.map(record => {
        let res = {
            group: record.group,
            year: record.year,
            total: Number.parseFloat(record.total),
            totalCI: formatCI(record.total_low_CI, record.total_high_CI),
            male: Number.parseFloat(record.male),
            maleCI: formatCI(record.male_low_CI, record.male_high_CI),
            female: Number.parseFloat(record.female),
            femaleCI: formatCI(record.female_low_CI, record.female_high_CI),
            est: numberWithCommas(Math.round((record.total/100*totalPopulation)/1000)*1000)
        };
        if (!groups.male) {
            delete res.male;
            delete res.maleCI;
        } if (!groups.female) {
            delete res.female;
            delete res.femaleCI;
        } if(!groups.est) {
            delete res.est;
        }
        return res;
    });
    // Filter by year
    filtered = filtered.filter(record => {
        return record.year === year;
    });

    
    prevLabels.map(group => filtered.push({ group: group }));

    const ordered = filtered.sort(function(a, b){  
        return prevGroups.indexOf(a.group) - prevGroups.indexOf(b.group);
    });


    return ordered;
};

const organiseComparisonsData = data => {
    const reduced = data.map(record => {
        return {
            comparison: record.comparison,
            ratio: Number.parseFloat(record.adjusted_rate_ratio),
            ratioCI: `(${record.adjusted_rate_ratio_low_CI} - ${record.adjusted_rate_ratio_high_CI})`,
            adjustmentVariables: record.adjusted_for,
            isSignificant: Number.parseFloat(record.adjusted_rate_ratio_low_CI) > 1 ||
             Number.parseFloat(record.adjusted_rate_ratio_high_CI) < 1
        }
    });

    subgroupLabels.map(comparison => reduced.push({ comparison: comparison }));

    const ordered = reduced.sort(function(a, b){  
        return subgroupGroups.indexOf(a.comparison) - subgroupGroups.indexOf(b.comparison);
    });

    return ordered;
};

const organiseTimeseriesData = data => {

    prevLabels.map(label => data.push({ group: label }));
    const ordered = data.sort(function(a, b) {
        return prevGroups.indexOf(a.group) - prevGroups.indexOf(b.group);
    });
    return ordered;
}


module.exports.toPath = toPath;
module.exports.dePath = dePath;
module.exports.capFirst = capFirst;
module.exports.organiseData = organiseData;
module.exports.formatCI = formatCI;
module.exports.organisePrevalenceData = organisePrevalenceData;
module.exports.organiseComparisonsData = organiseComparisonsData;
module.exports.organiseTimeseriesData = organiseTimeseriesData;
module.exports.numberWithCommas = numberWithCommas;

