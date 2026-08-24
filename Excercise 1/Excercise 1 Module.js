function CurrentDate() {
    return new Date().toTimeString();
}

function CurrentYear() {
    return new Date().getFullYear();
}

module.exports.CurrentYear = CurrentYear;
module.exports.CurrentDate = CurrentDate;