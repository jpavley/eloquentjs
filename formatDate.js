const ordinal = require("ordinal");
const {days, months} = require(date-names);

exports.formatDate = function(date, format) {

    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
        if (tag === "YYYY") return date.getFullYear();
    });
};