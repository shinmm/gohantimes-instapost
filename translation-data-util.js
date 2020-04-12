var fs = require('fs');

function loadData() {
    return JSON.parse(fs.readFileSync('food_dictionary.json'));
}

function saveData(data) {
    var obj = {
        foodterm_translations: data
    };
    fs.writeFileSync('food_dictionary.json', JSON.stringify(obj));
}

module.exports = {
    loadData: loadData,
    saveData: saveData,
}
