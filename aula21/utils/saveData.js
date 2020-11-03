const fs = require("fs");
const path = require("path");

module.exports = {
    
    saveData(object, fileName) {

        let dataString = JSON.stringify(object);
        let filePath = path.join("data", fileName);

        fs.writeFileSync(filePath, 'module.exports = ');
        fs.appendFileSync(filePath, dataString);
    }
}