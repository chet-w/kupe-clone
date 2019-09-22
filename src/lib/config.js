// Various default values for tables and charts

const totalPopulation = 3860200;

// Prevalence groups
const deprivation = ["Least (1-3)", "Mid (4-7)", "Most (8-10)"];
const ageGroups = ["15-24", "18-24", "25-44", "45-64", "65+"];
const drinking = ["Non-drinker", "Drinker", "Risky drinker"];
const ethnicities = ["Maori", "Asian", "Pacific", "European/Other"];
const prevLabels = ["Age groups", "Ethnicities", "Neighbourhood deprivation", "Drinking status"]
const prevGroups = ["Total", "Men", "Women", "Age groups", ...ageGroups, "Ethnicities",  ...ethnicities, "Neighbourhood deprivation", ...deprivation, "Drinking status", ...drinking];

// Survey years
const allYears = [2012, 2014, 2016, 2018];

// Comparison groups
const subgroupSex = ["Women vs men"];
const subgroupMaori = ["Maori vs non-Maori", "Men: Maori vs non-Maori", "Women: Maori vs non-Maori"];
const subgroupPacific = ["Pacific vs non-Pacific", "Men: Pacific vs non-Pacific", "Women: Pacific vs non-Pacific"];
const subgroupAsian = ["Asian vs non-Asian", "Men: Asian vs non-Asian", "Women: Asian vs non-Asian"];
const subgroupDeprivation = ["Most deprived vs least deprived", "Men: Most deprived vs least deprived", "Women: Most deprived vs least deprived"];
const subgroupLabels = ["Sex", "Maori", "Pacific", "Asian", "Neighbourhood deprivation"];
const subgroupGroups = ["Sex", ...subgroupSex, "Maori", ...subgroupMaori, "Pacific", ...subgroupPacific, "Asian", ...subgroupAsian, "Neighbourhood deprivation", ...subgroupDeprivation];

module.exports.totalPopulation = totalPopulation;
module.exports.ethnicities = ethnicities;
module.exports.prevGroups = prevGroups;
module.exports.prevLabels = prevLabels;
module.exports.subgroupGroups = subgroupGroups;
module.exports.subgroupLabels = subgroupLabels;
module.exports.allYears = allYears;
