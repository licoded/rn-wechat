const { applyPatch } = require("./applyPatch");

const patches = [
    {
        // ERROR: node_modules/react-native-scrollable-tab-view/SceneComponent.js: A trailing comma is not permitted after the rest element (9:32)
        filePath: 'node_modules/react-native-scrollable-tab-view/SceneComponent.js',
        regExp: /, }/g,
        replaced_string: ' }',
    },
    {
        filePath: 'node_modules/react-native-image-crop-picker/android/build.gradle',
        regExp: /id.zelory:compressor:2.1.0/g,
        replaced_string: 'id.zelory:compressor:2.1.1',
    },
    {
        filePath: 'node_modules/react-native-fetch-blob/android/build.gradle',
        regExp: /com.android.tools.build:gradle:2.2.3/g,
        replaced_string: 'com.android.tools.build:gradle:2.3.0',
    },
];

patches.forEach(({filePath, regExp, replaced_string}) => {
    applyPatch(filePath, regExp, replaced_string);
});
