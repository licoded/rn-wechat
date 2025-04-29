const fs = require('fs');

const filePath = 'node_modules/react-native-scrollable-tab-view/SceneComponent.js';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const modifiedData = data.replace(
        /, }/g,
        " }"
    );
    // const modifiedData = data;

    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('File modified successfully!');
    });
});