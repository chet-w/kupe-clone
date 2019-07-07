// Various default values for tables and charts

const totalPopulation = 3860200;

// Prevalence groups
const deprivation = ["Least (1-3)", "Mid (4-7)", "Most (8-10)"];
const ageGroups = ["15-24", "18-24", "25-44", "45-64", "65+"];
const drinking = ["Non-drinker", "Drinker", "Risky drinker"];
const ethnicities = ["Maori", "Asian", "Pacific", "European/Other"];

const prevLabels = ["Age groups", "Ethnicities", "Neighbourhood deprivation", "Drinking status"]

const prevGroups = ["Total","Age groups", ageGroups, "Ethnicities",  ethnicities, "Neighbourhood deprivation", deprivation, "Drinking status", drinking].flat();


module.exports.totalPopulation = totalPopulation;
module.exports.prevGroups = prevGroups;
module.exports.prevLabels = prevLabels;
module.exports.ethnicities = ethnicities;