const fs = require('fs');

const TAG = '=== ApplyPatch ===\t';

function applyPatch(filePath, regExp, replaced_string) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const modifiedData = data.replace(
            regExp,
            replaced_string,
        );

        if (modifiedData == data) {
            console.log(TAG, `File ${filePath} don't need any changes!`);
            return;
        }
    
        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
    
            console.log(TAG, `File ${filePath} modified successfully!`);
        });
    });
}



module.exports = {
    applyPatch,
};